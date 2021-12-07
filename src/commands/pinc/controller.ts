import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
import { DateTime } from 'luxon';
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash/fp';
import config from 'config';
import createLogger from 'src/services/logger';
const logger = createLogger('commands/pinc');
const { pinc } = config;
import * as pncchkinapi from 'src/interfaces/pncchkin';
import * as pnclatlonapi from 'src/interfaces/pnclatlon';
import * as pncchkotapi from 'src/interfaces/pncchkot';
import * as pncupdatapi from 'src/interfaces/pncupdat';
import * as pnclocatapi from 'src/interfaces/pnclocat';
import * as pncerrorapi from 'src/interfaces/pncerror';
import transport from 'src/services/connection';
import { insertPincSnsLog, insertPincSqsLog } from 'src/models/pinc';
import { promises as fs } from 'fs';
// Set AWS region
AWS.config.update(pinc.sns);
let sns = new AWS.SNS({ apiVersion: pinc.sns.apiVersion });
let sqs = new AWS.SQS({ apiVersion: pinc.sqs.apiVersion });

export const checkin: ECCHandlerFunction = async (_reqkey, datax, _ecc) => {
    // Get parameters from incomming data buffer\
    const timestampHold = DateTime.now();
    const rpgFields = pncchkinapi.convertCheckinDSToObject(datax);
	const reqFields = {
        event: 'yardhound.import_events.checkin',
        time: timestampHold.toFormat("yyyy-MM-dd'T'TTZZ"),
        version: '1.3',
        campus: rpgFields.campus,
        data: {
            asset: 
            _.mapKeys(
                (key) =>
                    ((
                        {
                            Trailer_SCAC: 'Trailer SCAC',
                            Trailer_number: 'Trailer #'
                        } as any
                   )[key] || key),
                rpgFields.data.asset
            )
        } 
    };

    logger.debug('Sending SNS Message', reqFields);

    // Call web service
    let result = undefined;
    let params = undefined;
    let response = undefined;
    try {
        // Create publish parameters
        params = {
            Message: JSON.stringify(reqFields),
            MessageGroupId: rpgFields.message_group_id,
            MessageDeduplicationId: uuidv4(),
            TopicArn: pinc.sns.prdTargetArn
        };

        // Create promise and SNS service object
        result = await sns.publish(params).promise();

        logger.debug('SNS Message Sent', result);
        response = { resultCode: 'ECC0000', message: 'Success' };
    } catch (err) {
        logger.warn('SNS Message Failed', err);
        response = { resultCode: 'ECC9000', message: err.message };
    }

    const record = {
        targetArn: pinc.sns.prdTargetArn,
        messageGrpId: rpgFields.message_group_id,
        message: JSON.stringify(reqFields),
        result: response.message, // JSON.stringify(result) ?? "No Response",
        resultCode: response.resultCode,
        timestamp: timestampHold.toFormat("yyyy-MM-dd'-'HH.mm.ss.SSS'000'")
    };
    return transport
        .execute(insertPincSnsLog, record)
        .catch((err) => logger.error('Failed to write Pinc SNS Checkin Log Record', { record, err }));
};
// Get SQS Message for Asset Location from Pinc
export const latlon: ECCHandlerFunction = async (reqkey, _data, ecc) => {
    // Call web service
    const timestampHold = DateTime.now();    
    let nextReqKey = reqkey;
    let result: pnclatlonapi.LLRes;
    try {
        const response = await sqs.receiveMessage(_.omit(['apiVersion'], pinc.sqs) as any).promise();
        logger.debug('Receive Message Result', response);

        let message = response?.Messages && response.Messages[0];

        result = JSON.parse(message?.Body || '{}');
        if (message && message.ReceiptHandle && result?.data?.asset) {
            result.data.asset.checked_out ||= '';

            const deleteParams = {
                QueueUrl: pinc.sqs.QueueUrl,
                ReceiptHandle: message.ReceiptHandle
            };
            const deleteResult = await sqs.deleteMessage(deleteParams).promise();
            logger.debug('Delete Result', deleteResult);
        } else {
            logger.warn('Received no valid messages', message);
            return ecc.sendEccResult('ECC2000', 'No Valid Messages to Receive', nextReqKey);
        }

        logger.debug('SQS Message Receive Sent', result);
        nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
        return await ecc.sendObjectToCaller(result, pnclatlonapi.convertObjectToLLRes, nextReqKey);
    } catch (err) {
        logger.warn('SQS Message Receive Failed', err);
        return ecc.sendEccResult('ECC9000', err.message, nextReqKey);
    }
    const record2 = {
        targetArn: pinc.sqs.QueueUrl,
        result: result, // JSON.stringify(result) ?? "No Response",
        resultCode: nextReqKey,
        timestamp: timestampHold.toFormat("yyyy-MM-dd'-'HH.mm.ss.SSS'000'")
    };
    return transport
        .execute(insertPincSqsLog, record2)
        .catch((err) => logger.error('Failed to write Pinc Log Sqs Checkout Record', { record2, err }));    
};
export const errors: ECCHandlerFunction = async (reqkey, _data, ecc) => {
    // Call web service
    let nextReqKey = reqkey;
    let result: pncerrorapi.LLErrRes;
    const reqFields = pncerrorapi.convertLLErrReqToObject(_data);
    try {
        const response = await sqs.receiveMessage(_.omit(['apiVersion'], pinc.sqserr) as any).promise();
        logger.debug('Receive Message Result', response);

        let message = response?.Messages && response.Messages[0];

        result = JSON.parse(message?.Body || '{}');
        if (message && message.ReceiptHandle && result?.data?.message?.data) {
            result.data.message.data.asset.checked_out ||= '';

            const deleteParams = {
                QueueUrl: pinc.sqs.QueueUrl,
                ReceiptHandle: message.ReceiptHandle
            };
            const deleteResult = await sqs.deleteMessage(deleteParams).promise();
            logger.debug('Delete Result', deleteResult);
        } else {
            logger.warn('Received no valid messages', message);
            return ecc.sendEccResult('ECC2000', 'No Valid Messages to Receive', nextReqKey);
        }
        try {
            await fs.writeFile(reqFields.filename, result.toString(), 'utf-8');
        } catch (err) {
            return ecc.sendEccResult('ECC9200', err.message, nextReqKey);
        }
        logger.debug('SQS Message Receive Sent', result);
        nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
        return await ecc.sendObjectToCaller(result, pncerrorapi.convertObjectToLLErrRes, nextReqKey);
    } catch (err) {
        logger.warn('SQS Message Receive Failed', err);
        return ecc.sendEccResult('ECC9000', err.message, nextReqKey);
    }
};

export const checkot: ECCHandlerFunction = async (_reqkey, datax, _ecc) => {
    // Get parameters from incomming data buffer
    const timestampHold = DateTime.now();
    const rpgFields = pncchkotapi.convertCheckotDSToObject(datax);
	const reqFields = {
        event: 'yardhound.import_events.checkout',
        time: timestampHold.toFormat("yyyy-MM-dd'T'TTZZ"),
        version: '1.3',
        campus: rpgFields.campus,
        data: {
            asset: 
            _.mapKeys(
                (key) =>
                    ((
                        {
                            Trailer_SCAC: 'Trailer SCAC',
                            Trailer_number: 'Trailer #'
                        } as any
                   )[key] || key),
                rpgFields.data.asset
            )
        } 
    };

    logger.debug('Sending SNS Message', reqFields);

    // Call web service
    let result = undefined;
    let params = undefined;
    let response = undefined;
    try {
        // Create publish parameters
        params = {
            Message: JSON.stringify(reqFields),
            MessageGroupId: rpgFields.message_group_id,
            MessageDeduplicationId: uuidv4(),
            TopicArn: pinc.sns.prdTargetArn
        };

        // Create promise and SNS service object
        result = await sns.publish(params).promise();

        logger.debug('SNS Message Sent', result);
        response = { resultCode: 'ECC0000', message: 'Success' };
    } catch (err) {
        logger.warn('SNS Message Failed', err);
        response = { resultCode: 'ECC9000', message: err.message };
    }

    const record = {
        targetArn: pinc.sns.prdTargetArn,
        messageGrpId: rpgFields.message_group_id,
        message: JSON.stringify(reqFields),
        result: response.message, // JSON.stringify(result) ?? "No Response",
        resultCode: response.resultCode,
        timestamp: timestampHold.toFormat("yyyy-MM-dd'-'HH.mm.ss.SSS'000'")
    };
    return transport
        .execute(insertPincSnsLog, record)
        .catch((err) => logger.error('Failed to write Pinc Log Sns Checkout Record', { record, err }));
};

export const updat: ECCHandlerFunction = async (_reqkey, datax, _ecc) => {
    // Get parameters from incomming data buffer
    const timestampHold = DateTime.now();
    const rpgFields = pncupdatapi.convertUpdatDSToObject(datax);
	const reqFields = {
        event: 'yardhound.import_events.update',
        time: timestampHold.toFormat("yyyy-MM-dd'T'TTZZ"),
        version: '1.3',
        campus: rpgFields.campus,
        data: {
            asset: 
            _.mapKeys(
                (key) =>
                    ((
                        {
                            Trailer_SCAC: 'Trailer SCAC',
                            Trailer_number: 'Trailer #'
                        } as any
                   )[key] || key),
                rpgFields.data.asset
            )
        } 
    };

    logger.debug('Sending SNS Message', reqFields);

    // Call web service
    let result = undefined;
    let params = undefined;
    let response = undefined;
    try {
        // Create publish parameters
        params = {
            Message: JSON.stringify(reqFields),
            MessageGroupId: rpgFields.message_group_id,
            MessageDeduplicationId: uuidv4(),
            TopicArn: pinc.sns.prdTargetArn
        };

        // Create promise and SNS service object
        result = await sns.publish(params).promise();

        logger.debug('SNS Message Sent', result);
        response = { resultCode: 'ECC0000', message: 'Success' };
    } catch (err) {
        logger.warn('SNS Message Failed', err);
        response = { resultCode: 'ECC9000', message: err.message };
    }

    const record = {
        targetArn: pinc.sns.prdTargetArn,
        messageGrpId: rpgFields.message_group_id,
        message: JSON.stringify(reqFields),
        result: response.message, // JSON.stringify(result) ?? "No Response",
        resultCode: response.resultCode,
        timestamp: timestampHold.toFormat("yyyy-MM-dd'-'HH.mm.ss.SSS'000'")
    };
    return transport
        .execute(insertPincSnsLog, record)
        .catch((err) => logger.error('Failed to write Pinc Log Sns Update Record', { record, err }));
};

// Send SNS Request for Asset Location to Pinc

export const locat: ECCHandlerFunction = async (_reqkey, datax, _ecc) => {
    // Get parameters from incomming data buffer
    const timestampHold = DateTime.now();
    const rpgFields = pnclocatapi.convertLocatDSToObject(datax);
    const reqFields = {
        event: 'yardhound.import_events.retrieve_asset_location',
        time: timestampHold.toFormat("yyyy-MM-dd'T'TTZZ"),
        version: '1.4',
        campus: rpgFields.campus,
        event_id: rpgFields.event_id,
        data: {
            asset: _.mapKeys(
                (key) =>
                    ((
                        {
                            Trailer_SCAC: 'Trailer SCAC',
                            Trailer_number: 'Trailer #',
                            container_number: 'Container #'
                        } as any
                    )[key] || key),
                rpgFields.data.asset
            )
        }
    };
    logger.debug('Sending SNS Message', reqFields);

    // Call web service
    let result = undefined;
    let params = undefined;
    let response = undefined;
    try {
        // Create publish parameters
        params = {
            Message: JSON.stringify(reqFields),
            MessageGroupId: rpgFields.message_group_id,
            MessageDeduplicationId: uuidv4(),
            TopicArn: pinc.sns.prdTargetArn
        };

        // Create promise and SNS service object
        result = await sns.publish(params).promise();

        logger.debug('SNS Message Sent', result);
        response = { resultCode: 'ECC0000', message: 'Success' };
    } catch (err) {
        logger.warn('SNS Message Failed', err);
        response = { resultCode: 'ECC9000', message: err.message };
    }

    const record = {
        targetArn: pinc.sns.prdTargetArn,
        messageGrpId: rpgFields.message_group_id,
        message: JSON.stringify(reqFields),
        result: response.message, // JSON.stringify(result) ?? "No Response",
        resultCode: response.resultCode,
        timestamp: timestampHold.toFormat("yyyy-MM-dd'-'HH.mm.ss.SSS'000'")
    };
    return transport
        .execute(insertPincSnsLog, record)
        .catch((err) => logger.error('Failed to write Pinc Log Sns Retrieve_Asset_Location Record', { record, err }));
};

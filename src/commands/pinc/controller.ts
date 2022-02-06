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
import { sanitizeValues } from 'src/services/safe-values';
// Set AWS region
AWS.config.update(pinc.sns);
let sns = new AWS.SNS({ apiVersion: pinc.sns.apiVersion });
let sqs = new AWS.SQS({ apiVersion: pinc.sqs.apiVersion });
const safeValues: any = {
    campus: '',
    customer_facility_code: '',
    event: '',
    event_id: '',
    time: '0000-00-00T00:00:00.000+00:00',
    version: '',
    data: {
        asset: {
            asset_dimension: '',
            asset_type: '',
            asset_visit_id: 0,
            check_in_agent: '',
            check_out_agent: '',
            checked_in: '0000-00-00T00:00:00.000+00:00',
            checked_out: '0000-00-00T00:00:00.000+00:00',
            is_dock: '',
            last_move_time: '0000-00-00T00:00:00.000+00:00',
            Latitude: '',
            Longitude: '',
            purpose: '',
            reference_id: '',
            rfid_tag: '',
            site: '',
            site_code: '',
            spot_number: '',
            'Trailer #': '',
            'Trailer SCAC': '',
            trailer_number: '',
            trailer_scac: '',
            updated_on: '0000-00-00T00:00:00.000+00:00',
            movement_type: '',
            load_status: '',
            container_number: '',
            fleet_code: '',
            tractor_scac: '',
            customer_code: ''
            }
        }
    }

function getCampus(id: string) {
    return {
        NRSNBR: 'nbr',
        NRSSAV: 'sav'
    }[id];
}
function getCampusAws(id: string) {
    const campus = getCampus(id);
    return {
        sqsUrl: pinc.sqsUrls[campus + 'Url'],
        snsArn: pinc.snsArns[campus + 'Arn']
    };
}

export const checkin: ECCHandlerFunction = async (_reqkey, datax, _ecc) => {
    // Get parameters from incomming data buffer\
    const timestampHold = DateTime.now();
    const rpgFields = pncchkinapi.convertCheckinDSToObject(datax);
    const { snsArn } = getCampusAws(rpgFields.campus);
    const reqFields = {
        event: 'yardhound.import_events.checkin',
        time: timestampHold.toFormat("yyyy-MM-dd'T'TTZZ"),
        version: '1.3',
        campus: rpgFields.campus,
        data: {
            asset: _.mapKeys(
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
            // TopicArn: pinc.sns.prdTargetArn
            TopicArn: snsArn
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
        // targetArn: pinc.sns.prdTargetArn,
        targetArn: snsArn,
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
    const reqFields = pnclatlonapi.convertLLReqToObject(_data);
    try {
        const { sqsUrl } = getCampusAws(reqFields.facility);
        const sqsConfig = {
            ...pinc.sqs,
            QueueUrl: sqsUrl
        };
        // const response = await sqs.receiveMessage(_.omit(['apiVersion'], pinc.sqs) as any).promise(); // Pinc.sqs = sqsConfig???
        const response = await sqs.receiveMessage(_.omit(['apiVersion'], sqsConfig) as any).promise();
        logger.debug('Receive Message Result', response);

        let message = response?.Messages && response.Messages[0];
        // message = undefined here if nothing  received
        if (message !== undefined) {
            result = JSON.parse(message?.Body || '{}');
            // @ts-ignore
            const dataarray = JSON.parse(result.Message);            
            if (message && message.ReceiptHandle && dataarray.data) {
                dataarray.event ||= '';

                const deleteParams = {
                    // QueueUrl: pinc.sqs.QueueUrl,
                    QueueUrl: sqsUrl,
                    ReceiptHandle: message.ReceiptHandle
                };
                const deleteResult = await sqs.deleteMessage(deleteParams).promise();
                logger.debug('Delete Result', deleteResult);
            } else {
                logger.warn('Received no valid messages', message);
                return ecc.sendEccResult('ECC2000', 'No Valid Messages to Receive', nextReqKey);
            }

            logger.debug('SQS Message Receive Sent', result);

            const record2 = {
                queueUrl: sqsUrl,
                resultCode: response.$response.httpResponse.statusCode,
                result: JSON.stringify(dataarray) ?? "No Response", // result, 
                timestamp: timestampHold.toFormat("yyyy-MM-dd'-'HH.mm.ss.SSS'000'")
            };
            transport
                .execute(insertPincSqsLog, record2)
                .catch((err) => logger.error('Failed to write Pinc Log Sqs LatLon Record', { record2, err }));
                let responseData = sanitizeValues(dataarray, safeValues);
            nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
            return await ecc.sendObjectToCaller(responseData, pnclatlonapi.convertObjectToLLRes, nextReqKey);
        } else {
            logger.warn('Received no valid messages', message);
            return ecc.sendEccResult('ECC2000', 'No Valid Messages to Receive', nextReqKey);
        }
    } catch (err) {
        logger.warn('SQS Message Receive Failed', err);
        return ecc.sendEccResult('ECC9000', err.message, nextReqKey);
    }
};
export const errors: ECCHandlerFunction = async (reqkey, _data, ecc) => {
    // Call web service
    let nextReqKey = reqkey;
    let result: pncerrorapi.LLErrRes;
    const reqFields = pncerrorapi.convertLLErrReqToObject(_data);
    try {
        const sqsConfig = {
            ...pinc.sqs,
            QueueUrl: pinc.sqsUrls.errurl
        };
        // const response = await sqs.receiveMessage(_.omit(['apiVersion'], pinc.sqserr) as any).promise();
        const response = await sqs.receiveMessage(_.omit(['apiVersion'], sqsConfig) as any).promise();
        logger.debug('Receive Message Result', response);

        let message = response?.Messages && response.Messages[0];
        // message = undefined here if nothing  received
        if (message !== undefined) {
            result = JSON.parse(message?.Body || '{}');
            // @ts-ignore
            const dataarray = JSON.parse(result.Message);
            // let resultdata = JSON.parse(result);
            if (message && message.ReceiptHandle && dataarray.data) {
                dataarray.event ||= '';

                const deleteParams = {
                    // QueueUrl: pinc.sqserr.QueueUrl,
                    QueueUrl: pinc.sqsUrls.errurl,
                    ReceiptHandle: message.ReceiptHandle
                };
                const deleteResult = await sqs.deleteMessage(deleteParams).promise();
                logger.debug('Delete Result', deleteResult);
            } else {
                logger.warn('Received no valid messages', message);
                return ecc.sendEccResult('ECC2000', 'No Valid Messages to Receive', nextReqKey);
            }
            try {
                let dataout = JSON.stringify(dataarray);
                await fs.writeFile(reqFields.filename, dataout, 'utf-8');
            } catch (err) {
                logger.warn('fs.write failed in sqs error receive', err.message);
                return ecc.sendEccResult('ECC9200', err.message, nextReqKey);
            }
            logger.debug('SQS Message Receive Sent', result);
            return await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
            // nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
            // return await ecc.sendObjectToCaller(result, pncerrorapi.convertObjectToLLErrRes, nextReqKey);
        } else {
            logger.warn('Received no valid messages', message);
            return ecc.sendEccResult('ECC2000', 'No Valid Messages to Receive', nextReqKey);
        }
    } catch (err) {
        logger.warn('SQS Message Receive Failed', err);
        return ecc.sendEccResult('ECC9000', err.message, nextReqKey);
    }
};

export const checkot: ECCHandlerFunction = async (_reqkey, datax, _ecc) => {
    // Get parameters from incomming data buffer
    const timestampHold = DateTime.now();
    const rpgFields = pncchkotapi.convertCheckotDSToObject(datax);
    const { snsArn } = getCampusAws(rpgFields.campus);

    const reqFields = {
        event: 'yardhound.import_events.checkout',
        time: timestampHold.toFormat("yyyy-MM-dd'T'TTZZ"),
        version: '1.3',
        campus: rpgFields.campus,
        data: {
            asset: _.mapKeys(
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
            // TopicArn: pinc.sns.prdTargetArn
            TopicArn: snsArn
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
        // targetArn: pinc.sns.prdTargetArn,
        targetArn: snsArn,
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
    const { snsArn } = getCampusAws(rpgFields.campus);
    const reqFields = {
        event: 'yardhound.import_events.update',
        time: timestampHold.toFormat("yyyy-MM-dd'T'TTZZ"),
        version: '1.3',
        campus: rpgFields.campus,
        data: {
            asset: _.mapKeys(
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
            // TopicArn: pinc.sns.prdTargetArn
            TopicArn: snsArn
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
        // targetArn: pinc.sns.prdTargetArn,
        targetArn: snsArn,
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
    const { snsArn } = getCampusAws(rpgFields.campus);
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
            // TopicArn: pinc.sns.prdTargetArn
            TopicArn: snsArn
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
        // targetArn: pinc.sns.prdTargetArn,
        targetArn: snsArn,
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

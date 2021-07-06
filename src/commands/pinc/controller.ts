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
// Set AWS region
AWS.config.update(pinc.sns);
let sns = new AWS.SNS({ apiVersion: pinc.sns.apiVersion });
let sqs = new AWS.SQS({ apiVersion: pinc.sqs.apiVersion });

export const checkin: ECCHandlerFunction = async (reqkey, data, ecc) => {
    // Get parameters from incomming data buffer
    const rpgFields = pncchkinapi.convertCheckinDSToObject(data);
    const reqFields = _.assign(
        {
            event: 'yardhound.import_events.checkin',
            time: DateTime.now().toFormat("yyyy-MM-dd'T'TTZZ"),
            version: '1.3'
        },
        _.mapKeys(
            (key) =>
                (({
                    Trailer_SCAC: 'Trailer SCAC',
                    Trailer_number: 'Trailer #'
                } as any)[key] || key),
            rpgFields
        )
    );

    logger.debug('Sending SNS Message', reqFields);

    // Call web service
    let result;
    let nextReqKey = reqkey;
    try {
        // Create publish parameters
        const params = {
            Message: JSON.stringify(reqFields),
            MessageGroupId: rpgFields.message_group_id,
            MessageDeduplicationId: uuidv4(),
            TopicArn: pinc.sns.prdTargetArn
        };

        // Create promise and SNS service object
        result = await sns.publish(params).promise();
    } catch (err) {
        logger.warn('SNS Message Failed', err);
        return ecc.sendEccResult('ECC9000', err.message, nextReqKey);
    }
    logger.debug('SNS Message Sent', result);
    return ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
};

export const latlon: ECCHandlerFunction = async (reqkey, _data, ecc) => {
    // Call web service
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
};

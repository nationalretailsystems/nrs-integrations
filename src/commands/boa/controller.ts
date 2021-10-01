import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
//Comment - import { DateTime } from 'luxon';
import AWS from 'aws-sdk';
//Comment - import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash/fp';
import config from 'config';
import createLogger from 'src/services/logger';
const logger = createLogger('commands/boa');
const { boa } = config;
import * as paymentapi from 'src/interfaces/boapayment';
//Comment - import transport from 'src/services/connection';
// Comment - import { insertPincSnsLog } from 'src/models/pinc';
// Set AWS region
AWS.config.update(boa.sns);
let sqs = new AWS.SQS({ apiVersion: boa.sqs.apiVersion });

export const payment: ECCHandlerFunction = async (reqkey, _data, ecc) => {
    // Call web service
    let nextReqKey = reqkey;
    // Comment - let result: pnclatlonapi.LLRes;
    let result;
    try {
        const response = await sqs.receiveMessage(_.omit(['apiVersion'], boa.sqs) as any).promise();
        logger.debug('Receive Message Result', response);

        let message = response?.Messages && response.Messages[0];

        result = JSON.parse(message?.Body || '{}');
        if (message && message.ReceiptHandle && result?.data?.asset) {
            result.data.asset.checked_out ||= '';

            const deleteParams = {
                QueueUrl: boa.sqs.QueueUrl,
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
        return await ecc.sendObjectToCaller(result, paymentapi.convertObjectTopaymentEvent, nextReqKey);
    } catch (err) {
        logger.warn('SQS Message Receive Failed', err);
        return ecc.sendEccResult('ECC9000', err.message, nextReqKey);
    }
};





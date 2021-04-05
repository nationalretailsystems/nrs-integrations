import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
import { DateTime } from 'luxon';
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
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

    const reqFields = {
        event: 'yardhound.import_events.checkin',
        time: DateTime.now().toFormat("yyyy-MM-dd'T'TTZZ"),
        version: '1.3',
        campus: rpgFields.campus,
        data: {
            asset: {
                checked_in: rpgFields.checked_in,
                asset_type: rpgFields.asset_type,
                rfid_tag: rpgFields.rfid_tag,
                site_code: rpgFields.site_code,
                'Trailer SCAC': rpgFields.Trailer_SCAC,
                'Trailer #': rpgFields.Trailer_number,
                container_number: rpgFields.container_number,
                movement_type: rpgFields.movement_type,
                load_status: rpgFields.load_status,
                customer_code: rpgFields.customer_code,
                fleet_code: rpgFields.fleet_code,
                tractor_scac: rpgFields.tractor_scac
            }
        }
    };

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

export const latlon: ECCHandlerFunction = async (reqkey, _, ecc) => {
    // Call web service
    let nextReqKey = reqkey;
    let result;
    try {
        const params = {
            AttributeNames: ['SentTimestamp'],
            MaxNumberOfMessages: 1,
            MessageAttributeNames: ['All'],
            QueueUrl: pinc.sqs.queueUrl,
            VisibilityTimeout: 5,
            WaitTimeSeconds: 0
        };

        const response = await sqs.receiveMessage(params).promise();
        logger.debug('Receive Message Result', response);
        let message = response?.Messages && response.Messages[0];

        result = JSON.parse(message?.Body || '{}');
        if (message && message.ReceiptHandle && result?.data?.asset) {
            result = Object.assign({
                event_type: result.event_id.substr(0, 2),
                event_no: parseInt(result.event_id.substr(2, 7), 10),
                snyard: result.data.asset.spot_number.substr(1),
                snloctype: result.data.asset.spot_number.substr(1, 1),
                snslotnumber: result.data.asset.spot_number.substr(2, 3),
                yardloc3: result.data.asset.spot_number.substr(5, 3),
                location1: result.data.asset.spot_number.substr(8, 1),
                yardloc5: result.data.asset.spot_number.substr(9, 5)
            }, result, result.data.asset);
            result.checked_out = result.checked_out || '';
            result.is_dock = '' + result.is_dock;

            const deleteParams = {
                QueueUrl: pinc.sqs.queueUrl,
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
        return ecc.sendObjectToCaller(result, pnclatlonapi.convertObjectToLatLonDS, nextReqKey);
    } catch (err) {
        logger.warn('SQS Message Receive Failed', err);
        return ecc.sendEccResult('ECC9000', err.message, nextReqKey);
    }
};

import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
import { DateTime } from 'luxon';
import AWS from 'aws-sdk';
import config from 'config';
import createLogger from 'src/services/logger';
const logger = createLogger('commands/pinc');
const { pinc } = config;
import * as converter from 'src/interfaces/pncchkin';
// Set AWS region
AWS.config.update(pinc.sns);

export const checkin: ECCHandlerFunction = async (reqkey, data, ecc) => {
    // Get parameters from incomming data buffer
    const rpgFields = converter.convertCheckinDSToObject(data);

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
            MessageGroupId: 'nrs-test-1',
            MessageDeduplicationId: '' + Date.now(),
            TopicArn: pinc.sns.prdTargetArn
        };

        // Create promise and SNS service object
        result = await new AWS.SNS({ apiVersion: pinc.sns.apiVersion }).publish(params).promise();
    } catch (err) {
        logger.warn('SNS Message Failed', err);
        return ecc.sendEccResult('ECC9000', err.message, nextReqKey);
    }
    logger.debug('SNS Message Sent', result);
    return ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
};

checkin(
    100000,
    'aaaaaabbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccdddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeffffggggggggggggggggggggggggghhhhhhhhhhhhhhhhhhhhhhhhhiiiiiiiiiiiiiiiiiiiiiiiiijjjjjjjjjjjjjjjjjjjjjjjjjkkkkkkkkkkkkkkkkkkkkkkkkklllllllllllllllllllllllllmmmmmmmmmmmmmmmmmmmmmmmmm',
    null as any,
    converter,
    {}
);

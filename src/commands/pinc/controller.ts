import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
import axios from 'axios';
import { DateTime } from 'luxon';
import config from 'config';
import createLogger from 'src/services/logger';
const logger = createLogger('commands/pinc');
const { pinc } = config;
import * as converter from 'src/interfaces/pncchkin';

const axiosInstance = axios.create(pinc);

export const checkin: ECCHandlerFunction = async (reqkey, data, ecc) => {
    // Get parameters from incomming data buffer
    const rpgFields = converter.convertCheckin_dsToObject(data);

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

    logger.debug('sending: ' + JSON.stringify(reqFields));

    // Call web service
    let result;
    let nextReqKey = reqkey;
    try {
        // TODO: Replace this with Amazon SNS client.publish call
        result = await axiosInstance.get('example', { params: reqFields });
    } catch (err) {
        if (err.response) {
            // If the request was made and the server responded with a status code
            // That falls out of the range of 2xx
            // Note: These error formats are dependent on the web service
            return ecc.sendEccResult('ECC1000', err.response.data.message, nextReqKey);
        }

        // Else the request was made but no response was received
        // Note: This error format has nothing to do with the web service. This is
        // Mainly TCP/IP errors.
        return ecc.sendEccResult('ECC1000', err.message, nextReqKey);
    }

    // Send success result to client
    if (!result.data.success) {
        return ecc.sendEccResult('ECC1000', result.data.message, nextReqKey);
    }

    return ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
};

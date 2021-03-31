import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
import axios from 'axios';
import config from 'config';
import createLogger from 'src/services/logger';
const logger = createLogger('commands/pinc');
const { pinc } = config;
import * as converter from 'src/interfaces/pncchkin';

const axiosInstance = axios.create(pinc);

export const checkin: ECCHandlerFunction = async (reqkey, data, ecc) => {
    // Get parameters from incomming data buffer
    const rpgFields = converter.convertCheckin_dsToObject(data);

    const x = {
        event: 'yardhound.import_events.checkin',
        time: '2021-03-29T10:44:21-04:00',
        version: '1.3',
        campus: 'NRSNBR',
        data: {
            asset: {
                checked_in: '2021-03-29T10:44:00-04:00',
                asset_type: 'Container',
                rfid_tag: '340853E1D402FC0000031BEE',
                site_code: 'NRSNBRYRD',
                'Trailer SCAC': '',
                'Trailer #': '',
                container_number: 'BMOU4781496',
                movement_type: 'Inbound',
                load_status: 'Loaded',
                customer_code: 'HD',
                fleet_code: '',
                tractor_scac: 'HBGI'
            }
        }
    };

    // Un-flatten data structure
    const reqFields = {
        ...rpgFields,

        // Add api key
        appid: pinc.apikey,

        // Add constraints
        exclude: 'current,minutely,hourly',
        units: 'imperial'
    };

    // Call web service
    let result;
    let nextReqKey = reqkey;
    try {
        // TODO: Replace this with Amazon SNS client.publish call
        result = await axiosInstance.get('onecall', { params: reqFields });
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

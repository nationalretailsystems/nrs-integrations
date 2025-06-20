import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
import axios from 'axios';
import config from 'config';
import createLogger from 'src/services/logger';
import * as ddputctcvt from 'src/interfaces/ddputct';
import * as ddgetctcvt from 'src/interfaces/ddgetct';
import { promises as fs } from 'fs';

import { sanitizeValues } from 'src/services/safe-values';
import { resourceLimits } from 'worker_threads';
import { getTokenDD } from 'src/services/get-token';

const logger = createLogger('commands/draydog');
const { draydog } = config;
const axiosInstance = axios.create(draydog.axios);

const safeValues2: any = {
    notesdata: {
        '*10': {
            noteKey: 0,
            workOrderNumber: 0,
            workOrderKey: 0,
            contactID: '',
            modifiedData: '',
            note: '',
            isPrivateNote: '',
            serviceKey: '',
            serviceCode: ''
        }
    }
};

export const putDrayDogCT: ECCHandlerFunction = async (reqkey, data, ecc) => {
    logger.debug(`Received Dray Dog container watch request`, { reqkey, data });
    // Get parameters from incoming data buffer
    const reqFields = ddputctcvt.convertReqWatchToObject(data);
    // Call web service
    let result;
    let nextReqKey = reqkey;
    let containers = reqFields.containers;
    // const token = await getTokenDD();
    try {
        // result = await axiosInstance.post('/containers/watch?assign_to_user_id=1730&assign_to_user_id=1726', containers, {
        result = await axiosInstance.post('/containers/watch/', containers, {
            headers: {
                 'Authorization': 'Bearer WzE4MTgsMTY0LDUsIm5TRno0ZiJd.e-Spq1VINsYk-0qGO7WDwEhc-ZA', // draydog.apikey,
                // Authorization: 'Bearer ' + token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            params: {
                assign_to_user_id: 1730 // + '&assign_to_user_id=1726'
            }
        });
    } catch (err) {
        logger.debug('DD Err ' + err.request._header);
        if (err.response) {
            // If the request was made and the server responded with a status code
            // That falls out of the range of 2xx
            // Note: These error formats are dependent on the web service
            return ecc.sendEccResult('ECC8100', err.response.status + '-' + err.response.statusText, nextReqKey);
        }

        // Else the request was made but no response was received
        // Note: This error format has nothing to do with the web service. This is
        // Mainly TCP/IP errors.
        return ecc.sendEccResult('ECC9100', err.message, nextReqKey);
    }

    // try {
    //    await fs.writeFile(reqFields.filename, JSON.stringify(result.data), 'utf-8');
    // } catch (err) {
    //    return ecc.sendEccResult('ECC9200', err.message, nextReqKey);
    // }

    // Send the result info

    try {
        // let responseData = sanitizeValues(result.data, safeValues);
        let responseData = result.data;
        logger.debug('ECC0000', 'Success', nextReqKey);
        nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
        nextReqKey = await ecc.sendObjectToCaller(responseData, ddputctcvt.convertObjectToResWatch, nextReqKey);
        logger.debug('Sent data to RPG');
        return nextReqKey;
    } catch (err) {
        logger.error('Call failed', err);
        return ecc.sendEccResult('ECC9300', err.message, nextReqKey);
    }
};
export const getDrayDogCT: ECCHandlerFunction = async (reqkey, data, ecc) => {
    logger.debug(`Received draydog get contaner request`, { reqkey, data });
    // Get parameters from incoming data buffer
    // No reqfields on this api
    const reqFields = ddgetctcvt.convertReqDDGetToObject(data);
    // Call web service
    let result;
    let nextReqKey = reqkey;

    try {
        result = await axiosInstance.get('/containers/', {
            headers: {
                accept: 'application/json',
                // Authorization: draydog.apikey
                Authorization: 'Bearer WzE4MTgsMTY0LDUsIm5TRno0ZiJd.e-Spq1VINsYk-0qGO7WDwEhc-ZA'
            },
            params: {
                'page_size': '15',
                'container_cycle_states': 'import_appt_booking&container_cycle_states=import_appt_booked',
                page: reqFields.pagenum
            }
        });
    } catch (err) {
        if (err.response) {
            // If the request was made and the server responded with a status code
            // That falls out of the range of 2xx
            // Note: These error formats are dependent on the web service
            return ecc.sendEccResult('ECC8100', err.response.status + '-' + err.response.statusText, nextReqKey);
        }

        // Else the request was made but no response was received
        // Note: This error format has nothing to do with the web service. This is
        // Mainly TCP/IP errors.
        return ecc.sendEccResult('ECC9100', err.message, nextReqKey);
    }

    // try {
    //     await fs.writeFile(reqFields.filename, JSON.stringify(result.data), 'utf-8');
    // } catch (err) {
    //     return ecc.sendEccResult('ECC9200', err.message, nextReqKey);
    // }

    // Send the result info
    try {
        let responseData = result.data;
        logger.debug('ECC0000', 'Success', nextReqKey);
        nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
        nextReqKey = await ecc.sendObjectToCaller(responseData, ddgetctcvt.convertObjectToResDDGet, nextReqKey);
        logger.debug('Sending data to RPG');
        return nextReqKey;
    } catch (err) {
        logger.error('Call failed', err);
        return ecc.sendEccResult('ECC9300', err.message, nextReqKey);
    }
};
export const getDrayDog1CT: ECCHandlerFunction = async (reqkey, data, ecc) => {
    logger.debug(`Received draydog get contaner request`, { reqkey, data });
    // Get parameters from incoming data buffer
    // No reqfields on this api
    const reqFields = ddgetctcvt.convertReqDDGetToObject(data);
    // Call web service
    let result;
    let nextReqKey = reqkey;

    try {
        result = await axiosInstance.get('/containers/', {
            headers: {
                accept: 'application/json',
                Authorization: draydog.apikey
            },
            params: {
                page_size: '100',
                container_cycle_state: 'import_appt_booking',
                container_numbers: reqFields.container
            }
        });
    } catch (err) {
        if (err.response) {
            // If the request was made and the server responded with a status code
            // That falls out of the range of 2xx
            // Note: These error formats are dependent on the web service
            return ecc.sendEccResult('ECC8100', err.response.status + '-' + err.response.statusText, nextReqKey);
        }

        // Else the request was made but no response was received
        // Note: This error format has nothing to do with the web service. This is
        // Mainly TCP/IP errors.
        return ecc.sendEccResult('ECC9100', err.message, nextReqKey);
    }

    // Send the result info
    try {
        // let responseData = sanitizeValues(result.data, safeValues);
        let responseData = result.data;
        logger.debug('ECC0000', 'Success', nextReqKey);
        nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
        nextReqKey = await ecc.sendObjectsToCaller(responseData, ddgetctcvt.convertObjectToResDDGet, nextReqKey);
        logger.debug('Sent data to RPG');
        return nextReqKey;
    } catch (err) {
        logger.error('Call failed', err);
        return ecc.sendEccResult('ECC9300', err.message, nextReqKey);
    }
};

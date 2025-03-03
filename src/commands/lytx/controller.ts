import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
import axios from 'axios';
import config from 'config';
import createLogger from 'src/services/logger';
import * as converter from 'src/interfaces/lytxveh1';
import * as converter2 from 'src/interfaces/lytxass1';
import { promises as fs } from 'fs';

const logger = createLogger('commands/lytx');
const { lytx } = config;
const axiosInstance = axios.create(lytx.axios);

export const getVehicles: ECCHandlerFunction = async (reqkey, data, ecc) => {
    logger.debug(`Received Lytx Get Vehicles request`, { reqkey, data });
    // Get parameters from incoming data buffer
    const reqFields = converter.convertVehReqToObject(data);

    // Call web service
    let result;
    let nextReqKey = reqkey;
    try {
        result = await axiosInstance.get('/vehicles/all', {
            headers: {
                'x-apikey': lytx.xapikey,
                'Accept': 'application/json'
            },
            params: {
                name: reqFields.vehicle
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
    let responseData = result.data;
    logger.debug('ECC0000', 'Success', nextReqKey);
    nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
    return ecc.sendObjectToCaller(responseData, converter.convertObjectToVehRes, nextReqKey);
    logger.debug('Sent data to RPG');
};
export const assignVehicle: ECCHandlerFunction = async (reqkey, data, ecc) => {
    logger.debug(`Received Lytx Assign Vehicle request`, { reqkey, data });
    // Get parameters from incoming data buffer
    const reqFields = converter2.convertAssignReqToObject(data);

    // Call web service
    let result;
    let nextReqKey = reqkey;
    try {
        result = await axiosInstance.patch('/vehicles/all', {
            headers: {
                'x-apikey': lytx.xapikey,
                'Accept': 'application/json'
            },
            params: {
                name: reqFields.vehicleId
            },
            body: {
                driverId: reqFields.driverId
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
    let responseData = result.data;
    logger.debug('ECC0000', 'Success', nextReqKey);
    nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
    return ecc.sendObjectToCaller(responseData, converter2.convertObjectToAssignRes, nextReqKey);
    logger.debug('Sent data to RPG');
};

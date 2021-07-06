import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
import axios from 'axios';
import config from 'config';
import createLogger from 'src/services/logger';
import * as converter from 'src/interfaces/skybtz';
import { promises as fs } from 'fs';

const logger = createLogger('commands/skybitz');
const { skybitz } = config;
const axiosInstance = axios.create(skybitz.axios);

export const getTrailerMileages: ECCHandlerFunction = async (reqkey, data, ecc) => {
    logger.debug(`Received getTrailerMileages request`, { reqkey, data });
    // Get parameters from incomming data buffer
    const reqFields = converter.convertGetTrlMlsToObject(data);

    // Call web service
    let result;
    let nextReqKey = reqkey;
    try {
        result = await axiosInstance.get('/QueryTotalDeviceMileage', {
            params: {
                mtsn: 'ALL',
                customer: skybitz.username,
                password: skybitz.password,
                version: skybitz.version
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

    try {
        await fs.writeFile(reqFields.filename, result.data, 'utf-8');
    } catch (err) {
        return ecc.sendEccResult('ECC9200', err.message, nextReqKey);
    }

    // Send the result info
    return ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
};

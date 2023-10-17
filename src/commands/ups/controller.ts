import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
import axios from 'axios';
import config from 'config';
import createLogger from 'src/services/logger';
import * as converterUPS from 'src/interfaces/upsval';

const logger = createLogger('commands/ups');
const { ups } = config;
const axiosInstance = axios.create(ups.axios);

/* eslint-enable */

export const validateAddress: ECCHandlerFunction = async function (reqkey, datax, ecc) {
    // Get parameters from incoming data buffer
    const reqFields = converterUPS.convertReqFmtToObject(datax);

    logger.debug(`Received validate address request`, { reqkey, datax });

    // Call web service
    let result;
    let response;
    let nextReqKey = reqkey;
    const jsonData = JSON.stringify(reqFields);
    try {
        logger.error('Requesting token');
        result = await axiosInstance.post(ups.baseurl, reqFields,{
            headers: {
                Username: ups.username,
                Password: ups.password,
                AccessLicenseNumber: ups.accesslicensenumber,
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            params: {
               requestregionalindicator: false,
               maximumcandidatesize: 5 
            }
        });
    } catch (err) {
        if (err.response) {
            // If the request was made and the server responded with a status code
            // That falls out of the range of 2xx
            // Note: These error formats are dependent on the web service
            return ecc.sendEccResult('ECC1000', err.response.status + '-' + err.response.statusText, nextReqKey);
        }

        // Else the request was made but no response was received
        // Note: This error format has nothing to do with the web service. This is
        // Mainly TCP/IP errors.
        return ecc.sendEccResult('ECC1000', err.message, nextReqKey);
    }
    let responseData = result.data;
    nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
    return ecc.sendObjectToCaller(responseData, converterUPS.convertObjectToRespFmt, nextReqKey);
    // logger.error('Call test1 failed');
    logger.error(nextReqKey);
};

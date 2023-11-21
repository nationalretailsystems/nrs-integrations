import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
import axios from 'axios';
import config from 'config';
import createLogger from 'src/services/logger';
import * as converter from 'src/interfaces/t4300inv';
import { getTokenTS } from 'src/services/get-token';

const logger = createLogger('commands/t4300');
const { ts4300 } = config;
const axiosInstance = axios.create(ts4300.axios);

export const getCartInventory: ECCHandlerFunction = async (reqkey, data, ecc) => {
    logger.debug(`Received getCartInventory request`, { reqkey, data });
    // Get parameters from incoming data buffer
    // const reqFields = converter.convertHyRequestToObject(data);
    // let reqDate = reqFields.sincedate.toISOString().split('T')[0];
    // Call web service
    let result;
    let nextReqKey = reqkey;

    try {
        const token = await getTokenTS();
        result = await axiosInstance.get('/v1/library/inventory', {
            headers: {
                Authorization: token
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

    let responseData = result.data;
    logger.debug('ECC0000', 'Success', nextReqKey);
    nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
    return ecc.sendObjectToCaller(responseData, converter.convertObjectToTapeInvRes, nextReqKey);
};

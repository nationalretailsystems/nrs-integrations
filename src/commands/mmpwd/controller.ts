import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
import axios from 'axios';
import config from 'config';
import createLogger from 'src/services/logger';
const logger = createLogger('commands/mmpwd');
const { makeme } = config;
import * as converter from 'src/interfaces/makeme';

const axiosInstance = axios.create(makeme);

export const getPwd: ECCHandlerFunction = async function (reqkey, data, ecc) {
    logger.debug(`Received getPwd request`, { reqkey, data });
    // Get parameters from incomming data buffer
    const reqFields = converter.convertPwdRequestToObject(data);

    // Call web service
    let result;
    let nextReqKey = reqkey;
    try {
        result = await axiosInstance.get('/passphrase/json', { params: reqFields });
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

    if (result.data.error !== null) {
        // If the request did not succeed
        // Note: if not successful value is a string containing the error
        return ecc.sendEccResult('ECC1000', result.status + '-' + result.data.value, nextReqKey);
    }

    // Else save the joke then change the value field so it is as expected
    // Note: if successful value is an object containing the joke and other info
    let password = null;
    for (var x = 0; x < result.data.pws.length; x++) {
    if (result.data.pws[x] !== 'A passphrase could not be found matching your minimum and maximum length requirements') {
        password  = result.data.pws[x];
        break;
    }
    }
    
    // Send the result info
    nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);

    // Send the joke
    return ecc.sendFieldToCaller(password, nextReqKey);
    // 'A passphrase could not be found matching your minimum and maximum length requirements'
};

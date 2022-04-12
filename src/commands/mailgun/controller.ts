import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
import axios from 'axios';
import config from 'config';
import createLogger from 'src/services/logger';
const logger = createLogger('commands/mailgun');
const { mailgun } = config;
import * as converter from 'src/interfaces/mlgnveri';

const axiosInstance = axios.create(mailgun);

export const getMailgun: ECCHandlerFunction = async function (reqkey, data, ecc) {
    logger.debug(`Received getMailgun request`, { reqkey, data });
    // Get parameters from incomming data buffer
    const reqFields = converter.convertMgReqDataToObject(data);

    // Call web service
    let result;
    let nextReqKey = reqkey;
    try {
        result = await axiosInstance.get('/v4/address/validate', { 
            params: {
                address: reqFields.address
                }, 
            headers: {
                Accept: 'application/json',
                Authorization: mailgun.apikey,
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

    if (result.data.type !== 'success') {
        // If the request did not succeed
        // Note: if not successful value is a string containing the error
        return ecc.sendEccResult('ECC1000', result.status + '-' + result.data.value, nextReqKey);
    }

    // Else save the joke then change the value field so it is as expected
    // Note: if successful value is an object containing the joke and other info
    const { joke } = result.data.value;
    result.data.httpstatus = result.status;
    result.data.value = '';

    // Send the result info
    nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);

    // Send the joke
    return ecc.sendFieldToCaller(joke, nextReqKey);
};

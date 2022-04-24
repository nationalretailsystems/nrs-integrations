import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
// import axios from 'axios';
import config from 'config';
import createLogger from 'src/services/logger';
const logger = createLogger('commands/mailgun');
const { mailgun: mailgunConfig } = config;
import * as converter from 'src/interfaces/mlgnveri';
import formData from 'form-data';
import Mailgun from 'mailgun.js';
import { sanitizeValues } from 'src/services/safe-values';

const mailgun = new Mailgun(formData);
const mg = mailgun.client({ username: 'api', key: mailgunConfig.apikey });
const safeValues: any = {
    address: '',
    is_disposable_address: false,
    is_role_address: false,
    reason: {
        '*10': ''
    },
    result: '',
    risk: ''
};

// const axiosInstance = axios.create(mailgunConfig);

export const verify: ECCHandlerFunction = async function (reqkey, datax, ecc) {
    // logger.debug(`Received getMailgun request`, { reqkey, data });
    // Get parameters from incomming data buffer
    const reqFields = converter.convertMgReqDataToObject(datax);
    logger.debug(`Received getMailgun request`, { reqkey, datax });

    // Call web service
    let result;
    let nextReqKey = reqkey;
    try {
        result = await mg.validate.get(reqFields.address);
        // result = await axiosInstance.get('/v4/address/validate', {
        //     params: {
        //          ...reqFields
        //     },
        //     headers: {
        //         Accept: 'application/json',
        //         Authorization: mailgun.apikey
        //     }
        // });
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

    // Else save the joke then change the value field so it is as expected
    // Note: if successful value is an object containing the joke and other info

    // const responseData= result;

    let responseData = sanitizeValues(result, safeValues);
    // Send the result info
    nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);

    // Send the results
    return ecc.sendObjectToCaller(responseData, converter.convertObjectToMgResData, nextReqKey);
};

import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
import axios from 'axios';
import config from 'config';
import createLogger from 'src/services/logger';
import * as converterusraut from 'src/interfaces/pcusraut';
import * as converterachrpt from 'src/interfaces/pcachrpt';
import { getToken } from 'src/services/get-token';

const logger = createLogger('commands/paycargo');
const { paycargo } = config;
const axiosInstance = axios.create(paycargo.axios);

export const getUsraut: ECCHandlerFunction = async function (reqkey, datax, ecc) {
    // Get parameters from incomming data buffer
    // const reqFields = converterusraut.convertPCReqTokenToObject(datax);
    const reqFields = {
        username: paycargo.username,
        password: paycargo.password
    }
    logger.debug(`Received getPayCargoUser request`, { reqkey, datax });

    // Call web service
    let result;
    let nextReqKey = reqkey;
    // const jsonData = reqFields;
      try {
        const token = await getToken()
        result = await axiosInstance.post('/login', reqFields, {
            headers: {
                Authorization: `JWT ${token}`
            }
        })
       // result = await axiosInstance.post('/login', reqFields,   {
       //     headers: {
       //         'Content-Type': 'application/x-www-form-urlencoded'
       //     }
       // });
        // });        
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
    // Send the result info
    nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);

    // Send the results
    return ecc.sendObjectToCaller(result.data, converterusraut.convertObjectToPCRcvToken, nextReqKey);
};

export const getAchrpt: ECCHandlerFunction = async function (reqkey, datax, ecc) {
    // Get parameters from incomming data buffer
    const reqFields = converterachrpt.convertPCReqRptToObject(datax);

    logger.debug(`Received getAchrpt request`, { reqkey, datax });

    // Call web service
    let result;
    let nextReqKey = reqkey;
    // const jsonData = reqFields;
      try {
        const token = await getToken()
        result = await axiosInstance.post('/reports/singleReport', reqFields, {
            headers: {
                Authorization: `JWT ${token}`
            }
        })

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

    // const responseData= result;
    // Send the result info
    nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);

    // Send the results
    return ecc.sendObjectToCaller(result, converterusraut.convertObjectToPCRcvToken, nextReqKey);
};

export const getTranscacions: ECCHandlerFunction = async function (reqkey, datax, ecc) {
    // Get parameters from incomming data buffer
    // const reqFields = converterusraut.convertPCReqTokenToObject(datax);
    const reqFields = {
        username: paycargo.username,
        password: paycargo.password
    }
    logger.debug(`Received getPayCargoUser request`, { reqkey, datax });

    // Call web service
    let result;
    let nextReqKey = reqkey;
    // const jsonData = reqFields;
      try {
        const token = await getToken()
        result = await axiosInstance.post('/login', reqFields, {
            headers: {
                Authorization: `JWT ${token}`
            }
        })

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

    // const responseData= result;
    // Send the result info
    nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);

    // Send the results
    return ecc.sendObjectToCaller(result, converterusraut.convertObjectToPCRcvToken, nextReqKey);
};

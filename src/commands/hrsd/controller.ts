import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
import axios from 'axios';
import config from 'config';
import createLogger from 'src/services/logger';
import * as converterhrsdgetemp from 'src/interfaces/hrsdgetemp';
import * as converterhrsdupdoc from 'src/interfaces/hrsdupdoc';
import * as converterhrsdupld from 'src/interfaces/hrsdupld';
import { getTokenHRSD } from 'src/services/get-token';
import { parseCommandLine } from 'typescript';


const logger = createLogger('commands/hrsd');
const { ukg } = config;
const axiosInstance = axios.create(ukg.prd.axios);


/* eslint-enable */
export const getEmployee: ECCHandlerFunction = async function (reqkey, datax, ecc) {
    // Get parameters from incoming data buffer
    const reqFields = converterhrsdgetemp.convertEmpRequestToObject(datax);

    logger.debug(`Received NRSD getemployee request`, { reqkey, datax });

    // Call web service
    let result;
    let nextReqKey = reqkey;
    // const jsonData = reqFields;
    try {
        logger.error('Requesting token');
        const token = await getTokenHRSD();
        const parms = 'employee_numbers ' + reqFields.employee;
        result = await axiosInstance.get('/v2/client/employees' + '?' + parms, {
            headers: {
                Authorization: 'Bearer ' + token,
                Accept: 'application/json'
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
    // logger.error('Call test1 failed');
    return ecc.sendObjectToCaller(responseData, converterhrsdgetemp.convertObjectToEmpResult, nextReqKey);
    logger.error(nextReqKey);
};

export const postUpload: ECCHandlerFunction = async function (reqkey, datax, ecc) {
    // Get parameters from incoming data buffer
    const reqFields = converterhrsdupld.convertuprequestToObject(datax);

    logger.debug(`Received HRSD postUpload request`, { reqkey, datax });

    // Call web service
    let result;
    let nextReqKey = reqkey;
    // const jsonData = reqFields;
    try {
        logger.error('Requesting token');
        const formData = new FormData();
        formData.append("image",reqFields.location + "/" + reqFields.filename);
        const token = await getTokenHRSD();
        result = await axiosInstance.post('/v2/client/document', formData , {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'multipart/form-data; boundary=' + reqFields.filename.substring(0,reqFields.filename.lastIndexOf('.')),
                Accept: 'application/json'
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
    // logger.error('Call test1 failed');
    return ecc.sendObjectToCaller(responseData, converterhrsdupld.convertObjectToupresults, nextReqKey);
    // X logger.error(nextReqKey);
};
export const postEmpDoc: ECCHandlerFunction = async function (reqkey, datax, ecc) {
    // Get parameters from incoming data buffer
    const reqFields = converterhrsdupdoc.convertUpldRequestToObject(datax);

    logger.debug(`Received HRSD post EmpDoc request`, { reqkey, datax });

    // Call web service
    let result;
    let nextReqKey = reqkey;
    // const jsonData = reqFields;
    try {
        logger.error('Requesting token');
        const token = await getTokenHRSD();
        result = await axiosInstance.post('/v2/client/employee_documents', reqFields , {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
                Accept: 'application/json'
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
    return ecc.sendEccResult('ECC0000', result.data, nextReqKey);
    logger.info(nextReqKey);
};

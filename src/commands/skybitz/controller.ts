import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
import axios from 'axios';
import config from 'config';
import createLogger from 'src/services/logger';
import * as converter from 'src/interfaces/skybtz';
import * as converter2 from 'src/interfaces/skybtzqm';
import * as converter3 from 'src/interfaces/skybtzqp';
import { promises as fs } from 'fs';
import { parseStringPromise  } from 'xml2js';
import { sanitizeValues } from 'src/services/safe-values';
// import { resolve } from 'path';
const safeValues: any = {
    skybitz: {
        gls: {
            asset: {
                groups: {
                    groupname: {
                        '*10': ''
                    }
                },
                note: ''
            },
            serial: {
                '*10': ''
            }
        }
    }
};

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
export const getQueryMileage: ECCHandlerFunction = async (reqkey, data, ecc) => {
    logger.debug(`Received getQueryMileage request`, { reqkey, data });
    // Get parameters from incomming data buffer
    const reqFields = converter2.convertGetTrlMls2ToObject(data);
    let todaysDate = new Date();
    todaysDate.setDate(todaysDate.getDate() - 1);
    let reqDate = timestamp(todaysDate);
    // Call web service
    let result;
    let nextReqKey = reqkey;

    try {
        result = await axiosInstance.get('/QueryMileage', {
            params: {
                assetid: 'ALL',
                milesetupstatus: 'ALL',
                from: reqDate[0],
                to: reqDate[1],
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
export const getQueryPosition: ECCHandlerFunction = async (reqkey, data, ecc) => {
    logger.debug(`Received getQueryPosition request`, { reqkey, data });
    // Get parameters from incomming data buffer
    const reqFields = converter3.convertGetTrlPosToObject(data);
    // Call web service
    let result;
    let nextReqKey = reqkey;

    try {
        result = await axiosInstance.get('/QueryPositions', {
            params: {
                assetid: reqFields.assetid,
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

    // Send the result info
    // return ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
    nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
   
    const jsonData = await  toJson(result.data);
    if (jsonData.skybitz.error == '2') {
        return ecc.sendEccResult('ECC9900', 'Error 2 received', nextReqKey); 
    } else {

    const groupname = [];
    if (!Array.isArray(jsonData.skybitz.gls.asset.groups.groupname)) {
        groupname.push(jsonData.skybitz.gls.asset.groups.groupname);
        jsonData.skybitz.gls.asset.groups.groupname = groupname;
    }

    let safeResponse   = sanitizeValues(jsonData, safeValues);
    console.log(safeResponse);
    return ecc.sendObjectToCaller(safeResponse,converter3.convertObjectToTrlRtnDta, nextReqKey);
    // return ecc.sendFieldToCaller(JSON.stringify(jsonData),nextReqKey);
}
};

function timestamp(d: any) {
    function pad(n: any) {
        return n < 10 ? '0' + n : n;
    }
    let months2 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let slash = '/';
    let dash = '-';
    let monthnum = d.getMonth();
    let newdate = pad(d.getDate()) + slash + pad(months2[monthnum]) + slash + d.getFullYear() + dash;
    let returns1 = newdate + '00:00:00';
    let returns2 = newdate + '23:59:59';
    return [returns1, returns2];
};
    // Convert string/XML to JSON
    function toJson(xmlData:string) {
        return parseStringPromise (xmlData, {explicitArray:false})
    }

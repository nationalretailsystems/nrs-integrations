import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
import axios from 'axios';
import config from 'config';
import createLogger from 'src/services/logger';
import * as converter from 'src/interfaces/mpgeteqip';
import * as converter2 from 'src/interfaces/mpgeteq2';
import * as converter3 from 'src/interfaces/mpputlog';
import { promises as fs } from 'fs';

const logger = createLogger('commands/managerplus');
const { managerplus } = config;
const axiosInstance = axios.create(managerplus.axios);

const safeValues: any = {
    assetKey: 0,
    entityName: '',
    assetId: '',
    parentAssetId: '',
    description: '',
    groupKey: 0,
    groupId: '',
    categoryId: '',
    typeId: '',
    budgetGroupId: '',
    budgetId: '',
    statusId: '',
    barcode: '',
    manufacturer: '',
    model: '',
    serialNumber: '',
    customer: '',
    customerKey: 0,
    purchaseDate: '0001-01-01',
    purchaseCost: 0
};

export const getAssetChanges: ECCHandlerFunction = async (reqkey, data, ecc) => {
    logger.debug(`Received getAssetChanges request`, { reqkey, data });
    // Get parameters from incomming data buffer
    const reqFields = converter.convertRqAssetChgToObject(data);
    let reqDate = reqFields.sincedate.toISOString().split('T')[0];
    // Call web service
    let result;
    let nextReqKey = reqkey;

    try {
        result = await axiosInstance.get('/Assets/Modified', {
            params: {
                since: reqDate
            },
            headers: {
                accept: 'application/json',
                Authorization: managerplus.apikey
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
        await fs.writeFile(reqFields.filename, JSON.stringify(result.data), 'utf-8');
    } catch (err) {
        return ecc.sendEccResult('ECC9200', err.message, nextReqKey);
    }

    // Send the result info

    try {
        let responseData = result.data;

        for (let rec of responseData) {
            for (let key in rec) {
                rec[key] = rec[key] || safeValues[key];
            }
        }
        logger.debug('ECC0000', 'Success', nextReqKey);
        nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
        nextReqKey = await ecc.sendObjectsToCaller(responseData, converter.convertObjectToAssetChgDS, nextReqKey);
        logger.debug('Sent data to RPG');
        return nextReqKey;
    } catch (err) {
        logger.error('Call failed', err);
        return ecc.sendEccResult('ECC9300', err.message, nextReqKey);
    }
};
export const getAssetAll: ECCHandlerFunction = async (reqkey, data, ecc) => {
    logger.debug(`Received getAssetAll request`, { reqkey, data });
    // Get parameters from incomming data buffer
    const reqFields = converter2.convertRqAssetAllToObject(data);
    // Call web service
    let result;
    let nextReqKey = reqkey;

    try {
        result = await axiosInstance.get('/Assets', {
            params: {
                $skip: reqFields.skiprecs
            },
            headers: {
                accept: 'application/json',
                Authorization: managerplus.apikey
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
        await fs.writeFile(reqFields.filename, JSON.stringify(result.data), 'utf-8');
    } catch (err) {
        return ecc.sendEccResult('ECC9200', err.message, nextReqKey);
    }

    // Send the result info
    try {
        let responseData = result.data;

        for (let rec of responseData) {
            for (let key in rec) {
                rec[key] = rec[key] || safeValues[key];
            }
        }
        logger.debug('ECC0000', 'Success', nextReqKey);
        nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
        nextReqKey = await ecc.sendObjectsToCaller(responseData, converter2.convertObjectToAssetAllDS, nextReqKey);
        logger.debug('Sent data to RPG');
        return nextReqKey;
    } catch (err) {
        logger.error('Call failed', err);
        return ecc.sendEccResult('ECC9300', err.message, nextReqKey);
    }
};
export const putLogMileage: ECCHandlerFunction = async (reqkey, data, ecc) => {
    logger.debug(`Received putLogMileage request`, { reqkey, data });
    // Get parameters from incomming data buffer
    const reqFields = converter3.convertReqAddLogToObject(data);
    // Call web service
    let result;
    let nextReqKey = reqkey;

    try {
        result = await axiosInstance.post('/Logs', reqFields, {
            headers: {
                accept: 'application/json',
                Authorization: managerplus.apikey
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

    try {
        let responseData = result.data;

        logger.debug('ECC0000', 'Success', nextReqKey);
        nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
        nextReqKey = await ecc.sendObjectToCaller(responseData, converter3.convertObjectToAddLogRes, nextReqKey);
        logger.debug('Sent data to RPG');
        return nextReqKey;
    } catch (err) {
        logger.error('Call failed', err);
        return ecc.sendEccResult('ECC9300', err.message, nextReqKey);
    }
}
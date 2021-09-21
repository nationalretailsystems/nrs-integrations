import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
import axios from 'axios';
import config from 'config';
import createLogger from 'src/services/logger';
import * as converter from 'src/interfaces/mpgeteqip';
import * as converter2 from 'src/interfaces/mpgeteq2';
import * as converter3 from 'src/interfaces/mpputlog';
import * as converterwoch from 'src/interfaces/mpgetwoch';
import * as converterwohr from 'src/interfaces/mpgetwohr';
import * as converterwkor from 'src/interfaces/mpputwo';
import * as convertervndr from 'src/interfaces/mpvendor';
import * as convertersvcitm from 'src/interfaces/mpsvcitm';
import * as converterempl from 'src/interfaces/mpemploy';
import { promises as fs } from 'fs';

import { sanitizeValues } from 'src/services/safe-values';

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
    dateCreated: '0001-01-01',
    dateCompleted: '0001-01-01',
    dateDue: '0001-01-01',
    scheduledDate: '0001-01-01',
    estimatedCompletion: '0001-01-01',
    purchaseCost: 0,
    requestId: 0,
    inspectionId: 0,
    invoiceNumber: 0,
    partsCost: 0,
    laborCost: 0,
    otherCost: 0,
    totalCosts: 0,
    scheduleId: '',
    laborRate: 0,
    assigned: '',
    failureCode: '',
    purpose: '',
    customFields: {
        '*100': {
            key: 0,
            customFieldKey: 0,
            fieldName: '',
            value: ''
        }
    }
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
        let responseData = sanitizeValues(result.data, safeValues);

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
        let responseData = sanitizeValues(result.data, safeValues);

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
        if (err?.response?.data === 'Asset Id not found') {
            // If the request was made and the server responded with a status code
            // Of 400, return the data and ECC8400 to recird the bad asset id
            return ecc.sendEccResult('ECC8400', err.response.status + '-' + err.response.data, nextReqKey);
        } else {
            if (err.response) {
                // If the request was made and the server responded with a status code
                // That falls out of the range of 2xx
                // Note: These error formats are dependent on the web service
                return ecc.sendEccResult('ECC8100', err.response.status + '-' + err.response.statusText, nextReqKey);
            }
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
        nextReqKey = await ecc.sendFieldToCaller(responseData, nextReqKey);
        logger.debug('Sent data to RPG');
        return nextReqKey;
    } catch (err) {
        logger.error('Call failed', err);
        return ecc.sendEccResult('ECC9300', err.message, nextReqKey);
    }
};

export const getWorkOrderChanges: ECCHandlerFunction = async (reqkey, data, ecc) => {
    logger.debug(`Received getWorkOrderChanges request`, { reqkey, data });
    // Get parameters from incomming data buffer
    const reqFields = converterwoch.convertReqWoChgToObject(data);
    let reqDate = reqFields.since.toISOString().split('T')[0];
    // Call web service
    let result;
    let nextReqKey = reqkey;

    try {
        result = await axiosInstance.get('/WorkOrders/Modified', {
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

    // Send the result info

    try {
        let responseData = result.data.map((record: any) => sanitizeValues(record, safeValues));

        try {
            await fs.writeFile('/eradani/tests/wochanges2.json', JSON.stringify(responseData), 'utf-8');
        } catch (err) {
            return ecc.sendEccResult('ECC9200', err.message, nextReqKey);
        }

        logger.debug('ECC0000', 'Success', nextReqKey);
        nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
        nextReqKey = await ecc.sendObjectsToCaller(responseData, converterwoch.convertObjectToResWoChg, nextReqKey);
        logger.debug('Sent data to RPG');
        return nextReqKey;
    } catch (err) {
        logger.error('Call failed', err);
        return ecc.sendEccResult('ECC9300', err.message, nextReqKey);
    }
};

export const getWorkOrderHours: ECCHandlerFunction = async (reqkey, data, ecc) => {
    logger.debug(`Received getWorkOrderHours request`, { reqkey, data });
    // Get parameters from incomming data buffer
    const dataFields = converterwohr.convertReqWoHoursToObject(data);

    // Call web service
    let result;
    let nextReqKey = reqkey;

    try {
        result = await axiosInstance.get('/WorkOrders/Labor', {
            params: {
                id: dataFields.id
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

    // Send the result info

    try {
        let responseData = sanitizeValues(result.data, safeValues);

        logger.debug('ECC0000', 'Success', nextReqKey);
        nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
        nextReqKey = await ecc.sendObjectsToCaller(responseData, converterwohr.convertObjectToResWoHrs, nextReqKey);
        logger.debug('Sent data to RPG');
        return nextReqKey;
    } catch (err) {
        logger.error('Call failed', err);
        return ecc.sendEccResult('ECC9300', err.message, nextReqKey);
    }
};
export const putNewWorkOrder: ECCHandlerFunction = async (reqkey, data, ecc) => {
    logger.debug(`Received putNewWorkOrder request`, { reqkey, data });
    // Get parameters from incomming data buffer
    const reqFields = converterwkor.convertReqAddWoToObject(data);
    // Call web service

    let result;
    let nextReqKey = reqkey;

    try {
        result = await axiosInstance.post('/WorkOrders', reqFields, {
            headers: {
                accept: 'application/json',
                Authorization: managerplus.apikey
            }
        });
    } catch (err) {
        if (err?.response?.data === 'Asset Id not found') {
            // If the request was made and the server responded with a status code
            // Of 400, return the data and ECC8400 to recird the bad asset id
            return ecc.sendEccResult('ECC8400', err.response.status + '-' + err.response.data, nextReqKey);
        } else {
            if (err.response) {
                // If the request was made and the server responded with a status code
                // That falls out of the range of 2xx
                // Note: These error formats are dependent on the web service
                return ecc.sendEccResult('ECC8100', err.response.status + '-' + err.response.statusText, nextReqKey);
            }
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
        nextReqKey = await ecc.sendFieldToCaller(responseData, nextReqKey);
        logger.debug('Sent data to RPG');
        return nextReqKey;
    } catch (err) {
        logger.error('Call failed', err);
        return ecc.sendEccResult('ECC9300', err.message, nextReqKey);
    }
};
export const getVendor: ECCHandlerFunction = async (reqkey, data, ecc) => {
    logger.debug(`Received getVendor request`, { reqkey, data });
    // Get parameters from incomming data buffer
    const reqFields = convertervndr.convertReqVendrToObject(data);
    // Call web service
    let result;
    let nextReqKey = reqkey;

    try {
        result = await axiosInstance.get('/Vendors', {
            params: {
                $filter: 'contactKey eq ' + reqFields.contactKey,
                $select: 'vendorName'
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

    // Send the result info
    try {
        let responseData = result.data;
        logger.debug('ECC0000', 'Success', nextReqKey);
        nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
        nextReqKey = await ecc.sendObjectsToCaller(responseData, convertervndr.convertObjectToResVendr, nextReqKey);
        logger.debug('Sent data to RPG');
        return nextReqKey;
    } catch (err) {
        logger.error('Call failed', err);
        return ecc.sendEccResult('ECC9300', err.message, nextReqKey);
    }
};
export const getEmploy: ECCHandlerFunction = async (reqkey, data, ecc) => {
    logger.debug(`Received getEmploy request`, { reqkey, data });
    // Get parameters from incomming data buffer
    const reqFields = converterempl.convertReqEmplToObject(data);
    // Call web service
    let result;
    let nextReqKey = reqkey;

    try {
        result = await axiosInstance.get('/Vendors', {
            params: {
                $filter: 'contactKey eq ' + reqFields.contactKey,
                $select: 'employeeName'
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

    // Send the result info
    try {
        let responseData = result.data;
        logger.debug('ECC0000', 'Success', nextReqKey);
        nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
        nextReqKey = await ecc.sendObjectsToCaller(responseData, converterempl.convertObjectToResEmpl, nextReqKey);
        logger.debug('Sent data to RPG');
        return nextReqKey;
    } catch (err) {
        logger.error('Call failed', err);
        return ecc.sendEccResult('ECC9300', err.message, nextReqKey);
    }
};

export const getSvcItem: ECCHandlerFunction = async (reqkey, data, ecc) => {
    logger.debug(`Received getSvcItem request`, { reqkey, data });
    // Get parameters from incomming data buffer
    const reqFields = convertersvcitm.convertReqSvcCdToObject(data);
    // Call web service
    let result;
    let nextReqKey = reqkey;

    try {
        result = await axiosInstance.get('/ServiceItems', {
            params: {
                $filter: 'serviceCode eq ' + reqFields.serviceCode
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

    // Send the result info
    try {
        let responseData = result.data;
        logger.debug('ECC0000', 'Success', nextReqKey);
        nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
        nextReqKey = await ecc.sendObjectToCaller(responseData, convertersvcitm.convertObjectToResSvcCd, nextReqKey);
        logger.debug('Sent data to RPG');
        return nextReqKey;
    } catch (err) {
        logger.error('Call failed', err);
        return ecc.sendEccResult('ECC9300', err.message, nextReqKey);
    }
};

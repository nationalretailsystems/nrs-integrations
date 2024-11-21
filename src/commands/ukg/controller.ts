import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
import axios from 'axios';
import config from 'config';
import createLogger from 'src/services/logger';
import * as converterukgs from 'src/interfaces/ukgdlysumm';
import * as converterukgp from 'src/interfaces/ukgpunches';
import * as converterukgt from 'src/interfaces/ukgtotals';
import * as converterukgh from 'src/interfaces/ukgputhr';
import * as converterukgpers from 'src/interfaces/ukgpers';
import * as converterukghos from 'src/interfaces/ukgputhos';
import * as converterukgdelof from 'src/interfaces/ukgdelof';
import * as converterukgdrvr from 'src/interfaces/ukgdrvr';
import * as converterukgpchim from 'src/interfaces/ukgpchim';
import * as converterdata from 'src/interfaces/ukgdtard';
import { getTokenUkg } from 'src/services/get-token';
import { sanitizeValues } from 'src/services/safe-values';
import { ImportExport } from 'aws-sdk';
import { idText } from 'typescript';

const logger = createLogger('commands/ukg');
const { ukg } = config;
const axiosInstance = axios.create(ukg.prd.axios);

const safeValues: any = {
    startDate: ' ',
    endDate: ' ',
    totals: {
        '*2': {
            employeeContext: {
                employee: {
                    id: 0,
                    qualifier: ' ',
                    name: ' '
                },
                timezone: {
                    id: 0,
                    qualifier: ' ',
                    name: ' '
                }
            },
            totalContext: {
                totalType: ' ',
                totalAggregationType: ' ',
                totalGroupByType: ' '
            },
            aggregatedTotals: {
                '*20': {
                    amountType: ' ',
                    wagesCurrency: {
                        amount: 0,
                        currencyCode: ' '
                    },
                    employee: {
                        id: 0,
                        qualifier: ' ',
                        name: ' '
                    },
                    location: {
                        id: 0,
                        qualifier: ' ',
                        name: ' '
                    },
                    job: {
                        id: 0,
                        qualifier: ' ',
                        name: ' '
                    },
                    laborCategory: {
                        id: 0,
                        qualifier: ' ',
                        name: ' '
                    },
                    payCode: {
                        id: 0,
                        qualifier: ' ',
                        name: ' '
                    },
                    amount: 0,
                    wages: 0,
                    jobTransfer: ' ',
                    laborCategoryTransfer: ' ',
                    timeItemType: {},
                    approvableByManager: ' '
                }
            }
        }
    }
};

/* eslint-enable */
export const getPunches: ECCHandlerFunction = async function (reqkey, datax, ecc) {
    // Get parameters from incoming data buffer
    const reqFields = converterukgp.convertPunchReqToObject(datax);

    logger.debug(`Received getHours request`, { reqkey, datax });

    // Call web service
    let result;
    let nextReqKey = reqkey;
    // const jsonData = reqFields;
    try {
        logger.error('Requesting token');
        const token = await getTokenUkg();
        result = await axiosInstance.get('/v1/timekeeping/timecard', {
            /* eslint-disable */
            params: {
                start_date: reqFields.startdate,
                end_date: reqFields.enddate,
                person_number: reqFields.employee,
                select: 'PUNCHES'
            },
            /* eslint-enable */

            headers: {
                Authorization: token,
                appkey: ukg.prd.appkey,
                'content-type': 'application/json',
                accept: 'application/json'
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

    // const responseData= result;
    // Send the result info
    // let responseData = sanitizeValues(result.data[0][1], safeValuesACH);
    // let responseData = result.data[0][1];
    let responseData = result.data;
    nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
    // logger.error('Call test1 failed');
    return ecc.sendObjectToCaller(responseData, converterukgp.convertObjectToPunchRes, nextReqKey);
    logger.error(nextReqKey);
};

export const getSummary: ECCHandlerFunction = async function (reqkey, datax, ecc) {
    // Get parameters from incoming data buffer
    const reqFields = converterukgs.convertSummaryReqToObject(datax);

    logger.debug(`Received getSummary request`, { reqkey, datax });

    // Call web service
    let result;
    let nextReqKey = reqkey;
    // const jsonData = reqFields;
    try {
        logger.error('Requesting token');
        const token = await getTokenUkg();
        result = await axiosInstance.get('/v1/timekeeping/timecard', {
            /* eslint-disable */
            params: {
                start_date: reqFields.startDater,
                end_date: reqFields.endDater,
                person_number: reqFields.employeer,
                select: 'DAILY_TOTAL_SUMMARY'
            },
            /* eslint-enable */

            headers: {
                Authorization: token,
                appkey: ukg.prd.appkey,
                'content-type': 'application/json',
                accept: 'application/json'
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

    // const responseData= result;
    // Send the result info
    // let responseData = sanitizeValues(result.data[0][1], safeValuesACH);
    // let responseData = result.data[0][1];
    let responseData = result.data;
    nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
    // logger.error('Call test1 failed');
    return ecc.sendObjectToCaller(responseData, converterukgs.convertObjectToSummaryRes, nextReqKey);
    logger.error(nextReqKey);
};
export const getTotals: ECCHandlerFunction = async function (reqkey, datax, ecc) {
    // Get parameters from incoming data buffer
    const reqFields = converterukgt.convertTotalsReqToObject(datax);

    logger.debug(`Received getTotals request`, { reqkey, datax });

    // Call web service
    let result;
    let nextReqKey = reqkey;
    // const jsonData = reqFields;
    try {
        logger.error('Requesting token');
        const token = await getTokenUkg();
        result = await axiosInstance.get('/v1/timekeeping/timecard', {
            /* eslint-disable */
            params: {
                start_date: reqFields.startDater,
                end_date: reqFields.endDater,
                person_number: reqFields.employeer,
                select: 'TOTALS'
            },
            /* eslint-enable */

            headers: {
                Authorization: token,
                appkey: ukg.prd.appkey,
                'content-type': 'application/json',
                accept: 'application/json'
            }
        });
        result.data.totals = result.data.totals.map((total: any) => {
            total.aggTotals = total.aggregatedTotals;
            return total;
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

    // const responseData= result;
    // Send the result info
    // let responseData = sanitizeValues(result.data[0][1], safeValuesACH);
    // let responseData = result.data[0][1];
    // let responseData = sanitizeValues(result.data, safeValues);
    nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
    // logger.error('Call test1 failed');
    return ecc.sendObjectToCaller(result.data, converterukgt.convertObjectToTotalsRes, nextReqKey);
    logger.error(nextReqKey);
};
export const putHours: ECCHandlerFunction = async function (reqkey, datax, ecc) {
    // Get parameters from incoming data buffer
    const reqFields = converterukgh.convertFormatNameToObject(datax);

    logger.debug(`Received putHours request`, { reqkey, datax });

    // Call web service
    let result;
    let response;
    let nextReqKey = reqkey;
    const jsonData = JSON.stringify(reqFields);
    try {
        logger.error('Requesting token');
        const token = await getTokenUkg();
        result = await axiosInstance.post('/v1/timekeeping/timecard', reqFields, {
            headers: {
                Authorization: token,
                appkey: ukg.prd.appkey,
                'content-type': 'application/json',
                accept: 'application/json'
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

    // const responseData= result;
    // Send the result info
    // let responseData = sanitizeValues(result.data[0][1], safeValuesACH);
    // let responseData = result.data[0][1];
    // let responseData = sanitizeValues(result.data, safeValues);
    nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
    return response;
    // logger.error('Call test1 failed');
    logger.error(nextReqKey);
};

export const getPers: ECCHandlerFunction = async function (reqkey, datax, ecc) {
    // Get parameters from incoming data buffer
    const reqFields = converterukgpers.convertpersonReqToObject(datax);

    logger.debug(`Received getPerson request`, { reqkey, datax });

    // Call web service
    let result;
    let nextReqKey = reqkey;
    // const jsonData = reqFields;
    try {
        logger.error('Requesting token');
        const token = await getTokenUkg();
        result = await axiosInstance.get('/v1/commons/persons/employee', {
            /* eslint-disable */
            params: {
                person_number: reqFields.employeenumber
            },
            /* eslint-enable */

            headers: {
                Authorization: token,
                appkey: ukg.prd.appkey,
                'content-type': 'application/json',
                accept: 'application/json'
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

    // const responseData= result;
    // Send the result info
    // let responseData = sanitizeValues(result.data[0][1], safeValuesACH);
    // let responseData = result.data[0][1];
    let responseData = result.data;
    nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
    // logger.error('Call test1 failed');
    return ecc.sendObjectToCaller(responseData, converterukgpers.convertObjectTopersonResp, nextReqKey);
    logger.error(nextReqKey);
};
export const putHos: ECCHandlerFunction = async function (reqkey, datax, ecc) {
    // Get parameters from incoming data buffer
    const reqFields = converterukghos.convertputhosReqToObject(datax);

    logger.debug(`Received putHos request`, { reqkey, datax });

    // Call web service
    let result;
    let response;
    let nextReqKey = reqkey;
    const jsonData = JSON.stringify(reqFields);
    try {
        logger.error('Requesting token');
        const token = await getTokenUkg();
        result = await axiosInstance.post('/v1/timekeeping/timecard', reqFields, {
            headers: {
                Authorization: token,
                appkey: ukg.prd.appkey,
                'content-type': 'application/json',
                accept: 'application/json'
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

    // const responseData= result;
    // Send the result info
    // let responseData = sanitizeValues(result.data[0][1], safeValuesACH);
    // let responseData = result.data[0][1];
    // let responseData = sanitizeValues(result.data, safeValues);
    nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
    return response;
    logger.error('Call puthos Success');
    logger.error(nextReqKey);
};
export const delSignoff: ECCHandlerFunction = async function (reqkey, datax, ecc) {
    // Get parameters from incoming data buffer
    const reqFields = converterukgdelof.convertDelSOReqToObject(datax);

    logger.debug(`Received deleteSignoff request`, { reqkey, datax });

    // Call web service
    let result;
    let response;
    let nextReqKey = reqkey;
    let startdate = reqFields.start_date.toISOString().substring(0, 10);
    let enddate = reqFields.end_date.toISOString().substring(0, 10);
    // const jsonData = JSON.stringify(reqFields.id);
    try {
        logger.error('Requesting token');
        const token = await getTokenUkg();
        result = await axiosInstance.delete('/v1/timekeeping/timecard_signoffs', {
            /* eslint-disable */
            params: {
                start_date: startdate,
                end_date: enddate
            },
            /* eslint-enable */
            headers: {
                Authorization: token,
                appkey: ukg.prd.appkey,
                'content-type': 'application/json',
                accept: 'application/json'
            },
            data: {
                id: reqFields.id
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

    // const responseData= result;
    // Send the result info
    // let responseData = sanitizeValues(result.data[0][1], safeValuesACH);
    // let responseData = result.data[0][1];
    // let responseData = sanitizeValues(result.data, safeValues);
    response = result.status;
    nextReqKey = await ecc.sendEccResult('ECC0000', response.toString(), nextReqKey);
    logger.error('Call puthos Success');
    logger.error(nextReqKey);
    return response;
};
export const postPunch: ECCHandlerFunction = async function (reqkey, datax, ecc) {
    // Get parameters from incoming data buffer
    const reqFields = converterukgdrvr.convertPunchReqDSToObject(datax);

    logger.debug(`Received punchDrvr request`, { reqkey, datax });

    // Call web service
    let result;
    let response;
    let nextReqKey = reqkey;
    const jsonData = JSON.stringify(reqFields);
    try {
        logger.error('Requesting token');
        const token = await getTokenUkg();
        result = await axiosInstance.post('/v1/timekeeping/timecard', reqFields, {
            headers: {
                Authorization: token,
                appkey: ukg.prd.appkey,
                'content-type': 'application/json',
                accept: 'application/json'
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

    // const responseData= result;
    // Send the result info
    // let responseData = sanitizeValues(result.data[0][1], safeValuesACH);
    // let responseData = result.data[0][1];
    // let responseData = sanitizeValues(result.data, safeValues);
    nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
    logger.error('Call punchDrvr Success');
    logger.error(nextReqKey);
    return response;
};
export const postPunchImport: ECCHandlerFunction = async function (reqkey, datax, ecc) {
    // Get parameters from incoming data buffer
    const reqFields = converterukgpchim.convertPunchReq2ToObject(datax);

    logger.debug(`Received punches import request`, { reqkey, datax });

    // Call web service
    let result;
    let response;
    let nextReqKey = reqkey;
    const jsonData = JSON.stringify(reqFields);
    try {
        logger.error('Requesting token');
        const token = await getTokenUkg();
        result = await axiosInstance.post('/v1/timekeeping/punches/import', reqFields, {
            headers: {
                Authorization: token,
                appkey: ukg.prd.appkey,
                'content-type': 'application/json',
                accept: 'application/json',
                'device-id': 'PlatformScience'
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

    // const responseData= result;
    // Send the result info
    // let responseData = sanitizeValues(result.data[0][1], safeValuesACH);
    // let responseData = result.data[0][1];
    // let responseData = sanitizeValues(result.data, safeValues);
    nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
    logger.error('Call punch import Succeeded-' + nextReqKey);
    return response;
};
export const getData: ECCHandlerFunction = async function (reqkey, datax, ecc) {
    // Get parameters from incoming data buffer
    const reqFields = converterdata.convertDataReqToObject(datax);

    logger.debug(`Received getHours request`, { reqkey, datax });

    // Call web service
    let result;
    let nextReqKey = reqkey;
    // const jsonData = reqFields;
    try {
        logger.error('Requesting token');
        const token = await getTokenUkg();
        result = await axiosInstance.get('/v1/commons/data/multi_read', {
            headers: {
                Authorization: token,
                appkey: ukg.prd.appkey,
                'content-type': 'application/json',
                accept: 'application/json'
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

    // const responseData= result;
    // Send the result info
    // let responseData = sanitizeValues(result.data[0][1], safeValuesACH);
    // let responseData = result.data[0][1];
    let responseData = result.data;
    nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
    // logger.error('Call test1 failed');
    return ecc.sendObjectToCaller(responseData, converterukgp.convertObjectToPunchRes, nextReqKey);
    logger.error(nextReqKey);
};

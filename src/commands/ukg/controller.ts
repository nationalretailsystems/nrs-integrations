import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
import axios from 'axios';
import config from 'config';
import createLogger from 'src/services/logger';
import * as converterukgs from 'src/interfaces/ukgdlysumm';
import * as converterukgp from 'src/interfaces/ukgpunches';
import * as converterukgt from 'src/interfaces/ukgtotals';
import { getTokenUkg } from 'src/services/get-token';
import { sanitizeValues } from 'src/services/safe-values';

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
                },
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
                    timeItemType: {

                    },
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
                start_date: reqFields.date,
                end_date: reqFields.date,
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

import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
import axios from 'axios';
import config from 'config';
import { DateTime } from 'luxon';
import createLogger from 'src/services/logger';
import * as converter from 'src/interfaces/rmgetstmi';
// Ximport { promises as fs } from 'fs';

const logger = createLogger('commands/randmcnally');
const { randmcnally } = config;
const axiosInstance = axios.create(randmcnally.axios);

const safeValues: any = {
    country: '',
    deviceSN: '',
    distance: 0,
    dotNumber: '',
    driverLoginId: '',
    entryOdometerReading: 0,
    exitOdometerReading: 0,
    fuelType: '',
    fuelUsed: 0,
    index: 0,
    logDate: '01-01-0001 00:00:00',
    manualMiles: 0,
    oaNumber: '',
    offSet: '',
    state: '',
    stateInAddress: '',
    stateInLatitude: 0,
    stateInLongitude: 0,
    stateInTime: '01-01-0001 00:00:00',
    stateOutAddress: '',
    stateOutLatitude: 0,
    stateOutLongitude: 0,
    stateOutTime: '01-01-0001 00:00:00',
    tractorNumber: '',
    vin: ''


};

export const getStateMiles: ECCHandlerFunction = async (reqkey, data, ecc) => {
    logger.debug(`Received getStateMiles request`, { reqkey, data });
    // Get parameters from incomming data buffer
    const rpgFields = converter.convertReqStMilesToObject(data);

    const reqFields = {
        ...rpgFields,
        logDate: DateTime.local().minus({ months: 2 }).toFormat('MM-dd-yyyy') + ' 00:00:00',
        // Add api key, above line was minus days :1
        accessToken: randmcnally.accesstoken,
        companyCode: randmcnally.companyCode
    };
    // X const jsonData = JSON.stringify(reqFields);
    const jsonData = reqFields;
    // Call web service
    let result;
    let nextReqKey = reqkey;

    try {
        result = await axiosInstance.post('/getStateMileage', jsonData);
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
        const responseData = result.data;
        const mileResponse = result.data.stateMileage;
        for (let rec of mileResponse) {
            for (let key in rec) {
                rec[key] = rec[key] || safeValues[key];
            }
        }        
        logger.debug('ECC0000', 'Success', nextReqKey);
        nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
        nextReqKey = await ecc.sendObjectToCaller(responseData, converter.convertObjectToRtnRespons, nextReqKey);
        nextReqKey = await ecc.sendObjectsToCaller(mileResponse, converter.convertObjectToRtnStMiles, nextReqKey);
        logger.debug('Sent data to RPG');
        return nextReqKey;
    } catch (err) {
        logger.error('Call failed', err);
        return ecc.sendEccResult('ECC9300', err.message, nextReqKey);
    }
};

import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
import axios from 'axios';
import config from 'config';
import { DateTime } from 'luxon';
import createLogger from 'src/services/logger';
import * as converter from 'src/interfaces/rmgetstmi';
import * as convertdvir from 'src/interfaces/rmgetdvir';
import { promises as fs } from 'fs';
// X import { xor } from 'lodash';

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
    entryOdemeterReading: 0,
    exitOdemeterReading: 0,
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
    vin: '',
    driverComment: '',
    dvirIsDefective: '',
    mechanicSignature: '',
    driverSignature: '',
    totalTractorDefects: 0,
    totalTrailerDefects: 0,
    trailerNumber: '',
    location: '',
    odometer: 0
};

export const getStateMiles: ECCHandlerFunction = async (reqkey, data, ecc) => {
    logger.debug(`Received getStateMiles request`, { reqkey, data });
    // Get parameters from incomming data buffer
    const rpgFields = converter.convertReqStMilesToObject(data);

    // X const x = new Date(rpgFields.logDate);
    const reqFields = {
        ...rpgFields,
        logDate: DateTime.fromJSDate(rpgFields.logDate).toFormat('MM-dd-yyyy 00:00:00'),
        // X logDate: x.getMonth()+1 + '-' + x.getDate() + '-' + x.getFullYear() + ' 00:00:00',
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
        result = await axiosInstance.post('/v3/getStateMileage', jsonData);
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
        try {
            await fs.writeFile('/eradani/tests/rmstatemiles.json', JSON.stringify(mileResponse), 'utf-8');
        } catch (err) {
            return ecc.sendEccResult('ECC9200', err.message, nextReqKey);
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

export const getDVIR: ECCHandlerFunction = async (reqkey, data, ecc) => {
    logger.debug(`Received getDVIR request`, { reqkey, data });
    // Get parameters from incomming data buffer
    const rpgFields = convertdvir.convertReqDVIRToObject(data);

    const reqFields = {
        ...rpgFields,

        lastModifiedDate: rpgFields.lastModifiedDate.toDateString,
        // Add api key
        accessToken: randmcnally.accesstoken,
        companyCode: randmcnally.companyCode
    };
    // X const jsonData = JSON.stringify(reqFields);
    const jsonData = reqFields;
    // Call web service
    let result;
    let nextReqKey = reqkey;

    try {
        result = await axiosInstance.post('/v1/getDVIR', jsonData);
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
        const dvirResponse = result.data.dvirs;
        for (let i: number = 0; i < dvirResponse.length; ++i ) {
            dvirResponse[i].lastModifiedDate = DateTime.fromFormat(dvirResponse[i].lastModifiedDate, 'MM-dd-yyyy HH:mm:ss').toISO();
        // Fill 3 arrays with blanks for all entries that are not recieved
            for (let j: number = dvirResponse[i].totalTractorDefects; j < 25; ++ j) {
                dvirResponse[i].tractorDefects[j]='';
            }
            for (let j: number = dvirResponse[i].totalTrailerDefects; j < 25; ++ j) {
                dvirResponse[i].trailerDefects[j]='';
            } 
            for (let j: number = dvirResponse[i].defectImages.length; j < 10; ++ j) {
                dvirResponse[i].defectImages[j]='';
            }                       
        }

        for (let rec of dvirResponse) {
            for (let key in rec) {
                rec[key] = rec[key] || safeValues[key];
            }
        }
        logger.debug('ECC0000', 'Success', nextReqKey);
        nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
        nextReqKey = await ecc.sendObjectToCaller(responseData, convertdvir.convertObjectToRtnDVIRRes, nextReqKey);
        nextReqKey = await ecc.sendObjectsToCaller(dvirResponse, convertdvir.convertObjectToRtnDVIR, nextReqKey);
        logger.debug('Sent data to RPG');
        return nextReqKey;
    } catch (err) {
        logger.error('Call failed', err);
        return ecc.sendEccResult('ECC9300', err.message, nextReqKey);
    }
};

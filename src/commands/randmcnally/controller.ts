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

export const getStateMiles: ECCHandlerFunction = async (reqkey, data, ecc) => {
    logger.debug(`Received getStateMiles request`, { reqkey, data });
    // Get parameters from incomming data buffer
    const rpgFields = converter.convertReqStMilesToObject(data);

    const reqFields = {
        ...rpgFields,
        logDate: DateTime.local().minus({days:1}).toFormat("MM-dd-yyyy") + ' 00:00:00',    
        // Add api key
        accessToken: randmcnally.accesstoken,
        companyCode: randmcnally.companyCode
    };
    const jsonData = JSON.stringify(reqFields);
    // Call web service
    let result;
    let nextReqKey = reqkey;

    try {
        result = await axiosInstance.post('/getStateMileage',  jsonData );
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

    // Xtry {
    // X   await fs.writeFile(reqFields.filename, result.data, 'utf-8');
    // X} catch (err) {
    // X   return ecc.sendEccResult('ECC9200', err.message, nextReqKey);
    // X}

    // Send the result info
    const responseData = result.data.Results[0];
    return ecc.sendObjectToCaller(responseData, converter.convertObjectToRtnStMiles, nextReqKey);
    // Xreturn ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
};

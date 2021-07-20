import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
import axios from 'axios';
import config from 'config';
import createLogger from 'src/services/logger';
import * as converter from 'src/interfaces/rmgetstmi';
// Ximport { promises as fs } from 'fs';

const logger = createLogger('commands/randmcnally');
const { randmcnally } = config;
const axiosInstance = axios.create(randmcnally.axios);

export const getStateMiles: ECCHandlerFunction = async (reqkey, data, ecc) => {
    logger.debug(`Received getStateMiles request`, { reqkey, data });
    // Get parameters from incomming data buffer
    const reqFields = converter.convertReqStMilesToObject(data);
    let todaysDate = new Date();
    todaysDate.setDate(todaysDate.getDate() - 1);
    let reqDate = timestamp(todaysDate);
    // Call web service
    let result;
    let nextReqKey = reqkey;

    try {
        result = await axiosInstance.get('/getStateMileage', {
            params: {
                logdate: reqDate,
                accesstoken: randmcnally.accesstoken,
                companyCode: randmcnally.companyCode,
                reqFields
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
function timestamp(d: any) {
    function pad(n: any) {
        return n < 10 ? '0' + n : n;
    }
    let dash = '-';
    let newdate = d.getFullYear() + dash + pad(d.getMonth() + 1) + dash + pad(d.getDate());
    let returns1 = newdate;
    return [returns1];
}

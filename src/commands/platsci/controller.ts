import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
import axios from 'axios';
import config from 'config';
import createLogger from 'src/services/logger';
import * as converter from 'src/interfaces/psdvir';
import { promises as fs } from 'fs';

const logger = createLogger('commands/platsci');
const { platsci } = config;
const axiosInstance = axios.create(platsci.axios);
const axiosInstance400 = axios.create(platsci.axios400);

export const getDVIRPdf: ECCHandlerFunction = async (reqkey, data, ecc) => {
    logger.debug(`Received getDVIRPdf request`, { reqkey, data });
    // Get parameters from incoming data buffer
    const reqFields = converter.convertDVIRReqToObject(data);

    // Call web service
    let result;
    let nextReqKey = reqkey;
    try {
        result = await axiosInstance.get('/' + reqFields.dvirreport, {});
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

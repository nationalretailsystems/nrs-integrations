import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
import axios from 'axios';
import config from 'config';
import { promises as fs } from 'fs';
import createLogger from 'src/services/logger';
const logger = createLogger('commands/zpl');
const { zpl } = config;
import * as converter from 'src/interfaces/zplapi';

const axiosInstance = axios.create(zpl.axios);

export const postZpl: ECCHandlerFunction = async (reqkey, data, ecc) => {
    logger.debug(`Received zpl request`, { reqkey, data });
    // Get parameters from incomming data buffer
    const rpgFields = converter.convertZplReqToObject(data);
    const reqFields = {
        ...rpgFields
    };

    // Call web service
    let result;
    let nextReqKey = reqkey;
    try {
        result = await axiosInstance.post('/8dpmm/labels/4x6/0', {
            params: reqFields.zpl
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
        await fs.writeFile('/eradani/tests/' + reqFields.filename, 'utf-8');
    } catch (err) {
        return ecc.sendEccResult('ECC9200', err.message, nextReqKey);
    }
    // Send the result info
    logger.debug(result);
    nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
    return;
};

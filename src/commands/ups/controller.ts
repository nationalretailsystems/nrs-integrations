import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
import axios from 'axios';
import config from 'config';
import createLogger from 'src/services/logger';
import * as converterUPS from 'src/interfaces/upsval';

const logger = createLogger('commands/ups');
const { ups } = config;
const axiosInstance = axios.create(ups.axios);

    
/* eslint-enable */

export const validateAddress: ECCHandlerFunction = async function (reqkey, datax, ecc) {
    // Get parameters from incoming data buffer
    const reqFields = converterUPS.convertReqFmtToObject(datax);

    logger.debug(`Received validate address request`, { reqkey, datax });

    // Call web service
    let result;
    let response;
    let nextReqKey = reqkey;
    const headers = {
        Username: ups.username,
        Password: ups.password,
        AccessLicenseNumber: ups.accesslicensenumber,
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
    const jsonData = JSON.stringify(reqFields);
    try {
        result = await axiosInstance.post('/addressvalidation/v1/3', jsonData, {
             headers: headers,
             params: {
                 regionalrequestindicator: false,
                 maximumcadidatelistsize: 5
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
    let candidate = result.data.XAVResponse.Candidate;
    result.data.XAVResponse.Candidate = Array.isArray(candidate) ? candidate : [candidate];

    result.data.XAVResponse.Candidate = result.data.XAVResponse.Candidate.map((candidate: any) => {
        // For each Candidate in the array
        // Store the addressLine in a variable to shorten our lines of code as we did earlier
        let addressLine = candidate.AddressKeyFormat?.AddressLine;

        // Wrap the AddressLine in an array if it isn't already an array
        candidate.AddressKeyFormat.AddressLine = Array.isArray(addressLine) ? addressLine : [addressLine];

        // Return the updated Candidate so it will be used in place of the original Candidate in the main array when we're done
        // return candidate;
     });

    let responseData = result.data;
    nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
    return ecc.sendObjectToCaller(responseData, converterUPS.convertObjectToRespFmt, nextReqKey);
    // logger.error('Call test1 failed');
    logger.error(nextReqKey);
};

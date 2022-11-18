import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
import axios from 'axios';
import config from 'config';
import createLogger from 'src/services/logger';
import * as converterp44post from 'src/interfaces/p44stsupd';


const logger = createLogger('commands/project44');
const { project44 } = config;
const axiosInstance = axios.create(project44.axios);

export const postP44: ECCHandlerFunction = async function (reqkey, datax, ecc) {
    // Get parameters from incomming data buffer
    const reqFields = converterp44post.convertP44SndRptToObject(datax);

    logger.debug(`Received postP44data request`, { reqkey, datax });

    // Call web service
    let result;
    let nextReqKey = reqkey;
    const authkey = Buffer.from(project44.username + ':' + project44.password).toString('base64');
    const shipmentIdentifiers = [];
    for (let si=0; si<reqFields.shipmentIdentifiers.length; si++) {
        if (reqFields.shipmentIdentifiers[si].type && reqFields.shipmentIdentifiers[si].value) {
            shipmentIdentifiers.push(reqFields.shipmentIdentifiers[si]);
        }
    }
    reqFields.shipmentIdentifiers = shipmentIdentifiers;

      try {
        result = await axiosInstance.post('/shipments/statusUpdates', reqFields, {
            
            headers: {
                Authorization: 'Basic ' + authkey
            }
        })

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
        // let responseData = result.data;
        let returnStatus = result.status.toString();
        logger.debug('ECC0000', 'Success', nextReqKey);
        nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
        return ecc.sendFieldToCaller(returnStatus,nextReqKey);
        //  return ecc.sendObjectToCaller(responseData, converterp44post.convertObjectToP44RcvRpt, nextReqKey);
        logger.debug('Sent data to RPG'); 

};


import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
import axios from 'axios';
import config from 'config';
import createLogger from 'src/services/logger';
import bulk from '@eradani-inc/ec-bulk';
import _ from 'lodash';
import { XMLParser, XMLBuilder, XMLValidator } from 'fast-xml-parser';

let xml = null;
const logger = createLogger('commands/hyster');
const { hyster } = config;
const axiosInstance = axios.create(hyster.axios);
const parser = new XMLParser();

export const getLatestSessions: ECCHandlerFunction = async (reqkey, data, ecc) => {
    logger.debug(`Received getLatestSessions request`, { reqkey, data });
    // Get parameters from incoming data buffer
    // const reqFields = converter.convertRqAssetChgToObject(data);
    // let reqDate = reqFields.sincedate.toISOString().split('T')[0];
    // Call web service
    let result;
    let nextReqKey = reqkey;
    let startDate = '10-AUG-2023 00:00:00';
    let endDate = '10-AUG-2023 23:59:59';
    let dataParm =
        '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">' +
        '<Body>' +
        '<GetLatestSessions xmlns="http://www.nmhg.com">' +
        '<username>' +
        config.hyster.username +
        '<password>' +
        config.hyster.password +
        '<startDateEq>' +
        startDate +
        '</startDateEq>' +
        '<endDateEq>' +
        endDate +
        '</endDateEq>' +
        '<cultureCode>en-US</cultureCode>' +
        '</GetLatestSessions>' +
        '</Body>' +
        '</Envelope>';
    try {
        result = await axiosInstance.post('', {
            headers: {
                'Content-Type': 'text/xml',
                SOAPAction: '"http://www.nmhg.com/INTPWebService/GetLatestSessions"'
            },
            data: dataParm
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
        let jObj = parser.parse(result.data);
        logger.debug('ECC0000', 'Success', nextReqKey);
        nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
        // nextReqKey = await ecc.sendObjectsToCaller(responseData, converter.convertObjectToAssetChgDS, nextReqKey);
        logger.debug('Sent data to RPG');
        return nextReqKey;
    } catch (err) {
        logger.error('Call failed', err);
        return ecc.sendEccResult('ECC9300', err.message, nextReqKey);
    }
};

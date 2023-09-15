import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
import axios from 'axios';
import config from 'config';
import createLogger from 'src/services/logger';
import bulk from '@eradani-inc/ec-bulk';
import _ from 'lodash';
import { XMLParser, XMLBuilder, XMLValidator } from 'fast-xml-parser';
import * as converter from 'src/interfaces/hygetchg';
import  { insertHysterRecord } from 'src/models/hyster';
import transport from 'src/services/connection';
import { DateTime } from 'luxon';

let xml = null;
const logger = createLogger('commands/hyster');
const { hyster } = config;
const axiosInstance = axios.create(hyster.axios);
const parser = new XMLParser();

export const getLatestSessions: ECCHandlerFunction = async (reqkey, data, ecc) => {
    logger.debug(`Received getLatestSessions request`, { reqkey, data });
    // Get parameters from incoming data buffer
    const reqFields = converter.convertHyRequestToObject(data);
    // let reqDate = reqFields.sincedate.toISOString().split('T')[0];
    // Call web service
    let result;
    let record;
    let nextReqKey = reqkey;
    let dataParm =
        '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">' +
        '<Body>' +
        '<GetLatestSessions xmlns="http://www.nmhg.com">' +
        '<username>' +
        config.hyster.username +
        '</username>' +
        '<password>' +
        config.hyster.password +
        '</password>' +
        '<startDateEq>' +
        reqFields.reqDate + ' 00:00:00' +
        '</startDateEq>' +
        '<endDateEq>' +
        reqFields.reqDate + ' 23:59:59' +
        '</endDateEq>' +
        '<cultureCode>en-US</cultureCode>' +
        '</GetLatestSessions>' +
        '</Body>' +
        '</Envelope>';
    const headers = {
        'Content-Type': 'text/xml',
        'SOAPAction': '"http://www.nmhg.com/INTPWebService/GetLatestSessions"'
    }

    try {
        result = await axiosInstance.post('/NTPWebService.svc', dataParm, {
            headers: headers
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

    // try {
        let jObj = parser.parse(result.data);
        let sessionEvents =
            jObj['s:Envelope']['s:Body']['GetLatestSessionsResponse']['GetLatestSessionsResult']['a:SessionEvent'];
     for (let i: number = 0; i < sessionEvents.length; ++i) {
        const record = { 
            SessionID: sessionEvents[i]["a:SessionID"].toString(),
            EquipmentAssetID: sessionEvents[i]["a:EquipmentAssetID"],
            StartDateTimeEq: sessionEvents[i]["a:StartDateTimeEq"],
            EndDateTimeEq: sessionEvents[i]["a:EndDateTimeEq"],
            StartMainServiceMeter: sessionEvents[i]["a:StartMainServiceMeter"].toString(),
            EndMainServiceMeter: sessionEvents[i]["a:EndMainServiceMeter"].toString(),
            UpdateFlag: " ", 
            UpdateStamp: DateTime.now().toFormat("yyyy-MM-dd'-'HH.mm.ss.SSS'000000'"),
            StatusCode: " ",
            Msg: " "
        };
        transport
        .execute(insertHysterRecord,record)
        .catch((err) => logger.error('Failed to Insert Hyster log Record', { record, err }));
     }
        logger.debug('ECC0000', 'Success', nextReqKey);
        nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
        logger.debug('Sent data to RPG');
        return nextReqKey;
    // } catch (err {
    //     logger.error('Call failed', err);
    //     return ecc.sendEccResult('ECC9300', err.message, nextReqKey);
    // }
};

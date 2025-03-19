import { ECCHandlerFunction } from '@eradani-inc/ecc-router/types';
import axios from 'axios';
import config from 'config';
import createLogger from 'src/services/logger';
import * as converter from 'src/interfaces/lytxveh1';
import * as converter2 from 'src/interfaces/lytxass1';
import * as converterdrv from 'src/interfaces/lytxdrv';
import * as convertdrv2 from 'src/interfaces/lytxdrvs';
import { getTokenDC } from 'src/services/get-token';
import { promises as fs } from 'fs';
import { dataTypes } from '@eradani-inc/eradani-connect';
import { parseForESLint } from '@typescript-eslint/parser';
import { XMLParser, XMLBuilder, XMLValidator } from 'fast-xml-parser';
import { UserProfileSummaries } from 'aws-sdk/clients/datazone';

const logger = createLogger('commands/lytx');
const { lytx } = config;
const { drivecam } = config;
const axiosInstance = axios.create(lytx.axios);
const axiosInstance2 = axios.create(drivecam.axios);

export const getVehicles: ECCHandlerFunction = async (reqkey, data, ecc) => {
    logger.debug(`Received Lytx Get Vehicles request`, { reqkey, data });
    // Get parameters from incoming data buffer
    const reqFields = converter.convertVehReqToObject(data);

    // Call web service
    let result;
    let nextReqKey = reqkey;
    try {
        result = await axiosInstance.get('/vehicles/all', {
            headers: {
                'x-apikey': lytx.xapikey,
                'Accept': 'application/json'
            },
            params: {
                name: reqFields.vehicle
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
    // Send the result info
    let responseData = result.data;
    logger.debug('ECC0000', 'Success', nextReqKey);
    nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
    return ecc.sendObjectToCaller(responseData, converter.convertObjectToVehRes, nextReqKey);
    logger.debug('Sent data to RPG');
};
export const assignVehicle: ECCHandlerFunction = async (reqkey, data, ecc) => {
    logger.debug(`Received Lytx Assign Vehicle request`, { reqkey, data });
    // Get parameters from incoming data buffer
    const reqFields = converter2.convertAssignReqToObject(data);

    // Call web service
    let result;
    let nextReqKey = reqkey;
    try {
        result = await axiosInstance.patch('/vehicles/all', {
            headers: {
                'x-apikey': lytx.xapikey,
                'Accept': 'application/json'
            },
            params: {
                name: reqFields.vehicleId
            },
            body: {
                driverId: reqFields.driverId
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
    // Send the result info
    let responseData = result.data;
    logger.debug('ECC0000', 'Success', nextReqKey);
    nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
    return ecc.sendObjectToCaller(responseData, converter2.convertObjectToAssignRes, nextReqKey);
    logger.debug('Sent data to RPG');
};

const parser = new XMLParser();

export const getDrivers: ECCHandlerFunction = async (reqkey, data, ecc) => {
    logger.debug(`Received Lytx Get Driver request`, { reqkey, data });
    // Get parameters from incoming data buffer
    const reqFields = converterdrv.convertDrvReqToObject(data);

    // Call web service
    let result;
    let nextReqKey = reqkey;
    try {
        logger.error('Requesting drivecam token');
        const token = await getTokenDC();
        let dataParm =
        '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:mes="http://drivecam.com/Services/MessagesAPI"> ' +
        '<soapenv:Header/> ' +
        '<soapenv:Body> ' +
        '<tem:GetUsers> ' +
        '<tem:request> ' +
        '<mes:SessionId>' + token + '</mes:SessionId> ' +
        '<mes:GroupId>2a4f38e3-0f48-e511-8857-02215e5eed57</mes:GroupId> ' +
        '<mes:IncludeSubGroups>true</mes:IncludeSubGroups> ' +
        '</tem:request> ' +
        '</tem:GetUsers>' +
        '</soapenv:Body> ' +
        '</soapenv:Envelope>';
        result = await axiosInstance2.post('/HSServicesAPI/UserService/V1/UserService.svc', dataParm , {
            headers: {
                'Content-Type': 'text/xml; charset=utf-8',
                'SoapAction': 'http://tempuri.org/IUserService/GetUsers'
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
    // Send the result info
    let responseData;
    let userid;
    let username;
    let jObj = parser.parse(result.data);
    let userSummaries = 
        jObj['s:Envelope']['s:Body']['GetUsersResponse']['GetUsersResult']['a:Users']['a:UserSummary'];
    for (let i: number = 0; i < userSummaries.length; ++i) {
        userid = userSummaries[i]['a:UserId'];
        username = userSummaries[i]['a:EmployeeNum'];
        if (username === reqFields.driver) {
            logger.error(username + '-' + userid);
        }
    }

    // let responseData = result.data;
    logger.debug('ECC0000', 'Success', nextReqKey);
    nextReqKey = await ecc.sendEccResult('ECC0000', 'Success', nextReqKey);
    let resultData = {driverid: userid};
    return ecc.sendObjectToCaller(resultData, convertdrv2.convertObjectToDrvsRes, nextReqKey);
    logger.debug('Sent data to RPG');
};

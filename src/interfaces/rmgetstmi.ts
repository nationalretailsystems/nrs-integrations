/* eslint-disable */
// @ts-nocheck
// Module: rmgetstmi
// Generated source -- do not modify

import { ibmiConversions } from '@eradani-inc/ec-client';
const { fromIbmiDate, fromIbmiTime, fromIbmiTimestamp, toIbmiDate, toIbmiTime, toIbmiTimestamp } = ibmiConversions;

import eradaniConnect from '@eradani-inc/eradani-connect';
const { dataTypes } = eradaniConnect;

/**
 * Data structure
 */
let responseDSFields: any = [
    {
        name: 'code',
        type: new dataTypes.Integer(5)
    },
    {
        name: 'type',
        type: new dataTypes.Char(10)
    },
    {
        name: 'message',
        type: new dataTypes.Char(200)
    }
];

/**
 * Input interface
 */
export interface responseDSInput {
    /**
     * @size 5 digits
     */
    code: number | string;
    /**
     * @size 10 characters
     */
    type: string;
    /**
     * @size 200 characters
     */
    message: string;
}

/**
 * Output interface
 */
export interface responseDS {
    /**
     * @size 5 digits
     */
    code: number;
    /**
     * @size 10 characters
     */
    type: string;
    /**
     * @size 200 characters
     */
    message: string;
}

/**
 * Output interface
 */
export interface ReqStMiles {
    /**
     * @size 100 characters
     */
    accessToken: string;
    /**
     * @size 10 characters
     */
    companyCode: string;
    /**
     */
    logDate: Date;
    /**
     * @size 10 digits
     */
    startIndex: number;
    /**
     * @size 10 digits
     */
    size: number;
}

/**
 * Convert ReqStMiles record to TypeScript object
 */
export function convertReqStMilesToObject(dataIn: string): ReqStMiles {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.accessToken = dataIn.substring(pos, pos + 100).trimEnd();
    pos += 100;
    dataOut.companyCode = dataIn.substring(pos, pos + 10).trimEnd();
    pos += 10;
    dataOut.logDate = fromIbmiDate(dataIn.substring(pos, pos + 10).trimEnd());
    pos += 10;
    dataOut.startIndex = Number(dataIn.substring(pos, pos + 11).trimEnd());
    pos += 11;
    dataOut.size = Number(dataIn.substring(pos, pos + 11).trimEnd());
    pos += 11;

    return dataOut;
}

/**
 * Input interface
 */
export interface RtnStMiles {
    /**
     * @size 10 digits
     */
    index: number;
    /**
     * @size 60 characters
     */
    driverLoginId: string;
    /**
     * @size 12 characters
     */
    tractorNumber: string;
    /**
     * @size 20 characters
     */
    deviceSN: string;
    /**
     * @size 15 digits
     * @precision 5 decimals
     */
    fuelUsed: number;
    /**
     * @size 20 characters
     */
    fuelType: string;
    /**
     * @size 15 digits
     * @precision 5 decimals
     */
    distance: number;
    /**
     * @size 15 digits
     * @precision 5 decimals
     */
    manualMiles: number;
    /**
     * @size 50 characters
     */
    state: string;
    /**
     * @size 15 digits
     * @precision 5 decimals
     */
    entryOdemeterReading: number;
    /**
     * @size 15 digits
     * @precision 5 decimals
     */
    exitOdemeterReading: number;
    /**
     * @size 50 characters
     */
    country: string;
    /**
     * @size 19 characters
     */
    stateInTime: string;
    /**
     * @size 19 characters
     */
    stateOutTime: string;
    /**
     * @size 19 characters
     */
    logDate: string;
    /**
     * @size 2 characters
     */
    offSet: string;
    /**
     * @size 100 characters
     */
    oaNumber: string;
    /**
     * @size 4 bytes
     */
    stateInLatitude: number;
    /**
     * @size 4 bytes
     */
    stateInLongitude: number;
    /**
     * @size 4 bytes
     */
    stateOutLatitude: number;
    /**
     * @size 4 bytes
     */
    stateOutLongitude: number;
    /**
     * @size 200 characters
     */
    stateInAddress: string;
    /**
     * @size 200 characters
     */
    stateOutAddress: string;
    /**
     * @size 30 characters
     */
    vin: string;
    /**
     * @size 50 characters
     */
    dotNumber: string;
}

/**
 * Convert JavaScript object to RtnStMiles record
 */
export function convertObjectToRtnStMiles(dataIn: RtnStMiles): string {
    let dataOut: string = '';

    dataOut += dataIn.index.toFixed().substring(0, 11).padEnd(11);
    dataOut += dataIn.driverLoginId.substring(0, 60).padEnd(60);
    dataOut += dataIn.tractorNumber.substring(0, 12).padEnd(12);
    dataOut += dataIn.deviceSN.substring(0, 20).padEnd(20);
    dataOut += dataIn.fuelUsed.toFixed(5).substring(0, 17).padEnd(17);
    dataOut += dataIn.fuelType.substring(0, 20).padEnd(20);
    dataOut += dataIn.distance.toFixed(5).substring(0, 17).padEnd(17);
    dataOut += dataIn.manualMiles.toFixed(5).substring(0, 17).padEnd(17);
    dataOut += dataIn.state.substring(0, 50).padEnd(50);
    dataOut += dataIn.entryOdemeterReading.toFixed(5).substring(0, 17).padEnd(17);
    dataOut += dataIn.exitOdemeterReading.toFixed(5).substring(0, 17).padEnd(17);
    dataOut += dataIn.country.substring(0, 50).padEnd(50);
    dataOut += dataIn.stateInTime.substring(0, 19).padEnd(19);
    dataOut += dataIn.stateOutTime.substring(0, 19).padEnd(19);
    dataOut += dataIn.logDate.substring(0, 19).padEnd(19);
    dataOut += dataIn.offSet.substring(0, 2).padEnd(2);
    dataOut += dataIn.oaNumber.substring(0, 100).padEnd(100);
    dataOut += dataIn.stateInLatitude.toExponential(7).substring(0, 14).padEnd(14);
    dataOut += dataIn.stateInLongitude.toExponential(7).substring(0, 14).padEnd(14);
    dataOut += dataIn.stateOutLatitude.toExponential(7).substring(0, 14).padEnd(14);
    dataOut += dataIn.stateOutLongitude.toExponential(7).substring(0, 14).padEnd(14);
    dataOut += dataIn.stateInAddress.substring(0, 200).padEnd(200);
    dataOut += dataIn.stateOutAddress.substring(0, 200).padEnd(200);
    dataOut += dataIn.vin.substring(0, 30).padEnd(30);
    dataOut += dataIn.dotNumber.substring(0, 50).padEnd(50);

    return dataOut;
}

/**
 * Input interface
 */
export interface RtnRespons {
    /**
     */
    response: responseDS;
    /**
     * @size 3 digits
     * @precision 0 decimals
     */
    isDST: number;
}

/**
 * Convert JavaScript object to RtnRespons record
 */
export function convertObjectToRtnRespons(dataIn: RtnRespons): string {
    let dataOut: string = '';

    dataOut += dataIn.response.code.toFixed().substring(0, 6).padEnd(6);
    dataOut += dataIn.response.type.substring(0, 10).padEnd(10);
    dataOut += dataIn.response.message.substring(0, 200).padEnd(200);
    dataOut += dataIn.isDST.toFixed(0).substring(0, 5).padEnd(5);

    return dataOut;
}

/* eslint-enable */

/* eslint-disable */
// @ts-nocheck
// Module: t4300mov
// Generated source -- do not modify

import { ibmiConversions, missingInput } from '@eradani-inc/ec-client';
const { fromIbmiDate, fromIbmiTime, fromIbmiTimestamp, toIbmiDate, toIbmiTime, toIbmiTimestamp } = ibmiConversions;

import eradaniConnect from '@eradani-inc/eradani-connect';
const { dataTypes } = eradaniConnect;

/**
 * Output interface
 */
export interface TapeMovReq {
    /**
     * @size 5 characters
     */
    SrcType: string;
    /**
     * @size 4 characters
     */
    SrcAddress: string;
    /**
     * @size 5 characters
     */
    DestType: string;
    /**
     * @size 4 characters
     */
    DestAddress: string;
}

/**
 * Convert TapeMovReq record to TypeScript object
 */
export function convertTapeMovReqToObject(dataIn: string): TapeMovReq {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.SrcType = dataIn.substring(pos, pos + 5).trimEnd();
    pos += 5;
    dataOut.SrcAddress = dataIn.substring(pos, pos + 4).trimEnd();
    pos += 4;
    dataOut.DestType = dataIn.substring(pos, pos + 5).trimEnd();
    pos += 5;
    dataOut.DestAddress = dataIn.substring(pos, pos + 4).trimEnd();
    pos += 4;

    return dataOut;
}

/**
 * Input interface
 */
export interface TapeMovRes {
    /**
     * @size 3 characters
     * @default ``
     */
    status: string;
    /**
     * @size 100 characters
     * @default ``
     */
    Code: string;
    /**
     * @size 100 characters
     * @default ``
     */
    Message: string;
}

/**
 * Convert JavaScript object to TapeMovRes record
 */
export function convertObjectToTapeMovRes(dataIn: TapeMovRes): string {
    let dataOut: string = '';

    dataOut += dataIn?.status?.substring(0, 3)?.padEnd(3) ?? ''.substring(0, 3).padEnd(3);
    dataOut += dataIn?.Code?.substring(0, 100)?.padEnd(100) ?? ''.substring(0, 100).padEnd(100);
    dataOut += dataIn?.Message?.substring(0, 100)?.padEnd(100) ?? ''.substring(0, 100).padEnd(100);

    return dataOut;
}

/* eslint-enable */

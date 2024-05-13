/* eslint-disable */
// @ts-nocheck
// Module: psdvir
// Generated source -- do not modify

import { ibmiConversions, missingInput } from '@eradani-inc/ec-client';
const { fromIbmiDate, fromIbmiTime, fromIbmiTimestamp, toIbmiDate, toIbmiTime, toIbmiTimestamp } = ibmiConversions;

/**
 * Output interface
 */
export interface DVIRReq {
    /**
     * @size 16 characters
     */
    dvirreport: string;
    /**
     * @size 100 characters
     */
    filename: string;
}

/**
 * Convert DVIRReq record to TypeScript object
 */
export function convertDVIRReqToObject(dataIn: string): DVIRReq {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.dvirreport = dataIn.substring(pos, pos + 16).trimEnd();
    pos += 16;
    dataOut.filename = dataIn.substring(pos, pos + 100).trimEnd();
    pos += 100;

    return dataOut;
}

/**
 * Input interface
 */
export interface DVIRRes {
    /**
     * @size 3 characters
     */
    return: string;
}

/**
 * Convert JavaScript object to DVIRRes record
 */
export function convertObjectToDVIRRes(dataIn: DVIRRes): string {
    let dataOut: string = '';

    dataOut += dataIn?.return?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.return`, 'char', dataIn?.return);

    return dataOut;
}

/* eslint-enable */

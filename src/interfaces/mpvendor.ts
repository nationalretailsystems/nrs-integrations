/* eslint-disable */
// @ts-nocheck
// Module: mpvendor
// Generated source -- do not modify

import { ibmiConversions, missingInput } from '@eradani-inc/ec-client';
const { fromIbmiDate, fromIbmiTime, fromIbmiTimestamp, toIbmiDate, toIbmiTime, toIbmiTimestamp } = ibmiConversions;

import eradaniConnect from '@eradani-inc/eradani-connect';
const { dataTypes } = eradaniConnect;

/**
 * Output interface
 */
export interface ReqVendr {
    /**
     * @size 10 digits
     */
    contactKey: number;
}

/**
 * Convert ReqVendr record to TypeScript object
 */
export function convertReqVendrToObject(dataIn: string): ReqVendr {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.contactKey = Number(dataIn.substring(pos, pos + 11).trimEnd());
    pos += 11;

    return dataOut;
}

/**
 * Input interface
 */
export interface ResVendr {
    /**
     * @size 100 characters
     */
    VendorName: string;
}

/**
 * Convert JavaScript object to ResVendr record
 */
export function convertObjectToResVendr(dataIn: ResVendr): string {
    let dataOut: string = '';

    dataOut +=
        dataIn?.VendorName?.substring(0, 100)?.padEnd(100) ??
        missingInput(`dataIn.VendorName`, 'char', dataIn?.VendorName);

    return dataOut;
}

/* eslint-enable */

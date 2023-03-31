/* eslint-disable */
// @ts-nocheck
// Module: trfcapi
// Generated source -- do not modify

import { ibmiConversions, missingInput } from '@eradani-inc/ec-client';
const { fromIbmiDate, fromIbmiTime, fromIbmiTimestamp, toIbmiDate, toIbmiTime, toIbmiTimestamp } = ibmiConversions;

/**
 * Output interface
 */
export interface Compare {
    /**
     * @size 10 characters
     */
    type: string;
}

/**
 * Convert Compare record to TypeScript object
 */
export function convertCompareToObject(dataIn: string): Compare {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.type = dataIn.substring(pos, pos + 10).trimEnd();
    pos += 10;

    return dataOut;
}

/**
 * Input interface
 */
export interface Traffic {
    /**
     * @size 2 digits
     * @precision 0 decimals
     */
    rank: number;
    /**
     * @size 30 characters
     */
    streetName: string;
    /**
     * @size 4 digits
     * @precision 1 decimals
     */
    averageSpeed: number;
    /**
     * @size 7 digits
     * @precision 5 decimals
     */
    length: number;
    /**
     * @size 8 digits
     * @precision 5 decimals
     */
    jamFactor: number;
    /**
     * @size 3 digits
     * @precision 0 decimals
     */
    confidence: number;
}

/**
 * Convert JavaScript object to Traffic record
 */
export function convertObjectToTraffic(dataIn: Traffic): string {
    let dataOut: string = '';

    dataOut +=
        dataIn?.rank?.toFixed(0)?.substring(0, 4)?.padEnd(4) ?? missingInput(`dataIn.rank`, 'packed', dataIn?.rank);
    dataOut +=
        dataIn?.streetName?.substring(0, 30)?.padEnd(30) ??
        missingInput(`dataIn.streetName`, 'char', dataIn?.streetName);
    dataOut +=
        dataIn?.averageSpeed?.toFixed(1)?.substring(0, 6)?.padEnd(6) ??
        missingInput(`dataIn.averageSpeed`, 'packed', dataIn?.averageSpeed);
    dataOut +=
        dataIn?.length?.toFixed(5)?.substring(0, 9)?.padEnd(9) ??
        missingInput(`dataIn.length`, 'packed', dataIn?.length);
    dataOut +=
        dataIn?.jamFactor?.toFixed(5)?.substring(0, 10)?.padEnd(10) ??
        missingInput(`dataIn.jamFactor`, 'packed', dataIn?.jamFactor);
    dataOut +=
        dataIn?.confidence?.toFixed(0)?.substring(0, 5)?.padEnd(5) ??
        missingInput(`dataIn.confidence`, 'packed', dataIn?.confidence);

    return dataOut;
}

/* eslint-enable */

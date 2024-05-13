/* eslint-disable */
// @ts-nocheck
// Module: ukgdelof
// Generated source -- do not modify

import { ibmiConversions, missingInput } from '@eradani-inc/ec-client';
const { fromIbmiDate, fromIbmiTime, fromIbmiTimestamp, toIbmiDate, toIbmiTime, toIbmiTimestamp } = ibmiConversions;

/**
 * Output interface
 */
export interface DelSOReq {
    /**
     * @size 6 digits
     * @precision 0 decimals
     */
    id: number;
    /**
     */
    start_date: Date;
    /**
     */
    end_date: Date;
}

/**
 * Convert DelSOReq record to TypeScript object
 */
export function convertDelSOReqToObject(dataIn: string): DelSOReq {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.id = Number(dataIn.substring(pos, pos + 8).trimEnd());
    pos += 8;
    dataOut.start_date = fromIbmiDate(dataIn.substring(pos, pos + 10).trimEnd());
    pos += 10;
    dataOut.end_date = fromIbmiDate(dataIn.substring(pos, pos + 10).trimEnd());
    pos += 10;

    return dataOut;
}

/* eslint-enable */

/* eslint-disable */
// @ts-nocheck
// Module: hygetchg
// Generated source -- do not modify

import { ibmiConversions, missingInput } from '@eradani-inc/ec-client';
const { fromIbmiDate, fromIbmiTime, fromIbmiTimestamp, toIbmiDate, toIbmiTime, toIbmiTimestamp } = ibmiConversions;

/**
 * Output interface
 */
export interface HyRequest {
    /**
     * @size 11 characters
     */
    reqDate: string;
}

/**
 * Convert HyRequest record to TypeScript object
 */
export function convertHyRequestToObject(dataIn: string): HyRequest {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.reqDate = dataIn.substring(pos, pos + 11).trimEnd();
    pos += 11;

    return dataOut;
}

/* eslint-enable */

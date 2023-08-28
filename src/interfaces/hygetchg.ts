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
     * @size 8 characters
     */
    startDate: string;
    /**
     * @size 8 characters
     */
    endDate: string;
}

/**
 * Convert HyRequest record to TypeScript object
 */
export function convertHyRequestToObject(dataIn: string): HyRequest {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.startDate = dataIn.substring(pos, pos + 8).trimEnd();
    pos += 8;
    dataOut.endDate = dataIn.substring(pos, pos + 8).trimEnd();
    pos += 8;

    return dataOut;
}

/* eslint-enable */

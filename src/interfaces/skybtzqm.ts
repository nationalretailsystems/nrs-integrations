/* eslint-disable */
// @ts-nocheck
// Module: skybtzqm
// Generated source -- do not modify

import { ibmiConversions, missingInput } from '@eradani-inc/ec-client';
const { fromIbmiDate, fromIbmiTime, fromIbmiTimestamp, toIbmiDate, toIbmiTime, toIbmiTimestamp } = ibmiConversions;

/**
 * Output interface
 */
export interface GetTrlMls2 {
    /**
     * @size 256 characters
     */
    filename: string;
}

/**
 * Convert GetTrlMls2 record to TypeScript object
 */
export function convertGetTrlMls2ToObject(dataIn: string): GetTrlMls2 {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.filename = dataIn.substring(pos, pos + 256).trimEnd();
    pos += 256;

    return dataOut;
}

/* eslint-enable */

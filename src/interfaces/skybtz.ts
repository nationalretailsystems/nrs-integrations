/* eslint-disable */
// @ts-nocheck
// Module: skybtz
// Generated source -- do not modify

import { ibmiConversions } from '@eradani-inc/ec-client';
const { fromIbmiDate, fromIbmiTime, fromIbmiTimestamp, toIbmiDate, toIbmiTime, toIbmiTimestamp } = ibmiConversions;

/**
 * Output interface
 */
export interface GetTrlMls {
    /**
     * @size 256 characters
     */
    filename: string;
}

/**
 * Convert GetTrlMls record to TypeScript object
 */
export function convertGetTrlMlsToObject(dataIn: string): GetTrlMls {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.filename = dataIn.substring(pos, pos + 256).trimEnd();
    pos += 256;

    return dataOut;
}

/* eslint-enable */

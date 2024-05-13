/* eslint-disable */
// @ts-nocheck
// Module: hrsdtoken
// Generated source -- do not modify

import { ibmiConversions, missingInput } from '@eradani-inc/ec-client';
const { fromIbmiDate, fromIbmiTime, fromIbmiTimestamp, toIbmiDate, toIbmiTime, toIbmiTimestamp } = ibmiConversions;

/**
 * Input interface
 */
export interface TokResults {
    /**
     * @size 1000 characters
     */
    access_token: string;
    /**
     * @size 10 characters
     */
    token_type: string;
    /**
     * @size 6 digits
     * @precision 0 decimals
     */
    expires_in: number;
}

/**
 * Convert JavaScript object to TokResults record
 */
export function convertObjectToTokResults(dataIn: TokResults): string {
    let dataOut: string = '';

    dataOut +=
        dataIn?.access_token?.substring(0, 1000)?.padEnd(1000) ??
        missingInput(`dataIn.access_token`, 'char', dataIn?.access_token);
    dataOut +=
        dataIn?.token_type?.substring(0, 10)?.padEnd(10) ??
        missingInput(`dataIn.token_type`, 'char', dataIn?.token_type);
    dataOut +=
        dataIn?.expires_in?.toFixed(0)?.substring(0, 8)?.padEnd(8) ??
        missingInput(`dataIn.expires_in`, 'packed', dataIn?.expires_in);

    return dataOut;
}

/* eslint-enable */

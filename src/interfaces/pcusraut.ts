/* eslint-disable */
// @ts-nocheck
// Module: pcusraut
// Generated source -- do not modify

import { ibmiConversions, missingInput } from '@eradani-inc/ec-client';
const { fromIbmiDate, fromIbmiTime, fromIbmiTimestamp, toIbmiDate, toIbmiTime, toIbmiTimestamp } = ibmiConversions;

import eradaniConnect from '@eradani-inc/eradani-connect';
const { dataTypes } = eradaniConnect;

/**
 * Output interface
 */
export interface PCReqToken {
    /**
     * @size 50 characters
     */
    username: string;
    /**
     * @size 50 characters
     */
    password: string;
}

/**
 * Convert PCReqToken record to TypeScript object
 */
export function convertPCReqTokenToObject(dataIn: string): PCReqToken {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.username = dataIn.substring(pos, pos + 50).trimEnd();
    pos += 50;
    dataOut.password = dataIn.substring(pos, pos + 50).trimEnd();
    pos += 50;

    return dataOut;
}

/**
 * Input interface
 */
export interface PCRcvToken {
    /**
     * @size 2000 characters
     */
    Authorization: string;
}

/**
 * Convert JavaScript object to PCRcvToken record
 */
export function convertObjectToPCRcvToken(dataIn: PCRcvToken): string {
    let dataOut: string = '';

    dataOut +=
        dataIn?.Authorization?.substring(0, 2000)?.padEnd(2000) ??
        missingInput(`dataIn.Authorization`, 'char', dataIn?.Authorization);

    return dataOut;
}

/* eslint-enable */

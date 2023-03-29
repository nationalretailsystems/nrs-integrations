/* eslint-disable */
// @ts-nocheck
// Module: makeme
// Generated source -- do not modify

import { ibmiConversions, missingInput } from '@eradani-inc/ec-client';
const { fromIbmiDate, fromIbmiTime, fromIbmiTimestamp, toIbmiDate, toIbmiTime, toIbmiTimestamp } = ibmiConversions;

import eradaniConnect from '@eradani-inc/eradani-connect';
const { dataTypes } = eradaniConnect;

/**
 * Output interface
 */
export interface PwsDS {
    /**
     * @size 50 characters
     * @default ` `
     */
    pws: string;
}

/**
 * Output interface
 */
export interface PwdRequest {
    /**
     * @size 3 digits
     */
    wc: number;
    /**
     * @size 3 digits
     */
    pc: number;
    /**
     * @size 1 characters
     */
    sp: string;
    /**
     * @size 3 digits
     */
    minCh: number;
    /**
     * @size 3 digits
     */
    maxCh: number;
    /**
     * @size 15 characters
     */
    whenNum: string;
    /**
     * @size 3 digits
     */
    nums: number;
    /**
     * @size 15 characters
     */
    whenUp: string;
    /**
     * @size 3 digits
     */
    ups: number;
}

/**
 * Convert PwdRequest record to TypeScript object
 */
export function convertPwdRequestToObject(dataIn: string): PwdRequest {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.wc = Number(dataIn.substring(pos, pos + 4).trimEnd());
    pos += 4;
    dataOut.pc = Number(dataIn.substring(pos, pos + 4).trimEnd());
    pos += 4;
    dataOut.sp = dataIn.substring(pos, pos + 1).trimEnd();
    pos += 1;
    dataOut.minCh = Number(dataIn.substring(pos, pos + 4).trimEnd());
    pos += 4;
    dataOut.maxCh = Number(dataIn.substring(pos, pos + 4).trimEnd());
    pos += 4;
    dataOut.whenNum = dataIn.substring(pos, pos + 15).trimEnd();
    pos += 15;
    dataOut.nums = Number(dataIn.substring(pos, pos + 4).trimEnd());
    pos += 4;
    dataOut.whenUp = dataIn.substring(pos, pos + 15).trimEnd();
    pos += 15;
    dataOut.ups = Number(dataIn.substring(pos, pos + 4).trimEnd());
    pos += 4;

    return dataOut;
}

/**
 * Input interface
 */
export interface PwdResult {
    /**
     */
    data: Array<PwsDS>;
    /**
     * @size 50 characters
     * @default ` `
     */
    error: string;
}

/**
 * Convert JavaScript object to PwdResult record
 */
export function convertObjectToPwdResult(dataIn: PwdResult): string {
    let dataOut: string = '';

    for (let i: number = 0; i < 10; ++i) {
        dataOut += dataIn?.data[i]?.pws?.substring(0, 50)?.padEnd(50) ?? ' '.substring(0, 50).padEnd(50);
    }
    dataOut += dataIn?.error?.substring(0, 50)?.padEnd(50) ?? ' '.substring(0, 50).padEnd(50);

    return dataOut;
}

/* eslint-enable */

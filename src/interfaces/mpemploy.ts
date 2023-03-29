/* eslint-disable */
// @ts-nocheck
// Module: mpemploy
// Generated source -- do not modify

import { ibmiConversions } from '@eradani-inc/ec-client';
const { fromIbmiDate, fromIbmiTime, fromIbmiTimestamp, toIbmiDate, toIbmiTime, toIbmiTimestamp } = ibmiConversions;

import eradaniConnect from '@eradani-inc/eradani-connect';
const { dataTypes } = eradaniConnect;

/**
 * Output interface
 */
export interface ReqEmpl {
    /**
     * @size 10 digits
     */
    contactKey: number;
}

/**
 * Convert ReqEmpl record to TypeScript object
 */
export function convertReqEmplToObject(dataIn: string): ReqEmpl {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.contactKey = Number(dataIn.substring(pos, pos + 11).trimEnd());
    pos += 11;

    return dataOut;
}

/**
 * Input interface
 */
export interface ResEmpl {
    /**
     * @size 100 characters
     */
    EmployeeName: string;
}

/**
 * Convert JavaScript object to ResEmpl record
 */
export function convertObjectToResEmpl(dataIn: ResEmpl): string {
    let dataOut: string = '';

    dataOut += dataIn.EmployeeName.substring(0, 100).padEnd(100);

    return dataOut;
}

/* eslint-enable */

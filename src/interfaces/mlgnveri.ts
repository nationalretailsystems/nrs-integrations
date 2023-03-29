/* eslint-disable */
// @ts-nocheck
// Module: mlgnveri
// Generated source -- do not modify

import { ibmiConversions } from '@eradani-inc/ec-client';
const { fromIbmiDate, fromIbmiTime, fromIbmiTimestamp, toIbmiDate, toIbmiTime, toIbmiTimestamp } = ibmiConversions;

/**
 * Output interface
 */
export interface MgReqData {
    /**
     * @size 100 characters
     */
    address: string;
    /**
     */
    mailbox_verification: boolean;
    /**
     */
    provider_lookup: boolean;
}

/**
 * Convert MgReqData record to TypeScript object
 */
export function convertMgReqDataToObject(dataIn: string): MgReqData {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.address = dataIn.substring(pos, pos + 100).trimEnd();
    pos += 100;
    dataOut.mailbox_verification = dataIn.substring(pos, pos + 1).trimEnd() === '1';
    pos += 1;
    dataOut.provider_lookup = dataIn.substring(pos, pos + 1).trimEnd() === '1';
    pos += 1;

    return dataOut;
}

/**
 * Input interface
 */
export interface MgResData {
    /**
     * @size 100 characters
     */
    address: string;
    /**
     */
    is_disposable_address: boolean;
    /**
     */
    is_role_address: boolean;
    /**
     * @size 25 characters
     */
    reason: Array<string>;
    /**
     * @size 25 characters
     */
    result: string;
    /**
     * @size 25 characters
     */
    risk: string;
}

/**
 * Convert JavaScript object to MgResData record
 */
export function convertObjectToMgResData(dataIn: MgResData): string {
    let dataOut: string = '';

    dataOut += dataIn.address.substring(0, 100).padEnd(100);
    dataOut += dataIn.is_disposable_address ? '1' : '0';
    dataOut += dataIn.is_role_address ? '1' : '0';
    for (let i: number = 0; i < 10; ++i) {
        dataOut += dataIn.reason[i].substring(0, 25).padEnd(25);
    }
    dataOut += dataIn.result.substring(0, 25).padEnd(25);
    dataOut += dataIn.risk.substring(0, 25).padEnd(25);

    return dataOut;
}

/* eslint-enable */

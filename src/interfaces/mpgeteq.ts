/* eslint-disable */
// @ts-nocheck
// Module: mpgeteq
// Generated source -- do not modify

import { ibmiConversions, missingInput } from '@eradani-inc/ec-client';
const { fromIbmiDate, fromIbmiTime, fromIbmiTimestamp, toIbmiDate, toIbmiTime, toIbmiTimestamp } = ibmiConversions;

import eradaniConnect from '@eradani-inc/eradani-connect';
const { dataTypes } = eradaniConnect;

/**
 * Output interface
 */
export interface ReqAssetCh {
    /**
     * @size 10 characters
     */
    assetid: string;
}

/**
 * Convert ReqAssetCh record to TypeScript object
 */
export function convertReqAssetChToObject(dataIn: string): ReqAssetCh {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.assetid = dataIn.substring(pos, pos + 10).trimEnd();
    pos += 10;

    return dataOut;
}

/**
 * Input interface
 */
export interface ResAssetCh {
    /**
     * @size 10 digits
     * @default `0`
     */
    assetKey: number;
}

/**
 * Convert JavaScript object to ResAssetCh record
 */
export function convertObjectToResAssetCh(dataIn: ResAssetCh): string {
    let dataOut: string = '';

    dataOut += dataIn?.assetKey?.toFixed()?.substring(0, 11)?.padEnd(11) ?? '0'.substring(0, 11).padEnd(11);

    return dataOut;
}

/* eslint-enable */

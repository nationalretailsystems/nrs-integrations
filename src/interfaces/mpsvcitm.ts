/* eslint-disable */
// @ts-nocheck
// Module: mpsvcitm
// Generated source -- do not modify

import { ibmiConversions } from '@eradani-inc/ec-client';
const { fromIbmiDate, fromIbmiTime, fromIbmiTimestamp, toIbmiDate, toIbmiTime, toIbmiTimestamp } = ibmiConversions;

import eradaniConnect from '@eradani-inc/eradani-connect';
const { dataTypes } = eradaniConnect;

/**
 * Output interface
 */
export interface ReqSvcCd {
    /**
     * @size 25 characters
     */
    serviceCode: string;
}

/**
 * Convert ReqSvcCd record to TypeScript object
 */
export function convertReqSvcCdToObject(dataIn: string): ReqSvcCd {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.serviceCode = dataIn.substring(pos, pos + 25).trimEnd();
    pos += 25;

    return dataOut;
}

/**
 * Input interface
 */
export interface ResSvcCd {
    /**
     * @size 1 digits
     */
    serviceKey: number;
    /**
     * @size 25 characters
     */
    serviceCode: string;
    /**
     * @size 1000 characters
     */
    serviceDescription: string;
    /**
     * @size 100 characters
     */
    serviceClass: string;
    /**
     * @size 4 bytes
     */
    estimatedHours: number;
    /**
     * @size 4 bytes
     */
    estimatedLaborRate: number;
    /**
     */
    active: boolean;
    /**
     * @size 25 characters
     */
    laborSource: string;
    /**
     * @size 4 bytes
     */
    laborPrice: number;
}

/**
 * Convert JavaScript object to ResSvcCd record
 */
export function convertObjectToResSvcCd(dataIn: ResSvcCd): string {
    let dataOut: string = '';

    dataOut += dataIn.serviceKey.toFixed().substring(0, 2).padEnd(2);
    dataOut += dataIn.serviceCode.substring(0, 25).padEnd(25);
    dataOut += dataIn.serviceDescription.substring(0, 1000).padEnd(1000);
    dataOut += dataIn.serviceClass.substring(0, 100).padEnd(100);
    dataOut += dataIn.estimatedHours.toExponential(7).substring(0, 14).padEnd(14);
    dataOut += dataIn.estimatedLaborRate.toExponential(7).substring(0, 14).padEnd(14);
    dataOut += dataIn.active ? '1' : '0';
    dataOut += dataIn.laborSource.substring(0, 25).padEnd(25);
    dataOut += dataIn.laborPrice.toExponential(7).substring(0, 14).padEnd(14);

    return dataOut;
}

/* eslint-enable */

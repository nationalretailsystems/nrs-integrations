/* eslint-disable */
// @ts-nocheck
// Module: mpgetwohr
// Generated source -- do not modify

import { ibmiConversions } from '@eradani-inc/ec-client';
const { fromIbmiDate, fromIbmiTime, fromIbmiTimestamp, toIbmiDate, toIbmiTime, toIbmiTimestamp } = ibmiConversions;

import eradaniConnect from '@eradani-inc/eradani-connect';
const { dataTypes } = eradaniConnect;

/**
 * Input interface
 */
export interface ResWoHrs {
    /**
     * @size 10 digits
     */
    workOrderLaborKey: number;
    /**
     * @size 10 digits
     */
    workOrderKey: number;
    /**
     * @size 10 digits
     */
    contactKey: number;
    /**
     * @size 50 characters
     */
    contactId: string;
    /**
     */
    laborDate: Date;
    /**
     * @size 11 digits
     * @precision 2 decimals
     */
    laborHours: number;
    /**
     * @size 11 digits
     * @precision 2 decimals
     */
    laborRate: number;
    /**
     * @size 25 characters
     */
    laborBudgetId: string;
    /**
     * @size 25 characters
     */
    serviceId: string;
}

/**
 * Convert JavaScript object to ResWoHrs record
 */
export function convertObjectToResWoHrs(dataIn: ResWoHrs): string {
    let dataOut: string = '';

    dataOut += dataIn.workOrderLaborKey.toFixed().substring(0, 11).padEnd(11);
    dataOut += dataIn.workOrderKey.toFixed().substring(0, 11).padEnd(11);
    dataOut += dataIn.contactKey.toFixed().substring(0, 11).padEnd(11);
    dataOut += dataIn.contactId.substring(0, 50).padEnd(50);
    dataOut += toIbmiDate(dataIn.laborDate);
    dataOut += dataIn.laborHours.toFixed(2).substring(0, 13).padEnd(13);
    dataOut += dataIn.laborRate.toFixed(2).substring(0, 13).padEnd(13);
    dataOut += dataIn.laborBudgetId.substring(0, 25).padEnd(25);
    dataOut += dataIn.serviceId.substring(0, 25).padEnd(25);

    return dataOut;
}

/**
 * Output interface
 */
export interface ReqWoHours {
    /**
     * @size 10 digits
     */
    id: number;
}

/**
 * Convert ReqWoHours record to TypeScript object
 */
export function convertReqWoHoursToObject(dataIn: string): ReqWoHours {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.id = Number(dataIn.substring(pos, pos + 11).trimEnd());
    pos += 11;

    return dataOut;
}

/* eslint-enable */

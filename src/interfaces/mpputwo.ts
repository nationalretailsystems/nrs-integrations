/* eslint-disable */
// @ts-nocheck
// Module: mpputwo
// Generated source -- do not modify

import { ibmiConversions, missingInput } from '@eradani-inc/ec-client';
const { fromIbmiDate, fromIbmiTime, fromIbmiTimestamp, toIbmiDate, toIbmiTime, toIbmiTimestamp } = ibmiConversions;

import eradaniConnect from '@eradani-inc/eradani-connect';
const { dataTypes } = eradaniConnect;

/**
 * Output interface
 */
export interface errorsDs {
    /**
     * @size 25 characters
     */
    key: string;
    /**
     * @size 80 characters
     */
    error: string;
}

/**
 * Output interface
 */
export interface ReqAddWo {
    /**
     * @size 80 characters
     */
    purpose: string;
    /**
     * @size 10 digits
     */
    entityKey: number;
    /**
     * @size 10 digits
     */
    assetKey: number;
    /**
     * @size 10 digits
     */
    priorityKey: number;
    /**
     * @size 10 digits
     */
    budgetKey: number;
    /**
     */
    createDate: Date;
    /**
     */
    dateDue: Date;
    /**
     * @size 10 digits
     */
    workTypeKey: number;
    /**
     * @size 80 characters
     */
    workDescription: string;
}

/**
 * Convert ReqAddWo record to TypeScript object
 */
export function convertReqAddWoToObject(dataIn: string): ReqAddWo {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.purpose = dataIn.substring(pos, pos + 80).trimEnd();
    pos += 80;
    dataOut.entityKey = Number(dataIn.substring(pos, pos + 11).trimEnd());
    pos += 11;
    dataOut.assetKey = Number(dataIn.substring(pos, pos + 11).trimEnd());
    pos += 11;
    dataOut.priorityKey = Number(dataIn.substring(pos, pos + 11).trimEnd());
    pos += 11;
    dataOut.budgetKey = Number(dataIn.substring(pos, pos + 11).trimEnd());
    pos += 11;
    dataOut.createDate = fromIbmiTimestamp(dataIn.substring(pos, pos + 26).trimEnd());
    pos += 26;
    dataOut.dateDue = fromIbmiTimestamp(dataIn.substring(pos, pos + 26).trimEnd());
    pos += 26;
    dataOut.workTypeKey = Number(dataIn.substring(pos, pos + 11).trimEnd());
    pos += 11;
    dataOut.workDescription = dataIn.substring(pos, pos + 80).trimEnd();
    pos += 80;

    return dataOut;
}

/**
 * Input interface
 */
export interface ResAddWo {
    /**
     * @size 100 characters
     */
    type: string;
    /**
     * @size 100 characters
     */
    title: string;
    /**
     * @size 10 digits
     */
    status: number;
    /**
     * @size 80 characters
     */
    traceId: string;
    /**
     */
    errors: Array<errorsDs>;
}

/**
 * Convert JavaScript object to ResAddWo record
 */
export function convertObjectToResAddWo(dataIn: ResAddWo): string {
    let dataOut: string = '';

    dataOut += dataIn?.type?.substring(0, 100)?.padEnd(100) ?? missingInput(`dataIn.type`, 'char', dataIn?.type);
    dataOut += dataIn?.title?.substring(0, 100)?.padEnd(100) ?? missingInput(`dataIn.title`, 'char', dataIn?.title);
    dataOut +=
        dataIn?.status?.toFixed()?.substring(0, 11)?.padEnd(11) ??
        missingInput(`dataIn.status`, 'integer', dataIn?.status);
    dataOut += dataIn?.traceId?.substring(0, 80)?.padEnd(80) ?? missingInput(`dataIn.traceId`, 'char', dataIn?.traceId);
    for (let i: number = 0; i < 5; ++i) {
        dataOut +=
            dataIn?.errors[i]?.key?.substring(0, 25)?.padEnd(25) ??
            missingInput(`dataIn.errors[${i}].key`, 'char', dataIn?.errors[i]?.key);
        dataOut +=
            dataIn?.errors[i]?.error?.substring(0, 80)?.padEnd(80) ??
            missingInput(`dataIn.errors[${i}].error`, 'char', dataIn?.errors[i]?.error);
    }

    return dataOut;
}

/* eslint-enable */

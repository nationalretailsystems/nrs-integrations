/* eslint-disable */
// @ts-nocheck
// Module: hrsdupdoc
// Generated source -- do not modify

import { ibmiConversions, missingInput } from '@eradani-inc/ec-client';
const { fromIbmiDate, fromIbmiTime, fromIbmiTimestamp, toIbmiDate, toIbmiTime, toIbmiTimestamp } = ibmiConversions;

/**
 * Output interface
 */
export interface fileDS {
    /**
     * @size 50 characters
     */
    filename: string;
    /**
     * @size 100 characters
     */
    file_id: string;
}

/**
 * Output interface
 */
export interface UpldReq {
    /**
     * @size 12 characters
     */
    employee_external_id: string;
    /**
     * @size 20 characters
     */
    document_type_id: string;
    /**
     * @size 50 characters
     */
    title: string;
    /**
     * @size 24 characters
     */
    date: string;
    /**
     * @size 3 characters
     */
    organization_ids: Array<string>;
    /**
     */
    uploaded_file: fileDS;
}

/**
 * Convert UpldReq record to TypeScript object
 */
export function convertUpldReqToObject(dataIn: string): UpldReq {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.employee_external_id = dataIn.substring(pos, pos + 12).trimEnd();
    pos += 12;
    dataOut.document_type_id = dataIn.substring(pos, pos + 20).trimEnd();
    pos += 20;
    dataOut.title = dataIn.substring(pos, pos + 50).trimEnd();
    pos += 50;
    dataOut.date = dataIn.substring(pos, pos + 24).trimEnd();
    pos += 24;
    dataOut.organization_ids = [];
    for (let i: number = 0; i < 1; ++i) {
        dataOut.organization_ids[i] = dataIn.substring(pos, pos + 3).trimEnd();
        pos += 3;
    }
    dataOut.uploaded_file = {};
    dataOut.uploaded_file.filename = dataIn.substring(pos, pos + 50).trimEnd();
    pos += 50;
    dataOut.uploaded_file.file_id = dataIn.substring(pos, pos + 100).trimEnd();
    pos += 100;

    return dataOut;
}

/* eslint-enable */

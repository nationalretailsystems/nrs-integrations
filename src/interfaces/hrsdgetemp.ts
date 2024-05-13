/* eslint-disable */
// @ts-nocheck
// Module: hrsdgetemp
// Generated source -- do not modify

import { ibmiConversions, missingInput } from '@eradani-inc/ec-client';
const { fromIbmiDate, fromIbmiTime, fromIbmiTimestamp, toIbmiDate, toIbmiTime, toIbmiTimestamp } = ibmiConversions;

/**
 * Output interface
 */
export interface regrefDS {
    /**
     * @size 6 characters
     * @default ``
     */
    employee_number: string;
    /**
     * @default `true`
     */
    active: boolean;
    /**
     * @size 10 characters
     * @default ``
     */
    departure_date: string;
    /**
     * @size 3 characters
     * @default ``
     */
    organization_id: string;
    /**
     * @size 32 characters
     * @default ``
     */
    created_at: string;
    /**
     * @size 32 characters
     * @default ``
     */
    updated_at: string;
}

/**
 * Output interface
 */
export interface custfldsDS {
    /**
     * @size 13 characters
     * @default ``
     */
    code: string;
    /**
     * @size 20 characters
     * @default ``
     */
    value: string;
    /**
     * @size 10 characters
     * @default ``
     */
    label: string;
}

/**
 * Output interface
 */
export interface EmpRequest {
    /**
     * @size 6 characters
     */
    employee: string;
}

/**
 * Convert EmpRequest record to TypeScript object
 */
export function convertEmpRequestToObject(dataIn: string): EmpRequest {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.employee = dataIn.substring(pos, pos + 6).trimEnd();
    pos += 6;

    return dataOut;
}

/**
 * Input interface
 */
export interface EmpResult {
    /**
     * @size 36 characters
     * @default ``
     */
    id: string;
    /**
     * @size 20 characters
     * @default ``
     */
    firstname: string;
    /**
     * @size 20 characters
     * @default ``
     */
    middlename: string;
    /**
     * @size 20 characters
     * @default ``
     */
    lastname: string;
    /**
     * @size 20 characters
     * @default ``
     */
    maidenname: string;
    /**
     * @size 12 characters
     * @default ``
     */
    external_id: string;
    /**
     * @size 5 characters
     * @default ``
     */
    language: string;
    /**
     * @size 23 characters
     * @default ``
     */
    email: string;
    /**
     * @size 10 characters
     * @default ``
     */
    birth_date: string;
    /**
     * @size 25 characters
     * @default ``
     */
    address1: string;
    /**
     * @size 25 characters
     * @default ``
     */
    address2: string;
    /**
     * @size 25 characters
     * @default ``
     */
    address3: string;
    /**
     * @size 10 characters
     * @default ``
     */
    zip_code: string;
    /**
     * @size 25 characters
     * @default ``
     */
    city: string;
    /**
     * @size 2 characters
     * @default ``
     */
    country: string;
    /**
     * @size 2 characters
     * @default ``
     */
    state: string;
    /**
     * @size 10 characters
     * @default ``
     */
    mobile_phone_number: string;
    /**
     * @size 6 characters
     */
    status: string;
    /**
     * @default `true`
     */
    terminated: boolean;
    /**
     * @size 10 characters
     * @default ``
     */
    starting_date: string;
    /**
     * @size 32 characters
     * @default ``
     */
    created_at: string;
    /**
     * @size 32 characters
     * @default ``
     */
    updated_at: string;
    /**
     */
    registration_references: Array<regrefDS>;
    /**
     * @size 10 characters
     * @default ``
     */
    departure_date: string;
    /**
     */
    custom_fields: Array<custfldsDS>;
}

/**
 * Convert JavaScript object to EmpResult record
 */
export function convertObjectToEmpResult(dataIn: EmpResult): string {
    let dataOut: string = '';

    dataOut += dataIn?.id?.substring(0, 36)?.padEnd(36) ?? ''.substring(0, 36).padEnd(36);
    dataOut += dataIn?.firstname?.substring(0, 20)?.padEnd(20) ?? ''.substring(0, 20).padEnd(20);
    dataOut += dataIn?.middlename?.substring(0, 20)?.padEnd(20) ?? ''.substring(0, 20).padEnd(20);
    dataOut += dataIn?.lastname?.substring(0, 20)?.padEnd(20) ?? ''.substring(0, 20).padEnd(20);
    dataOut += dataIn?.maidenname?.substring(0, 20)?.padEnd(20) ?? ''.substring(0, 20).padEnd(20);
    dataOut += dataIn?.external_id?.substring(0, 12)?.padEnd(12) ?? ''.substring(0, 12).padEnd(12);
    dataOut += dataIn?.language?.substring(0, 5)?.padEnd(5) ?? ''.substring(0, 5).padEnd(5);
    dataOut += dataIn?.email?.substring(0, 23)?.padEnd(23) ?? ''.substring(0, 23).padEnd(23);
    dataOut += dataIn?.birth_date?.substring(0, 10)?.padEnd(10) ?? ''.substring(0, 10).padEnd(10);
    dataOut += dataIn?.address1?.substring(0, 25)?.padEnd(25) ?? ''.substring(0, 25).padEnd(25);
    dataOut += dataIn?.address2?.substring(0, 25)?.padEnd(25) ?? ''.substring(0, 25).padEnd(25);
    dataOut += dataIn?.address3?.substring(0, 25)?.padEnd(25) ?? ''.substring(0, 25).padEnd(25);
    dataOut += dataIn?.zip_code?.substring(0, 10)?.padEnd(10) ?? ''.substring(0, 10).padEnd(10);
    dataOut += dataIn?.city?.substring(0, 25)?.padEnd(25) ?? ''.substring(0, 25).padEnd(25);
    dataOut += dataIn?.country?.substring(0, 2)?.padEnd(2) ?? ''.substring(0, 2).padEnd(2);
    dataOut += dataIn?.state?.substring(0, 2)?.padEnd(2) ?? ''.substring(0, 2).padEnd(2);
    dataOut += dataIn?.mobile_phone_number?.substring(0, 10)?.padEnd(10) ?? ''.substring(0, 10).padEnd(10);
    dataOut += dataIn?.status?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.status`, 'char', dataIn?.status);
    dataOut += dataIn?.terminated !== undefined ? (dataIn?.terminated ? '1' : '0') : '1';
    dataOut += dataIn?.starting_date?.substring(0, 10)?.padEnd(10) ?? ''.substring(0, 10).padEnd(10);
    dataOut += dataIn?.created_at?.substring(0, 32)?.padEnd(32) ?? ''.substring(0, 32).padEnd(32);
    dataOut += dataIn?.updated_at?.substring(0, 32)?.padEnd(32) ?? ''.substring(0, 32).padEnd(32);
    for (let i: number = 0; i < 1; ++i) {
        dataOut +=
            dataIn?.registration_references[i]?.employee_number?.substring(0, 6)?.padEnd(6) ??
            ''.substring(0, 6).padEnd(6);
        dataOut +=
            dataIn?.registration_references[i]?.active !== undefined
                ? dataIn?.registration_references[i]?.active
                    ? '1'
                    : '0'
                : '1';
        dataOut +=
            dataIn?.registration_references[i]?.departure_date?.substring(0, 10)?.padEnd(10) ??
            ''.substring(0, 10).padEnd(10);
        dataOut +=
            dataIn?.registration_references[i]?.organization_id?.substring(0, 3)?.padEnd(3) ??
            ''.substring(0, 3).padEnd(3);
        dataOut +=
            dataIn?.registration_references[i]?.created_at?.substring(0, 32)?.padEnd(32) ??
            ''.substring(0, 32).padEnd(32);
        dataOut +=
            dataIn?.registration_references[i]?.updated_at?.substring(0, 32)?.padEnd(32) ??
            ''.substring(0, 32).padEnd(32);
    }
    dataOut += dataIn?.departure_date?.substring(0, 10)?.padEnd(10) ?? ''.substring(0, 10).padEnd(10);
    for (let i: number = 0; i < 50; ++i) {
        dataOut += dataIn?.custom_fields[i]?.code?.substring(0, 13)?.padEnd(13) ?? ''.substring(0, 13).padEnd(13);
        dataOut += dataIn?.custom_fields[i]?.value?.substring(0, 20)?.padEnd(20) ?? ''.substring(0, 20).padEnd(20);
        dataOut += dataIn?.custom_fields[i]?.label?.substring(0, 10)?.padEnd(10) ?? ''.substring(0, 10).padEnd(10);
    }

    return dataOut;
}

/* eslint-enable */

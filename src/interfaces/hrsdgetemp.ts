/* eslint-disable */
// @ts-nocheck
// Module: hrsdgetemp
// Generated source -- do not modify

import { ibmiConversions, missingInput } from "@eradani-inc/ec-client";
const {
  fromIbmiDate,
  fromIbmiTime,
  fromIbmiTimestamp,
  toIbmiDate,
  toIbmiTime,
  toIbmiTimestamp
} = ibmiConversions;

/**
 * Output interface
 */
export interface regrefDS {
    /**
     * @size 6 characters
     */
    employee_number: string,
    /**
     */
    active: boolean,
    /**
     * @size 0 characters
     */
    departure_date: string,
    /**
     * @size 3 characters
     */
    organization_id: string,
    /**
     * @size 32 characters
     */
    created_at: string,
    /**
     * @size 32 characters
     */
    updated_at: string
}

/**
 * Output interface
 */
export interface custfldsDS {
    /**
     * @size 13 characters
     */
    code: string,
    /**
     * @size 7 characters
     */
    value: string,
    /**
     * @size 0 characters
     */
    label: string
}

/**
 * Output interface
 */
export interface EmpRequest {
    /**
     * @size 6 characters
     */
    employee: string
}

/**
 * Convert EmpRequest record to TypeScript object
 */
export function convertEmpRequestToObject(dataIn: string): EmpRequest {
  const dataOut: any =   {
  
    };
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
     */
    id: string,
    /**
     * @size 9 characters
     */
    firstname: string,
    /**
     * @size 1 characters
     */
    middlename: string,
    /**
     * @size 6 characters
     */
    lastname: string,
    /**
     * @size 0 characters
     */
    maidenname: string,
    /**
     * @size 12 characters
     */
    external_id: string,
    /**
     * @size 5 characters
     */
    language: string,
    /**
     * @size 23 characters
     */
    email: string,
    /**
     * @size 10 characters
     */
    birth_date: string,
    /**
     * @size 0 characters
     */
    address1: string,
    /**
     * @size 0 characters
     */
    address2: string,
    /**
     * @size 0 characters
     */
    address3: string,
    /**
     * @size 0 characters
     */
    zip_code: string,
    /**
     * @size 0 characters
     */
    city: string,
    /**
     * @size 0 characters
     */
    country: string,
    /**
     * @size 0 characters
     */
    state: string,
    /**
     * @size 0 characters
     */
    mobile_phone_number: string,
    /**
     * @size 6 characters
     */
    status: string,
    /**
     */
    terminated: boolean,
    /**
     * @size 10 characters
     */
    starting_date: string,
    /**
     * @size 32 characters
     */
    created_at: string,
    /**
     * @size 32 characters
     */
    updated_at: string,
    /**
     */
    registration_references: Array<regrefDS>,
    /**
     * @size 0 characters
     */
    departure_date: string,
    /**
     */
    custom_fields: Array<custfldsDS>
}

/**
 * Convert JavaScript object to EmpResult record
 */
export function convertObjectToEmpResult(dataIn: EmpResult): string {
  let dataOut: string = "";

  dataOut += dataIn?.id?.substring(0, 36)?.padEnd(36) ?? missingInput(`dataIn.id`, "char", dataIn?.id);
  dataOut += dataIn?.firstname?.substring(0, 9)?.padEnd(9) ?? missingInput(`dataIn.firstname`, "char", dataIn?.firstname);
  dataOut += dataIn?.middlename?.substring(0, 1)?.padEnd(1) ?? missingInput(`dataIn.middlename`, "char", dataIn?.middlename);
  dataOut += dataIn?.lastname?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.lastname`, "char", dataIn?.lastname);
  dataOut += dataIn?.maidenname?.substring(0, 0)?.padEnd(0) ?? missingInput(`dataIn.maidenname`, "char", dataIn?.maidenname);
  dataOut += dataIn?.external_id?.substring(0, 12)?.padEnd(12) ?? missingInput(`dataIn.external_id`, "char", dataIn?.external_id);
  dataOut += dataIn?.language?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.language`, "char", dataIn?.language);
  dataOut += dataIn?.email?.substring(0, 23)?.padEnd(23) ?? missingInput(`dataIn.email`, "char", dataIn?.email);
  dataOut += dataIn?.birth_date?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.birth_date`, "char", dataIn?.birth_date);
  dataOut += dataIn?.address1?.substring(0, 0)?.padEnd(0) ?? missingInput(`dataIn.address1`, "char", dataIn?.address1);
  dataOut += dataIn?.address2?.substring(0, 0)?.padEnd(0) ?? missingInput(`dataIn.address2`, "char", dataIn?.address2);
  dataOut += dataIn?.address3?.substring(0, 0)?.padEnd(0) ?? missingInput(`dataIn.address3`, "char", dataIn?.address3);
  dataOut += dataIn?.zip_code?.substring(0, 0)?.padEnd(0) ?? missingInput(`dataIn.zip_code`, "char", dataIn?.zip_code);
  dataOut += dataIn?.city?.substring(0, 0)?.padEnd(0) ?? missingInput(`dataIn.city`, "char", dataIn?.city);
  dataOut += dataIn?.country?.substring(0, 0)?.padEnd(0) ?? missingInput(`dataIn.country`, "char", dataIn?.country);
  dataOut += dataIn?.state?.substring(0, 0)?.padEnd(0) ?? missingInput(`dataIn.state`, "char", dataIn?.state);
  dataOut += dataIn?.mobile_phone_number?.substring(0, 0)?.padEnd(0) ?? missingInput(`dataIn.mobile_phone_number`, "char", dataIn?.mobile_phone_number);
  dataOut += dataIn?.status?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.status`, "char", dataIn?.status);
  dataOut += (dataIn?.terminated !== undefined ? (dataIn?.terminated ? "1" : "0") : missingInput(`dataIn.terminated`, "bool", dataIn?.terminated));
  dataOut += dataIn?.starting_date?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.starting_date`, "char", dataIn?.starting_date);
  dataOut += dataIn?.created_at?.substring(0, 32)?.padEnd(32) ?? missingInput(`dataIn.created_at`, "char", dataIn?.created_at);
  dataOut += dataIn?.updated_at?.substring(0, 32)?.padEnd(32) ?? missingInput(`dataIn.updated_at`, "char", dataIn?.updated_at);
  for (let i: number = 0; i < 1; ++i) {
  dataOut += dataIn?.registration_references[i]?.employee_number?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.registration_references[${i}].employee_number`, "char", dataIn?.registration_references[i]?.employee_number);
  dataOut += (dataIn?.registration_references[i]?.active !== undefined ? (dataIn?.registration_references[i]?.active ? "1" : "0") : missingInput(`dataIn.registration_references[${i}].active`, "bool", dataIn?.registration_references[i]?.active));
  dataOut += dataIn?.registration_references[i]?.departure_date?.substring(0, 0)?.padEnd(0) ?? missingInput(`dataIn.registration_references[${i}].departure_date`, "char", dataIn?.registration_references[i]?.departure_date);
  dataOut += dataIn?.registration_references[i]?.organization_id?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.registration_references[${i}].organization_id`, "char", dataIn?.registration_references[i]?.organization_id);
  dataOut += dataIn?.registration_references[i]?.created_at?.substring(0, 32)?.padEnd(32) ?? missingInput(`dataIn.registration_references[${i}].created_at`, "char", dataIn?.registration_references[i]?.created_at);
  dataOut += dataIn?.registration_references[i]?.updated_at?.substring(0, 32)?.padEnd(32) ?? missingInput(`dataIn.registration_references[${i}].updated_at`, "char", dataIn?.registration_references[i]?.updated_at);
  }
  dataOut += dataIn?.departure_date?.substring(0, 0)?.padEnd(0) ?? missingInput(`dataIn.departure_date`, "char", dataIn?.departure_date);
  for (let i: number = 0; i < 50; ++i) {
  dataOut += dataIn?.custom_fields[i]?.code?.substring(0, 13)?.padEnd(13) ?? missingInput(`dataIn.custom_fields[${i}].code`, "char", dataIn?.custom_fields[i]?.code);
  dataOut += dataIn?.custom_fields[i]?.value?.substring(0, 7)?.padEnd(7) ?? missingInput(`dataIn.custom_fields[${i}].value`, "char", dataIn?.custom_fields[i]?.value);
  dataOut += dataIn?.custom_fields[i]?.label?.substring(0, 0)?.padEnd(0) ?? missingInput(`dataIn.custom_fields[${i}].label`, "char", dataIn?.custom_fields[i]?.label);
  }

  return dataOut;
}

/* eslint-enable */

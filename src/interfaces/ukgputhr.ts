/* eslint-disable */
// @ts-nocheck
// Module: ukgputhr
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
export interface employee1DS {
    /**
     * @size 5 digits
     * @precision 0 decimals
     * @default `0`
     */
    id: number
}

/**
 * Output interface
 */
export interface dateRangeDS {
    /**
     * @size 23 characters
     * @default ``
     */
    startDate: string,
    /**
     * @size 23 characters
     * @default ``
     */
    endDate: string
}

/**
 * Output interface
 */
export interface whereDS {
    /**
     */
    employee: employee1DS,
    /**
     */
    dateRange: dateRangeDS
}

/**
 * Output interface
 */
export interface employee2DS {
    /**
     * @size 5 digits
     * @precision 0 decimals
     * @default `0`
     */
    id: number
}

/**
 * Output interface
 */
export interface addedDS {
    /**
     */
    employee: employee2DS,
    /**
     * @size 5 digits
     * @precision 2 decimals
     * @default `0`
     */
    durationInHours: number,
    /**
     * @size 23 characters
     * @default ``
     */
    startDateTime: string,
    /**
     * @size 5 digits
     * @precision 0 decimals
     * @default `0`
     */
    id: number
}

/**
 * Output interface
 */
export interface hoursWorkedDS {
    /**
     */
    added: addedDS
}

/**
 * Output interface
 */
export interface doDS {
    /**
     */
    hoursWorked: hoursWorkedDS,
    /**
     * @default `false`
     */
    onlyValidate: boolean
}

/**
 * Output interface
 */
export interface FormatName {
    /**
     */
    where: whereDS,
    /**
     */
    do: doDS
}

/**
 * Convert FormatName record to TypeScript object
 */
export function convertFormatNameToObject(dataIn: string): FormatName {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.where =   {
  
    };
  dataOut.where.employee =   {
  
    };
  dataOut.where.employee.id = Number(dataIn.substring(pos, pos + 7).trimEnd());
  pos += 7;
  dataOut.where.dateRange =   {
  
    };
  dataOut.where.dateRange.startDate = dataIn.substring(pos, pos + 23).trimEnd();
  pos += 23;
  dataOut.where.dateRange.endDate = dataIn.substring(pos, pos + 23).trimEnd();
  pos += 23;
  dataOut.do =   {
  
    };
  dataOut.do.hoursWorked =   {
  
    };
  dataOut.do.hoursWorked.added =   {
  
    };
  dataOut.do.hoursWorked.added.employee =   {
  
    };
  dataOut.do.hoursWorked.added.employee.id = Number(dataIn.substring(pos, pos + 7).trimEnd());
  pos += 7;
  dataOut.do.hoursWorked.added.durationInHours = Number(dataIn.substring(pos, pos + 7).trimEnd());
  pos += 7;
  dataOut.do.hoursWorked.added.startDateTime = dataIn.substring(pos, pos + 23).trimEnd();
  pos += 23;
  dataOut.do.hoursWorked.added.id = Number(dataIn.substring(pos, pos + 7).trimEnd());
  pos += 7;
  dataOut.do.onlyValidate = dataIn.substring(pos, pos + 1).trimEnd() === "1";
  pos += 1;

  return dataOut;
}

/* eslint-enable */

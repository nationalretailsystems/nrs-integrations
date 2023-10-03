/* eslint-disable */
// @ts-nocheck
// Module: ukgputhos
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
export interface employeeDS {
    /**
     * @size 6 digits
     * @precision 0 decimals
     */
    id: number
}

/**
 * Output interface
 */
export interface paycodeDS {
    /**
     * @size 10 digits
     * @precision 0 decimals
     */
    id: number
}

/**
 * Output interface
 */
export interface AddedDS {
    /**
     */
    employee: employeeDS,
    /**
     */
    paycode: paycodeDS,
    /**
     * @size 4 characters
     */
    amountType: string,
    /**
     * @size 10 characters
     */
    applyDate: string,
    /**
     * @size 5 digits
     * @precision 2 decimals
     */
    durationInHours: number
}

/**
 * Output interface
 */
export interface payCodeEditsDS {
    /**
     */
    added: AddedDS
}

/**
 * Output interface
 */
export interface doDS {
    /**
     */
    payCodeEdits: payCodeEditsDS
}

/**
 * Output interface
 */
export interface dateRangeDS {
    /**
     * @size 23 characters
     */
    endDate: string,
    /**
     * @size 23 characters
     */
    startDate: string
}

/**
 * Output interface
 */
export interface whereDS {
    /**
     */
    dateRange: dateRangeDS,
    /**
     */
    employee: employeeDS
}

/**
 * Output interface
 */
export interface puthosReq {
    /**
     */
    do: doDS,
    /**
     */
    where: whereDS
}

/**
 * Convert puthosReq record to TypeScript object
 */
export function convertputhosReqToObject(dataIn: string): puthosReq {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.do =   {
  
    };
  dataOut.do.payCodeEdits =   {
  
    };
  dataOut.do.payCodeEdits.added =   {
  
    };
  dataOut.do.payCodeEdits.added.employee =   {
  
    };
  dataOut.do.payCodeEdits.added.employee.id = Number(dataIn.substring(pos, pos + 8).trimEnd());
  pos += 8;
  dataOut.do.payCodeEdits.added.paycode =   {
  
    };
  dataOut.do.payCodeEdits.added.paycode.id = Number(dataIn.substring(pos, pos + 12).trimEnd());
  pos += 12;
  dataOut.do.payCodeEdits.added.amountType = dataIn.substring(pos, pos + 4).trimEnd();
  pos += 4;
  dataOut.do.payCodeEdits.added.applyDate = dataIn.substring(pos, pos + 10).trimEnd();
  pos += 10;
  dataOut.do.payCodeEdits.added.durationInHours = Number(dataIn.substring(pos, pos + 7).trimEnd());
  pos += 7;
  dataOut.where =   {
  
    };
  dataOut.where.dateRange =   {
  
    };
  dataOut.where.dateRange.endDate = dataIn.substring(pos, pos + 23).trimEnd();
  pos += 23;
  dataOut.where.dateRange.startDate = dataIn.substring(pos, pos + 23).trimEnd();
  pos += 23;
  dataOut.where.employee =   {
  
    };
  dataOut.where.employee.id = Number(dataIn.substring(pos, pos + 8).trimEnd());
  pos += 8;

  return dataOut;
}

/* eslint-enable */

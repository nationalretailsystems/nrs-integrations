/* eslint-disable */
// @ts-nocheck
// Module: ukgdrvr
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

import eradaniConnect from "@eradani-inc/eradani-connect";
const { dataTypes } = eradaniConnect;

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
export interface dateRangeDS {
    /**
     * @size 16 characters
     */
    startDate: string,
    /**
     * @size 16 characters
     */
    EndDate: string
}

/**
 * Output interface
 */
export interface whereDS {
    /**
     */
    employee: employeeDS,
    /**
     */
    dateRange: dateRangeDS
}

/**
 * Output interface
 */
export interface AddedDS {
    /**
     */
    employee: employeeDS,
    /**
     * @size 19 characters
     */
    punchDtm: string
}

/**
 * Output interface
 */
export interface punchesDS {
    /**
     */
    added: Array<AddedDS>
}

/**
 * Output interface
 */
export interface doDS {
    /**
     */
    punches: punchesDS,
    /**
     */
    onlyValidate: boolean
}

/**
 * Output interface
 */
export interface PunchReqDS {
    /**
     */
    where: whereDS,
    /**
     */
    do: doDS
}

/**
 * Convert PunchReqDS record to TypeScript object
 */
export function convertPunchReqDSToObject(dataIn: string): PunchReqDS {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.where =   {
  
    };
  dataOut.where.employee =   {
  
    };
  dataOut.where.employee.id = Number(dataIn.substring(pos, pos + 8).trimEnd());
  pos += 8;
  dataOut.where.dateRange =   {
  
    };
  dataOut.where.dateRange.startDate = dataIn.substring(pos, pos + 16).trimEnd();
  pos += 16;
  dataOut.where.dateRange.EndDate = dataIn.substring(pos, pos + 16).trimEnd();
  pos += 16;
  dataOut.do =   {
  
    };
  dataOut.do.punches =   {
  
    };
  dataOut.do.punches.added = [
    
  ];
  for (let i: number = 0; i < 1; ++i) {
  dataOut.do.punches.added[i] =   {
  
    };
  dataOut.do.punches.added[i].employee =   {
  
    };
  dataOut.do.punches.added[i].employee.id = Number(dataIn.substring(pos, pos + 8).trimEnd());
  pos += 8;
  dataOut.do.punches.added[i].punchDtm = dataIn.substring(pos, pos + 19).trimEnd();
  pos += 19;
  }
  dataOut.do.onlyValidate = dataIn.substring(pos, pos + 1).trimEnd() === "1";
  pos += 1;

  return dataOut;
}

/* eslint-enable */

/* eslint-disable */
// @ts-nocheck
// Module: ukgpchim
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
     * @default `0`
     */
    id: number
}

/**
 * Output interface
 */
export interface punchGeoLocationDS {
    /**
     * @size 10 digits
     * @precision 6 decimals
     * @default `0.0`
     */
    latitude: number,
    /**
     * @size 10 digits
     * @precision 6 decimals
     * @default `0.0`
     */
    longitude: number
}

/**
 * Output interface
 */
export interface punchesDS {
    /**
     */
    employee: employeeDS,
    /**
     */
    punchGeoLocation: punchGeoLocationDS,
    /**
     * @size 23 characters
     * @default `''`
     */
    enteredOnDtm: string,
    /**
     * @size 23 characters
     * @default `''`
     */
    punchDtm: string
}

/**
 * Output interface
 */
export interface PunchReq2 {
    /**
     */
    punches: Array<punchesDS>
}

/**
 * Convert PunchReq2 record to TypeScript object
 */
export function convertPunchReq2ToObject(dataIn: string): PunchReq2 {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.punches = [
    
  ];
  for (let i: number = 0; i < 2; ++i) {
  dataOut.punches[i] =   {
  
    };
  dataOut.punches[i].employee =   {
  
    };
  dataOut.punches[i].employee.id = Number(dataIn.substring(pos, pos + 8).trimEnd());
  pos += 8;
  dataOut.punches[i].punchGeoLocation =   {
  
    };
  dataOut.punches[i].punchGeoLocation.latitude = Number(dataIn.substring(pos, pos + 12).trimEnd());
  pos += 12;
  dataOut.punches[i].punchGeoLocation.longitude = Number(dataIn.substring(pos, pos + 12).trimEnd());
  pos += 12;
  dataOut.punches[i].enteredOnDtm = dataIn.substring(pos, pos + 23).trimEnd();
  pos += 23;
  dataOut.punches[i].punchDtm = dataIn.substring(pos, pos + 23).trimEnd();
  pos += 23;
  }

  return dataOut;
}

/* eslint-enable */

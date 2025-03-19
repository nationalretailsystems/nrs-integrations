/* eslint-disable */
// @ts-nocheck
// Module: lytxdrvs
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
export interface DrvsReq {
    /**
     * @size 6 characters
     */
    drivername: string
}

/**
 * Convert DrvsReq record to TypeScript object
 */
export function convertDrvsReqToObject(dataIn: string): DrvsReq {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.drivername = dataIn.substring(pos, pos + 6).trimEnd();
  pos += 6;

  return dataOut;
}

/**
 * Input interface
 */
export interface DrvsRes {
    /**
     * @size 30 characters
     */
    driverid: string
}

/**
 * Convert JavaScript object to DrvsRes record
 */
export function convertObjectToDrvsRes(dataIn: DrvsRes): string {
  let dataOut: string = "";

  dataOut += dataIn?.driverid?.substring(0, 30)?.padEnd(30) ?? missingInput(`dataIn.driverid`, "char", dataIn?.driverid);

  return dataOut;
}

/* eslint-enable */

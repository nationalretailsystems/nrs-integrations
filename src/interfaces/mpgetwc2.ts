/* eslint-disable */
// @ts-nocheck
// Module: mpgetwc2
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
export interface responseDS {
    /**
     * @size 10 digits
     * @default `0`
     */
    workOrderKey: number,
    /**
     * @size 10 digits
     * @default `0`
     */
    workOrderNumber: number,
    /**
     * @size 24 characters
     * @default ``
     */
    assetId: string,
    /**
     * @size 50 characters
     * @default ``
     */
    purpose: string,
    /**
     * @size 24 characters
     * @default ``
     */
    budgetId: string,
    /**
     * @size 24 characters
     * @default ``
     */
    statusId: string,
    /**
     * @default ``
     */
    dateCreated: Date,
    /**
     * @default ``
     */
    dateCompleted: Date
}

/**
 * Output interface
 */
export interface ReqWo2Chg {
    /**
     */
    since: Date,
    /**
     * @size 24 characters
     */
    assetId: string
}

/**
 * Convert ReqWo2Chg record to TypeScript object
 */
export function convertReqWo2ChgToObject(dataIn: string): ReqWo2Chg {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.since = fromIbmiDate(dataIn.substring(pos, pos + 10).trimEnd());
  pos += 10;
  dataOut.assetId = dataIn.substring(pos, pos + 24).trimEnd();
  pos += 24;

  return dataOut;
}

/**
 * Input interface
 */
export interface ResWo2Chg {
    /**
     */
    wrkorddata: Array<responseDS>
}

/**
 * Convert JavaScript object to ResWo2Chg record
 */
export function convertObjectToResWo2Chg(dataIn: ResWo2Chg): string {
  let dataOut: string = "";

  for (let i: number = 0; i < 2; ++i) {
  dataOut += dataIn?.wrkorddata[i]?.workOrderKey?.toFixed()?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  dataOut += dataIn?.wrkorddata[i]?.workOrderNumber?.toFixed()?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  dataOut += dataIn?.wrkorddata[i]?.assetId?.substring(0, 24)?.padEnd(24) ?? "".substring(0, 24).padEnd(24);
  dataOut += dataIn?.wrkorddata[i]?.purpose?.substring(0, 50)?.padEnd(50) ?? "".substring(0, 50).padEnd(50);
  dataOut += dataIn?.wrkorddata[i]?.budgetId?.substring(0, 24)?.padEnd(24) ?? "".substring(0, 24).padEnd(24);
  dataOut += dataIn?.wrkorddata[i]?.statusId?.substring(0, 24)?.padEnd(24) ?? "".substring(0, 24).padEnd(24);
  dataOut += (dataIn?.wrkorddata[i]?.dateCreated !== undefined ? toIbmiDate(dataIn?.wrkorddata[i]?.dateCreated) : "".substring(0, 10).padEnd(10));
  dataOut += (dataIn?.wrkorddata[i]?.dateCompleted !== undefined ? toIbmiDate(dataIn?.wrkorddata[i]?.dateCompleted) : "".substring(0, 10).padEnd(10));
  }

  return dataOut;
}

/* eslint-enable */

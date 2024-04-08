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
export interface ReqWo2Chg {
    /**
     */
    since: Date,
    /**
     * @size 24 characters
     */
    assetId: string,
    /**
     * @size 80 characters
     */
    purpose: string
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
  dataOut.purpose = dataIn.substring(pos, pos + 80).trimEnd();
  pos += 80;

  return dataOut;
}

/**
 * Input interface
 */
export interface ResWo2Chg {
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
     * @default `0001-01-01-00.00.00.000`
     */
    dateCompleted: Date
}

/**
 * Convert JavaScript object to ResWo2Chg record
 */
export function convertObjectToResWo2Chg(dataIn: ResWo2Chg): string {
  let dataOut: string = "";

  dataOut += dataIn?.workOrderKey?.toFixed()?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  dataOut += dataIn?.workOrderNumber?.toFixed()?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  dataOut += dataIn?.assetId?.substring(0, 24)?.padEnd(24) ?? "".substring(0, 24).padEnd(24);
  dataOut += dataIn?.purpose?.substring(0, 50)?.padEnd(50) ?? "".substring(0, 50).padEnd(50);
  dataOut += dataIn?.budgetId?.substring(0, 24)?.padEnd(24) ?? "".substring(0, 24).padEnd(24);
  dataOut += dataIn?.statusId?.substring(0, 24)?.padEnd(24) ?? "".substring(0, 24).padEnd(24);
  dataOut += (dataIn?.dateCreated !== undefined ? toIbmiTimestamp(dataIn?.dateCreated, 26) : "".substring(0, 26).padEnd(26));
  dataOut += (dataIn?.dateCompleted !== undefined ? toIbmiTimestamp(dataIn?.dateCompleted, 26) : "0001-01-01-00.00.00.000".substring(0, 26).padEnd(26));

  return dataOut;
}

/* eslint-enable */

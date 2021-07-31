/* eslint-disable */
// @ts-nocheck
// Module: mpputlog
// Generated source -- do not modify

import { ibmiConversions } from "@eradani-inc/ec-client";
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
export interface ReqAddLog {
    /**
     * @size 24 characters
     */
    assetId: string,
    /**
     */
    postDate: Date,
    /**
     * @size 24 characters
     */
    logType: string,
    /**
     * @size 11 digits
     * @precision 2 decimals
     */
    logValue: number,
    /**
     */
    ignoreWarnings: boolean,
    /**
     * @size 24 characters
     */
    operator: string,
    /**
     * @size 24 characters
     */
    warehouse: string,
    /**
     * @size 24 characters
     */
    budget: string,
    /**
     * @size 11 digits
     * @precision 2 decimals
     */
    cost: number,
    /**
     * @size 36 characters
     */
    partId: string,
    /**
     * @size 24 characters
     */
    site: string
}

/**
 * Convert ReqAddLog record to TypeScript object
 */
export function convertReqAddLogToObject(dataIn: string): ReqAddLog {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.assetId = dataIn.substring(pos, pos + 24).trimEnd();
  pos += 24;
  dataOut.postDate = fromIbmiDate(dataIn.substring(pos, pos + 10).trimEnd());
  pos += 10;
  dataOut.logType = dataIn.substring(pos, pos + 24).trimEnd();
  pos += 24;
  dataOut.logValue = Number(dataIn.substring(pos, pos + 13).trimEnd());
  pos += 13;
  dataOut.ignoreWarnings = dataIn.substring(pos, pos + 1).trimEnd() === "1";
  pos += 1;
  dataOut.operator = dataIn.substring(pos, pos + 24).trimEnd();
  pos += 24;
  dataOut.warehouse = dataIn.substring(pos, pos + 24).trimEnd();
  pos += 24;
  dataOut.budget = dataIn.substring(pos, pos + 24).trimEnd();
  pos += 24;
  dataOut.cost = Number(dataIn.substring(pos, pos + 13).trimEnd());
  pos += 13;
  dataOut.partId = dataIn.substring(pos, pos + 36).trimEnd();
  pos += 36;
  dataOut.site = dataIn.substring(pos, pos + 24).trimEnd();
  pos += 24;

  return dataOut;
}

/**
 * Input interface
 */
export interface AddLogRes {
    /**
     * @size 20 digits
     */
    logId: number,
    /**
     * @size 24 characters
     */
    assetId: string,
    /**
     */
    postDate: Date,
    /**
     * @size 24 characters
     */
    logType: string,
    /**
     * @size 11 digits
     * @precision 2 decimals
     */
    logValue: number,
    /**
     * @size 24 characters
     */
    operator: string,
    /**
     * @size 24 characters
     */
    warehouseId: string,
    /**
     * @size 24 characters
     */
    budgetId: string,
    /**
     * @size 11 digits
     * @precision 2 decimals
     */
    cost: number,
    /**
     * @size 36 characters
     */
    partId: string,
    /**
     * @size 24 characters
     */
    site: string
}

/**
 * Convert JavaScript object to AddLogRes record
 */
export function convertObjectToAddLogRes(dataIn: AddLogRes): string {
  let dataOut: string = "";

  dataOut += dataIn.logId.toFixed().substring(0, 21).padEnd(21);
  dataOut += dataIn.assetId.substring(0, 24).padEnd(24);
  dataOut += toIbmiDate(dataIn.postDate);
  dataOut += dataIn.logType.substring(0, 24).padEnd(24);
  dataOut += dataIn.logValue.toFixed(2).substring(0, 13).padEnd(13);
  dataOut += dataIn.operator.substring(0, 24).padEnd(24);
  dataOut += dataIn.warehouseId.substring(0, 24).padEnd(24);
  dataOut += dataIn.budgetId.substring(0, 24).padEnd(24);
  dataOut += dataIn.cost.toFixed(2).substring(0, 13).padEnd(13);
  dataOut += dataIn.partId.substring(0, 36).padEnd(36);
  dataOut += dataIn.site.substring(0, 24).padEnd(24);

  return dataOut;
}

/* eslint-enable */

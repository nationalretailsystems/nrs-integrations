/* eslint-disable */
// @ts-nocheck
// Module: mpgetdown
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
export interface downitemsDS {
    /**
     * @size 50 characters
     * @default ``
     */
    contactName: string,
    /**
     * @size 10 digits
     * @default `0`
     */
    contactKey: number,
    /**
     * @size 10 digits
     * @default `0`
     */
    downTimeLogKey: number,
    /**
     * @size 10 digits
     * @default `0`
     */
    downTimeItemKey: number
}

/**
 * Output interface
 */
export interface downTimeDS {
    /**
     * @size 10 digits
     * @default `0`
     */
    downTimeLogKey: number,
    /**
     * @size 10 digits
     * @default `0`
     */
    assetKey: number,
    /**
     * @size 10 digits
     * @default `0`
     */
    downTimeOrigin: number,
    /**
     * @size 100 characters
     * @default ``
     */
    note: string,
    /**
     * @size 24 characters
     * @default ``
     */
    timeDown: string,
    /**
     * @size 24 characters
     * @default ``
     */
    timeUp: string,
    /**
     * @size 10 digits
     * @default `0`
     */
    totalDownTime: number,
    /**
     */
    downTimeItems: Array<downitemsDS>
}

/**
 * Output interface
 */
export interface ReqDown {
    /**
     * @size 5 digits
     */
    skiprecs: number
}

/**
 * Convert ReqDown record to TypeScript object
 */
export function convertReqDownToObject(dataIn: string): ReqDown {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.skiprecs = Number(dataIn.substring(pos, pos + 6).trimEnd());
  pos += 6;

  return dataOut;
}

/**
 * Input interface
 */
export interface ResDown {
    /**
     */
    downTime: Array<downTimeDS>
}

/**
 * Convert JavaScript object to ResDown record
 */
export function convertObjectToResDown(dataIn: ResDown): string {
  let dataOut: string = "";

  for (let i: number = 0; i < 100; ++i) {
  dataOut += dataIn?.downTime[i]?.downTimeLogKey?.toFixed()?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  dataOut += dataIn?.downTime[i]?.assetKey?.toFixed()?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  dataOut += dataIn?.downTime[i]?.downTimeOrigin?.toFixed()?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  dataOut += dataIn?.downTime[i]?.note?.substring(0, 100)?.padEnd(100) ?? "".substring(0, 100).padEnd(100);
  dataOut += dataIn?.downTime[i]?.timeDown?.substring(0, 24)?.padEnd(24) ?? "".substring(0, 24).padEnd(24);
  dataOut += dataIn?.downTime[i]?.timeUp?.substring(0, 24)?.padEnd(24) ?? "".substring(0, 24).padEnd(24);
  dataOut += dataIn?.downTime[i]?.totalDownTime?.toFixed()?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  for (let k: number = 0; k < 5; ++k) {
  dataOut += dataIn?.downTime[i]?.downTimeItems[k]?.contactName?.substring(0, 50)?.padEnd(50) ?? "".substring(0, 50).padEnd(50);
  dataOut += dataIn?.downTime[i]?.downTimeItems[k]?.contactKey?.toFixed()?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  dataOut += dataIn?.downTime[i]?.downTimeItems[k]?.downTimeLogKey?.toFixed()?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  dataOut += dataIn?.downTime[i]?.downTimeItems[k]?.downTimeItemKey?.toFixed()?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  }
  }

  return dataOut;
}

/* eslint-enable */

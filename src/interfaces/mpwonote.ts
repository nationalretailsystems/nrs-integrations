/* eslint-disable */
// @ts-nocheck
// Module: mpwonote
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
export interface NotArrDS {
    /**
     * @size 10 digits
     * @default `0`
     */
    noteKey: number,
    /**
     * @size 10 digits
     * @default `0`
     */
    workOrderNumber: number,
    /**
     * @size 10 digits
     * @default `0`
     */
    workOrderKey: number,
    /**
     * @size 20 characters
     * @default ` `
     */
    contactID: string,
    /**
     * @size 30 characters
     * @default ` `
     */
    modifiedDate: string,
    /**
     * @size 100 characters
     * @default ` `
     */
    note: string,
    /**
     * @default `false`
     */
    isPrivateNote: boolean,
    /**
     * @size 10 characters
     * @default ` `
     */
    serviceKey: string,
    /**
     * @size 10 characters
     * @default ` `
     */
    serviceCode: string
}

/**
 * Output interface
 */
export interface ReqNotes {
    /**
     * @size 10 digits
     */
    wokey: number
}

/**
 * Convert ReqNotes record to TypeScript object
 */
export function convertReqNotesToObject(dataIn: string): ReqNotes {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.wokey = Number(dataIn.substring(pos, pos + 11).trimEnd());
  pos += 11;

  return dataOut;
}

/**
 * Input interface
 */
export interface ResNotes {
    /**
     */
    notesdata: Array<NotArrDS>
}

/**
 * Convert JavaScript object to ResNotes record
 */
export function convertObjectToResNotes(dataIn: ResNotes): string {
  let dataOut: string = "";

  for (let i: number = 0; i < 10; ++i) {
  dataOut += dataIn?.notesdata[i]?.noteKey?.toFixed()?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  dataOut += dataIn?.notesdata[i]?.workOrderNumber?.toFixed()?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  dataOut += dataIn?.notesdata[i]?.workOrderKey?.toFixed()?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  dataOut += dataIn?.notesdata[i]?.contactID?.substring(0, 20)?.padEnd(20) ?? " ".substring(0, 20).padEnd(20);
  dataOut += dataIn?.notesdata[i]?.modifiedDate?.substring(0, 30)?.padEnd(30) ?? " ".substring(0, 30).padEnd(30);
  dataOut += dataIn?.notesdata[i]?.note?.substring(0, 100)?.padEnd(100) ?? " ".substring(0, 100).padEnd(100);
  dataOut += (dataIn?.notesdata[i]?.isPrivateNote !== undefined ? (dataIn?.notesdata[i]?.isPrivateNote ? "1" : "0") : "0");
  dataOut += dataIn?.notesdata[i]?.serviceKey?.substring(0, 10)?.padEnd(10) ?? " ".substring(0, 10).padEnd(10);
  dataOut += dataIn?.notesdata[i]?.serviceCode?.substring(0, 10)?.padEnd(10) ?? " ".substring(0, 10).padEnd(10);
  }

  return dataOut;
}

/* eslint-enable */

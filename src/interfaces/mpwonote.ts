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
     */
    noteKey: number,
    /**
     * @size 10 digits
     */
    workOrderNumber: number,
    /**
     * @size 10 digits
     */
    workOrderKey: number,
    /**
     * @size 20 characters
     */
    contactID: string,
    /**
     * @size 30 characters
     */
    modifiedDate: string,
    /**
     * @size 100 characters
     */
    note: string,
    /**
     * @size 5 characters
     */
    isPrivateNote: string,
    /**
     * @size 10 characters
     */
    serviceKey: string,
    /**
     * @size 10 characters
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
  dataOut += dataIn?.notesdata[i]?.noteKey?.toFixed()?.substring(0, 11)?.padEnd(11) ?? missingInput(`dataIn.notesdata[${i}].noteKey`, "integer", dataIn?.notesdata[i]?.noteKey);
  dataOut += dataIn?.notesdata[i]?.workOrderNumber?.toFixed()?.substring(0, 11)?.padEnd(11) ?? missingInput(`dataIn.notesdata[${i}].workOrderNumber`, "integer", dataIn?.notesdata[i]?.workOrderNumber);
  dataOut += dataIn?.notesdata[i]?.workOrderKey?.toFixed()?.substring(0, 11)?.padEnd(11) ?? missingInput(`dataIn.notesdata[${i}].workOrderKey`, "integer", dataIn?.notesdata[i]?.workOrderKey);
  dataOut += dataIn?.notesdata[i]?.contactID?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.notesdata[${i}].contactID`, "char", dataIn?.notesdata[i]?.contactID);
  dataOut += dataIn?.notesdata[i]?.modifiedDate?.substring(0, 30)?.padEnd(30) ?? missingInput(`dataIn.notesdata[${i}].modifiedDate`, "char", dataIn?.notesdata[i]?.modifiedDate);
  dataOut += dataIn?.notesdata[i]?.note?.substring(0, 100)?.padEnd(100) ?? missingInput(`dataIn.notesdata[${i}].note`, "char", dataIn?.notesdata[i]?.note);
  dataOut += dataIn?.notesdata[i]?.isPrivateNote?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.notesdata[${i}].isPrivateNote`, "char", dataIn?.notesdata[i]?.isPrivateNote);
  dataOut += dataIn?.notesdata[i]?.serviceKey?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.notesdata[${i}].serviceKey`, "char", dataIn?.notesdata[i]?.serviceKey);
  dataOut += dataIn?.notesdata[i]?.serviceCode?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.notesdata[${i}].serviceCode`, "char", dataIn?.notesdata[i]?.serviceCode);
  }

  return dataOut;
}

/* eslint-enable */

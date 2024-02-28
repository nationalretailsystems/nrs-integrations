/* eslint-disable */
// @ts-nocheck
// Module: hrsdupld
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
export interface uprequest {
    /**
     * @size 100 characters
     */
    filename: string,
    /**
     * @size 100 characters
     */
    location: string
}

/**
 * Convert uprequest record to TypeScript object
 */
export function convertuprequestToObject(dataIn: string): uprequest {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.filename = dataIn.substring(pos, pos + 100).trimEnd();
  pos += 100;
  dataOut.location = dataIn.substring(pos, pos + 100).trimEnd();
  pos += 100;

  return dataOut;
}

/**
 * Input interface
 */
export interface upresults {
    /**
     * @size 50 characters
     */
    filename: string,
    /**
     * @size 100 characters
     */
    file_id: string
}

/**
 * Convert JavaScript object to upresults record
 */
export function convertObjectToupresults(dataIn: upresults): string {
  let dataOut: string = "";

  dataOut += dataIn?.filename?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.filename`, "char", dataIn?.filename);
  dataOut += dataIn?.file_id?.substring(0, 100)?.padEnd(100) ?? missingInput(`dataIn.file_id`, "char", dataIn?.file_id);

  return dataOut;
}

/* eslint-enable */

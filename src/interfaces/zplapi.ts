/* eslint-disable */
// @ts-nocheck
// Module: zplapi
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

/**
 * Output interface
 */
export interface ZplReq {
    /**
     * @size 3000 characters
     */
    zpl: string,
    /**
     * @size 100 characters
     */
    filename: string
}

/**
 * Convert ZplReq record to TypeScript object
 */
export function convertZplReqToObject(dataIn: string): ZplReq {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.zpl = dataIn.substring(pos, pos + 3000).trimEnd();
  pos += 3000;
  dataOut.filename = dataIn.substring(pos, pos + 100).trimEnd();
  pos += 100;

  return dataOut;
}

/* eslint-enable */

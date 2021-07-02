/* eslint-disable */
// @ts-nocheck
// Module: skybtz
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
export interface GetMileages {
    /**
     * @size 256 characters
     */
    filename: string
}

/**
 * Convert GetMileages record to TypeScript object
 */
export function convertGetMileagesToObject(dataIn: string): GetMileages {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.filename = dataIn.substring(pos, pos + 256).trimEnd();
  pos += 256;

  return dataOut;
}

/* eslint-enable */

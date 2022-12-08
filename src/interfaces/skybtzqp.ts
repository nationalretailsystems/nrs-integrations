/* eslint-disable */
// @ts-nocheck
// Module: skybtzqp
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
export interface GetTrlPos {
    /**
     * @size 20 characters
     */
    assetid: string
}

/**
 * Convert GetTrlPos record to TypeScript object
 */
export function convertGetTrlPosToObject(dataIn: string): GetTrlPos {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.assetid = dataIn.substring(pos, pos + 20).trimEnd();
  pos += 20;

  return dataOut;
}

/* eslint-enable */

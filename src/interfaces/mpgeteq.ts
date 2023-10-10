/* eslint-disable */
// @ts-nocheck
// Module: mpgeteq
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
export interface AssetsDS {
    /**
     * @size 10 digits
     * @default `0`
     */
    assetKey: number,
    /**
     * @size 10 characters
     * @default ``
     */
    assetId: string
}

/**
 * Output interface
 */
export interface ReqAssetCh {
    /**
     * @size 10 characters
     */
    assetid: string
}

/**
 * Convert ReqAssetCh record to TypeScript object
 */
export function convertReqAssetChToObject(dataIn: string): ReqAssetCh {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.assetid = dataIn.substring(pos, pos + 10).trimEnd();
  pos += 10;

  return dataOut;
}

/**
 * Input interface
 */
export interface ResAssetCh {
    /**
     */
    asset: Array<AssetsDS>
}

/**
 * Convert JavaScript object to ResAssetCh record
 */
export function convertObjectToResAssetCh(dataIn: ResAssetCh): string {
  let dataOut: string = "";

  for (let i: number = 0; i < 2; ++i) {
  dataOut += dataIn?.asset[i]?.assetKey?.toFixed()?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  dataOut += dataIn?.asset[i]?.assetId?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  }

  return dataOut;
}

/* eslint-enable */

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
export interface CustFldsDS {
    /**
     * @size 10 digits
     * @default `0`
     */
    key: number,
    /**
     * @size 10 digits
     * @default `0`
     */
    customFieldKey: number,
    /**
     * @size 24 characters
     * @default ``
     */
    fieldName: string,
    /**
     * @size 100 characters
     * @default ``
     */
    value: string,
    /**
     * @size 19 characters
     * @default ``
     */
    modificationDate: string,
    /**
     * @size 10 characters
     * @default ``
     */
    updateType: string
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
     * @size 10 digits
     */
    assetKey: number,
    /**
     * @size 50 characters
     * @default ``
     */
    entityName: string,
    /**
     * @size 24 characters
     * @default ``
     */
    assetId: string,
    /**
     * @size 24 characters
     * @default ``
     */
    parentAssetId: string,
    /**
     * @size 50 characters
     * @default ``
     */
    description: string,
    /**
     * @size 10 digits
     * @default `0`
     */
    groupKey: number,
    /**
     * @size 24 characters
     * @default ``
     */
    groupId: string,
    /**
     * @size 24 characters
     * @default ``
     */
    categoryId: string,
    /**
     * @size 24 characters
     * @default ``
     */
    typeId: string,
    /**
     * @size 24 characters
     * @default ``
     */
    budgetGroupId: string,
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
     * @size 50 characters
     * @default ``
     */
    barcode: string,
    /**
     * @size 24 characters
     * @default ``
     */
    manufacturer: string,
    /**
     * @size 32 characters
     * @default ``
     */
    model: string,
    /**
     * @size 32 characters
     * @default ``
     */
    serialNumber: string,
    /**
     * @size 50 characters
     * @default ``
     */
    customer: string,
    /**
     * @size 10 digits
     * @default `0`
     */
    customerKey: number,
    /**
     * @size 19 characters
     * @default ``
     */
    purchaseDate: string,
    /**
     * @size 15 digits
     * @precision 2 decimals
     * @default `0`
     */
    purchaseCost: number,
    /**
     */
    customFields: Array<CustFldsDS>
}

/**
 * Convert JavaScript object to ResAssetCh record
 */
export function convertObjectToResAssetCh(dataIn: ResAssetCh): string {
  let dataOut: string = "";

  dataOut += dataIn?.assetKey?.toFixed()?.substring(0, 11)?.padEnd(11) ?? missingInput(`dataIn.assetKey`, "integer", dataIn?.assetKey);
  dataOut += dataIn?.entityName?.substring(0, 50)?.padEnd(50) ?? "".substring(0, 50).padEnd(50);
  dataOut += dataIn?.assetId?.substring(0, 24)?.padEnd(24) ?? "".substring(0, 24).padEnd(24);
  dataOut += dataIn?.parentAssetId?.substring(0, 24)?.padEnd(24) ?? "".substring(0, 24).padEnd(24);
  dataOut += dataIn?.description?.substring(0, 50)?.padEnd(50) ?? "".substring(0, 50).padEnd(50);
  dataOut += dataIn?.groupKey?.toFixed()?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  dataOut += dataIn?.groupId?.substring(0, 24)?.padEnd(24) ?? "".substring(0, 24).padEnd(24);
  dataOut += dataIn?.categoryId?.substring(0, 24)?.padEnd(24) ?? "".substring(0, 24).padEnd(24);
  dataOut += dataIn?.typeId?.substring(0, 24)?.padEnd(24) ?? "".substring(0, 24).padEnd(24);
  dataOut += dataIn?.budgetGroupId?.substring(0, 24)?.padEnd(24) ?? "".substring(0, 24).padEnd(24);
  dataOut += dataIn?.budgetId?.substring(0, 24)?.padEnd(24) ?? "".substring(0, 24).padEnd(24);
  dataOut += dataIn?.statusId?.substring(0, 24)?.padEnd(24) ?? "".substring(0, 24).padEnd(24);
  dataOut += dataIn?.barcode?.substring(0, 50)?.padEnd(50) ?? "".substring(0, 50).padEnd(50);
  dataOut += dataIn?.manufacturer?.substring(0, 24)?.padEnd(24) ?? "".substring(0, 24).padEnd(24);
  dataOut += dataIn?.model?.substring(0, 32)?.padEnd(32) ?? "".substring(0, 32).padEnd(32);
  dataOut += dataIn?.serialNumber?.substring(0, 32)?.padEnd(32) ?? "".substring(0, 32).padEnd(32);
  dataOut += dataIn?.customer?.substring(0, 50)?.padEnd(50) ?? "".substring(0, 50).padEnd(50);
  dataOut += dataIn?.customerKey?.toFixed()?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  dataOut += dataIn?.purchaseDate?.substring(0, 19)?.padEnd(19) ?? "".substring(0, 19).padEnd(19);
  dataOut += dataIn?.purchaseCost?.toFixed(2)?.substring(0, 17)?.padEnd(17) ?? "0".substring(0, 17).padEnd(17);
  for (let i: number = 0; i < 100; ++i) {
  dataOut += dataIn?.customFields[i]?.key?.toFixed()?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  dataOut += dataIn?.customFields[i]?.customFieldKey?.toFixed()?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  dataOut += dataIn?.customFields[i]?.fieldName?.substring(0, 24)?.padEnd(24) ?? "".substring(0, 24).padEnd(24);
  dataOut += dataIn?.customFields[i]?.value?.substring(0, 100)?.padEnd(100) ?? "".substring(0, 100).padEnd(100);
  dataOut += dataIn?.customFields[i]?.modificationDate?.substring(0, 19)?.padEnd(19) ?? "".substring(0, 19).padEnd(19);
  dataOut += dataIn?.customFields[i]?.updateType?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  }

  return dataOut;
}

/* eslint-enable */

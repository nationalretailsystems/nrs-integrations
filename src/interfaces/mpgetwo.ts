/* eslint-disable */
// @ts-nocheck
// Module: mpgetwo
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
export interface customFldsDs {
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
     * @size 50 characters
     * @default ``
     */
    value: string
}

/**
 * Output interface
 */
export interface ReqGetWo {
    /**
     * @size 10 digits
     * @precision 0 decimals
     */
    workOrder: number
}

/**
 * Convert ReqGetWo record to TypeScript object
 */
export function convertReqGetWoToObject(dataIn: string): ReqGetWo {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.workOrder = Number(dataIn.substring(pos, pos + 12).trimEnd());
  pos += 12;

  return dataOut;
}

/**
 * Input interface
 */
export interface ResGetWo {
    /**
     * @size 10 digits
     * @default `0`
     */
    workOrderKey: number,
    /**
     * @size 10 digits
     * @default `0`
     */
    workOrderNumber: number,
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
    workTypeId: string,
    /**
     * @size 24 characters
     * @default ``
     */
    purpose: string,
    /**
     * @size 24 characters
     * @default ``
     */
    failureCode: string,
    /**
     * @size 24 characters
     * @default ``
     */
    priorityId: string,
    /**
     * @size 50 characters
     * @default ``
     */
    assigned: string,
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
     * @size 19 characters
     * @default ``
     */
    dateCreated: string,
    /**
     * @size 19 characters
     * @default ``
     */
    dateCompleted: string,
    /**
     * @size 19 characters
     * @default ``
     */
    dateDue: string,
    /**
     * @size 19 characters
     * @default ``
     */
    scheduledDate: string,
    /**
     * @size 19 characters
     * @default ``
     */
    estimatedCompletion: string,
    /**
     * @size 24 characters
     * @default ``
     */
    customer: string,
    /**
     * @size 10 digits
     * @default `0`
     */
    customerKey: number,
    /**
     * @size 10 digits
     * @default `0`
     */
    requestId: number,
    /**
     * @size 10 digits
     * @default `0`
     */
    inspectionId: number,
    /**
     * @size 10 digits
     * @default `0`
     */
    invoiceNumber: number,
    /**
     * @default `true`
     */
    workOrderActive: boolean,
    /**
     * @size 11 digits
     * @precision 2 decimals
     * @default `0`
     */
    partsCost: number,
    /**
     * @size 11 digits
     * @precision 2 decimals
     * @default `0`
     */
    laborCost: number,
    /**
     * @size 11 digits
     * @precision 2 decimals
     * @default `0`
     */
    otherCost: number,
    /**
     * @size 11 digits
     * @precision 2 decimals
     * @default `0`
     */
    totalCosts: number,
    /**
     * @size 24 characters
     * @default ``
     */
    scheduleId: string,
    /**
     * @size 24 characters
     * @default ``
     */
    vendorId: string,
    /**
     * @size 50 characters
     * @default ``
     */
    createBy: string,
    /**
     */
    customFields: Array<customFldsDs>
}

/**
 * Convert JavaScript object to ResGetWo record
 */
export function convertObjectToResGetWo(dataIn: ResGetWo): string {
  let dataOut: string = "";

  dataOut += dataIn?.workOrderKey?.toFixed()?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  dataOut += dataIn?.workOrderNumber?.toFixed()?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  dataOut += dataIn?.entityName?.substring(0, 50)?.padEnd(50) ?? "".substring(0, 50).padEnd(50);
  dataOut += dataIn?.assetId?.substring(0, 24)?.padEnd(24) ?? "".substring(0, 24).padEnd(24);
  dataOut += dataIn?.workTypeId?.substring(0, 24)?.padEnd(24) ?? "".substring(0, 24).padEnd(24);
  dataOut += dataIn?.purpose?.substring(0, 24)?.padEnd(24) ?? "".substring(0, 24).padEnd(24);
  dataOut += dataIn?.failureCode?.substring(0, 24)?.padEnd(24) ?? "".substring(0, 24).padEnd(24);
  dataOut += dataIn?.priorityId?.substring(0, 24)?.padEnd(24) ?? "".substring(0, 24).padEnd(24);
  dataOut += dataIn?.assigned?.substring(0, 50)?.padEnd(50) ?? "".substring(0, 50).padEnd(50);
  dataOut += dataIn?.budgetId?.substring(0, 24)?.padEnd(24) ?? "".substring(0, 24).padEnd(24);
  dataOut += dataIn?.statusId?.substring(0, 24)?.padEnd(24) ?? "".substring(0, 24).padEnd(24);
  dataOut += dataIn?.dateCreated?.substring(0, 19)?.padEnd(19) ?? "".substring(0, 19).padEnd(19);
  dataOut += dataIn?.dateCompleted?.substring(0, 19)?.padEnd(19) ?? "".substring(0, 19).padEnd(19);
  dataOut += dataIn?.dateDue?.substring(0, 19)?.padEnd(19) ?? "".substring(0, 19).padEnd(19);
  dataOut += dataIn?.scheduledDate?.substring(0, 19)?.padEnd(19) ?? "".substring(0, 19).padEnd(19);
  dataOut += dataIn?.estimatedCompletion?.substring(0, 19)?.padEnd(19) ?? "".substring(0, 19).padEnd(19);
  dataOut += dataIn?.customer?.substring(0, 24)?.padEnd(24) ?? "".substring(0, 24).padEnd(24);
  dataOut += dataIn?.customerKey?.toFixed()?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  dataOut += dataIn?.requestId?.toFixed()?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  dataOut += dataIn?.inspectionId?.toFixed()?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  dataOut += dataIn?.invoiceNumber?.toFixed()?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  dataOut += (dataIn?.workOrderActive !== undefined ? (dataIn?.workOrderActive ? "1" : "0") : "1");
  dataOut += dataIn?.partsCost?.toFixed(2)?.substring(0, 13)?.padEnd(13) ?? "0".substring(0, 13).padEnd(13);
  dataOut += dataIn?.laborCost?.toFixed(2)?.substring(0, 13)?.padEnd(13) ?? "0".substring(0, 13).padEnd(13);
  dataOut += dataIn?.otherCost?.toFixed(2)?.substring(0, 13)?.padEnd(13) ?? "0".substring(0, 13).padEnd(13);
  dataOut += dataIn?.totalCosts?.toFixed(2)?.substring(0, 13)?.padEnd(13) ?? "0".substring(0, 13).padEnd(13);
  dataOut += dataIn?.scheduleId?.substring(0, 24)?.padEnd(24) ?? "".substring(0, 24).padEnd(24);
  dataOut += dataIn?.vendorId?.substring(0, 24)?.padEnd(24) ?? "".substring(0, 24).padEnd(24);
  dataOut += dataIn?.createBy?.substring(0, 50)?.padEnd(50) ?? "".substring(0, 50).padEnd(50);
  for (let i: number = 0; i < 50; ++i) {
  dataOut += dataIn?.customFields[i]?.key?.toFixed()?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  dataOut += dataIn?.customFields[i]?.customFieldKey?.toFixed()?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  dataOut += dataIn?.customFields[i]?.fieldName?.substring(0, 24)?.padEnd(24) ?? "".substring(0, 24).padEnd(24);
  dataOut += dataIn?.customFields[i]?.value?.substring(0, 50)?.padEnd(50) ?? "".substring(0, 50).padEnd(50);
  }

  return dataOut;
}

/* eslint-enable */

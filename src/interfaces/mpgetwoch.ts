/* eslint-disable */
// @ts-nocheck
// Module: mpgetwoch
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

import eradaniConnect from "@eradani-inc/eradani-connect";
const { dataTypes } = eradaniConnect;

/**
 * Data structure
 */
  let customFldsDsFields: any = [
      {
      name: "key",
      type: new dataTypes.Integer(10)
    },
      {
      name: "customFieldKey",
      type: new dataTypes.Integer(10)
    },
      {
      name: "fieldName",
      type: new dataTypes.Char(24)
    },
      {
      name: "value",
      type: new dataTypes.Char(50)
    }
  ];

/**
 * Input interface
 */
export interface customFldsDsInput {
    /**
     * @size 10 digits
     */
    key: number | string,
    /**
     * @size 10 digits
     */
    customFieldKey: number | string,
    /**
     * @size 24 characters
     */
    fieldName: string,
    /**
     * @size 50 characters
     */
    value: string
}

/**
 * Output interface
 */
export interface customFldsDs {
    /**
     * @size 10 digits
     */
    key: number,
    /**
     * @size 10 digits
     */
    customFieldKey: number,
    /**
     * @size 24 characters
     */
    fieldName: string,
    /**
     * @size 50 characters
     */
    value: string
}

/**
 * Input interface
 */
export interface ResWoChg {
    /**
     * @size 10 digits
     */
    workOrderKey: number,
    /**
     * @size 10 digits
     */
    workOrderNumber: number,
    /**
     * @size 50 characters
     */
    entityName: string,
    /**
     * @size 24 characters
     */
    assetId: string,
    /**
     * @size 24 characters
     */
    workTypeId: string,
    /**
     * @size 24 characters
     */
    purpose: string,
    /**
     * @size 24 characters
     */
    failureCode: string,
    /**
     * @size 24 characters
     */
    priorityId: string,
    /**
     * @size 50 characters
     */
    assigned: string,
    /**
     * @size 24 characters
     */
    budgetId: string,
    /**
     * @size 24 characters
     */
    statusId: string,
    /**
     */
    dateCreated: Date,
    /**
     */
    dateCompleted: Date,
    /**
     */
    dateDue: Date,
    /**
     */
    scheduledDate: Date,
    /**
     */
    estimatedCompletion: Date,
    /**
     * @size 24 characters
     */
    customer: string,
    /**
     * @size 10 digits
     */
    customerKey: number,
    /**
     * @size 10 digits
     */
    requestId: number,
    /**
     * @size 10 digits
     */
    inspectionId: number,
    /**
     * @size 10 digits
     */
    invoiceNumber: number,
    /**
     */
    workOrderActive: boolean,
    /**
     * @size 11 digits
     * @precision 2 decimals
     */
    partsCost: number,
    /**
     * @size 11 digits
     * @precision 2 decimals
     */
    laborCost: number,
    /**
     * @size 11 digits
     * @precision 2 decimals
     */
    otherCost: number,
    /**
     * @size 11 digits
     * @precision 2 decimals
     */
    totalCosts: number,
    /**
     * @size 24 characters
     */
    scheduledId: string,
    /**
     */
    customFlds: customFldsDs
}

/**
 * Convert JavaScript object to ResWoChg record
 */
export function convertObjectToResWoChg(dataIn: ResWoChg): string {
  let dataOut: string = "";

  dataOut += dataIn.workOrderKey.toFixed().substring(0, 11).padEnd(11);
  dataOut += dataIn.workOrderNumber.toFixed().substring(0, 11).padEnd(11);
  dataOut += dataIn.entityName.substring(0, 50).padEnd(50);
  dataOut += dataIn.assetId.substring(0, 24).padEnd(24);
  dataOut += dataIn.workTypeId.substring(0, 24).padEnd(24);
  dataOut += dataIn.purpose.substring(0, 24).padEnd(24);
  dataOut += dataIn.failureCode.substring(0, 24).padEnd(24);
  dataOut += dataIn.priorityId.substring(0, 24).padEnd(24);
  dataOut += dataIn.assigned.substring(0, 50).padEnd(50);
  dataOut += dataIn.budgetId.substring(0, 24).padEnd(24);
  dataOut += dataIn.statusId.substring(0, 24).padEnd(24);
  dataOut += toIbmiDate(dataIn.dateCreated);
  dataOut += toIbmiDate(dataIn.dateCompleted);
  dataOut += toIbmiDate(dataIn.dateDue);
  dataOut += toIbmiDate(dataIn.scheduledDate);
  dataOut += toIbmiDate(dataIn.estimatedCompletion);
  dataOut += dataIn.customer.substring(0, 24).padEnd(24);
  dataOut += dataIn.customerKey.toFixed().substring(0, 11).padEnd(11);
  dataOut += dataIn.requestId.toFixed().substring(0, 11).padEnd(11);
  dataOut += dataIn.inspectionId.toFixed().substring(0, 11).padEnd(11);
  dataOut += dataIn.invoiceNumber.toFixed().substring(0, 11).padEnd(11);
  dataOut += (dataIn.workOrderActive ? "1" : "0");
  dataOut += dataIn.partsCost.toFixed(2).substring(0, 13).padEnd(13);
  dataOut += dataIn.laborCost.toFixed(2).substring(0, 13).padEnd(13);
  dataOut += dataIn.otherCost.toFixed(2).substring(0, 13).padEnd(13);
  dataOut += dataIn.totalCosts.toFixed(2).substring(0, 13).padEnd(13);
  dataOut += dataIn.scheduledId.substring(0, 24).padEnd(24);
  dataOut += dataIn.customFlds.key.toFixed().substring(0, 11).padEnd(11);
  dataOut += dataIn.customFlds.customFieldKey.toFixed().substring(0, 11).padEnd(11);
  dataOut += dataIn.customFlds.fieldName.substring(0, 24).padEnd(24);
  dataOut += dataIn.customFlds.value.substring(0, 50).padEnd(50);

  return dataOut;
}

/**
 * Output interface
 */
export interface ReqWoChg {
    /**
     */
    since: Date
}

/**
 * Convert ReqWoChg record to TypeScript object
 */
export function convertReqWoChgToObject(dataIn: string): ReqWoChg {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.since = fromIbmiDate(dataIn.substring(pos, pos + 10).trimEnd());
  pos += 10;

  return dataOut;
}

/* eslint-enable */

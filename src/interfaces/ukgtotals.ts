/* eslint-disable */
// @ts-nocheck
// Module: ukgtotals
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
export interface employeeDS {
    /**
     * @size 7 digits
     * @precision 0 decimals
     * @default `0`
     */
    id: number,
    /**
     * @size 6 characters
     * @default ``
     */
    qualifier: string,
    /**
     * @size 6 characters
     * @default ``
     */
    name: string
}

/**
 * Output interface
 */
export interface timezoneDS {
    /**
     * @size 5 digits
     * @precision 0 decimals
     * @default `0`
     */
    id: number,
    /**
     * @size 12 characters
     * @default ``
     */
    qualifier: string,
    /**
     * @size 12 characters
     * @default ``
     */
    name: string
}

/**
 * Output interface
 */
export interface emplContextDS {
    /**
     */
    employee: employeeDS,
    /**
     */
    timezone: timezoneDS
}

/**
 * Output interface
 */
export interface totalContextDS {
    /**
     * @size 13 characters
     * @default ``
     */
    totalType: string,
    /**
     * @size 3 characters
     * @default ``
     */
    totalAggregationType: string,
    /**
     * @size 3 characters
     * @default ``
     */
    totalGroupByType: string
}

/**
 * Output interface
 */
export interface wagesCurrencyDS {
    /**
     * @size 7 digits
     * @precision 2 decimals
     * @default `0`
     */
    amount: number,
    /**
     * @size 3 characters
     * @default ``
     */
    currencyCode: string
}

/**
 * Output interface
 */
export interface locationDS {
    /**
     * @size 5 digits
     * @precision 0 decimals
     * @default `0`
     */
    id: number,
    /**
     * @size 75 characters
     * @default ``
     */
    qualifier: string,
    /**
     * @size 75 characters
     * @default ``
     */
    name: string
}

/**
 * Output interface
 */
export interface jobDS {
    /**
     * @size 5 digits
     * @precision 0 decimals
     * @default `0`
     */
    id: number,
    /**
     * @size 3 characters
     * @default ``
     */
    qualifier: string,
    /**
     * @size 3 characters
     * @default ``
     */
    name: string
}

/**
 * Output interface
 */
export interface laborCategoryDS {
    /**
     * @size 5 digits
     * @precision 0 decimals
     * @default `0`
     */
    id: number,
    /**
     * @size 35 characters
     * @default ``
     */
    qualifier: string,
    /**
     * @size 35 characters
     * @default ``
     */
    name: string
}

/**
 * Output interface
 */
export interface payCodeDS {
    /**
     * @size 11 digits
     * @precision 0 decimals
     * @default `0`
     */
    id: number,
    /**
     * @size 35 characters
     * @default ``
     */
    qualifier: string,
    /**
     * @size 35 characters
     * @default ``
     */
    name: string
}

/**
 * Output interface
 */
export interface timeItemTypeDS {
    /**
     * @size 10 characters
     * @default `None`
     */
    timeItemType: string
}

/**
 * Output interface
 */
export interface AggTotalsDS {
    /**
     * @size 4 characters
     * @default ``
     */
    amountType: string,
    /**
     */
    wagesCurrency: wagesCurrencyDS,
    /**
     */
    employee: employeeDS,
    /**
     */
    location: locationDS,
    /**
     */
    job: jobDS,
    /**
     */
    laborCategory: laborCategoryDS,
    /**
     */
    payCode: payCodeDS,
    /**
     * @size 10 digits
     * @precision 5 decimals
     * @default `0`
     */
    amount: number,
    /**
     * @size 7 digits
     * @precision 2 decimals
     * @default `0`
     */
    wages: number,
    /**
     * @default `false`
     */
    jobTransfer: boolean,
    /**
     * @default `false`
     */
    laborCategoryTransfer: boolean,
    /**
     */
    timeItemType: timeItemTypeDS,
    /**
     * @default `false`
     */
    approvableByManager: boolean
}

/**
 * Output interface
 */
export interface TotalsDS {
    /**
     */
    employeeContext: emplContextDS,
    /**
     */
    totalContext: totalContextDS,
    /**
     */
    aggTotals: Array<AggTotalsDS>
}

/**
 * Output interface
 */
export interface TotalsReq {
    /**
     * @size 6 characters
     */
    employeer: string,
    /**
     * @size 10 characters
     */
    startDater: string,
    /**
     * @size 10 characters
     */
    endDater: string
}

/**
 * Convert TotalsReq record to TypeScript object
 */
export function convertTotalsReqToObject(dataIn: string): TotalsReq {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.employeer = dataIn.substring(pos, pos + 6).trimEnd();
  pos += 6;
  dataOut.startDater = dataIn.substring(pos, pos + 10).trimEnd();
  pos += 10;
  dataOut.endDater = dataIn.substring(pos, pos + 10).trimEnd();
  pos += 10;

  return dataOut;
}

/**
 * Input interface
 */
export interface TotalsRes {
    /**
     * @size 19 characters
     * @default ``
     */
    startDate: string,
    /**
     * @size 19 characters
     * @default ``
     */
    endDate: string,
    /**
     */
    totals: Array<TotalsDS>
}

/**
 * Convert JavaScript object to TotalsRes record
 */
export function convertObjectToTotalsRes(dataIn: TotalsRes): string {
  let dataOut: string = "";

  dataOut += dataIn?.startDate?.substring(0, 19)?.padEnd(19) ?? "".substring(0, 19).padEnd(19);
  dataOut += dataIn?.endDate?.substring(0, 19)?.padEnd(19) ?? "".substring(0, 19).padEnd(19);
  for (let i: number = 0; i < 2; ++i) {
  dataOut += dataIn?.totals[i]?.employeeContext?.employee?.id?.toFixed(0)?.substring(0, 9)?.padEnd(9) ?? "0".substring(0, 9).padEnd(9);
  dataOut += dataIn?.totals[i]?.employeeContext?.employee?.qualifier?.substring(0, 6)?.padEnd(6) ?? "".substring(0, 6).padEnd(6);
  dataOut += dataIn?.totals[i]?.employeeContext?.employee?.name?.substring(0, 6)?.padEnd(6) ?? "".substring(0, 6).padEnd(6);
  dataOut += dataIn?.totals[i]?.employeeContext?.timezone?.id?.toFixed(0)?.substring(0, 7)?.padEnd(7) ?? "0".substring(0, 7).padEnd(7);
  dataOut += dataIn?.totals[i]?.employeeContext?.timezone?.qualifier?.substring(0, 12)?.padEnd(12) ?? "".substring(0, 12).padEnd(12);
  dataOut += dataIn?.totals[i]?.employeeContext?.timezone?.name?.substring(0, 12)?.padEnd(12) ?? "".substring(0, 12).padEnd(12);
  dataOut += dataIn?.totals[i]?.totalContext?.totalType?.substring(0, 13)?.padEnd(13) ?? "".substring(0, 13).padEnd(13);
  dataOut += dataIn?.totals[i]?.totalContext?.totalAggregationType?.substring(0, 3)?.padEnd(3) ?? "".substring(0, 3).padEnd(3);
  dataOut += dataIn?.totals[i]?.totalContext?.totalGroupByType?.substring(0, 3)?.padEnd(3) ?? "".substring(0, 3).padEnd(3);
  for (let k: number = 0; k < 20; ++k) {
  dataOut += dataIn?.totals[i]?.aggTotals[k]?.amountType?.substring(0, 4)?.padEnd(4) ?? "".substring(0, 4).padEnd(4);
  dataOut += dataIn?.totals[i]?.aggTotals[k]?.wagesCurrency?.amount?.toFixed(2)?.substring(0, 9)?.padEnd(9) ?? "0".substring(0, 9).padEnd(9);
  dataOut += dataIn?.totals[i]?.aggTotals[k]?.wagesCurrency?.currencyCode?.substring(0, 3)?.padEnd(3) ?? "".substring(0, 3).padEnd(3);
  dataOut += dataIn?.totals[i]?.aggTotals[k]?.employee?.id?.toFixed(0)?.substring(0, 9)?.padEnd(9) ?? "0".substring(0, 9).padEnd(9);
  dataOut += dataIn?.totals[i]?.aggTotals[k]?.employee?.qualifier?.substring(0, 6)?.padEnd(6) ?? "".substring(0, 6).padEnd(6);
  dataOut += dataIn?.totals[i]?.aggTotals[k]?.employee?.name?.substring(0, 6)?.padEnd(6) ?? "".substring(0, 6).padEnd(6);
  dataOut += dataIn?.totals[i]?.aggTotals[k]?.location?.id?.toFixed(0)?.substring(0, 7)?.padEnd(7) ?? "0".substring(0, 7).padEnd(7);
  dataOut += dataIn?.totals[i]?.aggTotals[k]?.location?.qualifier?.substring(0, 75)?.padEnd(75) ?? "".substring(0, 75).padEnd(75);
  dataOut += dataIn?.totals[i]?.aggTotals[k]?.location?.name?.substring(0, 75)?.padEnd(75) ?? "".substring(0, 75).padEnd(75);
  dataOut += dataIn?.totals[i]?.aggTotals[k]?.job?.id?.toFixed(0)?.substring(0, 7)?.padEnd(7) ?? "0".substring(0, 7).padEnd(7);
  dataOut += dataIn?.totals[i]?.aggTotals[k]?.job?.qualifier?.substring(0, 3)?.padEnd(3) ?? "".substring(0, 3).padEnd(3);
  dataOut += dataIn?.totals[i]?.aggTotals[k]?.job?.name?.substring(0, 3)?.padEnd(3) ?? "".substring(0, 3).padEnd(3);
  dataOut += dataIn?.totals[i]?.aggTotals[k]?.laborCategory?.id?.toFixed(0)?.substring(0, 7)?.padEnd(7) ?? "0".substring(0, 7).padEnd(7);
  dataOut += dataIn?.totals[i]?.aggTotals[k]?.laborCategory?.qualifier?.substring(0, 35)?.padEnd(35) ?? "".substring(0, 35).padEnd(35);
  dataOut += dataIn?.totals[i]?.aggTotals[k]?.laborCategory?.name?.substring(0, 35)?.padEnd(35) ?? "".substring(0, 35).padEnd(35);
  dataOut += dataIn?.totals[i]?.aggTotals[k]?.payCode?.id?.toFixed(0)?.substring(0, 13)?.padEnd(13) ?? "0".substring(0, 13).padEnd(13);
  dataOut += dataIn?.totals[i]?.aggTotals[k]?.payCode?.qualifier?.substring(0, 35)?.padEnd(35) ?? "".substring(0, 35).padEnd(35);
  dataOut += dataIn?.totals[i]?.aggTotals[k]?.payCode?.name?.substring(0, 35)?.padEnd(35) ?? "".substring(0, 35).padEnd(35);
  dataOut += dataIn?.totals[i]?.aggTotals[k]?.amount?.toFixed(5)?.substring(0, 12)?.padEnd(12) ?? "0".substring(0, 12).padEnd(12);
  dataOut += dataIn?.totals[i]?.aggTotals[k]?.wages?.toFixed(2)?.substring(0, 9)?.padEnd(9) ?? "0".substring(0, 9).padEnd(9);
  dataOut += (dataIn?.totals[i]?.aggTotals[k]?.jobTransfer !== undefined ? (dataIn?.totals[i]?.aggTotals[k]?.jobTransfer ? "1" : "0") : "0");
  dataOut += (dataIn?.totals[i]?.aggTotals[k]?.laborCategoryTransfer !== undefined ? (dataIn?.totals[i]?.aggTotals[k]?.laborCategoryTransfer ? "1" : "0") : "0");
  dataOut += dataIn?.totals[i]?.aggTotals[k]?.timeItemType?.timeItemType?.substring(0, 10)?.padEnd(10) ?? "None".substring(0, 10).padEnd(10);
  dataOut += (dataIn?.totals[i]?.aggTotals[k]?.approvableByManager !== undefined ? (dataIn?.totals[i]?.aggTotals[k]?.approvableByManager ? "1" : "0") : "0");
  }
  }

  return dataOut;
}

/* eslint-enable */

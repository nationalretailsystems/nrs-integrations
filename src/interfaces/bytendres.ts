/* eslint-disable */
// @ts-nocheck
// Module: bytendres
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
export interface apiHeaderDS {
    /**
     * @size 13 characters
     * @default ``
     */
    customerCode: string,
    /**
     * @size 25 characters
     * @default ``
     */
    providerCustomerCode: string,
    /**
     * @size 17 characters
     * @default ``
     */
    providerCode: Array<string>,
    /**
     * @size 25 characters
     * @default ``
     */
    messageID: string,
    /**
     * @size 12 characters
     * @default ``
     */
    companyCode: string,
    /**
     * @size 12 characters
     * @default ``
     */
    contractedCompanyCode: string,
    /**
     * @size 20 characters
     * @default ``
     */
    timestamp: string,
    /**
     * @size 19 characters
     * @default ``
     */
    providersString: string
}

/**
 * Input interface
 */
export interface TenderRes {
    /**
     * @size 12 characters
     */
    responseStatus: string,
    /**
     */
    apiHeader: apiHeaderDS
}

/**
 * Convert JavaScript object to TenderRes record
 */
export function convertObjectToTenderRes(dataIn: TenderRes): string {
  let dataOut: string = "";

  dataOut += dataIn?.responseStatus?.substring(0, 12)?.padEnd(12) ?? missingInput(`dataIn.responseStatus`, "char", dataIn?.responseStatus);
  dataOut += dataIn?.apiHeader?.customerCode?.substring(0, 13)?.padEnd(13) ?? "".substring(0, 13).padEnd(13);
  dataOut += dataIn?.apiHeader?.providerCustomerCode?.substring(0, 25)?.padEnd(25) ?? "".substring(0, 25).padEnd(25);
  for (let j: number = 0; j < 1; ++j) {
  dataOut += dataIn?.apiHeader?.providerCode[j]?.substring(0, 17)?.padEnd(17) ?? "".substring(0, 17).padEnd(17);
  }
  dataOut += dataIn?.apiHeader?.messageID?.substring(0, 25)?.padEnd(25) ?? "".substring(0, 25).padEnd(25);
  dataOut += dataIn?.apiHeader?.companyCode?.substring(0, 12)?.padEnd(12) ?? "".substring(0, 12).padEnd(12);
  dataOut += dataIn?.apiHeader?.contractedCompanyCode?.substring(0, 12)?.padEnd(12) ?? "".substring(0, 12).padEnd(12);
  dataOut += dataIn?.apiHeader?.timestamp?.substring(0, 20)?.padEnd(20) ?? "".substring(0, 20).padEnd(20);
  dataOut += dataIn?.apiHeader?.providersString?.substring(0, 19)?.padEnd(19) ?? "".substring(0, 19).padEnd(19);

  return dataOut;
}

/* eslint-enable */

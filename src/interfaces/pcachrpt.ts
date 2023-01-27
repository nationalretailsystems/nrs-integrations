/* eslint-disable */
// @ts-nocheck
// Module: pcachrpt
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
export interface ParmsDS {
    /**
     * @size 6 characters
     */
    branchClientId: string,
    /**
     * @size 10 characters
     */
    startDate: string,
    /**
     * @size 10 characters
     */
    endDate: string,
    /**
     * @size 6 characters
     */
    client_id: string,
    /**
     * @size 50 characters
     */
    report_action_name: string,
    /**
     * @size 10 characters
     */
    type: string,
    /**
     * @size 10 characters
     */
    accountName: string
}

/**
 * Output interface
 */
export interface RecSetDS {
    /**
     * @size 10 characters
     * @default ` `
     */
    account: string,
    /**
     * @size 10 digits
     * @default `0`
     */
    transaction_id: number,
    /**
     * @size 50 characters
     * @default ` `
     */
    payor: string,
    /**
     * @size 50 characters
     * @default ` `
     */
    payee: string,
    /**
     * @size 25 characters
     * @default ` `
     */
    category: string,
    /**
     * @size 25 characters
     * @default ` `
     */
    transaction_type: string,
    /**
     * @size 25 characters
     * @default ` `
     */
    number: string,
    /**
     * @size 10 characters
     * @default ` `
     */
    debitCredit: string,
    /**
     * @size 15 digits
     * @precision 5 decimals
     * @default `0`
     */
    debitAmount: number,
    /**
     * @size 15 digits
     * @precision 5 decimals
     * @default `0`
     */
    creditAmount: number,
    /**
     * @size 10 digits
     * @default `0`
     */
    payorBatch: number,
    /**
     * @size 24 characters
     * @default ` `
     */
    payorDate: string,
    /**
     * @size 10 digits
     * @default `0`
     */
    payeeBatch: number,
    /**
     * @size 24 characters
     * @default ` `
     */
    payeeDate: string,
    /**
     * @size 10 characters
     * @default ` `
     */
    payorID: string,
    /**
     * @size 10 characters
     * @default ` `
     */
    payeeID: string,
    /**
     * @size 25 characters
     * @default ` `
     */
    customer_reference_number: string,
    /**
     * @size 25 characters
     * @default ` `
     */
    shipper_reference_number: string,
    /**
     * @size 25 characters
     * @default ` `
     */
    parent: string,
    /**
     * @size 24 characters
     * @default ` `
     */
    approvalDate: string,
    /**
     * @size 25 characters
     * @default ` `
     */
    approvedByUserName: string,
    /**
     * @size 3 characters
     * @default ` `
     */
    currency: string,
    /**
     * @size 10 digits
     * @default `0`
     */
    payerId: number,
    /**
     * @size 10 digits
     * @default `0`
     */
    vendorId: number,
    /**
     * @size 10 characters
     * @default ` `
     */
    payerReferenceNumber: string,
    /**
     * @size 25 characters
     * @default ` `
     */
    origin: string,
    /**
     * @size 25 characters
     * @default ` `
     */
    destination: string,
    /**
     * @size 25 characters
     * @default ` `
     */
    payerInternalNumber: string,
    /**
     * @size 25 characters
     * @default ` `
     */
    payerFileNumber: string,
    /**
     * @size 25 characters
     * @default ` `
     */
    payerVoucherNumber: string,
    /**
     * @size 25 characters
     * @default ` `
     */
    payerProductNumber: string,
    /**
     * @size 25 characters
     * @default ` `
     */
    payerInvoiceNumber: string,
    /**
     * @size 50 characters
     * @default ` `
     */
    bolLink: string
}

/**
 * Output interface
 */
export interface OverallDS {
    /**
     * @size 10 digits
     */
    count: number,
    /**
     * @size 15 digits
     * @precision 5 decimals
     */
    debitamount: number,
    /**
     * @size 15 digits
     * @precision 5 decimals
     */
    creditamount: number
}

/**
 * Output interface
 */
export interface PayorDS {
    /**
     * @size 10 digits
     */
    batch: number,
    /**
     * @size 15 digits
     * @precision 5 decimals
     */
    amount: number
}

/**
 * Output interface
 */
export interface DataDS {
    /**
     */
    recordset: Array<RecSetDS>,
    /**
     */
    overall: OverallDS,
    /**
     */
    payor: PayorDS
}

/**
 * Output interface
 */
export interface PCReqRpt {
    /**
     * @size 10 characters
     */
    branchClientId: string,
    /**
     * @size 10 characters
     */
    startDate: string,
    /**
     * @size 10 characters
     */
    endDate: string,
    /**
     * @size 10 characters
     */
    client_id: string,
    /**
     * @size 25 characters
     */
    report_action_name: string,
    /**
     * @size 20 characters
     */
    type: string,
    /**
     * @size 10 characters
     */
    accountName: string
}

/**
 * Convert PCReqRpt record to TypeScript object
 */
export function convertPCReqRptToObject(dataIn: string): PCReqRpt {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.branchClientId = dataIn.substring(pos, pos + 10).trimEnd();
  pos += 10;
  dataOut.startDate = dataIn.substring(pos, pos + 10).trimEnd();
  pos += 10;
  dataOut.endDate = dataIn.substring(pos, pos + 10).trimEnd();
  pos += 10;
  dataOut.client_id = dataIn.substring(pos, pos + 10).trimEnd();
  pos += 10;
  dataOut.report_action_name = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  dataOut.type = dataIn.substring(pos, pos + 20).trimEnd();
  pos += 20;
  dataOut.accountName = dataIn.substring(pos, pos + 10).trimEnd();
  pos += 10;

  return dataOut;
}

/**
 * Input interface
 */
export interface PCRcvRpt {
    /**
     */
    recordset: Array<RecSetDS>,
    /**
     */
    overall: OverallDS,
    /**
     */
    payor: PayorDS
}

/**
 * Convert JavaScript object to PCRcvRpt record
 */
export function convertObjectToPCRcvRpt(dataIn: PCRcvRpt): string {
  let dataOut: string = "";

  for (let i: number = 0; i < 40; ++i) {
  dataOut += dataIn?.recordset[i]?.account?.substring(0, 10)?.padEnd(10) ?? " ".substring(0, 10).padEnd(10);
  dataOut += dataIn?.recordset[i]?.transaction_id?.toFixed()?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  dataOut += dataIn?.recordset[i]?.payor?.substring(0, 50)?.padEnd(50) ?? " ".substring(0, 50).padEnd(50);
  dataOut += dataIn?.recordset[i]?.payee?.substring(0, 50)?.padEnd(50) ?? " ".substring(0, 50).padEnd(50);
  dataOut += dataIn?.recordset[i]?.category?.substring(0, 25)?.padEnd(25) ?? " ".substring(0, 25).padEnd(25);
  dataOut += dataIn?.recordset[i]?.transaction_type?.substring(0, 25)?.padEnd(25) ?? " ".substring(0, 25).padEnd(25);
  dataOut += dataIn?.recordset[i]?.number?.substring(0, 25)?.padEnd(25) ?? " ".substring(0, 25).padEnd(25);
  dataOut += dataIn?.recordset[i]?.debitCredit?.substring(0, 10)?.padEnd(10) ?? " ".substring(0, 10).padEnd(10);
  dataOut += dataIn?.recordset[i]?.debitAmount?.toFixed(5)?.substring(0, 17)?.padEnd(17) ?? "0".substring(0, 17).padEnd(17);
  dataOut += dataIn?.recordset[i]?.creditAmount?.toFixed(5)?.substring(0, 17)?.padEnd(17) ?? "0".substring(0, 17).padEnd(17);
  dataOut += dataIn?.recordset[i]?.payorBatch?.toFixed()?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  dataOut += dataIn?.recordset[i]?.payorDate?.substring(0, 24)?.padEnd(24) ?? " ".substring(0, 24).padEnd(24);
  dataOut += dataIn?.recordset[i]?.payeeBatch?.toFixed()?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  dataOut += dataIn?.recordset[i]?.payeeDate?.substring(0, 24)?.padEnd(24) ?? " ".substring(0, 24).padEnd(24);
  dataOut += dataIn?.recordset[i]?.payorID?.substring(0, 10)?.padEnd(10) ?? " ".substring(0, 10).padEnd(10);
  dataOut += dataIn?.recordset[i]?.payeeID?.substring(0, 10)?.padEnd(10) ?? " ".substring(0, 10).padEnd(10);
  dataOut += dataIn?.recordset[i]?.customer_reference_number?.substring(0, 25)?.padEnd(25) ?? " ".substring(0, 25).padEnd(25);
  dataOut += dataIn?.recordset[i]?.shipper_reference_number?.substring(0, 25)?.padEnd(25) ?? " ".substring(0, 25).padEnd(25);
  dataOut += dataIn?.recordset[i]?.parent?.substring(0, 25)?.padEnd(25) ?? " ".substring(0, 25).padEnd(25);
  dataOut += dataIn?.recordset[i]?.approvalDate?.substring(0, 24)?.padEnd(24) ?? " ".substring(0, 24).padEnd(24);
  dataOut += dataIn?.recordset[i]?.approvedByUserName?.substring(0, 25)?.padEnd(25) ?? " ".substring(0, 25).padEnd(25);
  dataOut += dataIn?.recordset[i]?.currency?.substring(0, 3)?.padEnd(3) ?? " ".substring(0, 3).padEnd(3);
  dataOut += dataIn?.recordset[i]?.payerId?.toFixed()?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  dataOut += dataIn?.recordset[i]?.vendorId?.toFixed()?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  dataOut += dataIn?.recordset[i]?.payerReferenceNumber?.substring(0, 10)?.padEnd(10) ?? " ".substring(0, 10).padEnd(10);
  dataOut += dataIn?.recordset[i]?.origin?.substring(0, 25)?.padEnd(25) ?? " ".substring(0, 25).padEnd(25);
  dataOut += dataIn?.recordset[i]?.destination?.substring(0, 25)?.padEnd(25) ?? " ".substring(0, 25).padEnd(25);
  dataOut += dataIn?.recordset[i]?.payerInternalNumber?.substring(0, 25)?.padEnd(25) ?? " ".substring(0, 25).padEnd(25);
  dataOut += dataIn?.recordset[i]?.payerFileNumber?.substring(0, 25)?.padEnd(25) ?? " ".substring(0, 25).padEnd(25);
  dataOut += dataIn?.recordset[i]?.payerVoucherNumber?.substring(0, 25)?.padEnd(25) ?? " ".substring(0, 25).padEnd(25);
  dataOut += dataIn?.recordset[i]?.payerProductNumber?.substring(0, 25)?.padEnd(25) ?? " ".substring(0, 25).padEnd(25);
  dataOut += dataIn?.recordset[i]?.payerInvoiceNumber?.substring(0, 25)?.padEnd(25) ?? " ".substring(0, 25).padEnd(25);
  dataOut += dataIn?.recordset[i]?.bolLink?.substring(0, 50)?.padEnd(50) ?? " ".substring(0, 50).padEnd(50);
  }
  dataOut += dataIn?.overall?.count?.toFixed()?.substring(0, 11)?.padEnd(11) ?? missingInput(`dataIn.overall.count`, "integer", dataIn?.overall?.count);
  dataOut += dataIn?.overall?.debitamount?.toFixed(5)?.substring(0, 17)?.padEnd(17) ?? missingInput(`dataIn.overall.debitamount`, "packed", dataIn?.overall?.debitamount);
  dataOut += dataIn?.overall?.creditamount?.toFixed(5)?.substring(0, 17)?.padEnd(17) ?? missingInput(`dataIn.overall.creditamount`, "packed", dataIn?.overall?.creditamount);
  dataOut += dataIn?.payor?.batch?.toFixed()?.substring(0, 11)?.padEnd(11) ?? missingInput(`dataIn.payor.batch`, "integer", dataIn?.payor?.batch);
  dataOut += dataIn?.payor?.amount?.toFixed(5)?.substring(0, 17)?.padEnd(17) ?? missingInput(`dataIn.payor.amount`, "packed", dataIn?.payor?.amount);

  return dataOut;
}

/* eslint-enable */

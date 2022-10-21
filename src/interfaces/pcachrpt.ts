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

import eradaniConnect from @eradani-inc/eradani-connect;
const { dataTypes } = eradaniConnect;

/**
 * Output interface
 */
export interface RecSetDS {
    /**
     * @size 10 characters
     */
    account: string,
    /**
     * @size 10 digits
     */
    transaction_id: number,
    /**
     * @size 50 characters
     */
    payor: string,
    /**
     * @size 50 characters
     */
    payee: string,
    /**
     * @size 25 characters
     */
    category: string,
    /**
     * @size 25 characters
     */
    transaction_type: string,
    /**
     * @size 25 characters
     */
    number: string,
    /**
     * @size 10 characters
     */
    debitCredit: string,
    /**
     * @size 15 digits
     * @precision 5 decimals
     */
    debitAmount: number,
    /**
     * @size 15 digits
     * @precision 5 decimals
     */
    creditAmount: number,
    /**
     * @size 10 digits
     */
    payorBatch: number,
    /**
     * @size 24 characters
     */
    payorDate: string,
    /**
     * @size 10 digits
     */
    payeeBatch: number,
    /**
     * @size 24 characters
     */
    payeeDate: string,
    /**
     * @size 10 characters
     */
    payorID: string,
    /**
     * @size 10 characters
     */
    payeeID: string,
    /**
     * @size 50 characters
     */
    customer_reference_number: string,
    /**
     * @size 50 characters
     */
    shipper_reference_number: string,
    /**
     * @size 50 characters
     */
    parent: string,
    /**
     * @size 24 characters
     */
    approvalDate: string,
    /**
     * @size 50 characters
     */
    approvedByUserName: string,
    /**
     * @size 3 characters
     */
    currency: string,
    /**
     * @size 10 digits
     */
    payerId: number,
    /**
     * @size 10 digits
     */
    vendorId: number,
    /**
     * @size 10 characters
     */
    payerReferenceNumber: string,
    /**
     * @size 50 characters
     */
    origin: string,
    /**
     * @size 50 characters
     */
    destination: string,
    /**
     * @size 50 characters
     */
    payerInternalNumber: string,
    /**
     * @size 50 characters
     */
    payerFileNumber: string,
    /**
     * @size 50 characters
     */
    payerVoucherNumber: string,
    /**
     * @size 50 characters
     */
    payerProductNumber: string,
    /**
     * @size 50 characters
     */
    payerInvoiceNumber: string,
    /**
     * @size 50 characters
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
     * @size 25 characters
     */
    type: string,
    /**
     * @size 50 characters
     */
    accountName: string,
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

  dataOut += dataIn?.branchClientId?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.branchClientId`, "char", dataIn?.branchClientId);
  dataOut += dataIn?.startDate?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.startDate`, "char", dataIn?.startDate);
  dataOut += dataIn?.endDate?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.endDate`, "char", dataIn?.endDate);
  dataOut += dataIn?.client_id?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.client_id`, "char", dataIn?.client_id);
  dataOut += dataIn?.report_action_name?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.report_action_name`, "char", dataIn?.report_action_name);
  dataOut += dataIn?.type?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.type`, "char", dataIn?.type);
  dataOut += dataIn?.accountName?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.accountName`, "char", dataIn?.accountName);
  for (let i: number = 0; i < 2; ++i) {
  dataOut += dataIn?.recordset[i]?.account?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.recordset[${i}].account`, "char", dataIn?.recordset[i]?.account);
  dataOut += dataIn?.recordset[i]?.transaction_id?.toFixed()?.substring(0, 11)?.padEnd(11) ?? missingInput(`dataIn.recordset[${i}].transaction_id`, "integer", dataIn?.recordset[i]?.transaction_id);
  dataOut += dataIn?.recordset[i]?.payor?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.recordset[${i}].payor`, "char", dataIn?.recordset[i]?.payor);
  dataOut += dataIn?.recordset[i]?.payee?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.recordset[${i}].payee`, "char", dataIn?.recordset[i]?.payee);
  dataOut += dataIn?.recordset[i]?.category?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.recordset[${i}].category`, "char", dataIn?.recordset[i]?.category);
  dataOut += dataIn?.recordset[i]?.transaction_type?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.recordset[${i}].transaction_type`, "char", dataIn?.recordset[i]?.transaction_type);
  dataOut += dataIn?.recordset[i]?.number?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.recordset[${i}].number`, "char", dataIn?.recordset[i]?.number);
  dataOut += dataIn?.recordset[i]?.debitCredit?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.recordset[${i}].debitCredit`, "char", dataIn?.recordset[i]?.debitCredit);
  dataOut += dataIn?.recordset[i]?.debitAmount?.toFixed(5)?.substring(0, 17)?.padEnd(17) ?? missingInput(`dataIn.recordset[${i}].debitAmount`, "packed", dataIn?.recordset[i]?.debitAmount);
  dataOut += dataIn?.recordset[i]?.creditAmount?.toFixed(5)?.substring(0, 17)?.padEnd(17) ?? missingInput(`dataIn.recordset[${i}].creditAmount`, "packed", dataIn?.recordset[i]?.creditAmount);
  dataOut += dataIn?.recordset[i]?.payorBatch?.toFixed()?.substring(0, 11)?.padEnd(11) ?? missingInput(`dataIn.recordset[${i}].payorBatch`, "integer", dataIn?.recordset[i]?.payorBatch);
  dataOut += dataIn?.recordset[i]?.payorDate?.substring(0, 24)?.padEnd(24) ?? missingInput(`dataIn.recordset[${i}].payorDate`, "char", dataIn?.recordset[i]?.payorDate);
  dataOut += dataIn?.recordset[i]?.payeeBatch?.toFixed()?.substring(0, 11)?.padEnd(11) ?? missingInput(`dataIn.recordset[${i}].payeeBatch`, "integer", dataIn?.recordset[i]?.payeeBatch);
  dataOut += dataIn?.recordset[i]?.payeeDate?.substring(0, 24)?.padEnd(24) ?? missingInput(`dataIn.recordset[${i}].payeeDate`, "char", dataIn?.recordset[i]?.payeeDate);
  dataOut += dataIn?.recordset[i]?.payorID?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.recordset[${i}].payorID`, "char", dataIn?.recordset[i]?.payorID);
  dataOut += dataIn?.recordset[i]?.payeeID?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.recordset[${i}].payeeID`, "char", dataIn?.recordset[i]?.payeeID);
  dataOut += dataIn?.recordset[i]?.customer_reference_number?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.recordset[${i}].customer_reference_number`, "char", dataIn?.recordset[i]?.customer_reference_number);
  dataOut += dataIn?.recordset[i]?.shipper_reference_number?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.recordset[${i}].shipper_reference_number`, "char", dataIn?.recordset[i]?.shipper_reference_number);
  dataOut += dataIn?.recordset[i]?.parent?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.recordset[${i}].parent`, "char", dataIn?.recordset[i]?.parent);
  dataOut += dataIn?.recordset[i]?.approvalDate?.substring(0, 24)?.padEnd(24) ?? missingInput(`dataIn.recordset[${i}].approvalDate`, "char", dataIn?.recordset[i]?.approvalDate);
  dataOut += dataIn?.recordset[i]?.approvedByUserName?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.recordset[${i}].approvedByUserName`, "char", dataIn?.recordset[i]?.approvedByUserName);
  dataOut += dataIn?.recordset[i]?.currency?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.recordset[${i}].currency`, "char", dataIn?.recordset[i]?.currency);
  dataOut += dataIn?.recordset[i]?.payerId?.toFixed()?.substring(0, 11)?.padEnd(11) ?? missingInput(`dataIn.recordset[${i}].payerId`, "integer", dataIn?.recordset[i]?.payerId);
  dataOut += dataIn?.recordset[i]?.vendorId?.toFixed()?.substring(0, 11)?.padEnd(11) ?? missingInput(`dataIn.recordset[${i}].vendorId`, "integer", dataIn?.recordset[i]?.vendorId);
  dataOut += dataIn?.recordset[i]?.payerReferenceNumber?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.recordset[${i}].payerReferenceNumber`, "char", dataIn?.recordset[i]?.payerReferenceNumber);
  dataOut += dataIn?.recordset[i]?.origin?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.recordset[${i}].origin`, "char", dataIn?.recordset[i]?.origin);
  dataOut += dataIn?.recordset[i]?.destination?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.recordset[${i}].destination`, "char", dataIn?.recordset[i]?.destination);
  dataOut += dataIn?.recordset[i]?.payerInternalNumber?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.recordset[${i}].payerInternalNumber`, "char", dataIn?.recordset[i]?.payerInternalNumber);
  dataOut += dataIn?.recordset[i]?.payerFileNumber?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.recordset[${i}].payerFileNumber`, "char", dataIn?.recordset[i]?.payerFileNumber);
  dataOut += dataIn?.recordset[i]?.payerVoucherNumber?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.recordset[${i}].payerVoucherNumber`, "char", dataIn?.recordset[i]?.payerVoucherNumber);
  dataOut += dataIn?.recordset[i]?.payerProductNumber?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.recordset[${i}].payerProductNumber`, "char", dataIn?.recordset[i]?.payerProductNumber);
  dataOut += dataIn?.recordset[i]?.payerInvoiceNumber?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.recordset[${i}].payerInvoiceNumber`, "char", dataIn?.recordset[i]?.payerInvoiceNumber);
  dataOut += dataIn?.recordset[i]?.bolLink?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.recordset[${i}].bolLink`, "char", dataIn?.recordset[i]?.bolLink);
  }
  dataOut += dataIn?.overall?.count?.toFixed()?.substring(0, 11)?.padEnd(11) ?? missingInput(`dataIn.overall.count`, "integer", dataIn?.overall?.count);
  dataOut += dataIn?.overall?.debitamount?.toFixed(5)?.substring(0, 17)?.padEnd(17) ?? missingInput(`dataIn.overall.debitamount`, "packed", dataIn?.overall?.debitamount);
  dataOut += dataIn?.overall?.creditamount?.toFixed(5)?.substring(0, 17)?.padEnd(17) ?? missingInput(`dataIn.overall.creditamount`, "packed", dataIn?.overall?.creditamount);
  dataOut += dataIn?.payor?.batch?.toFixed()?.substring(0, 11)?.padEnd(11) ?? missingInput(`dataIn.payor.batch`, "integer", dataIn?.payor?.batch);
  dataOut += dataIn?.payor?.amount?.toFixed(5)?.substring(0, 17)?.padEnd(17) ?? missingInput(`dataIn.payor.amount`, "packed", dataIn?.payor?.amount);

  return dataOut;
}

/* eslint-enable */

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
    accountName: string
}

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
    params: ParmsDS,
    /**
     */
    datas: DataDS
}

/**
 * Convert JavaScript object to PCRcvRpt record
 */
export function convertObjectToPCRcvRpt(dataIn: PCRcvRpt): string {
  let dataOut: string = "";

  dataOut += dataIn?.params?.branchClientId?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.params.branchClientId`, "char", dataIn?.params?.branchClientId);
  dataOut += dataIn?.params?.startDate?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.params.startDate`, "char", dataIn?.params?.startDate);
  dataOut += dataIn?.params?.endDate?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.params.endDate`, "char", dataIn?.params?.endDate);
  dataOut += dataIn?.params?.client_id?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.params.client_id`, "char", dataIn?.params?.client_id);
  dataOut += dataIn?.params?.report_action_name?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.params.report_action_name`, "char", dataIn?.params?.report_action_name);
  dataOut += dataIn?.params?.type?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.params.type`, "char", dataIn?.params?.type);
  dataOut += dataIn?.params?.accountName?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.params.accountName`, "char", dataIn?.params?.accountName);
  for (let j: number = 0; j < 100; ++j) {
  dataOut += dataIn?.datas?.recordset[j]?.account?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.datas.recordset[${j}].account`, "char", dataIn?.datas?.recordset[j]?.account);
  dataOut += dataIn?.datas?.recordset[j]?.transaction_id?.toFixed()?.substring(0, 11)?.padEnd(11) ?? missingInput(`dataIn.datas.recordset[${j}].transaction_id`, "integer", dataIn?.datas?.recordset[j]?.transaction_id);
  dataOut += dataIn?.datas?.recordset[j]?.payor?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.datas.recordset[${j}].payor`, "char", dataIn?.datas?.recordset[j]?.payor);
  dataOut += dataIn?.datas?.recordset[j]?.payee?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.datas.recordset[${j}].payee`, "char", dataIn?.datas?.recordset[j]?.payee);
  dataOut += dataIn?.datas?.recordset[j]?.category?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.datas.recordset[${j}].category`, "char", dataIn?.datas?.recordset[j]?.category);
  dataOut += dataIn?.datas?.recordset[j]?.transaction_type?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.datas.recordset[${j}].transaction_type`, "char", dataIn?.datas?.recordset[j]?.transaction_type);
  dataOut += dataIn?.datas?.recordset[j]?.number?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.datas.recordset[${j}].number`, "char", dataIn?.datas?.recordset[j]?.number);
  dataOut += dataIn?.datas?.recordset[j]?.debitCredit?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.datas.recordset[${j}].debitCredit`, "char", dataIn?.datas?.recordset[j]?.debitCredit);
  dataOut += dataIn?.datas?.recordset[j]?.debitAmount?.toFixed(5)?.substring(0, 17)?.padEnd(17) ?? missingInput(`dataIn.datas.recordset[${j}].debitAmount`, "packed", dataIn?.datas?.recordset[j]?.debitAmount);
  dataOut += dataIn?.datas?.recordset[j]?.creditAmount?.toFixed(5)?.substring(0, 17)?.padEnd(17) ?? missingInput(`dataIn.datas.recordset[${j}].creditAmount`, "packed", dataIn?.datas?.recordset[j]?.creditAmount);
  dataOut += dataIn?.datas?.recordset[j]?.payorBatch?.toFixed()?.substring(0, 11)?.padEnd(11) ?? missingInput(`dataIn.datas.recordset[${j}].payorBatch`, "integer", dataIn?.datas?.recordset[j]?.payorBatch);
  dataOut += dataIn?.datas?.recordset[j]?.payorDate?.substring(0, 24)?.padEnd(24) ?? missingInput(`dataIn.datas.recordset[${j}].payorDate`, "char", dataIn?.datas?.recordset[j]?.payorDate);
  dataOut += dataIn?.datas?.recordset[j]?.payeeBatch?.toFixed()?.substring(0, 11)?.padEnd(11) ?? missingInput(`dataIn.datas.recordset[${j}].payeeBatch`, "integer", dataIn?.datas?.recordset[j]?.payeeBatch);
  dataOut += dataIn?.datas?.recordset[j]?.payeeDate?.substring(0, 24)?.padEnd(24) ?? missingInput(`dataIn.datas.recordset[${j}].payeeDate`, "char", dataIn?.datas?.recordset[j]?.payeeDate);
  dataOut += dataIn?.datas?.recordset[j]?.payorID?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.datas.recordset[${j}].payorID`, "char", dataIn?.datas?.recordset[j]?.payorID);
  dataOut += dataIn?.datas?.recordset[j]?.payeeID?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.datas.recordset[${j}].payeeID`, "char", dataIn?.datas?.recordset[j]?.payeeID);
  dataOut += dataIn?.datas?.recordset[j]?.customer_reference_number?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.datas.recordset[${j}].customer_reference_number`, "char", dataIn?.datas?.recordset[j]?.customer_reference_number);
  dataOut += dataIn?.datas?.recordset[j]?.shipper_reference_number?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.datas.recordset[${j}].shipper_reference_number`, "char", dataIn?.datas?.recordset[j]?.shipper_reference_number);
  dataOut += dataIn?.datas?.recordset[j]?.parent?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.datas.recordset[${j}].parent`, "char", dataIn?.datas?.recordset[j]?.parent);
  dataOut += dataIn?.datas?.recordset[j]?.approvalDate?.substring(0, 24)?.padEnd(24) ?? missingInput(`dataIn.datas.recordset[${j}].approvalDate`, "char", dataIn?.datas?.recordset[j]?.approvalDate);
  dataOut += dataIn?.datas?.recordset[j]?.approvedByUserName?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.datas.recordset[${j}].approvedByUserName`, "char", dataIn?.datas?.recordset[j]?.approvedByUserName);
  dataOut += dataIn?.datas?.recordset[j]?.currency?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.datas.recordset[${j}].currency`, "char", dataIn?.datas?.recordset[j]?.currency);
  dataOut += dataIn?.datas?.recordset[j]?.payerId?.toFixed()?.substring(0, 11)?.padEnd(11) ?? missingInput(`dataIn.datas.recordset[${j}].payerId`, "integer", dataIn?.datas?.recordset[j]?.payerId);
  dataOut += dataIn?.datas?.recordset[j]?.vendorId?.toFixed()?.substring(0, 11)?.padEnd(11) ?? missingInput(`dataIn.datas.recordset[${j}].vendorId`, "integer", dataIn?.datas?.recordset[j]?.vendorId);
  dataOut += dataIn?.datas?.recordset[j]?.payerReferenceNumber?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.datas.recordset[${j}].payerReferenceNumber`, "char", dataIn?.datas?.recordset[j]?.payerReferenceNumber);
  dataOut += dataIn?.datas?.recordset[j]?.origin?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.datas.recordset[${j}].origin`, "char", dataIn?.datas?.recordset[j]?.origin);
  dataOut += dataIn?.datas?.recordset[j]?.destination?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.datas.recordset[${j}].destination`, "char", dataIn?.datas?.recordset[j]?.destination);
  dataOut += dataIn?.datas?.recordset[j]?.payerInternalNumber?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.datas.recordset[${j}].payerInternalNumber`, "char", dataIn?.datas?.recordset[j]?.payerInternalNumber);
  dataOut += dataIn?.datas?.recordset[j]?.payerFileNumber?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.datas.recordset[${j}].payerFileNumber`, "char", dataIn?.datas?.recordset[j]?.payerFileNumber);
  dataOut += dataIn?.datas?.recordset[j]?.payerVoucherNumber?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.datas.recordset[${j}].payerVoucherNumber`, "char", dataIn?.datas?.recordset[j]?.payerVoucherNumber);
  dataOut += dataIn?.datas?.recordset[j]?.payerProductNumber?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.datas.recordset[${j}].payerProductNumber`, "char", dataIn?.datas?.recordset[j]?.payerProductNumber);
  dataOut += dataIn?.datas?.recordset[j]?.payerInvoiceNumber?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.datas.recordset[${j}].payerInvoiceNumber`, "char", dataIn?.datas?.recordset[j]?.payerInvoiceNumber);
  dataOut += dataIn?.datas?.recordset[j]?.bolLink?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.datas.recordset[${j}].bolLink`, "char", dataIn?.datas?.recordset[j]?.bolLink);
  }
  dataOut += dataIn?.datas?.overall?.count?.toFixed()?.substring(0, 11)?.padEnd(11) ?? missingInput(`dataIn.datas.overall.count`, "integer", dataIn?.datas?.overall?.count);
  dataOut += dataIn?.datas?.overall?.debitamount?.toFixed(5)?.substring(0, 17)?.padEnd(17) ?? missingInput(`dataIn.datas.overall.debitamount`, "packed", dataIn?.datas?.overall?.debitamount);
  dataOut += dataIn?.datas?.overall?.creditamount?.toFixed(5)?.substring(0, 17)?.padEnd(17) ?? missingInput(`dataIn.datas.overall.creditamount`, "packed", dataIn?.datas?.overall?.creditamount);
  dataOut += dataIn?.datas?.payor?.batch?.toFixed()?.substring(0, 11)?.padEnd(11) ?? missingInput(`dataIn.datas.payor.batch`, "integer", dataIn?.datas?.payor?.batch);
  dataOut += dataIn?.datas?.payor?.amount?.toFixed(5)?.substring(0, 17)?.padEnd(17) ?? missingInput(`dataIn.datas.payor.amount`, "packed", dataIn?.datas?.payor?.amount);

  return dataOut;
}

/* eslint-enable */

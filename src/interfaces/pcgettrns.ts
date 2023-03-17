/* eslint-disable */
// @ts-nocheck
// Module: pcgettrns
// Generated source -- do not modify

import { ibmiConversions, missingInput } from '@eradani-inc/ec-client';
const { fromIbmiDate, fromIbmiTime, fromIbmiTimestamp, toIbmiDate, toIbmiTime, toIbmiTimestamp } = ibmiConversions;

import eradaniConnect from '@eradani-inc/eradani-connect';
const { dataTypes } = eradaniConnect;

/**
 * Output interface
 */
export interface ResultDS {
    /**
     * @size 25 characters
     * @default ` `
     */
    msg: string;
    /**
     * @size 5 digits
     * @default `0`
     */
    code: number;
}

/**
 * Output interface
 */
export interface DataDS {
    /**
     * @size 10 digits
     * @default `0`
     */
    transactionId: number;
    /**
     * @size 10 digits
     * @default `0`
     */
    payerClientId: number;
    /**
     * @size 10 digits
     * @default `0`
     */
    payerId: number;
    /**
     * @size 50 characters
     * @default ` `
     */
    payerName: string;
    /**
     * @size 10 digits
     * @default `0`
     */
    vendorClientId: number;
    /**
     * @size 10 digits
     * @default `0`
     */
    vendorId: number;
    /**
     * @size 50 characters
     * @default ` `
     */
    vendorName: string;
    /**
     * @size 25 characters
     * @default ` `
     */
    number: string;
    /**
     * @size 24 characters
     * @default ` `
     */
    departureDate: string;
    /**
     * @size 24 characters
     * @default ` `
     */
    arrivalDate: string;
    /**
     * @size 24 characters
     * @default ` `
     */
    paymentDueDate: string;
    /**
     * @size 24 characters
     * @default ` `
     */
    approvalDate: string;
    /**
     * @size 1 characters
     * @default ` `
     */
    hasArrived: string;
    /**
     * @size 15 digits
     * @precision 5 decimals
     * @default `0`
     */
    total: number;
    /**
     * @size 5 digits
     * @default `0`
     */
    directionId: number;
    /**
     * @size 15 characters
     * @default ` `
     */
    bolLink: string;
    /**
     * @size 10 characters
     * @default ` `
     */
    direction: string;
    /**
     * @size 24 characters
     * @default ` `
     */
    createdDate: string;
    /**
     * @size 24 characters
     * @default ` `
     */
    lastModifiedDate: string;
    /**
     * @size 10 digits
     * @default `0`
     */
    userId: number;
    /**
     * @size 10 digits
     * @default `0`
     */
    modifiedByUserId: number;
    /**
     * @size 25 characters
     * @default ` `
     */
    shipperRefNumber: string;
    /**
     * @size 25 characters
     * @default ` `
     */
    customerRefNumber: string;
    /**
     * @size 10 characters
     * @default ` `
     */
    partialPayment: string;
    /**
     * @size 10 characters
     * @default ` `
     */
    disputeReasonResponse: string;
    /**
     * @size 10 characters
     * @default ` `
     */
    subcategory: string;
    /**
     * @size 10 digits
     * @default `0`
     */
    externalSystemId: number;
    /**
     * @size 10 characters
     * @default ` `
     */
    externalId: string;
    /**
     * @size 25 characters
     * @default ` `
     */
    parent: string;
    /**
     * @size 10 characters
     * @default ` `
     */
    batchId: string;
    /**
     * @size 50 characters
     * @default ` `
     */
    notes: string;
    /**
     * @size 15 characters
     * @default ` `
     */
    valueOfGoods: string;
    /**
     * @size 15 characters
     * @default ` `
     */
    status: string;
    /**
     * @size 10 digits
     * @default `0`
     */
    statusId: number;
    /**
     * @size 25 characters
     * @default ` `
     */
    type: string;
    /**
     * @size 10 digits
     * @default `0`
     */
    paymentDueDateDiff: number;
    /**
     * @size 15 characters
     * @default ` `
     */
    paymentMethod: string;
    /**
     * @size 15 characters
     * @default ` `
     */
    payerRefNumber: string;
    /**
     * @size 15 characters
     * @default ` `
     */
    vendorRefNumber: string;
    /**
     * @size 10 characters
     * @default ` `
     */
    payerInternalNumber: string;
    /**
     * @size 10 characters
     * @default ` `
     */
    payerFileNumber: string;
    /**
     * @size 10 characters
     * @default ` `
     */
    payerVoucherNumber: string;
    /**
     * @size 10 characters
     * @default ` `
     */
    payerProductNumber: string;
    /**
     * @size 10 characters
     * @default ` `
     */
    payerInvoiceNumber: string;
    /**
     * @size 25 characters
     * @default ` `
     */
    nachaBatchId: string;
    /**
     * @size 15 characters
     * @default ` `
     */
    paycargoBatchId: string;
    /**
     * @size 24 characters
     * @default ` `
     */
    processingDate: string;
}

/**
 * Output interface
 */
export interface PCReqTrns {
    /**
     * @size 10 digits
     */
    page: number;
    /**
     * @size 10 digits
     */
    count: number;
}

/**
 * Convert PCReqTrns record to TypeScript object
 */
export function convertPCReqTrnsToObject(dataIn: string): PCReqTrns {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.page = Number(dataIn.substring(pos, pos + 11).trimEnd());
    pos += 11;
    dataOut.count = Number(dataIn.substring(pos, pos + 11).trimEnd());
    pos += 11;

    return dataOut;
}

/**
 * Input interface
 */
export interface PCRcvTrns {
    /**
     */
    result: ResultDS;
    /**
     */
    data: Array<DataDS>;
}

/**
 * Convert JavaScript object to PCRcvTrns record
 */
export function convertObjectToPCRcvTrns(dataIn: PCRcvTrns): string {
    let dataOut: string = '';

    dataOut += dataIn?.result?.msg?.substring(0, 25)?.padEnd(25) ?? ' '.substring(0, 25).padEnd(25);
    dataOut += dataIn?.result?.code?.toFixed()?.substring(0, 6)?.padEnd(6) ?? '0'.substring(0, 6).padEnd(6);
    for (let i: number = 0; i < 30; ++i) {
        dataOut +=
            dataIn?.data[i]?.transactionId?.toFixed()?.substring(0, 11)?.padEnd(11) ?? '0'.substring(0, 11).padEnd(11);
        dataOut +=
            dataIn?.data[i]?.payerClientId?.toFixed()?.substring(0, 11)?.padEnd(11) ?? '0'.substring(0, 11).padEnd(11);
        dataOut += dataIn?.data[i]?.payerId?.toFixed()?.substring(0, 11)?.padEnd(11) ?? '0'.substring(0, 11).padEnd(11);
        dataOut += dataIn?.data[i]?.payerName?.substring(0, 50)?.padEnd(50) ?? ' '.substring(0, 50).padEnd(50);
        dataOut +=
            dataIn?.data[i]?.vendorClientId?.toFixed()?.substring(0, 11)?.padEnd(11) ?? '0'.substring(0, 11).padEnd(11);
        dataOut +=
            dataIn?.data[i]?.vendorId?.toFixed()?.substring(0, 11)?.padEnd(11) ?? '0'.substring(0, 11).padEnd(11);
        dataOut += dataIn?.data[i]?.vendorName?.substring(0, 50)?.padEnd(50) ?? ' '.substring(0, 50).padEnd(50);
        dataOut += dataIn?.data[i]?.number?.substring(0, 25)?.padEnd(25) ?? ' '.substring(0, 25).padEnd(25);
        dataOut += dataIn?.data[i]?.departureDate?.substring(0, 24)?.padEnd(24) ?? ' '.substring(0, 24).padEnd(24);
        dataOut += dataIn?.data[i]?.arrivalDate?.substring(0, 24)?.padEnd(24) ?? ' '.substring(0, 24).padEnd(24);
        dataOut += dataIn?.data[i]?.paymentDueDate?.substring(0, 24)?.padEnd(24) ?? ' '.substring(0, 24).padEnd(24);
        dataOut += dataIn?.data[i]?.approvalDate?.substring(0, 24)?.padEnd(24) ?? ' '.substring(0, 24).padEnd(24);
        dataOut += dataIn?.data[i]?.hasArrived?.substring(0, 1)?.padEnd(1) ?? ' '.substring(0, 1).padEnd(1);
        dataOut += dataIn?.data[i]?.total?.toFixed(5)?.substring(0, 17)?.padEnd(17) ?? '0'.substring(0, 17).padEnd(17);
        dataOut += dataIn?.data[i]?.directionId?.toFixed()?.substring(0, 6)?.padEnd(6) ?? '0'.substring(0, 6).padEnd(6);
        dataOut += dataIn?.data[i]?.bolLink?.substring(0, 15)?.padEnd(15) ?? ' '.substring(0, 15).padEnd(15);
        dataOut += dataIn?.data[i]?.direction?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
        dataOut += dataIn?.data[i]?.createdDate?.substring(0, 24)?.padEnd(24) ?? ' '.substring(0, 24).padEnd(24);
        dataOut += dataIn?.data[i]?.lastModifiedDate?.substring(0, 24)?.padEnd(24) ?? ' '.substring(0, 24).padEnd(24);
        dataOut += dataIn?.data[i]?.userId?.toFixed()?.substring(0, 11)?.padEnd(11) ?? '0'.substring(0, 11).padEnd(11);
        dataOut +=
            dataIn?.data[i]?.modifiedByUserId?.toFixed()?.substring(0, 11)?.padEnd(11) ??
            '0'.substring(0, 11).padEnd(11);
        dataOut += dataIn?.data[i]?.shipperRefNumber?.substring(0, 25)?.padEnd(25) ?? ' '.substring(0, 25).padEnd(25);
        dataOut += dataIn?.data[i]?.customerRefNumber?.substring(0, 25)?.padEnd(25) ?? ' '.substring(0, 25).padEnd(25);
        dataOut += dataIn?.data[i]?.partialPayment?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
        dataOut +=
            dataIn?.data[i]?.disputeReasonResponse?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
        dataOut += dataIn?.data[i]?.subcategory?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
        dataOut +=
            dataIn?.data[i]?.externalSystemId?.toFixed()?.substring(0, 11)?.padEnd(11) ??
            '0'.substring(0, 11).padEnd(11);
        dataOut += dataIn?.data[i]?.externalId?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
        dataOut += dataIn?.data[i]?.parent?.substring(0, 25)?.padEnd(25) ?? ' '.substring(0, 25).padEnd(25);
        dataOut += dataIn?.data[i]?.batchId?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
        dataOut += dataIn?.data[i]?.notes?.substring(0, 50)?.padEnd(50) ?? ' '.substring(0, 50).padEnd(50);
        dataOut += dataIn?.data[i]?.valueOfGoods?.substring(0, 15)?.padEnd(15) ?? ' '.substring(0, 15).padEnd(15);
        dataOut += dataIn?.data[i]?.status?.substring(0, 15)?.padEnd(15) ?? ' '.substring(0, 15).padEnd(15);
        dataOut +=
            dataIn?.data[i]?.statusId?.toFixed()?.substring(0, 11)?.padEnd(11) ?? '0'.substring(0, 11).padEnd(11);
        dataOut += dataIn?.data[i]?.type?.substring(0, 25)?.padEnd(25) ?? ' '.substring(0, 25).padEnd(25);
        dataOut +=
            dataIn?.data[i]?.paymentDueDateDiff?.toFixed()?.substring(0, 11)?.padEnd(11) ??
            '0'.substring(0, 11).padEnd(11);
        dataOut += dataIn?.data[i]?.paymentMethod?.substring(0, 15)?.padEnd(15) ?? ' '.substring(0, 15).padEnd(15);
        dataOut += dataIn?.data[i]?.payerRefNumber?.substring(0, 15)?.padEnd(15) ?? ' '.substring(0, 15).padEnd(15);
        dataOut += dataIn?.data[i]?.vendorRefNumber?.substring(0, 15)?.padEnd(15) ?? ' '.substring(0, 15).padEnd(15);
        dataOut +=
            dataIn?.data[i]?.payerInternalNumber?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
        dataOut += dataIn?.data[i]?.payerFileNumber?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
        dataOut += dataIn?.data[i]?.payerVoucherNumber?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
        dataOut += dataIn?.data[i]?.payerProductNumber?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
        dataOut += dataIn?.data[i]?.payerInvoiceNumber?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
        dataOut += dataIn?.data[i]?.nachaBatchId?.substring(0, 25)?.padEnd(25) ?? ' '.substring(0, 25).padEnd(25);
        dataOut += dataIn?.data[i]?.paycargoBatchId?.substring(0, 15)?.padEnd(15) ?? ' '.substring(0, 15).padEnd(15);
        dataOut += dataIn?.data[i]?.processingDate?.substring(0, 24)?.padEnd(24) ?? ' '.substring(0, 24).padEnd(24);
    }

    return dataOut;
}

/* eslint-enable */

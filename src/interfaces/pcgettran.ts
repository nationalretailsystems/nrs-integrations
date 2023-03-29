/* eslint-disable */
// @ts-nocheck
// Module: pcgettran
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
    transaction_id: number;
    /**
     * @size 10 digits
     * @default `0`
     */
    payerId: number;
    /**
     * @size 10 digits
     * @default `0`
     */
    payerClientId: number;
    /**
     * @size 50 characters
     * @default ` `
     */
    payerName: string;
    /**
     * @size 10 digits
     * @default `0`
     */
    vendorId: number;
    /**
     * @size 10 digits
     * @default `0`
     */
    vendorClientId: number;
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
     * @size 50 characters
     * @default ` `
     */
    bolLink: string;
    /**
     * @size 25 characters
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
    createdByUserId: number;
    /**
     * @size 50 characters
     * @default ` `
     */
    createdByUserName: string;
    /**
     * @size 10 digits
     * @default `0`
     */
    modifiedByUserId: number;
    /**
     * @size 50 characters
     * @default ` `
     */
    modifiedByUserName: string;
    /**
     * @size 50 characters
     * @default ` `
     */
    shipperRefNumber: string;
    /**
     * @size 50 characters
     * @default ` `
     */
    customerRefNumber: string;
    /**
     * @size 50 characters
     * @default ` `
     */
    partialPayment: string;
    /**
     * @size 50 characters
     * @default ` `
     */
    disputeReasonResponse: string;
    /**
     * @size 50 characters
     * @default ` `
     */
    subcategory: string;
    /**
     * @size 10 digits
     * @default `0`
     */
    externalSystemId: number;
    /**
     * @size 50 characters
     * @default ` `
     */
    externalId: string;
    /**
     * @size 50 characters
     * @default ` `
     */
    parent: string;
    /**
     * @size 50 characters
     * @default ` `
     */
    batchId: string;
    /**
     * @size 50 characters
     * @default ` `
     */
    notes: string;
    /**
     * @size 50 characters
     * @default ` `
     */
    valueOfGoods: string;
    /**
     * @size 25 characters
     * @default ` `
     */
    status: string;
    /**
     * @size 10 digits
     * @default `0`
     */
    statusId: number;
    /**
     * @size 50 characters
     * @default ` `
     */
    type: string;
    /**
     * @size 10 digits
     * @default `0`
     */
    paymentDueDateDiff: number;
    /**
     * @size 10 characters
     * @default ` `
     */
    directionCode: string;
    /**
     * @size 10 characters
     * @default ` `
     */
    vendorRegion: string;
    /**
     * @size 3 characters
     * @default ` `
     */
    vendorCurrency: string;
    /**
     * @size 10 characters
     * @default ` `
     */
    payerRegion: string;
    /**
     * @size 3 characters
     * @default ` `
     */
    payerCurrency: string;
    /**
     * @size 5 digits
     * @default `0`
     */
    isRegisteredMerchant: number;
    /**
     * @size 15 characters
     * @default ` `
     */
    paymentMethod: string;
    /**
     * @size 100 characters
     * @default ` `
     */
    modifiedByUserAddress: string;
    /**
     * @size 50 characters
     * @default ` `
     */
    payerRefNumber: string;
    /**
     * @size 50 characters
     * @default ` `
     */
    vendorRefNumber: string;
    /**
     * @size 10 digits
     * @default `0`
     */
    originatorId: number;
    /**
     * @size 3 characters
     * @default ` `
     */
    payerCurrencyId: string;
    /**
     * @size 3 characters
     * @default ` `
     */
    vendorCurrencyId: string;
    /**
     * @size 15 digits
     * @precision 5 decimals
     * @default `0`
     */
    currencyExchangeRate: number;
    /**
     * @size 15 digits
     * @precision 5 decimals
     * @default `0`
     */
    vendorTotalAmount: number;
    /**
     * @size 10 digits
     * @default `0`
     */
    approvedByUserId: number;
    /**
     * @size 50 characters
     * @default ` `
     */
    approvedByUserName: string;
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
    origin: string;
    /**
     * @size 25 characters
     * @default ` `
     */
    destination: string;
    /**
     * @size 25 characters
     * @default ` `
     */
    placeOfReceipt: string;
    /**
     * @size 25 characters
     * @default ` `
     */
    placeOfDelivery: string;
}

/**
 * Output interface
 */
export interface PCReqTrn {
    /**
     * @size 10 digits
     */
    transactionId: number;
}

/**
 * Convert PCReqTrn record to TypeScript object
 */
export function convertPCReqTrnToObject(dataIn: string): PCReqTrn {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.transactionId = Number(dataIn.substring(pos, pos + 11).trimEnd());
    pos += 11;

    return dataOut;
}

/**
 * Input interface
 */
export interface PCRcvTrn {
    /**
     */
    result: ResultDS;
    /**
     */
    data: DataDS;
}

/**
 * Convert JavaScript object to PCRcvTrn record
 */
export function convertObjectToPCRcvTrn(dataIn: PCRcvTrn): string {
    let dataOut: string = '';

    dataOut += dataIn?.result?.msg?.substring(0, 25)?.padEnd(25) ?? ' '.substring(0, 25).padEnd(25);
    dataOut += dataIn?.result?.code?.toFixed()?.substring(0, 6)?.padEnd(6) ?? '0'.substring(0, 6).padEnd(6);
    dataOut += dataIn?.data?.transaction_id?.toFixed()?.substring(0, 11)?.padEnd(11) ?? '0'.substring(0, 11).padEnd(11);
    dataOut += dataIn?.data?.payerId?.toFixed()?.substring(0, 11)?.padEnd(11) ?? '0'.substring(0, 11).padEnd(11);
    dataOut += dataIn?.data?.payerClientId?.toFixed()?.substring(0, 11)?.padEnd(11) ?? '0'.substring(0, 11).padEnd(11);
    dataOut += dataIn?.data?.payerName?.substring(0, 50)?.padEnd(50) ?? ' '.substring(0, 50).padEnd(50);
    dataOut += dataIn?.data?.vendorId?.toFixed()?.substring(0, 11)?.padEnd(11) ?? '0'.substring(0, 11).padEnd(11);
    dataOut += dataIn?.data?.vendorClientId?.toFixed()?.substring(0, 11)?.padEnd(11) ?? '0'.substring(0, 11).padEnd(11);
    dataOut += dataIn?.data?.vendorName?.substring(0, 50)?.padEnd(50) ?? ' '.substring(0, 50).padEnd(50);
    dataOut += dataIn?.data?.number?.substring(0, 25)?.padEnd(25) ?? ' '.substring(0, 25).padEnd(25);
    dataOut += dataIn?.data?.departureDate?.substring(0, 24)?.padEnd(24) ?? ' '.substring(0, 24).padEnd(24);
    dataOut += dataIn?.data?.arrivalDate?.substring(0, 24)?.padEnd(24) ?? ' '.substring(0, 24).padEnd(24);
    dataOut += dataIn?.data?.paymentDueDate?.substring(0, 24)?.padEnd(24) ?? ' '.substring(0, 24).padEnd(24);
    dataOut += dataIn?.data?.approvalDate?.substring(0, 24)?.padEnd(24) ?? ' '.substring(0, 24).padEnd(24);
    dataOut += dataIn?.data?.hasArrived?.substring(0, 1)?.padEnd(1) ?? ' '.substring(0, 1).padEnd(1);
    dataOut += dataIn?.data?.total?.toFixed(5)?.substring(0, 17)?.padEnd(17) ?? '0'.substring(0, 17).padEnd(17);
    dataOut += dataIn?.data?.directionId?.toFixed()?.substring(0, 6)?.padEnd(6) ?? '0'.substring(0, 6).padEnd(6);
    dataOut += dataIn?.data?.bolLink?.substring(0, 50)?.padEnd(50) ?? ' '.substring(0, 50).padEnd(50);
    dataOut += dataIn?.data?.direction?.substring(0, 25)?.padEnd(25) ?? ' '.substring(0, 25).padEnd(25);
    dataOut += dataIn?.data?.createdDate?.substring(0, 24)?.padEnd(24) ?? ' '.substring(0, 24).padEnd(24);
    dataOut += dataIn?.data?.lastModifiedDate?.substring(0, 24)?.padEnd(24) ?? ' '.substring(0, 24).padEnd(24);
    dataOut +=
        dataIn?.data?.createdByUserId?.toFixed()?.substring(0, 11)?.padEnd(11) ?? '0'.substring(0, 11).padEnd(11);
    dataOut += dataIn?.data?.createdByUserName?.substring(0, 50)?.padEnd(50) ?? ' '.substring(0, 50).padEnd(50);
    dataOut +=
        dataIn?.data?.modifiedByUserId?.toFixed()?.substring(0, 11)?.padEnd(11) ?? '0'.substring(0, 11).padEnd(11);
    dataOut += dataIn?.data?.modifiedByUserName?.substring(0, 50)?.padEnd(50) ?? ' '.substring(0, 50).padEnd(50);
    dataOut += dataIn?.data?.shipperRefNumber?.substring(0, 50)?.padEnd(50) ?? ' '.substring(0, 50).padEnd(50);
    dataOut += dataIn?.data?.customerRefNumber?.substring(0, 50)?.padEnd(50) ?? ' '.substring(0, 50).padEnd(50);
    dataOut += dataIn?.data?.partialPayment?.substring(0, 50)?.padEnd(50) ?? ' '.substring(0, 50).padEnd(50);
    dataOut += dataIn?.data?.disputeReasonResponse?.substring(0, 50)?.padEnd(50) ?? ' '.substring(0, 50).padEnd(50);
    dataOut += dataIn?.data?.subcategory?.substring(0, 50)?.padEnd(50) ?? ' '.substring(0, 50).padEnd(50);
    dataOut +=
        dataIn?.data?.externalSystemId?.toFixed()?.substring(0, 11)?.padEnd(11) ?? '0'.substring(0, 11).padEnd(11);
    dataOut += dataIn?.data?.externalId?.substring(0, 50)?.padEnd(50) ?? ' '.substring(0, 50).padEnd(50);
    dataOut += dataIn?.data?.parent?.substring(0, 50)?.padEnd(50) ?? ' '.substring(0, 50).padEnd(50);
    dataOut += dataIn?.data?.batchId?.substring(0, 50)?.padEnd(50) ?? ' '.substring(0, 50).padEnd(50);
    dataOut += dataIn?.data?.notes?.substring(0, 50)?.padEnd(50) ?? ' '.substring(0, 50).padEnd(50);
    dataOut += dataIn?.data?.valueOfGoods?.substring(0, 50)?.padEnd(50) ?? ' '.substring(0, 50).padEnd(50);
    dataOut += dataIn?.data?.status?.substring(0, 25)?.padEnd(25) ?? ' '.substring(0, 25).padEnd(25);
    dataOut += dataIn?.data?.statusId?.toFixed()?.substring(0, 11)?.padEnd(11) ?? '0'.substring(0, 11).padEnd(11);
    dataOut += dataIn?.data?.type?.substring(0, 50)?.padEnd(50) ?? ' '.substring(0, 50).padEnd(50);
    dataOut +=
        dataIn?.data?.paymentDueDateDiff?.toFixed()?.substring(0, 11)?.padEnd(11) ?? '0'.substring(0, 11).padEnd(11);
    dataOut += dataIn?.data?.directionCode?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
    dataOut += dataIn?.data?.vendorRegion?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
    dataOut += dataIn?.data?.vendorCurrency?.substring(0, 3)?.padEnd(3) ?? ' '.substring(0, 3).padEnd(3);
    dataOut += dataIn?.data?.payerRegion?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
    dataOut += dataIn?.data?.payerCurrency?.substring(0, 3)?.padEnd(3) ?? ' '.substring(0, 3).padEnd(3);
    dataOut +=
        dataIn?.data?.isRegisteredMerchant?.toFixed()?.substring(0, 6)?.padEnd(6) ?? '0'.substring(0, 6).padEnd(6);
    dataOut += dataIn?.data?.paymentMethod?.substring(0, 15)?.padEnd(15) ?? ' '.substring(0, 15).padEnd(15);
    dataOut += dataIn?.data?.modifiedByUserAddress?.substring(0, 100)?.padEnd(100) ?? ' '.substring(0, 100).padEnd(100);
    dataOut += dataIn?.data?.payerRefNumber?.substring(0, 50)?.padEnd(50) ?? ' '.substring(0, 50).padEnd(50);
    dataOut += dataIn?.data?.vendorRefNumber?.substring(0, 50)?.padEnd(50) ?? ' '.substring(0, 50).padEnd(50);
    dataOut += dataIn?.data?.originatorId?.toFixed()?.substring(0, 11)?.padEnd(11) ?? '0'.substring(0, 11).padEnd(11);
    dataOut += dataIn?.data?.payerCurrencyId?.substring(0, 3)?.padEnd(3) ?? ' '.substring(0, 3).padEnd(3);
    dataOut += dataIn?.data?.vendorCurrencyId?.substring(0, 3)?.padEnd(3) ?? ' '.substring(0, 3).padEnd(3);
    dataOut +=
        dataIn?.data?.currencyExchangeRate?.toFixed(5)?.substring(0, 17)?.padEnd(17) ?? '0'.substring(0, 17).padEnd(17);
    dataOut +=
        dataIn?.data?.vendorTotalAmount?.toFixed(5)?.substring(0, 17)?.padEnd(17) ?? '0'.substring(0, 17).padEnd(17);
    dataOut +=
        dataIn?.data?.approvedByUserId?.toFixed()?.substring(0, 11)?.padEnd(11) ?? '0'.substring(0, 11).padEnd(11);
    dataOut += dataIn?.data?.approvedByUserName?.substring(0, 50)?.padEnd(50) ?? ' '.substring(0, 50).padEnd(50);
    dataOut += dataIn?.data?.payerInternalNumber?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
    dataOut += dataIn?.data?.payerFileNumber?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
    dataOut += dataIn?.data?.payerVoucherNumber?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
    dataOut += dataIn?.data?.payerProductNumber?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
    dataOut += dataIn?.data?.payerInvoiceNumber?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
    dataOut += dataIn?.data?.origin?.substring(0, 25)?.padEnd(25) ?? ' '.substring(0, 25).padEnd(25);
    dataOut += dataIn?.data?.destination?.substring(0, 25)?.padEnd(25) ?? ' '.substring(0, 25).padEnd(25);
    dataOut += dataIn?.data?.placeOfReceipt?.substring(0, 25)?.padEnd(25) ?? ' '.substring(0, 25).padEnd(25);
    dataOut += dataIn?.data?.placeOfDelivery?.substring(0, 25)?.padEnd(25) ?? ' '.substring(0, 25).padEnd(25);

    return dataOut;
}

/* eslint-enable */

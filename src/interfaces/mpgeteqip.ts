/* eslint-disable */
// @ts-nocheck
// Module: mpgeteqip
// Generated source -- do not modify

import { ibmiConversions } from '@eradani-inc/ec-client';
const { fromIbmiDate, fromIbmiTime, fromIbmiTimestamp, toIbmiDate, toIbmiTime, toIbmiTimestamp } = ibmiConversions;

import eradaniConnect from '@eradani-inc/eradani-connect';
const { dataTypes } = eradaniConnect;

/**
 * Data structure
 */
let CustFldsDSFields: any = [
    {
        name: 'key',
        type: new dataTypes.PackedDecimal(9, 0)
    },
    {
        name: 'customFieldKey',
        type: new dataTypes.PackedDecimal(9, 0)
    },
    {
        name: 'fieldName',
        type: new dataTypes.Char(25)
    },
    {
        name: 'value',
        type: new dataTypes.Char(25)
    }
];

/**
 * Input interface
 */
export interface CustFldsDSInput {
    /**
     * @size 9 digits
     * @precision 0 decimals
     */
    key: number | string;
    /**
     * @size 9 digits
     * @precision 0 decimals
     */
    customFieldKey: number | string;
    /**
     * @size 25 characters
     */
    fieldName: string;
    /**
     * @size 25 characters
     */
    value: string;
}

/**
 * Output interface
 */
export interface CustFldsDS {
    /**
     * @size 9 digits
     * @precision 0 decimals
     */
    key: number;
    /**
     * @size 9 digits
     * @precision 0 decimals
     */
    customFieldKey: number;
    /**
     * @size 25 characters
     */
    fieldName: string;
    /**
     * @size 25 characters
     */
    value: string;
}

/**
 * Output interface
 */
export interface ReqAssetChg {
    /**
     * @size 256 characters
     */
    filename: string;
}

/**
 * Convert ReqAssetChg record to TypeScript object
 */
export function convertReqAssetChgToObject(dataIn: string): ReqAssetChg {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.filename = dataIn.substring(pos, pos + 256).trimEnd();
    pos += 256;

    return dataOut;
}

/**
 * Input interface
 */
export interface AssetChgDS {
    /**
     * @size 9 digits
     * @precision 0 decimals
     */
    assetKey: number;
    /**
     * @size 25 characters
     */
    entityName: string;
    /**
     * @size 25 characters
     */
    parentAssetId: string;
    /**
     * @size 25 characters
     */
    description: string;
    /**
     * @size 9 digits
     * @precision 0 decimals
     */
    groupKey: number;
    /**
     * @size 25 characters
     */
    groupId: string;
    /**
     * @size 25 characters
     */
    categoryId: string;
    /**
     * @size 25 characters
     */
    typeId: string;
    /**
     * @size 25 characters
     */
    budgetGroupId: string;
    /**
     * @size 25 characters
     */
    statusId: string;
    /**
     * @size 25 characters
     */
    barcode: string;
    /**
     * @size 25 characters
     */
    manufacturer: string;
    /**
     * @size 25 characters
     */
    model: string;
    /**
     * @size 25 characters
     */
    serialNumber: string;
    /**
     * @size 25 characters
     */
    customer: string;
    /**
     * @size 9 digits
     * @precision 0 decimals
     */
    customerKey: number;
    /**
     */
    purchaseDate: Date;
    /**
     * @size 15 digits
     * @precision 2 decimals
     */
    purchaseCost: number;
    /**
     */
    customFields: Array<CustFldsDS>;
}

/**
 * Convert JavaScript object to AssetChgDS record
 */
export function convertObjectToAssetChgDS(dataIn: AssetChgDS): string {
    let dataOut: string = '';

    dataOut += dataIn.assetKey.toFixed(0).substring(0, 11).padEnd(11);
    dataOut += dataIn.entityName.substring(0, 25).padEnd(25);
    dataOut += dataIn.parentAssetId.substring(0, 25).padEnd(25);
    dataOut += dataIn.description.substring(0, 25).padEnd(25);
    dataOut += dataIn.groupKey.toFixed(0).substring(0, 11).padEnd(11);
    dataOut += dataIn.groupId.substring(0, 25).padEnd(25);
    dataOut += dataIn.categoryId.substring(0, 25).padEnd(25);
    dataOut += dataIn.typeId.substring(0, 25).padEnd(25);
    dataOut += dataIn.budgetGroupId.substring(0, 25).padEnd(25);
    dataOut += dataIn.statusId.substring(0, 25).padEnd(25);
    dataOut += dataIn.barcode.substring(0, 25).padEnd(25);
    dataOut += dataIn.manufacturer.substring(0, 25).padEnd(25);
    dataOut += dataIn.model.substring(0, 25).padEnd(25);
    dataOut += dataIn.serialNumber.substring(0, 25).padEnd(25);
    dataOut += dataIn.customer.substring(0, 25).padEnd(25);
    dataOut += dataIn.customerKey.toFixed(0).substring(0, 11).padEnd(11);
    dataOut += toIbmiDate(dataIn.purchaseDate);
    dataOut += dataIn.purchaseCost.toFixed(2).substring(0, 17).padEnd(17);
    for (let i: number = 0; i < 100; ++i) {
        dataOut += dataIn.customFields[i].key.toFixed(0).substring(0, 11).padEnd(11);
        dataOut += dataIn.customFields[i].customFieldKey.toFixed(0).substring(0, 11).padEnd(11);
        dataOut += dataIn.customFields[i].fieldName.substring(0, 25).padEnd(25);
        dataOut += dataIn.customFields[i].value.substring(0, 25).padEnd(25);
    }

    return dataOut;
}

/* eslint-enable */

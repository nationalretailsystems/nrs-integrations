/* eslint-disable */
// @ts-nocheck
// Module: mpgeteq2
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
        type: new dataTypes.Integer(10)
    },
    {
        name: 'customFieldKey',
        type: new dataTypes.Integer(10)
    },
    {
        name: 'fieldName',
        type: new dataTypes.Char(24)
    },
    {
        name: 'value',
        type: new dataTypes.Char(100)
    }
];

/**
 * Input interface
 */
export interface CustFldsDSInput {
    /**
     * @size 10 digits
     */
    key: number | string;
    /**
     * @size 10 digits
     */
    customFieldKey: number | string;
    /**
     * @size 24 characters
     */
    fieldName: string;
    /**
     * @size 100 characters
     */
    value: string;
}

/**
 * Output interface
 */
export interface CustFldsDS {
    /**
     * @size 10 digits
     */
    key: number;
    /**
     * @size 10 digits
     */
    customFieldKey: number;
    /**
     * @size 24 characters
     */
    fieldName: string;
    /**
     * @size 100 characters
     */
    value: string;
}

/**
 * Output interface
 */
export interface RqAssetAll {
    /**
     * @size 256 characters
     */
    filename: string;
}

/**
 * Convert RqAssetAll record to TypeScript object
 */
export function convertRqAssetAllToObject(dataIn: string): RqAssetAll {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.filename = dataIn.substring(pos, pos + 256).trimEnd();
    pos += 256;

    return dataOut;
}

/**
 * Input interface
 */
export interface AssetAllDS {
    /**
     * @size 10 digits
     */
    assetKey: number;
    /**
     * @size 50 characters
     */
    entityName: string;
    /**
     * @size 24 characters
     */
    assetId: string;
    /**
     * @size 24 characters
     */
    parentAssetId: string;
    /**
     * @size 50 characters
     */
    description: string;
    /**
     * @size 10 digits
     */
    groupKey: number;
    /**
     * @size 24 characters
     */
    groupId: string;
    /**
     * @size 24 characters
     */
    categoryId: string;
    /**
     * @size 24 characters
     */
    typeId: string;
    /**
     * @size 24 characters
     */
    budgetGroupId: string;
    /**
     * @size 24 characters
     */
    statusId: string;
    /**
     * @size 50 characters
     */
    barcode: string;
    /**
     * @size 24 characters
     */
    manufacturer: string;
    /**
     * @size 32 characters
     */
    model: string;
    /**
     * @size 32 characters
     */
    serialNumber: string;
    /**
     * @size 50 characters
     */
    customer: string;
    /**
     * @size 10 digits
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
 * Convert JavaScript object to AssetAllDS record
 */
export function convertObjectToAssetAllDS(dataIn: AssetAllDS): string {
    let dataOut: string = '';

    dataOut += dataIn.assetKey.toFixed().substring(0, 11).padEnd(11);
    dataOut += dataIn.entityName.substring(0, 50).padEnd(50);
    dataOut += dataIn.assetId.substring(0, 24).padEnd(24);
    dataOut += dataIn.parentAssetId.substring(0, 24).padEnd(24);
    dataOut += dataIn.description.substring(0, 50).padEnd(50);
    dataOut += dataIn.groupKey.toFixed().substring(0, 11).padEnd(11);
    dataOut += dataIn.groupId.substring(0, 24).padEnd(24);
    dataOut += dataIn.categoryId.substring(0, 24).padEnd(24);
    dataOut += dataIn.typeId.substring(0, 24).padEnd(24);
    dataOut += dataIn.budgetGroupId.substring(0, 24).padEnd(24);
    dataOut += dataIn.statusId.substring(0, 24).padEnd(24);
    dataOut += dataIn.barcode.substring(0, 50).padEnd(50);
    dataOut += dataIn.manufacturer.substring(0, 24).padEnd(24);
    dataOut += dataIn.model.substring(0, 32).padEnd(32);
    dataOut += dataIn.serialNumber.substring(0, 32).padEnd(32);
    dataOut += dataIn.customer.substring(0, 50).padEnd(50);
    dataOut += dataIn.customerKey.toFixed().substring(0, 11).padEnd(11);
    dataOut += toIbmiDate(dataIn.purchaseDate);
    dataOut += dataIn.purchaseCost.toFixed(2).substring(0, 17).padEnd(17);
    for (let i: number = 0; i < 100; ++i) {
        dataOut += dataIn.customFields[i].key.toFixed().substring(0, 11).padEnd(11);
        dataOut += dataIn.customFields[i].customFieldKey.toFixed().substring(0, 11).padEnd(11);
        dataOut += dataIn.customFields[i].fieldName.substring(0, 24).padEnd(24);
        dataOut += dataIn.customFields[i].value.substring(0, 100).padEnd(100);
    }

    return dataOut;
}

/* eslint-enable */

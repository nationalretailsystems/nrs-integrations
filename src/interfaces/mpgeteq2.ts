/* eslint-disable */
// @ts-nocheck
// Module: mpgeteq2
// Generated source -- do not modify

import { ibmiConversions, missingInput } from '@eradani-inc/ec-client';
const { fromIbmiDate, fromIbmiTime, fromIbmiTimestamp, toIbmiDate, toIbmiTime, toIbmiTimestamp } = ibmiConversions;

import eradaniConnect from '@eradani-inc/eradani-connect';
const { dataTypes } = eradaniConnect;

/**
 * Output interface
 */
export interface CustFldsDS {
    /**
     * @size 10 digits
     * @default `0`
     */
    key: number;
    /**
     * @size 10 digits
     * @default `0`
     */
    customFieldKey: number;
    /**
     * @size 24 characters
     * @default ` `
     */
    fieldName: string;
    /**
     * @size 100 characters
     * @default ` `
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
    /**
     * @size 5 digits
     */
    skiprecs: number;
}

/**
 * Convert RqAssetAll record to TypeScript object
 */
export function convertRqAssetAllToObject(dataIn: string): RqAssetAll {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.filename = dataIn.substring(pos, pos + 256).trimEnd();
    pos += 256;
    dataOut.skiprecs = Number(dataIn.substring(pos, pos + 6).trimEnd());
    pos += 6;

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
     * @default ` `
     */
    parentAssetId: string;
    /**
     * @size 50 characters
     * @default ` `
     */
    description: string;
    /**
     * @size 10 digits
     * @default `0`
     */
    groupKey: number;
    /**
     * @size 24 characters
     * @default ` `
     */
    groupId: string;
    /**
     * @size 24 characters
     * @default ` `
     */
    categoryId: string;
    /**
     * @size 24 characters
     * @default ` `
     */
    typeId: string;
    /**
     * @size 24 characters
     * @default ` `
     */
    budgetGroupId: string;
    /**
     * @size 24 characters
     * @default ` `
     */
    budgetId: string;
    /**
     * @size 24 characters
     */
    statusId: string;
    /**
     * @size 50 characters
     * @default ` `
     */
    barcode: string;
    /**
     * @size 24 characters
     * @default ` `
     */
    manufacturer: string;
    /**
     * @size 32 characters
     * @default ` `
     */
    model: string;
    /**
     * @size 32 characters
     * @default ` `
     */
    serialNumber: string;
    /**
     * @size 50 characters
     * @default ` `
     */
    customer: string;
    /**
     * @size 10 digits
     * @default `0`
     */
    customerKey: number;
    /**
     * @default `0001-01-01`
     */
    purchaseDate: Date;
    /**
     * @size 15 digits
     * @precision 2 decimals
     * @default `0`
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

    dataOut +=
        dataIn?.assetKey?.toFixed()?.substring(0, 11)?.padEnd(11) ??
        missingInput(`dataIn.assetKey`, 'integer', dataIn?.assetKey);
    dataOut +=
        dataIn?.entityName?.substring(0, 50)?.padEnd(50) ??
        missingInput(`dataIn.entityName`, 'char', dataIn?.entityName);
    dataOut += dataIn?.assetId?.substring(0, 24)?.padEnd(24) ?? missingInput(`dataIn.assetId`, 'char', dataIn?.assetId);
    dataOut += dataIn?.parentAssetId?.substring(0, 24)?.padEnd(24) ?? ' '.substring(0, 24).padEnd(24);
    dataOut += dataIn?.description?.substring(0, 50)?.padEnd(50) ?? ' '.substring(0, 50).padEnd(50);
    dataOut += dataIn?.groupKey?.toFixed()?.substring(0, 11)?.padEnd(11) ?? '0'.substring(0, 11).padEnd(11);
    dataOut += dataIn?.groupId?.substring(0, 24)?.padEnd(24) ?? ' '.substring(0, 24).padEnd(24);
    dataOut += dataIn?.categoryId?.substring(0, 24)?.padEnd(24) ?? ' '.substring(0, 24).padEnd(24);
    dataOut += dataIn?.typeId?.substring(0, 24)?.padEnd(24) ?? ' '.substring(0, 24).padEnd(24);
    dataOut += dataIn?.budgetGroupId?.substring(0, 24)?.padEnd(24) ?? ' '.substring(0, 24).padEnd(24);
    dataOut += dataIn?.budgetId?.substring(0, 24)?.padEnd(24) ?? ' '.substring(0, 24).padEnd(24);
    dataOut +=
        dataIn?.statusId?.substring(0, 24)?.padEnd(24) ?? missingInput(`dataIn.statusId`, 'char', dataIn?.statusId);
    dataOut += dataIn?.barcode?.substring(0, 50)?.padEnd(50) ?? ' '.substring(0, 50).padEnd(50);
    dataOut += dataIn?.manufacturer?.substring(0, 24)?.padEnd(24) ?? ' '.substring(0, 24).padEnd(24);
    dataOut += dataIn?.model?.substring(0, 32)?.padEnd(32) ?? ' '.substring(0, 32).padEnd(32);
    dataOut += dataIn?.serialNumber?.substring(0, 32)?.padEnd(32) ?? ' '.substring(0, 32).padEnd(32);
    dataOut += dataIn?.customer?.substring(0, 50)?.padEnd(50) ?? ' '.substring(0, 50).padEnd(50);
    dataOut += dataIn?.customerKey?.toFixed()?.substring(0, 11)?.padEnd(11) ?? '0'.substring(0, 11).padEnd(11);
    dataOut +=
        dataIn?.purchaseDate !== undefined && dataIn?.purchaseDate !== null
            ? toIbmiDate(dataIn?.purchaseDate)
            : '0001-01-01'.substring(0, 10).padEnd(10);
    dataOut += dataIn?.purchaseCost?.toFixed(2)?.substring(0, 17)?.padEnd(17) ?? '0'.substring(0, 17).padEnd(17);
    for (let i: number = 0; i < dataIn.customFields.length; ++i) {
        dataOut +=
            dataIn?.customFields[i]?.key?.toFixed()?.substring(0, 11)?.padEnd(11) ?? '0'.substring(0, 11).padEnd(11);
        dataOut +=
            dataIn?.customFields[i]?.customFieldKey?.toFixed()?.substring(0, 11)?.padEnd(11) ??
            '0'.substring(0, 11).padEnd(11);
        dataOut += dataIn?.customFields[i]?.fieldName?.substring(0, 24)?.padEnd(24) ?? ' '.substring(0, 24).padEnd(24);
        dataOut += dataIn?.customFields[i]?.value?.substring(0, 100)?.padEnd(100) ?? ' '.substring(0, 100).padEnd(100);
    }

    return dataOut;
}

/* eslint-enable */

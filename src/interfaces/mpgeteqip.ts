/* eslint-disable */
// @ts-nocheck
// Module: mpgeteqip
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
export interface RqAssetChg {
    /**
     * @size 256 characters
     */
    filename: string;
    /**
     */
    sincedate: Date;
}

/**
 * Convert RqAssetChg record to TypeScript object
 */
export function convertRqAssetChgToObject(dataIn: string): RqAssetChg {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.filename = dataIn.substring(pos, pos + 256).trimEnd();
    pos += 256;
    dataOut.sincedate = fromIbmiDate(dataIn.substring(pos, pos + 10).trimEnd());
    pos += 10;

    return dataOut;
}

/**
 * Input interface
 */
export interface AssetChgDS {
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
    budgetId: string;
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
 * Convert JavaScript object to AssetChgDS record
 */
export function convertObjectToAssetChgDS(dataIn: AssetChgDS): string {
    let dataOut: string = '';

    dataOut +=
        dataIn?.assetKey?.toFixed()?.substring(0, 11)?.padEnd(11) ??
        missingInput(`dataIn.assetKey`, 'integer', dataIn?.assetKey);
    dataOut +=
        dataIn?.entityName?.substring(0, 50)?.padEnd(50) ??
        missingInput(`dataIn.entityName`, 'char', dataIn?.entityName);
    dataOut += dataIn?.assetId?.substring(0, 24)?.padEnd(24) ?? missingInput(`dataIn.assetId`, 'char', dataIn?.assetId);
    dataOut +=
        dataIn?.parentAssetId?.substring(0, 24)?.padEnd(24) ??
        missingInput(`dataIn.parentAssetId`, 'char', dataIn?.parentAssetId);
    dataOut +=
        dataIn?.description?.substring(0, 50)?.padEnd(50) ??
        missingInput(`dataIn.description`, 'char', dataIn?.description);
    dataOut +=
        dataIn?.groupKey?.toFixed()?.substring(0, 11)?.padEnd(11) ??
        missingInput(`dataIn.groupKey`, 'integer', dataIn?.groupKey);
    dataOut += dataIn?.groupId?.substring(0, 24)?.padEnd(24) ?? missingInput(`dataIn.groupId`, 'char', dataIn?.groupId);
    dataOut +=
        dataIn?.categoryId?.substring(0, 24)?.padEnd(24) ??
        missingInput(`dataIn.categoryId`, 'char', dataIn?.categoryId);
    dataOut += dataIn?.typeId?.substring(0, 24)?.padEnd(24) ?? missingInput(`dataIn.typeId`, 'char', dataIn?.typeId);
    dataOut +=
        dataIn?.budgetGroupId?.substring(0, 24)?.padEnd(24) ??
        missingInput(`dataIn.budgetGroupId`, 'char', dataIn?.budgetGroupId);
    dataOut +=
        dataIn?.budgetId?.substring(0, 24)?.padEnd(24) ?? missingInput(`dataIn.budgetId`, 'char', dataIn?.budgetId);
    dataOut +=
        dataIn?.statusId?.substring(0, 24)?.padEnd(24) ?? missingInput(`dataIn.statusId`, 'char', dataIn?.statusId);
    dataOut += dataIn?.barcode?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.barcode`, 'char', dataIn?.barcode);
    dataOut +=
        dataIn?.manufacturer?.substring(0, 24)?.padEnd(24) ??
        missingInput(`dataIn.manufacturer`, 'char', dataIn?.manufacturer);
    dataOut += dataIn?.model?.substring(0, 32)?.padEnd(32) ?? missingInput(`dataIn.model`, 'char', dataIn?.model);
    dataOut +=
        dataIn?.serialNumber?.substring(0, 32)?.padEnd(32) ??
        missingInput(`dataIn.serialNumber`, 'char', dataIn?.serialNumber);
    dataOut +=
        dataIn?.customer?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.customer`, 'char', dataIn?.customer);
    dataOut +=
        dataIn?.customerKey?.toFixed()?.substring(0, 11)?.padEnd(11) ??
        missingInput(`dataIn.customerKey`, 'integer', dataIn?.customerKey);
    dataOut +=
        dataIn?.purchaseDate !== undefined
            ? toIbmiDate(dataIn?.purchaseDate)
            : missingInput(`dataIn.purchaseDate`, 'date', dataIn?.purchaseDate);
    dataOut +=
        dataIn?.purchaseCost?.toFixed(2)?.substring(0, 17)?.padEnd(17) ??
        missingInput(`dataIn.purchaseCost`, 'packed', dataIn?.purchaseCost);
    for (let i: number = 0; i < 100; ++i) {
        dataOut +=
            dataIn?.customFields[i]?.key?.toFixed()?.substring(0, 11)?.padEnd(11) ??
            missingInput(`dataIn.customFields[${i}].key`, 'integer', dataIn?.customFields[i]?.key);
        dataOut +=
            dataIn?.customFields[i]?.customFieldKey?.toFixed()?.substring(0, 11)?.padEnd(11) ??
            missingInput(
                `dataIn.customFields[${i}].customFieldKey`,
                'integer',
                dataIn?.customFields[i]?.customFieldKey
            );
        dataOut +=
            dataIn?.customFields[i]?.fieldName?.substring(0, 24)?.padEnd(24) ??
            missingInput(`dataIn.customFields[${i}].fieldName`, 'char', dataIn?.customFields[i]?.fieldName);
        dataOut +=
            dataIn?.customFields[i]?.value?.substring(0, 100)?.padEnd(100) ??
            missingInput(`dataIn.customFields[${i}].value`, 'char', dataIn?.customFields[i]?.value);
    }

    return dataOut;
}

/* eslint-enable */

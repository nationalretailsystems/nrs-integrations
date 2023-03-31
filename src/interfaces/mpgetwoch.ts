/* eslint-disable */
// @ts-nocheck
// Module: mpgetwoch
// Generated source -- do not modify

import { ibmiConversions, missingInput } from '@eradani-inc/ec-client';
const { fromIbmiDate, fromIbmiTime, fromIbmiTimestamp, toIbmiDate, toIbmiTime, toIbmiTimestamp } = ibmiConversions;

import eradaniConnect from '@eradani-inc/eradani-connect';
const { dataTypes } = eradaniConnect;

/**
 * Output interface
 */
export interface customFldsDs {
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
     * @size 50 characters
     */
    value: string;
}

/**
 * Output interface
 */
export interface ReqWoChg {
    /**
     */
    since: Date;
}

/**
 * Convert ReqWoChg record to TypeScript object
 */
export function convertReqWoChgToObject(dataIn: string): ReqWoChg {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.since = fromIbmiDate(dataIn.substring(pos, pos + 10).trimEnd());
    pos += 10;

    return dataOut;
}

/**
 * Input interface
 */
export interface ResWoChg {
    /**
     * @size 10 digits
     */
    workOrderKey: number;
    /**
     * @size 10 digits
     */
    workOrderNumber: number;
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
    workTypeId: string;
    /**
     * @size 24 characters
     */
    purpose: string;
    /**
     * @size 24 characters
     */
    failureCode: string;
    /**
     * @size 24 characters
     */
    priorityId: string;
    /**
     * @size 50 characters
     */
    assigned: string;
    /**
     * @size 24 characters
     */
    budgetId: string;
    /**
     * @size 24 characters
     */
    statusId: string;
    /**
     */
    dateCreated: Date;
    /**
     */
    dateCompleted: Date;
    /**
     */
    dateDue: Date;
    /**
     */
    scheduledDate: Date;
    /**
     */
    estimatedCompletion: Date;
    /**
     * @size 24 characters
     */
    customer: string;
    /**
     * @size 10 digits
     */
    customerKey: number;
    /**
     * @size 10 digits
     */
    requestId: number;
    /**
     * @size 10 digits
     */
    inspectionId: number;
    /**
     * @size 10 digits
     */
    invoiceNumber: number;
    /**
     */
    workOrderActive: boolean;
    /**
     * @size 11 digits
     * @precision 2 decimals
     */
    partsCost: number;
    /**
     * @size 11 digits
     * @precision 2 decimals
     */
    laborCost: number;
    /**
     * @size 11 digits
     * @precision 2 decimals
     */
    otherCost: number;
    /**
     * @size 11 digits
     * @precision 2 decimals
     */
    totalCosts: number;
    /**
     * @size 24 characters
     */
    scheduleId: string;
    /**
     */
    customFields: Array<customFldsDs>;
}

/**
 * Convert JavaScript object to ResWoChg record
 */
export function convertObjectToResWoChg(dataIn: ResWoChg): string {
    let dataOut: string = '';

    dataOut +=
        dataIn?.workOrderKey?.toFixed()?.substring(0, 11)?.padEnd(11) ??
        missingInput(`dataIn.workOrderKey`, 'integer', dataIn?.workOrderKey);
    dataOut +=
        dataIn?.workOrderNumber?.toFixed()?.substring(0, 11)?.padEnd(11) ??
        missingInput(`dataIn.workOrderNumber`, 'integer', dataIn?.workOrderNumber);
    dataOut +=
        dataIn?.entityName?.substring(0, 50)?.padEnd(50) ??
        missingInput(`dataIn.entityName`, 'char', dataIn?.entityName);
    dataOut += dataIn?.assetId?.substring(0, 24)?.padEnd(24) ?? missingInput(`dataIn.assetId`, 'char', dataIn?.assetId);
    dataOut +=
        dataIn?.workTypeId?.substring(0, 24)?.padEnd(24) ??
        missingInput(`dataIn.workTypeId`, 'char', dataIn?.workTypeId);
    dataOut += dataIn?.purpose?.substring(0, 24)?.padEnd(24) ?? missingInput(`dataIn.purpose`, 'char', dataIn?.purpose);
    dataOut +=
        dataIn?.failureCode?.substring(0, 24)?.padEnd(24) ??
        missingInput(`dataIn.failureCode`, 'char', dataIn?.failureCode);
    dataOut +=
        dataIn?.priorityId?.substring(0, 24)?.padEnd(24) ??
        missingInput(`dataIn.priorityId`, 'char', dataIn?.priorityId);
    dataOut +=
        dataIn?.assigned?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.assigned`, 'char', dataIn?.assigned);
    dataOut +=
        dataIn?.budgetId?.substring(0, 24)?.padEnd(24) ?? missingInput(`dataIn.budgetId`, 'char', dataIn?.budgetId);
    dataOut +=
        dataIn?.statusId?.substring(0, 24)?.padEnd(24) ?? missingInput(`dataIn.statusId`, 'char', dataIn?.statusId);
    dataOut +=
        dataIn?.dateCreated !== undefined
            ? toIbmiDate(dataIn?.dateCreated)
            : missingInput(`dataIn.dateCreated`, 'date', dataIn?.dateCreated);
    dataOut +=
        dataIn?.dateCompleted !== undefined
            ? toIbmiDate(dataIn?.dateCompleted)
            : missingInput(`dataIn.dateCompleted`, 'date', dataIn?.dateCompleted);
    dataOut +=
        dataIn?.dateDue !== undefined
            ? toIbmiDate(dataIn?.dateDue)
            : missingInput(`dataIn.dateDue`, 'date', dataIn?.dateDue);
    dataOut +=
        dataIn?.scheduledDate !== undefined
            ? toIbmiDate(dataIn?.scheduledDate)
            : missingInput(`dataIn.scheduledDate`, 'date', dataIn?.scheduledDate);
    dataOut +=
        dataIn?.estimatedCompletion !== undefined
            ? toIbmiDate(dataIn?.estimatedCompletion)
            : missingInput(`dataIn.estimatedCompletion`, 'date', dataIn?.estimatedCompletion);
    dataOut +=
        dataIn?.customer?.substring(0, 24)?.padEnd(24) ?? missingInput(`dataIn.customer`, 'char', dataIn?.customer);
    dataOut +=
        dataIn?.customerKey?.toFixed()?.substring(0, 11)?.padEnd(11) ??
        missingInput(`dataIn.customerKey`, 'integer', dataIn?.customerKey);
    dataOut +=
        dataIn?.requestId?.toFixed()?.substring(0, 11)?.padEnd(11) ??
        missingInput(`dataIn.requestId`, 'integer', dataIn?.requestId);
    dataOut +=
        dataIn?.inspectionId?.toFixed()?.substring(0, 11)?.padEnd(11) ??
        missingInput(`dataIn.inspectionId`, 'integer', dataIn?.inspectionId);
    dataOut +=
        dataIn?.invoiceNumber?.toFixed()?.substring(0, 11)?.padEnd(11) ??
        missingInput(`dataIn.invoiceNumber`, 'integer', dataIn?.invoiceNumber);
    dataOut +=
        dataIn?.workOrderActive !== undefined
            ? dataIn?.workOrderActive
                ? '1'
                : '0'
            : missingInput(`dataIn.workOrderActive`, 'bool', dataIn?.workOrderActive);
    dataOut +=
        dataIn?.partsCost?.toFixed(2)?.substring(0, 13)?.padEnd(13) ??
        missingInput(`dataIn.partsCost`, 'packed', dataIn?.partsCost);
    dataOut +=
        dataIn?.laborCost?.toFixed(2)?.substring(0, 13)?.padEnd(13) ??
        missingInput(`dataIn.laborCost`, 'packed', dataIn?.laborCost);
    dataOut +=
        dataIn?.otherCost?.toFixed(2)?.substring(0, 13)?.padEnd(13) ??
        missingInput(`dataIn.otherCost`, 'packed', dataIn?.otherCost);
    dataOut +=
        dataIn?.totalCosts?.toFixed(2)?.substring(0, 13)?.padEnd(13) ??
        missingInput(`dataIn.totalCosts`, 'packed', dataIn?.totalCosts);
    dataOut +=
        dataIn?.scheduleId?.substring(0, 24)?.padEnd(24) ??
        missingInput(`dataIn.scheduleId`, 'char', dataIn?.scheduleId);
    for (let i: number = 0; i < 50; ++i) {
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
            dataIn?.customFields[i]?.value?.substring(0, 50)?.padEnd(50) ??
            missingInput(`dataIn.customFields[${i}].value`, 'char', dataIn?.customFields[i]?.value);
    }

    return dataOut;
}

/* eslint-enable */

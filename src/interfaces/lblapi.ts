/* eslint-disable */
// @ts-nocheck
// Module: lblapi
// Generated source -- do not modify

import { ibmiConversions, missingInput } from '@eradani-inc/ec-client';
const { fromIbmiDate, fromIbmiTime, fromIbmiTimestamp, toIbmiDate, toIbmiTime, toIbmiTimestamp } = ibmiConversions;

/**
 * Output interface
 */
export interface LabelData {
    /**
     * @size 16 characters
     */
    toName: string;
    /**
     * @size 20 characters
     */
    toAddress: string;
    /**
     * @size 10 characters
     */
    toCity: string;
    /**
     * @size 2 characters
     */
    toState: string;
    /**
     * @size 5 characters
     */
    toZip: string;
    /**
     * @size 3 characters
     */
    toCountry: string;
    /**
     * @size 5 characters
     */
    weight: string;
    /**
     * @size 2 characters
     */
    weightUnits: string;
    /**
     * @size 5 characters
     */
    height: string;
    /**
     * @size 5 characters
     */
    width: string;
    /**
     * @size 5 characters
     */
    length: string;
    /**
     * @size 2 characters
     */
    sizeUnits: string;
}

/**
 * Convert LabelData record to TypeScript object
 */
export function convertLabelDataToObject(dataIn: string): LabelData {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.toName = dataIn.substring(pos, pos + 16).trimEnd();
    pos += 16;
    dataOut.toAddress = dataIn.substring(pos, pos + 20).trimEnd();
    pos += 20;
    dataOut.toCity = dataIn.substring(pos, pos + 10).trimEnd();
    pos += 10;
    dataOut.toState = dataIn.substring(pos, pos + 2).trimEnd();
    pos += 2;
    dataOut.toZip = dataIn.substring(pos, pos + 5).trimEnd();
    pos += 5;
    dataOut.toCountry = dataIn.substring(pos, pos + 3).trimEnd();
    pos += 3;
    dataOut.weight = dataIn.substring(pos, pos + 5).trimEnd();
    pos += 5;
    dataOut.weightUnits = dataIn.substring(pos, pos + 2).trimEnd();
    pos += 2;
    dataOut.height = dataIn.substring(pos, pos + 5).trimEnd();
    pos += 5;
    dataOut.width = dataIn.substring(pos, pos + 5).trimEnd();
    pos += 5;
    dataOut.length = dataIn.substring(pos, pos + 5).trimEnd();
    pos += 5;
    dataOut.sizeUnits = dataIn.substring(pos, pos + 2).trimEnd();
    pos += 2;

    return dataOut;
}

/**
 * Input interface
 */
export interface ShipInfo {
    /**
     * @size 10 characters
     */
    labelStatus: string;
    /**
     * @size 11 characters
     */
    shipmentId: string;
    /**
     * @size 11 characters
     */
    labelId: string;
    /**
     * @size 10 digits
     * @precision 2 decimals
     */
    shipmentCost: number;
    /**
     * @size 3 characters
     */
    shipmentCostCurrency: string;
    /**
     * @size 10 digits
     * @precision 2 decimals
     */
    insuranceCost: number;
    /**
     * @size 3 characters
     */
    insuranceCostCurrency: string;
}

/**
 * Convert JavaScript object to ShipInfo record
 */
export function convertObjectToShipInfo(dataIn: ShipInfo): string {
    let dataOut: string = '';

    dataOut +=
        dataIn?.labelStatus?.substring(0, 10)?.padEnd(10) ??
        missingInput(`dataIn.labelStatus`, 'char', dataIn?.labelStatus);
    dataOut +=
        dataIn?.shipmentId?.substring(0, 11)?.padEnd(11) ??
        missingInput(`dataIn.shipmentId`, 'char', dataIn?.shipmentId);
    dataOut += dataIn?.labelId?.substring(0, 11)?.padEnd(11) ?? missingInput(`dataIn.labelId`, 'char', dataIn?.labelId);
    dataOut +=
        dataIn?.shipmentCost?.toFixed(2)?.substring(0, 12)?.padEnd(12) ??
        missingInput(`dataIn.shipmentCost`, 'packed', dataIn?.shipmentCost);
    dataOut +=
        dataIn?.shipmentCostCurrency?.substring(0, 3)?.padEnd(3) ??
        missingInput(`dataIn.shipmentCostCurrency`, 'char', dataIn?.shipmentCostCurrency);
    dataOut +=
        dataIn?.insuranceCost?.toFixed(2)?.substring(0, 12)?.padEnd(12) ??
        missingInput(`dataIn.insuranceCost`, 'packed', dataIn?.insuranceCost);
    dataOut +=
        dataIn?.insuranceCostCurrency?.substring(0, 3)?.padEnd(3) ??
        missingInput(`dataIn.insuranceCostCurrency`, 'char', dataIn?.insuranceCostCurrency);

    return dataOut;
}

/**
 * Input interface
 */
export interface Label {
    /**
     * @size 30 characters
     */
    trackingNumber: string;
    /**
     * @size 23 characters
     */
    labelPdfFile: string;
    /**
     * @size 23 characters
     */
    labelZplFile: string;
}

/**
 * Convert JavaScript object to Label record
 */
export function convertObjectToLabel(dataIn: Label): string {
    let dataOut: string = '';

    dataOut +=
        dataIn?.trackingNumber?.substring(0, 30)?.padEnd(30) ??
        missingInput(`dataIn.trackingNumber`, 'char', dataIn?.trackingNumber);
    dataOut +=
        dataIn?.labelPdfFile?.substring(0, 23)?.padEnd(23) ??
        missingInput(`dataIn.labelPdfFile`, 'char', dataIn?.labelPdfFile);
    dataOut +=
        dataIn?.labelZplFile?.substring(0, 23)?.padEnd(23) ??
        missingInput(`dataIn.labelZplFile`, 'char', dataIn?.labelZplFile);

    return dataOut;
}

/* eslint-enable */

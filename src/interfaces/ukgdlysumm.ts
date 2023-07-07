/* eslint-disable */
// @ts-nocheck
// Module: ukgdlysumm
// Generated source -- do not modify

import { ibmiConversions, missingInput } from '@eradani-inc/ec-client';
const { fromIbmiDate, fromIbmiTime, fromIbmiTimestamp, toIbmiDate, toIbmiTime, toIbmiTimestamp } = ibmiConversions;

/**
 * Output interface
 */
export interface employeeDS {
    /**
     * @size 5 digits
     * @precision 0 decimals
     */
    id: number;
    /**
     * @size 6 characters
     */
    qualifier: string;
    /**
     * @size 6 characters
     */
    name: string;
}

/**
 * Output interface
 */
export interface dlyTtlAmtDS {
    /**
     * @size 5 digits
     * @precision 0 decimals
     */
    HOUR: number;
}

/**
 * Output interface
 */
export interface wagesCurrencyDS {
    /**
     * @size 1 digits
     * @precision 0 decimals
     */
    amount: number;
    /**
     * @size 3 characters
     */
    currencyCode: string;
}

/**
 * Output interface
 */
export interface HourDS {
    /**
     * @size 6 digits
     * @precision 0 decimals
     */
    id: number;
    /**
     * @size 3 digits
     * @precision 2 decimals
     */
    durationInHours: number;
    /**
     * @size 1 digits
     * @precision 0 decimals
     */
    wages: number;
    /**
     */
    wagesCurrency: wagesCurrencyDS;
    /**
     * @size 1 digits
     * @precision 0 decimals
     */
    durationInDays: number;
    /**
     * @size 6 digits
     * @precision 0 decimals
     */
    timeItemId: number;
    /**
     * @size 4 characters
     */
    amountType: string;
    /**
     */
    employee: employeeDS;
    /**
     * @size 10 characters
     */
    applyDate: string;
    /**
     */
    fromShift: boolean;
    /**
     * @size 12 characters
     */
    totalType: string;
}

/**
 * Output interface
 */
export interface hrsAndCstSumDS {
    /**
     */
    HOUR: Array<HourDS>;
}

/**
 * Output interface
 */
export interface DailySummDS {
    /**
     */
    employee: employeeDS;
    /**
     * @size 10 characters
     */
    applyDate: string;
    /**
     * @size 5 digits
     * @precision 0 decimals
     */
    cumulativeTotal: number;
    /**
     */
    dailyTotalAmount: dlyTtlAmtDS;
    /**
     */
    hoursAndCostSummaries: hrsAndCstSumDS;
}

/**
 * Output interface
 */
export interface SummaryReq {
    /**
     * @size 6 characters
     */
    employeer: string;
    /**
     * @size 10 characters
     */
    startDater: string;
    /**
     * @size 10 characters
     */
    endDater: string;
}

/**
 * Convert SummaryReq record to TypeScript object
 */
export function convertSummaryReqToObject(dataIn: string): SummaryReq {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.employeer = dataIn.substring(pos, pos + 6).trimEnd();
    pos += 6;
    dataOut.startDater = dataIn.substring(pos, pos + 10).trimEnd();
    pos += 10;
    dataOut.endDater = dataIn.substring(pos, pos + 10).trimEnd();
    pos += 10;

    return dataOut;
}

/**
 * Input interface
 */
export interface SummaryRes {
    /**
     * @size 19 characters
     */
    startDate: string;
    /**
     * @size 19 characters
     */
    endDate: string;
    /**
     */
    dailyTotalSummary: Array<DailySummDS>;
}

/**
 * Convert JavaScript object to SummaryRes record
 */
export function convertObjectToSummaryRes(dataIn: SummaryRes): string {
    let dataOut: string = '';

    dataOut +=
        dataIn?.startDate?.substring(0, 19)?.padEnd(19) ?? missingInput(`dataIn.startDate`, 'char', dataIn?.startDate);
    dataOut += dataIn?.endDate?.substring(0, 19)?.padEnd(19) ?? missingInput(`dataIn.endDate`, 'char', dataIn?.endDate);
    for (let i: number = 0; i < dataIn.dailyTotalSummary.length; ++i) {
        dataOut +=
            dataIn?.dailyTotalSummary[i]?.employee?.id?.toFixed(0)?.substring(0, 7)?.padEnd(7) ??
            missingInput(
                `dataIn.dailyTotalSummary[${i}].employee.id`,
                'packed',
                dataIn?.dailyTotalSummary[i]?.employee?.id
            );
        dataOut +=
            dataIn?.dailyTotalSummary[i]?.employee?.qualifier?.substring(0, 6)?.padEnd(6) ??
            missingInput(
                `dataIn.dailyTotalSummary[${i}].employee.qualifier`,
                'char',
                dataIn?.dailyTotalSummary[i]?.employee?.qualifier
            );
        dataOut +=
            dataIn?.dailyTotalSummary[i]?.employee?.name?.substring(0, 6)?.padEnd(6) ??
            missingInput(
                `dataIn.dailyTotalSummary[${i}].employee.name`,
                'char',
                dataIn?.dailyTotalSummary[i]?.employee?.name
            );
        dataOut +=
            dataIn?.dailyTotalSummary[i]?.applyDate?.substring(0, 10)?.padEnd(10) ??
            missingInput(`dataIn.dailyTotalSummary[${i}].applyDate`, 'char', dataIn?.dailyTotalSummary[i]?.applyDate);
        dataOut +=
            dataIn?.dailyTotalSummary[i]?.cumulativeTotal?.toFixed(0)?.substring(0, 7)?.padEnd(7) ??
            missingInput(
                `dataIn.dailyTotalSummary[${i}].cumulativeTotal`,
                'packed',
                dataIn?.dailyTotalSummary[i]?.cumulativeTotal
            );
        dataOut +=
            dataIn?.dailyTotalSummary[i]?.dailyTotalAmount?.HOUR?.toFixed(0)?.substring(0, 7)?.padEnd(7) ??
            missingInput(
                `dataIn.dailyTotalSummary[${i}].dailyTotalAmount.HOUR`,
                'packed',
                dataIn?.dailyTotalSummary[i]?.dailyTotalAmount?.HOUR
            );
        for (let l: number = 0; l < dataIn.dailyTotalSummary[i]?.hoursAndCostSummaries.HOUR.length; ++l) {
            dataOut +=
                dataIn?.dailyTotalSummary[i]?.hoursAndCostSummaries?.HOUR[l]?.id
                    ?.toFixed(0)
                    ?.substring(0, 8)
                    ?.padEnd(8) ??
                missingInput(
                    `dataIn.dailyTotalSummary[${i}].hoursAndCostSummaries.HOUR[${l}].id`,
                    'packed',
                    dataIn?.dailyTotalSummary[i]?.hoursAndCostSummaries?.HOUR[l]?.id
                );
            dataOut +=
                dataIn?.dailyTotalSummary[i]?.hoursAndCostSummaries?.HOUR[l]?.durationInHours
                    ?.toFixed(2)
                    ?.substring(0, 5)
                    ?.padEnd(5) ??
                missingInput(
                    `dataIn.dailyTotalSummary[${i}].hoursAndCostSummaries.HOUR[${l}].durationInHours`,
                    'packed',
                    dataIn?.dailyTotalSummary[i]?.hoursAndCostSummaries?.HOUR[l]?.durationInHours
                );
            dataOut +=
                dataIn?.dailyTotalSummary[i]?.hoursAndCostSummaries?.HOUR[l]?.wages
                    ?.toFixed(0)
                    ?.substring(0, 3)
                    ?.padEnd(3) ??
                missingInput(
                    `dataIn.dailyTotalSummary[${i}].hoursAndCostSummaries.HOUR[${l}].wages`,
                    'packed',
                    dataIn?.dailyTotalSummary[i]?.hoursAndCostSummaries?.HOUR[l]?.wages
                );
            dataOut +=
                dataIn?.dailyTotalSummary[i]?.hoursAndCostSummaries?.HOUR[l]?.wagesCurrency?.amount
                    ?.toFixed(0)
                    ?.substring(0, 3)
                    ?.padEnd(3) ??
                missingInput(
                    `dataIn.dailyTotalSummary[${i}].hoursAndCostSummaries.HOUR[${l}].wagesCurrency.amount`,
                    'packed',
                    dataIn?.dailyTotalSummary[i]?.hoursAndCostSummaries?.HOUR[l]?.wagesCurrency?.amount
                );
            dataOut +=
                dataIn?.dailyTotalSummary[i]?.hoursAndCostSummaries?.HOUR[l]?.wagesCurrency?.currencyCode
                    ?.substring(0, 3)
                    ?.padEnd(3) ??
                missingInput(
                    `dataIn.dailyTotalSummary[${i}].hoursAndCostSummaries.HOUR[${l}].wagesCurrency.currencyCode`,
                    'char',
                    dataIn?.dailyTotalSummary[i]?.hoursAndCostSummaries?.HOUR[l]?.wagesCurrency?.currencyCode
                );
            dataOut +=
                dataIn?.dailyTotalSummary[i]?.hoursAndCostSummaries?.HOUR[l]?.durationInDays
                    ?.toFixed(0)
                    ?.substring(0, 3)
                    ?.padEnd(3) ??
                missingInput(
                    `dataIn.dailyTotalSummary[${i}].hoursAndCostSummaries.HOUR[${l}].durationInDays`,
                    'packed',
                    dataIn?.dailyTotalSummary[i]?.hoursAndCostSummaries?.HOUR[l]?.durationInDays
                );
            dataOut +=
                dataIn?.dailyTotalSummary[i]?.hoursAndCostSummaries?.HOUR[l]?.timeItemId
                    ?.toFixed(0)
                    ?.substring(0, 8)
                    ?.padEnd(8) ??
                missingInput(
                    `dataIn.dailyTotalSummary[${i}].hoursAndCostSummaries.HOUR[${l}].timeItemId`,
                    'packed',
                    dataIn?.dailyTotalSummary[i]?.hoursAndCostSummaries?.HOUR[l]?.timeItemId
                );
            dataOut +=
                dataIn?.dailyTotalSummary[i]?.hoursAndCostSummaries?.HOUR[l]?.amountType?.substring(0, 4)?.padEnd(4) ??
                missingInput(
                    `dataIn.dailyTotalSummary[${i}].hoursAndCostSummaries.HOUR[${l}].amountType`,
                    'char',
                    dataIn?.dailyTotalSummary[i]?.hoursAndCostSummaries?.HOUR[l]?.amountType
                );
            dataOut +=
                dataIn?.dailyTotalSummary[i]?.hoursAndCostSummaries?.HOUR[l]?.employee?.id
                    ?.toFixed(0)
                    ?.substring(0, 7)
                    ?.padEnd(7) ??
                missingInput(
                    `dataIn.dailyTotalSummary[${i}].hoursAndCostSummaries.HOUR[${l}].employee.id`,
                    'packed',
                    dataIn?.dailyTotalSummary[i]?.hoursAndCostSummaries?.HOUR[l]?.employee?.id
                );
            dataOut +=
                dataIn?.dailyTotalSummary[i]?.hoursAndCostSummaries?.HOUR[l]?.employee?.qualifier
                    ?.substring(0, 6)
                    ?.padEnd(6) ??
                missingInput(
                    `dataIn.dailyTotalSummary[${i}].hoursAndCostSummaries.HOUR[${l}].employee.qualifier`,
                    'char',
                    dataIn?.dailyTotalSummary[i]?.hoursAndCostSummaries?.HOUR[l]?.employee?.qualifier
                );
            dataOut +=
                dataIn?.dailyTotalSummary[i]?.hoursAndCostSummaries?.HOUR[l]?.employee?.name
                    ?.substring(0, 6)
                    ?.padEnd(6) ??
                missingInput(
                    `dataIn.dailyTotalSummary[${i}].hoursAndCostSummaries.HOUR[${l}].employee.name`,
                    'char',
                    dataIn?.dailyTotalSummary[i]?.hoursAndCostSummaries?.HOUR[l]?.employee?.name
                );
            dataOut +=
                dataIn?.dailyTotalSummary[i]?.hoursAndCostSummaries?.HOUR[l]?.applyDate?.substring(0, 10)?.padEnd(10) ??
                missingInput(
                    `dataIn.dailyTotalSummary[${i}].hoursAndCostSummaries.HOUR[${l}].applyDate`,
                    'char',
                    dataIn?.dailyTotalSummary[i]?.hoursAndCostSummaries?.HOUR[l]?.applyDate
                );
            dataOut +=
                dataIn?.dailyTotalSummary[i]?.hoursAndCostSummaries?.HOUR[l]?.fromShift !== undefined
                    ? dataIn?.dailyTotalSummary[i]?.hoursAndCostSummaries?.HOUR[l]?.fromShift
                        ? '1'
                        : '0'
                    : missingInput(
                          `dataIn.dailyTotalSummary[${i}].hoursAndCostSummaries.HOUR[${l}].fromShift`,
                          'bool',
                          dataIn?.dailyTotalSummary[i]?.hoursAndCostSummaries?.HOUR[l]?.fromShift
                      );
            dataOut +=
                dataIn?.dailyTotalSummary[i]?.hoursAndCostSummaries?.HOUR[l]?.totalType?.substring(0, 12)?.padEnd(12) ??
                missingInput(
                    `dataIn.dailyTotalSummary[${i}].hoursAndCostSummaries.HOUR[${l}].totalType`,
                    'char',
                    dataIn?.dailyTotalSummary[i]?.hoursAndCostSummaries?.HOUR[l]?.totalType
                );
        }
    }

    return dataOut;
}

/* eslint-enable */

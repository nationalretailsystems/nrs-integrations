/* eslint-disable */
// @ts-nocheck
// Module: ukgpunches
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
export interface timeZoneDS {
    /**
     * @size 6 digits
     * @precision 0 decimals
     */
    id: number;
    /**
     * @size 39 characters
     */
    qualifier: string;
    /**
     * @size 39 characters
     */
    name: string;
}

/**
 * Output interface
 */
export interface editByTypeDS {
    /**
     * @size 2 digits
     * @precision 0 decimals
     */
    id: number;
    /**
     * @size 25 characters
     */
    qualifier: string;
    /**
     * @size 25 characters
     */
    name: string;
}

/**
 * Output interface
 */
export interface dataSourceDS {
    /**
     * @size 5 digits
     * @precision 0 decimals
     */
    id: number;
    /**
     * @size 17 characters
     */
    qualifier: string;
    /**
     * @size 12 characters
     */
    displayName: string;
    /**
     * @size 9 characters
     */
    functionAreaName: string;
    /**
     * @size 17 characters
     */
    name: string;
}

/**
 * Output interface
 */
export interface typeOverrideDS {
    /**
     * @size 1 digits
     * @precision 0 decimals
     */
    id: number;
    /**
     * @size 8 characters
     */
    qualifier: string;
    /**
     * @size 1 digits
     * @precision 0 decimals
     */
    typeOverrideId: number;
    /**
     * @size 8 characters
     */
    description: string;
    /**
     * @size 8 characters
     */
    name: string;
}

/**
 * Output interface
 */
export interface endTimeZoneDS {
    /**
     * @size 6 digits
     * @precision 0 decimals
     */
    id: number;
}

/**
 * Output interface
 */
export interface exceptionTypeDS {
    /**
     * @size 1 digits
     * @precision 0 decimals
     */
    id: number;
    /**
     * @size 8 characters
     */
    name: string;
    /**
     * @size 12 characters
     */
    description: string;
    /**
     * @size 8 characters
     */
    displayName: string;
    /**
     * @size 19 characters
     */
    category: string;
}

/**
 * Output interface
 */
export interface orgJobDS {
    /**
     * @size 3 digits
     * @precision 0 decimals
     */
    id: number;
}

/**
 * Output interface
 */
export interface startTimeZoneDS {
    /**
     * @size 6 digits
     * @precision 0 decimals
     */
    id: number;
}

/**
 * Output interface
 */
export interface workRuleDS {
    /**
     * @size 3 digits
     * @precision 0 decimals
     */
    id: number;
    /**
     * @size 32 characters
     */
    qualifier: string;
    /**
     * @size 32 characters
     */
    name: string;
}

/**
 * Output interface
 */
export interface punchEventDS {
    /**
     * @size 6 digits
     * @precision 0 decimals
     */
    id: number;
}

/**
 * Output interface
 */
export interface missTimeStsDS {
    /**
     * @size 1 digits
     * @precision 0 decimals
     */
    id: number;
    /**
     * @size 14 characters
     */
    displayName: string;
}

/**
 * Output interface
 */
export interface ExceptionDS {
    /**
     */
    employee: employeeDS;
    /**
     * @size 19 characters
     */
    startDateTime: string;
    /**
     * @size 19 characters
     */
    endDateTime: string;
    /**
     * @size 10 characters
     */
    applyDate: string;
    /**
     * @size 5 digits
     * @precision 0 decimals
     */
    id: number;
    /**
     */
    endTimeZone: endTimeZoneDS;
    /**
     */
    exceptionType: exceptionTypeDS;
    /**
     */
    orgJob: orgJobDS;
    /**
     * @size 3 digits
     * @precision 2 decimals
     */
    overLimitInHours: number;
    /**
     */
    startTimeZone: startTimeZoneDS;
    /**
     * @size 3 digits
     * @precision 2 decimals
     */
    violationInHours: number;
    /**
     */
    workRule: workRuleDS;
    /**
     * @description Unable to process this item
     * @size 10 characters
     */
    commentsNotes: Array<string>;
    /**
     */
    punchEvent: punchEventDS;
    /**
     */
    isExcusedAbsence: boolean;
    /**
     */
    isUnExcusedAbsence: boolean;
    /**
     */
    missingTimeStatus: missTimeStsDS;
    /**
     * @description Unable to process this item
     * @size 10 characters
     */
    justifications: Array<string>;
    /**
     * @description Unable to process this item
     * @size 10 characters
     */
    justifiedTimes: Array<string>;
    /**
     */
    transfer: boolean;
    /**
     * @size 10 characters
     */
    eventDate: string;
    /**
     */
    startException: boolean;
    /**
     */
    endException: boolean;
    /**
     */
    reviewed: boolean;
}

/**
 * Output interface
 */
export interface punchDS {
    /**
     * @size 5 digits
     * @precision 0 decimals
     */
    id: number;
    /**
     */
    employee: employeeDS;
    /**
     * @size 19 characters
     */
    punchDtm: string;
    /**
     * @size 19 characters
     */
    roundedPunchDtm: string;
    /**
     */
    timeZone: timeZoneDS;
    /**
     * @size 19 characters
     */
    enteredOnDtm: string;
    /**
     */
    hasComments: boolean;
    /**
     */
    editByType: editByTypeDS;
    /**
     */
    dataSource: dataSourceDS;
    /**
     */
    typeOverride: typeOverrideDS;
    /**
     */
    exceptions: Array<ExceptionDS>;
    /**
     * @description Unable to process this item
     * @size 10 characters
     */
    commentsNotes: Array<string>;
    /**
     */
    isPhantom: boolean;
    /**
     */
    isScheduled: boolean;
    /**
     * @size 19 characters
     */
    updatedOnDtm: string;
    /**
     */
    validateAsTimestamp: boolean;
    /**
     */
    attestationPunchEdit: boolean;
    /**
     */
    markRelatedExceptionsAsReviewed: boolean;
    /**
     */
    editable: boolean;
    /**
     */
    cancelDeduct: boolean;
    /**
     */
    fromPhantomEdited: boolean;
    /**
     */
    exceptionResolved: boolean;
}

/**
 * Output interface
 */
export interface PunchReq {
    /**
     * @size 6 characters
     */
    employee: string;
    /**
     * @size 10 characters
     */
    date: string;
}

/**
 * Convert PunchReq record to TypeScript object
 */
export function convertPunchReqToObject(dataIn: string): PunchReq {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.employee = dataIn.substring(pos, pos + 6).trimEnd();
    pos += 6;
    dataOut.date = dataIn.substring(pos, pos + 10).trimEnd();
    pos += 10;

    return dataOut;
}

/**
 * Input interface
 */
export interface PunchRes {
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
    punches: Array<punchDS>;
}

/**
 * Convert JavaScript object to PunchRes record
 */
export function convertObjectToPunchRes(dataIn: PunchRes): string {
    let dataOut: string = '';

    dataOut +=
        dataIn?.startDate?.substring(0, 19)?.padEnd(19) ?? missingInput(`dataIn.startDate`, 'char', dataIn?.startDate);
    dataOut += dataIn?.endDate?.substring(0, 19)?.padEnd(19) ?? missingInput(`dataIn.endDate`, 'char', dataIn?.endDate);
    dataOut +=
        dataIn?.punches?.id?.toFixed(0)?.substring(0, 7)?.padEnd(7) ??
        missingInput(`dataIn.punches.id`, 'packed', dataIn?.punches?.id);
    dataOut +=
        dataIn?.punches?.employee?.id?.toFixed(0)?.substring(0, 7)?.padEnd(7) ??
        missingInput(`dataIn.punches.employee.id`, 'packed', dataIn?.punches?.employee?.id);
    dataOut +=
        dataIn?.punches?.employee?.qualifier?.substring(0, 6)?.padEnd(6) ??
        missingInput(`dataIn.punches.employee.qualifier`, 'char', dataIn?.punches?.employee?.qualifier);
    dataOut +=
        dataIn?.punches?.employee?.name?.substring(0, 6)?.padEnd(6) ??
        missingInput(`dataIn.punches.employee.name`, 'char', dataIn?.punches?.employee?.name);
    dataOut +=
        dataIn?.punches?.punchDtm?.substring(0, 19)?.padEnd(19) ??
        missingInput(`dataIn.punches.punchDtm`, 'char', dataIn?.punches?.punchDtm);
    dataOut +=
        dataIn?.punches?.roundedPunchDtm?.substring(0, 19)?.padEnd(19) ??
        missingInput(`dataIn.punches.roundedPunchDtm`, 'char', dataIn?.punches?.roundedPunchDtm);
    dataOut +=
        dataIn?.punches?.timeZone?.id?.toFixed(0)?.substring(0, 8)?.padEnd(8) ??
        missingInput(`dataIn.punches.timeZone.id`, 'packed', dataIn?.punches?.timeZone?.id);
    dataOut +=
        dataIn?.punches?.timeZone?.qualifier?.substring(0, 39)?.padEnd(39) ??
        missingInput(`dataIn.punches.timeZone.qualifier`, 'char', dataIn?.punches?.timeZone?.qualifier);
    dataOut +=
        dataIn?.punches?.timeZone?.name?.substring(0, 39)?.padEnd(39) ??
        missingInput(`dataIn.punches.timeZone.name`, 'char', dataIn?.punches?.timeZone?.name);
    dataOut +=
        dataIn?.punches?.enteredOnDtm?.substring(0, 19)?.padEnd(19) ??
        missingInput(`dataIn.punches.enteredOnDtm`, 'char', dataIn?.punches?.enteredOnDtm);
    dataOut +=
        dataIn?.punches?.hasComments !== undefined
            ? dataIn?.punches?.hasComments
                ? '1'
                : '0'
            : missingInput(`dataIn.punches.hasComments`, 'bool', dataIn?.punches?.hasComments);
    dataOut +=
        dataIn?.punches?.editByType?.id?.toFixed(0)?.substring(0, 4)?.padEnd(4) ??
        missingInput(`dataIn.punches.editByType.id`, 'packed', dataIn?.punches?.editByType?.id);
    dataOut +=
        dataIn?.punches?.editByType?.qualifier?.substring(0, 25)?.padEnd(25) ??
        missingInput(`dataIn.punches.editByType.qualifier`, 'char', dataIn?.punches?.editByType?.qualifier);
    dataOut +=
        dataIn?.punches?.editByType?.name?.substring(0, 25)?.padEnd(25) ??
        missingInput(`dataIn.punches.editByType.name`, 'char', dataIn?.punches?.editByType?.name);
    dataOut +=
        dataIn?.punches?.dataSource?.id?.toFixed(0)?.substring(0, 7)?.padEnd(7) ??
        missingInput(`dataIn.punches.dataSource.id`, 'packed', dataIn?.punches?.dataSource?.id);
    dataOut +=
        dataIn?.punches?.dataSource?.qualifier?.substring(0, 17)?.padEnd(17) ??
        missingInput(`dataIn.punches.dataSource.qualifier`, 'char', dataIn?.punches?.dataSource?.qualifier);
    dataOut +=
        dataIn?.punches?.dataSource?.displayName?.substring(0, 12)?.padEnd(12) ??
        missingInput(`dataIn.punches.dataSource.displayName`, 'char', dataIn?.punches?.dataSource?.displayName);
    dataOut +=
        dataIn?.punches?.dataSource?.functionAreaName?.substring(0, 9)?.padEnd(9) ??
        missingInput(
            `dataIn.punches.dataSource.functionAreaName`,
            'char',
            dataIn?.punches?.dataSource?.functionAreaName
        );
    dataOut +=
        dataIn?.punches?.dataSource?.name?.substring(0, 17)?.padEnd(17) ??
        missingInput(`dataIn.punches.dataSource.name`, 'char', dataIn?.punches?.dataSource?.name);
    dataOut +=
        dataIn?.punches?.typeOverride?.id?.toFixed(0)?.substring(0, 3)?.padEnd(3) ??
        missingInput(`dataIn.punches.typeOverride.id`, 'packed', dataIn?.punches?.typeOverride?.id);
    dataOut +=
        dataIn?.punches?.typeOverride?.qualifier?.substring(0, 8)?.padEnd(8) ??
        missingInput(`dataIn.punches.typeOverride.qualifier`, 'char', dataIn?.punches?.typeOverride?.qualifier);
    dataOut +=
        dataIn?.punches?.typeOverride?.typeOverrideId?.toFixed(0)?.substring(0, 3)?.padEnd(3) ??
        missingInput(
            `dataIn.punches.typeOverride.typeOverrideId`,
            'packed',
            dataIn?.punches?.typeOverride?.typeOverrideId
        );
    dataOut +=
        dataIn?.punches?.typeOverride?.description?.substring(0, 8)?.padEnd(8) ??
        missingInput(`dataIn.punches.typeOverride.description`, 'char', dataIn?.punches?.typeOverride?.description);
    dataOut +=
        dataIn?.punches?.typeOverride?.name?.substring(0, 8)?.padEnd(8) ??
        missingInput(`dataIn.punches.typeOverride.name`, 'char', dataIn?.punches?.typeOverride?.name);
    dataOut +=
        dataIn?.punches?.exceptions?.employee?.id?.toFixed(0)?.substring(0, 7)?.padEnd(7) ??
        missingInput(`dataIn.punches.exceptions.employee.id`, 'packed', dataIn?.punches?.exceptions?.employee?.id);
    dataOut +=
        dataIn?.punches?.exceptions?.employee?.qualifier?.substring(0, 6)?.padEnd(6) ??
        missingInput(
            `dataIn.punches.exceptions.employee.qualifier`,
            'char',
            dataIn?.punches?.exceptions?.employee?.qualifier
        );
    dataOut +=
        dataIn?.punches?.exceptions?.employee?.name?.substring(0, 6)?.padEnd(6) ??
        missingInput(`dataIn.punches.exceptions.employee.name`, 'char', dataIn?.punches?.exceptions?.employee?.name);
    dataOut +=
        dataIn?.punches?.exceptions?.startDateTime?.substring(0, 19)?.padEnd(19) ??
        missingInput(`dataIn.punches.exceptions.startDateTime`, 'char', dataIn?.punches?.exceptions?.startDateTime);
    dataOut +=
        dataIn?.punches?.exceptions?.endDateTime?.substring(0, 19)?.padEnd(19) ??
        missingInput(`dataIn.punches.exceptions.endDateTime`, 'char', dataIn?.punches?.exceptions?.endDateTime);
    dataOut +=
        dataIn?.punches?.exceptions?.applyDate?.substring(0, 10)?.padEnd(10) ??
        missingInput(`dataIn.punches.exceptions.applyDate`, 'char', dataIn?.punches?.exceptions?.applyDate);
    dataOut +=
        dataIn?.punches?.exceptions?.id?.toFixed(0)?.substring(0, 7)?.padEnd(7) ??
        missingInput(`dataIn.punches.exceptions.id`, 'packed', dataIn?.punches?.exceptions?.id);
    dataOut +=
        dataIn?.punches?.exceptions?.endTimeZone?.id?.toFixed(0)?.substring(0, 8)?.padEnd(8) ??
        missingInput(
            `dataIn.punches.exceptions.endTimeZone.id`,
            'packed',
            dataIn?.punches?.exceptions?.endTimeZone?.id
        );
    dataOut +=
        dataIn?.punches?.exceptions?.exceptionType?.id?.toFixed(0)?.substring(0, 3)?.padEnd(3) ??
        missingInput(
            `dataIn.punches.exceptions.exceptionType.id`,
            'packed',
            dataIn?.punches?.exceptions?.exceptionType?.id
        );
    dataOut +=
        dataIn?.punches?.exceptions?.exceptionType?.name?.substring(0, 8)?.padEnd(8) ??
        missingInput(
            `dataIn.punches.exceptions.exceptionType.name`,
            'char',
            dataIn?.punches?.exceptions?.exceptionType?.name
        );
    dataOut +=
        dataIn?.punches?.exceptions?.exceptionType?.description?.substring(0, 12)?.padEnd(12) ??
        missingInput(
            `dataIn.punches.exceptions.exceptionType.description`,
            'char',
            dataIn?.punches?.exceptions?.exceptionType?.description
        );
    dataOut +=
        dataIn?.punches?.exceptions?.exceptionType?.displayName?.substring(0, 8)?.padEnd(8) ??
        missingInput(
            `dataIn.punches.exceptions.exceptionType.displayName`,
            'char',
            dataIn?.punches?.exceptions?.exceptionType?.displayName
        );
    dataOut +=
        dataIn?.punches?.exceptions?.exceptionType?.category?.substring(0, 19)?.padEnd(19) ??
        missingInput(
            `dataIn.punches.exceptions.exceptionType.category`,
            'char',
            dataIn?.punches?.exceptions?.exceptionType?.category
        );
    dataOut +=
        dataIn?.punches?.exceptions?.orgJob?.id?.toFixed(0)?.substring(0, 5)?.padEnd(5) ??
        missingInput(`dataIn.punches.exceptions.orgJob.id`, 'packed', dataIn?.punches?.exceptions?.orgJob?.id);
    dataOut +=
        dataIn?.punches?.exceptions?.overLimitInHours?.toFixed(2)?.substring(0, 5)?.padEnd(5) ??
        missingInput(
            `dataIn.punches.exceptions.overLimitInHours`,
            'packed',
            dataIn?.punches?.exceptions?.overLimitInHours
        );
    dataOut +=
        dataIn?.punches?.exceptions?.startTimeZone?.id?.toFixed(0)?.substring(0, 8)?.padEnd(8) ??
        missingInput(
            `dataIn.punches.exceptions.startTimeZone.id`,
            'packed',
            dataIn?.punches?.exceptions?.startTimeZone?.id
        );
    dataOut +=
        dataIn?.punches?.exceptions?.violationInHours?.toFixed(2)?.substring(0, 5)?.padEnd(5) ??
        missingInput(
            `dataIn.punches.exceptions.violationInHours`,
            'packed',
            dataIn?.punches?.exceptions?.violationInHours
        );
    dataOut +=
        dataIn?.punches?.exceptions?.workRule?.id?.toFixed(0)?.substring(0, 5)?.padEnd(5) ??
        missingInput(`dataIn.punches.exceptions.workRule.id`, 'packed', dataIn?.punches?.exceptions?.workRule?.id);
    dataOut +=
        dataIn?.punches?.exceptions?.workRule?.qualifier?.substring(0, 32)?.padEnd(32) ??
        missingInput(
            `dataIn.punches.exceptions.workRule.qualifier`,
            'char',
            dataIn?.punches?.exceptions?.workRule?.qualifier
        );
    dataOut +=
        dataIn?.punches?.exceptions?.workRule?.name?.substring(0, 32)?.padEnd(32) ??
        missingInput(`dataIn.punches.exceptions.workRule.name`, 'char', dataIn?.punches?.exceptions?.workRule?.name);
    dataOut +=
        dataIn?.punches?.exceptions?.commentsNotes?.substring(0, 10)?.padEnd(10) ??
        missingInput(`dataIn.punches.exceptions.commentsNotes`, 'char', dataIn?.punches?.exceptions?.commentsNotes);
    dataOut +=
        dataIn?.punches?.exceptions?.punchEvent?.id?.toFixed(0)?.substring(0, 8)?.padEnd(8) ??
        missingInput(`dataIn.punches.exceptions.punchEvent.id`, 'packed', dataIn?.punches?.exceptions?.punchEvent?.id);
    dataOut +=
        dataIn?.punches?.exceptions?.isExcusedAbsence !== undefined
            ? dataIn?.punches?.exceptions?.isExcusedAbsence
                ? '1'
                : '0'
            : missingInput(
                  `dataIn.punches.exceptions.isExcusedAbsence`,
                  'bool',
                  dataIn?.punches?.exceptions?.isExcusedAbsence
              );
    dataOut +=
        dataIn?.punches?.exceptions?.isUnExcusedAbsence !== undefined
            ? dataIn?.punches?.exceptions?.isUnExcusedAbsence
                ? '1'
                : '0'
            : missingInput(
                  `dataIn.punches.exceptions.isUnExcusedAbsence`,
                  'bool',
                  dataIn?.punches?.exceptions?.isUnExcusedAbsence
              );
    dataOut +=
        dataIn?.punches?.exceptions?.missingTimeStatus?.id?.toFixed(0)?.substring(0, 3)?.padEnd(3) ??
        missingInput(
            `dataIn.punches.exceptions.missingTimeStatus.id`,
            'packed',
            dataIn?.punches?.exceptions?.missingTimeStatus?.id
        );
    dataOut +=
        dataIn?.punches?.exceptions?.missingTimeStatus?.displayName?.substring(0, 14)?.padEnd(14) ??
        missingInput(
            `dataIn.punches.exceptions.missingTimeStatus.displayName`,
            'char',
            dataIn?.punches?.exceptions?.missingTimeStatus?.displayName
        );
    dataOut +=
        dataIn?.punches?.exceptions?.justifications?.substring(0, 10)?.padEnd(10) ??
        missingInput(`dataIn.punches.exceptions.justifications`, 'char', dataIn?.punches?.exceptions?.justifications);
    dataOut +=
        dataIn?.punches?.exceptions?.justifiedTimes?.substring(0, 10)?.padEnd(10) ??
        missingInput(`dataIn.punches.exceptions.justifiedTimes`, 'char', dataIn?.punches?.exceptions?.justifiedTimes);
    dataOut +=
        dataIn?.punches?.exceptions?.transfer !== undefined
            ? dataIn?.punches?.exceptions?.transfer
                ? '1'
                : '0'
            : missingInput(`dataIn.punches.exceptions.transfer`, 'bool', dataIn?.punches?.exceptions?.transfer);
    dataOut +=
        dataIn?.punches?.exceptions?.eventDate?.substring(0, 10)?.padEnd(10) ??
        missingInput(`dataIn.punches.exceptions.eventDate`, 'char', dataIn?.punches?.exceptions?.eventDate);
    dataOut +=
        dataIn?.punches?.exceptions?.startException !== undefined
            ? dataIn?.punches?.exceptions?.startException
                ? '1'
                : '0'
            : missingInput(
                  `dataIn.punches.exceptions.startException`,
                  'bool',
                  dataIn?.punches?.exceptions?.startException
              );
    dataOut +=
        dataIn?.punches?.exceptions?.endException !== undefined
            ? dataIn?.punches?.exceptions?.endException
                ? '1'
                : '0'
            : missingInput(`dataIn.punches.exceptions.endException`, 'bool', dataIn?.punches?.exceptions?.endException);
    dataOut +=
        dataIn?.punches?.exceptions?.reviewed !== undefined
            ? dataIn?.punches?.exceptions?.reviewed
                ? '1'
                : '0'
            : missingInput(`dataIn.punches.exceptions.reviewed`, 'bool', dataIn?.punches?.exceptions?.reviewed);
    dataOut +=
        dataIn?.punches?.commentsNotes?.substring(0, 10)?.padEnd(10) ??
        missingInput(`dataIn.punches.commentsNotes`, 'char', dataIn?.punches?.commentsNotes);
    dataOut +=
        dataIn?.punches?.isPhantom !== undefined
            ? dataIn?.punches?.isPhantom
                ? '1'
                : '0'
            : missingInput(`dataIn.punches.isPhantom`, 'bool', dataIn?.punches?.isPhantom);
    dataOut +=
        dataIn?.punches?.isScheduled !== undefined
            ? dataIn?.punches?.isScheduled
                ? '1'
                : '0'
            : missingInput(`dataIn.punches.isScheduled`, 'bool', dataIn?.punches?.isScheduled);
    dataOut +=
        dataIn?.punches?.updatedOnDtm?.substring(0, 19)?.padEnd(19) ??
        missingInput(`dataIn.punches.updatedOnDtm`, 'char', dataIn?.punches?.updatedOnDtm);
    dataOut +=
        dataIn?.punches?.validateAsTimestamp !== undefined
            ? dataIn?.punches?.validateAsTimestamp
                ? '1'
                : '0'
            : missingInput(`dataIn.punches.validateAsTimestamp`, 'bool', dataIn?.punches?.validateAsTimestamp);
    dataOut +=
        dataIn?.punches?.attestationPunchEdit !== undefined
            ? dataIn?.punches?.attestationPunchEdit
                ? '1'
                : '0'
            : missingInput(`dataIn.punches.attestationPunchEdit`, 'bool', dataIn?.punches?.attestationPunchEdit);
    dataOut +=
        dataIn?.punches?.markRelatedExceptionsAsReviewed !== undefined
            ? dataIn?.punches?.markRelatedExceptionsAsReviewed
                ? '1'
                : '0'
            : missingInput(
                  `dataIn.punches.markRelatedExceptionsAsReviewed`,
                  'bool',
                  dataIn?.punches?.markRelatedExceptionsAsReviewed
              );
    dataOut +=
        dataIn?.punches?.editable !== undefined
            ? dataIn?.punches?.editable
                ? '1'
                : '0'
            : missingInput(`dataIn.punches.editable`, 'bool', dataIn?.punches?.editable);
    dataOut +=
        dataIn?.punches?.cancelDeduct !== undefined
            ? dataIn?.punches?.cancelDeduct
                ? '1'
                : '0'
            : missingInput(`dataIn.punches.cancelDeduct`, 'bool', dataIn?.punches?.cancelDeduct);
    dataOut +=
        dataIn?.punches?.fromPhantomEdited !== undefined
            ? dataIn?.punches?.fromPhantomEdited
                ? '1'
                : '0'
            : missingInput(`dataIn.punches.fromPhantomEdited`, 'bool', dataIn?.punches?.fromPhantomEdited);
    dataOut +=
        dataIn?.punches?.exceptionResolved !== undefined
            ? dataIn?.punches?.exceptionResolved
                ? '1'
                : '0'
            : missingInput(`dataIn.punches.exceptionResolved`, 'bool', dataIn?.punches?.exceptionResolved);

    return dataOut;
}

/* eslint-enable */

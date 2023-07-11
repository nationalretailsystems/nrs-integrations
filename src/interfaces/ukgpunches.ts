/* eslint-disable */
// @ts-nocheck
// Module: ukgpunches
// Generated source -- do not modify

import { ibmiConversions, missingInput } from "@eradani-inc/ec-client";
const {
  fromIbmiDate,
  fromIbmiTime,
  fromIbmiTimestamp,
  toIbmiDate,
  toIbmiTime,
  toIbmiTimestamp
} = ibmiConversions;

/**
 * Output interface
 */
export interface commentsNotesDS {
    /**
     * @size 10 characters
     * @default `None`
     */
    commentsNotes: string
}

/**
 * Output interface
 */
export interface employeeDS {
    /**
     * @size 5 digits
     * @precision 0 decimals
     * @default `0`
     */
    id: number,
    /**
     * @size 6 characters
     * @default ``
     */
    qualifier: string,
    /**
     * @size 6 characters
     * @default ``
     */
    name: string
}

/**
 * Output interface
 */
export interface timeZoneDS {
    /**
     * @size 6 digits
     * @precision 0 decimals
     * @default `0`
     */
    id: number,
    /**
     * @size 12 characters
     * @default ``
     */
    qualifier: string,
    /**
     * @size 12 characters
     * @default ``
     */
    name: string
}

/**
 * Output interface
 */
export interface editByTypeDS {
    /**
     * @size 2 digits
     * @precision 0 decimals
     * @default `0`
     */
    id: number,
    /**
     * @size 25 characters
     * @default ``
     */
    qualifier: string,
    /**
     * @size 25 characters
     * @default ``
     */
    name: string
}

/**
 * Output interface
 */
export interface dataSourceDS {
    /**
     * @size 5 digits
     * @precision 0 decimals
     * @default `0`
     */
    id: number,
    /**
     * @size 17 characters
     * @default ``
     */
    qualifier: string,
    /**
     * @size 12 characters
     * @default ``
     */
    displayName: string,
    /**
     * @size 9 characters
     * @default ``
     */
    functionAreaName: string,
    /**
     * @size 17 characters
     * @default ``
     */
    name: string
}

/**
 * Output interface
 */
export interface typeOverrideDS {
    /**
     * @size 1 digits
     * @precision 0 decimals
     * @default `0`
     */
    id: number,
    /**
     * @size 15 characters
     * @default ``
     */
    qualifier: string,
    /**
     * @size 1 digits
     * @precision 0 decimals
     * @default `0`
     */
    typeOverrideId: number,
    /**
     * @size 15 characters
     * @default ``
     */
    description: string,
    /**
     * @size 15 characters
     * @default ``
     */
    name: string
}

/**
 * Output interface
 */
export interface endTimeZoneDS {
    /**
     * @size 6 digits
     * @precision 0 decimals
     * @default `0`
     */
    id: number
}

/**
 * Output interface
 */
export interface exceptionTypeDS {
    /**
     * @size 1 digits
     * @precision 0 decimals
     * @default `0`
     */
    id: number,
    /**
     * @size 8 characters
     * @default ``
     */
    name: string,
    /**
     * @size 12 characters
     * @default ``
     */
    description: string,
    /**
     * @size 8 characters
     * @default ``
     */
    displayName: string,
    /**
     * @size 19 characters
     * @default ``
     */
    category: string
}

/**
 * Output interface
 */
export interface orgJobDS {
    /**
     * @size 3 digits
     * @precision 0 decimals
     * @default `0`
     */
    id: number
}

/**
 * Output interface
 */
export interface startTimeZoneDS {
    /**
     * @size 6 digits
     * @precision 0 decimals
     * @default `0`
     */
    id: number
}

/**
 * Output interface
 */
export interface workRuleDS {
    /**
     * @size 3 digits
     * @precision 0 decimals
     * @default `0`
     */
    id: number,
    /**
     * @size 3 characters
     * @default ``
     */
    qualifier: string,
    /**
     * @size 32 characters
     * @default ``
     */
    name: string
}

/**
 * Output interface
 */
export interface punchEventDS {
    /**
     * @size 6 digits
     * @precision 0 decimals
     * @default `0`
     */
    id: number
}

/**
 * Output interface
 */
export interface missTimeStsDS {
    /**
     * @size 1 digits
     * @precision 0 decimals
     * @default `0`
     */
    id: number,
    /**
     * @size 14 characters
     * @default ``
     */
    displayName: string
}

/**
 * Output interface
 */
export interface ExceptionDS {
    /**
     */
    employee: employeeDS,
    /**
     * @size 19 characters
     * @default ``
     */
    startDateTime: string,
    /**
     * @size 19 characters
     * @default ``
     */
    endDateTime: string,
    /**
     * @size 10 characters
     * @default ``
     */
    applyDate: string,
    /**
     * @size 5 digits
     * @precision 0 decimals
     * @default `0`
     */
    id: number,
    /**
     */
    endTimeZone: endTimeZoneDS,
    /**
     */
    exceptionType: exceptionTypeDS,
    /**
     */
    orgJob: orgJobDS,
    /**
     * @size 3 digits
     * @precision 2 decimals
     * @default `0`
     */
    overLimitInHours: number,
    /**
     */
    startTimeZone: startTimeZoneDS,
    /**
     * @size 3 digits
     * @precision 2 decimals
     * @default `0`
     */
    violationInHours: number,
    /**
     */
    workRule: workRuleDS,
    /**
     */
    punchEvent: punchEventDS,
    /**
     * @default `false`
     */
    isExcusedAbsence: boolean,
    /**
     * @default `false`
     */
    isUnExcusedAbsence: boolean,
    /**
     */
    missingTimeStatus: missTimeStsDS,
    /**
     * @description Unable to process this item
     * @size 10 characters
     * @default ``
     */
    justifications: string,
    /**
     * @description Unable to process this item
     * @size 10 characters
     * @default ``
     */
    justifiedTimes: string,
    /**
     * @default `false`
     */
    transfer: boolean,
    /**
     * @size 10 characters
     * @default ``
     */
    eventDate: string,
    /**
     * @default `false`
     */
    startException: boolean,
    /**
     * @default `true`
     */
    endException: boolean,
    /**
     * @default `false`
     */
    reviewed: boolean
}

/**
 * Output interface
 */
export interface punchDS {
    /**
     * @size 5 digits
     * @precision 0 decimals
     * @default `0`
     */
    id: number,
    /**
     */
    employee: employeeDS,
    /**
     * @size 19 characters
     * @default ``
     */
    punchDtm: string,
    /**
     * @size 19 characters
     * @default ``
     */
    roundedPunchDtm: string,
    /**
     */
    timeZone: timeZoneDS,
    /**
     * @size 19 characters
     * @default ``
     */
    enteredOnDtm: string,
    /**
     * @default `false`
     */
    hasComments: boolean,
    /**
     */
    editByType: editByTypeDS,
    /**
     */
    dataSource: dataSourceDS,
    /**
     */
    typeOverride: typeOverrideDS,
    /**
     */
    exceptions: ExceptionDS,
    /**
     * @default `false`
     */
    isPhantom: boolean,
    /**
     * @default `false`
     */
    isScheduled: boolean,
    /**
     * @size 19 characters
     * @default ``
     */
    updatedOnDtm: string,
    /**
     * @default `false`
     */
    validateAsTimestamp: boolean,
    /**
     * @default `false`
     */
    attestationPunchEdit: boolean,
    /**
     * @default `false`
     */
    markRelatedExceptionsAsReviewed: boolean,
    /**
     * @default `true`
     */
    editable: boolean,
    /**
     * @default `false`
     */
    cancelDeduct: boolean,
    /**
     * @default `false`
     */
    fromPhantomEdited: boolean,
    /**
     * @default `false`
     */
    exceptionResolved: boolean
}

/**
 * Output interface
 */
export interface PunchReq {
    /**
     * @size 6 characters
     */
    employee: string,
    /**
     * @size 10 characters
     */
    startdate: string,
    /**
     * @size 10 characters
     */
    enddate: string
}

/**
 * Convert PunchReq record to TypeScript object
 */
export function convertPunchReqToObject(dataIn: string): PunchReq {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.employee = dataIn.substring(pos, pos + 6).trimEnd();
  pos += 6;
  dataOut.startdate = dataIn.substring(pos, pos + 10).trimEnd();
  pos += 10;
  dataOut.enddate = dataIn.substring(pos, pos + 10).trimEnd();
  pos += 10;

  return dataOut;
}

/**
 * Input interface
 */
export interface PunchRes {
    /**
     * @size 19 characters
     * @default ``
     */
    startDate: string,
    /**
     * @size 19 characters
     * @default ``
     */
    endDate: string,
    /**
     */
    punches: Array<punchDS>
}

/**
 * Convert JavaScript object to PunchRes record
 */
export function convertObjectToPunchRes(dataIn: PunchRes): string {
  let dataOut: string = "";

  dataOut += dataIn?.startDate?.substring(0, 19)?.padEnd(19) ?? "".substring(0, 19).padEnd(19);
  dataOut += dataIn?.endDate?.substring(0, 19)?.padEnd(19) ?? "".substring(0, 19).padEnd(19);
  for (let i: number = 0; i < 20; ++i) {
  dataOut += dataIn?.punches[i]?.id?.toFixed(0)?.substring(0, 7)?.padEnd(7) ?? "0".substring(0, 7).padEnd(7);
  dataOut += dataIn?.punches[i]?.employee?.id?.toFixed(0)?.substring(0, 7)?.padEnd(7) ?? "0".substring(0, 7).padEnd(7);
  dataOut += dataIn?.punches[i]?.employee?.qualifier?.substring(0, 6)?.padEnd(6) ?? "".substring(0, 6).padEnd(6);
  dataOut += dataIn?.punches[i]?.employee?.name?.substring(0, 6)?.padEnd(6) ?? "".substring(0, 6).padEnd(6);
  dataOut += dataIn?.punches[i]?.punchDtm?.substring(0, 19)?.padEnd(19) ?? "".substring(0, 19).padEnd(19);
  dataOut += dataIn?.punches[i]?.roundedPunchDtm?.substring(0, 19)?.padEnd(19) ?? "".substring(0, 19).padEnd(19);
  dataOut += dataIn?.punches[i]?.timeZone?.id?.toFixed(0)?.substring(0, 8)?.padEnd(8) ?? "0".substring(0, 8).padEnd(8);
  dataOut += dataIn?.punches[i]?.timeZone?.qualifier?.substring(0, 12)?.padEnd(12) ?? "".substring(0, 12).padEnd(12);
  dataOut += dataIn?.punches[i]?.timeZone?.name?.substring(0, 12)?.padEnd(12) ?? "".substring(0, 12).padEnd(12);
  dataOut += dataIn?.punches[i]?.enteredOnDtm?.substring(0, 19)?.padEnd(19) ?? "".substring(0, 19).padEnd(19);
  dataOut += (dataIn?.punches[i]?.hasComments !== undefined ? (dataIn?.punches[i]?.hasComments ? "1" : "0") : "0");
  dataOut += dataIn?.punches[i]?.editByType?.id?.toFixed(0)?.substring(0, 4)?.padEnd(4) ?? "0".substring(0, 4).padEnd(4);
  dataOut += dataIn?.punches[i]?.editByType?.qualifier?.substring(0, 25)?.padEnd(25) ?? "".substring(0, 25).padEnd(25);
  dataOut += dataIn?.punches[i]?.editByType?.name?.substring(0, 25)?.padEnd(25) ?? "".substring(0, 25).padEnd(25);
  dataOut += dataIn?.punches[i]?.dataSource?.id?.toFixed(0)?.substring(0, 7)?.padEnd(7) ?? "0".substring(0, 7).padEnd(7);
  dataOut += dataIn?.punches[i]?.dataSource?.qualifier?.substring(0, 17)?.padEnd(17) ?? "".substring(0, 17).padEnd(17);
  dataOut += dataIn?.punches[i]?.dataSource?.displayName?.substring(0, 12)?.padEnd(12) ?? "".substring(0, 12).padEnd(12);
  dataOut += dataIn?.punches[i]?.dataSource?.functionAreaName?.substring(0, 9)?.padEnd(9) ?? "".substring(0, 9).padEnd(9);
  dataOut += dataIn?.punches[i]?.dataSource?.name?.substring(0, 17)?.padEnd(17) ?? "".substring(0, 17).padEnd(17);
  dataOut += dataIn?.punches[i]?.typeOverride?.id?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? "0".substring(0, 3).padEnd(3);
  dataOut += dataIn?.punches[i]?.typeOverride?.qualifier?.substring(0, 15)?.padEnd(15) ?? "".substring(0, 15).padEnd(15);
  dataOut += dataIn?.punches[i]?.typeOverride?.typeOverrideId?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? "0".substring(0, 3).padEnd(3);
  dataOut += dataIn?.punches[i]?.typeOverride?.description?.substring(0, 15)?.padEnd(15) ?? "".substring(0, 15).padEnd(15);
  dataOut += dataIn?.punches[i]?.typeOverride?.name?.substring(0, 15)?.padEnd(15) ?? "".substring(0, 15).padEnd(15);
  dataOut += dataIn?.punches[i]?.exceptions?.employee?.id?.toFixed(0)?.substring(0, 7)?.padEnd(7) ?? "0".substring(0, 7).padEnd(7);
  dataOut += dataIn?.punches[i]?.exceptions?.employee?.qualifier?.substring(0, 6)?.padEnd(6) ?? "".substring(0, 6).padEnd(6);
  dataOut += dataIn?.punches[i]?.exceptions?.employee?.name?.substring(0, 6)?.padEnd(6) ?? "".substring(0, 6).padEnd(6);
  dataOut += dataIn?.punches[i]?.exceptions?.startDateTime?.substring(0, 19)?.padEnd(19) ?? "".substring(0, 19).padEnd(19);
  dataOut += dataIn?.punches[i]?.exceptions?.endDateTime?.substring(0, 19)?.padEnd(19) ?? "".substring(0, 19).padEnd(19);
  dataOut += dataIn?.punches[i]?.exceptions?.applyDate?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  dataOut += dataIn?.punches[i]?.exceptions?.id?.toFixed(0)?.substring(0, 7)?.padEnd(7) ?? "0".substring(0, 7).padEnd(7);
  dataOut += dataIn?.punches[i]?.exceptions?.endTimeZone?.id?.toFixed(0)?.substring(0, 8)?.padEnd(8) ?? "0".substring(0, 8).padEnd(8);
  dataOut += dataIn?.punches[i]?.exceptions?.exceptionType?.id?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? "0".substring(0, 3).padEnd(3);
  dataOut += dataIn?.punches[i]?.exceptions?.exceptionType?.name?.substring(0, 8)?.padEnd(8) ?? "".substring(0, 8).padEnd(8);
  dataOut += dataIn?.punches[i]?.exceptions?.exceptionType?.description?.substring(0, 12)?.padEnd(12) ?? "".substring(0, 12).padEnd(12);
  dataOut += dataIn?.punches[i]?.exceptions?.exceptionType?.displayName?.substring(0, 8)?.padEnd(8) ?? "".substring(0, 8).padEnd(8);
  dataOut += dataIn?.punches[i]?.exceptions?.exceptionType?.category?.substring(0, 19)?.padEnd(19) ?? "".substring(0, 19).padEnd(19);
  dataOut += dataIn?.punches[i]?.exceptions?.orgJob?.id?.toFixed(0)?.substring(0, 5)?.padEnd(5) ?? "0".substring(0, 5).padEnd(5);
  dataOut += dataIn?.punches[i]?.exceptions?.overLimitInHours?.toFixed(2)?.substring(0, 5)?.padEnd(5) ?? "0".substring(0, 5).padEnd(5);
  dataOut += dataIn?.punches[i]?.exceptions?.startTimeZone?.id?.toFixed(0)?.substring(0, 8)?.padEnd(8) ?? "0".substring(0, 8).padEnd(8);
  dataOut += dataIn?.punches[i]?.exceptions?.violationInHours?.toFixed(2)?.substring(0, 5)?.padEnd(5) ?? "0".substring(0, 5).padEnd(5);
  dataOut += dataIn?.punches[i]?.exceptions?.workRule?.id?.toFixed(0)?.substring(0, 5)?.padEnd(5) ?? "0".substring(0, 5).padEnd(5);
  dataOut += dataIn?.punches[i]?.exceptions?.workRule?.qualifier?.substring(0, 3)?.padEnd(3) ?? "".substring(0, 3).padEnd(3);
  dataOut += dataIn?.punches[i]?.exceptions?.workRule?.name?.substring(0, 32)?.padEnd(32) ?? "".substring(0, 32).padEnd(32);
  dataOut += dataIn?.punches[i]?.exceptions?.punchEvent?.id?.toFixed(0)?.substring(0, 8)?.padEnd(8) ?? "0".substring(0, 8).padEnd(8);
  dataOut += (dataIn?.punches[i]?.exceptions?.isExcusedAbsence !== undefined ? (dataIn?.punches[i]?.exceptions?.isExcusedAbsence ? "1" : "0") : "0");
  dataOut += (dataIn?.punches[i]?.exceptions?.isUnExcusedAbsence !== undefined ? (dataIn?.punches[i]?.exceptions?.isUnExcusedAbsence ? "1" : "0") : "0");
  dataOut += dataIn?.punches[i]?.exceptions?.missingTimeStatus?.id?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? "0".substring(0, 3).padEnd(3);
  dataOut += dataIn?.punches[i]?.exceptions?.missingTimeStatus?.displayName?.substring(0, 14)?.padEnd(14) ?? "".substring(0, 14).padEnd(14);
  dataOut += dataIn?.punches[i]?.exceptions?.justifications?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  dataOut += dataIn?.punches[i]?.exceptions?.justifiedTimes?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  dataOut += (dataIn?.punches[i]?.exceptions?.transfer !== undefined ? (dataIn?.punches[i]?.exceptions?.transfer ? "1" : "0") : "0");
  dataOut += dataIn?.punches[i]?.exceptions?.eventDate?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  dataOut += (dataIn?.punches[i]?.exceptions?.startException !== undefined ? (dataIn?.punches[i]?.exceptions?.startException ? "1" : "0") : "0");
  dataOut += (dataIn?.punches[i]?.exceptions?.endException !== undefined ? (dataIn?.punches[i]?.exceptions?.endException ? "1" : "0") : "1");
  dataOut += (dataIn?.punches[i]?.exceptions?.reviewed !== undefined ? (dataIn?.punches[i]?.exceptions?.reviewed ? "1" : "0") : "0");
  dataOut += (dataIn?.punches[i]?.isPhantom !== undefined ? (dataIn?.punches[i]?.isPhantom ? "1" : "0") : "0");
  dataOut += (dataIn?.punches[i]?.isScheduled !== undefined ? (dataIn?.punches[i]?.isScheduled ? "1" : "0") : "0");
  dataOut += dataIn?.punches[i]?.updatedOnDtm?.substring(0, 19)?.padEnd(19) ?? "".substring(0, 19).padEnd(19);
  dataOut += (dataIn?.punches[i]?.validateAsTimestamp !== undefined ? (dataIn?.punches[i]?.validateAsTimestamp ? "1" : "0") : "0");
  dataOut += (dataIn?.punches[i]?.attestationPunchEdit !== undefined ? (dataIn?.punches[i]?.attestationPunchEdit ? "1" : "0") : "0");
  dataOut += (dataIn?.punches[i]?.markRelatedExceptionsAsReviewed !== undefined ? (dataIn?.punches[i]?.markRelatedExceptionsAsReviewed ? "1" : "0") : "0");
  dataOut += (dataIn?.punches[i]?.editable !== undefined ? (dataIn?.punches[i]?.editable ? "1" : "0") : "1");
  dataOut += (dataIn?.punches[i]?.cancelDeduct !== undefined ? (dataIn?.punches[i]?.cancelDeduct ? "1" : "0") : "0");
  dataOut += (dataIn?.punches[i]?.fromPhantomEdited !== undefined ? (dataIn?.punches[i]?.fromPhantomEdited ? "1" : "0") : "0");
  dataOut += (dataIn?.punches[i]?.exceptionResolved !== undefined ? (dataIn?.punches[i]?.exceptionResolved ? "1" : "0") : "0");
  }

  return dataOut;
}

/* eslint-enable */

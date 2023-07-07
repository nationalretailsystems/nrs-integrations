/* eslint-disable */
// @ts-nocheck
// Module: ukgtchours
// Generated source -- do not modify

import { ibmiConversions, missingInput } from '@eradani-inc/ec-client';
const { fromIbmiDate, fromIbmiTime, fromIbmiTimestamp, toIbmiDate, toIbmiTime, toIbmiTimestamp } = ibmiConversions;

/**
 * Output interface
 */
export interface employeeDS {
    /**
     * @size 4 digits
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
     * @size 15 characters
     */
    qualifier: string;
    /**
     * @size 10 characters
     */
    displayName: string;
    /**
     * @size 37 characters
     */
    functionalAreaName: string;
    /**
     * @size 15 characters
     */
    name: string;
}

/**
 * Output interface
 */
export interface geoLocationDS {
    /**
     * @size 4 digits
     * @precision 0 decimals
     */
    locationId: number;
    /**
     * @size 7 digits
     * @precision 0 decimals
     */
    accuracy: number;
    /**
     */
    outsideOfGeofence: boolean;
    /**
     * @size 19 characters
     */
    updateTime: string;
    /**
     * @size 1 digits
     * @precision 0 decimals
     */
    geofenceMethodId: number;
    /**
     */
    unverified: boolean;
}

/**
 * Output interface
 */
export interface AnonymousDS {
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
     * @size 10 characters
     */
    exceptions: Array<string>;
    /**
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
    geoLocation: geoLocationDS;
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
export interface HoursReq {
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
 * Convert HoursReq record to TypeScript object
 */
export function convertHoursReqToObject(dataIn: string): HoursReq {
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
export interface FormatName {
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
    punches: Array<AnonymousDS>;
}

/**
 * Convert JavaScript object to FormatName record
 */
export function convertObjectToFormatName(dataIn: FormatName): string {
    let dataOut: string = '';

    dataOut +=
        dataIn?.startDate?.substring(0, 19)?.padEnd(19) ?? missingInput(`dataIn.startDate`, 'char', dataIn?.startDate);
    dataOut += dataIn?.endDate?.substring(0, 19)?.padEnd(19) ?? missingInput(`dataIn.endDate`, 'char', dataIn?.endDate);
    for (let i: number = 0; i < 12; ++i) {
        dataOut +=
            dataIn?.punches[i]?.id?.toFixed(0)?.substring(0, 7)?.padEnd(7) ??
            missingInput(`dataIn.punches[${i}].id`, 'packed', dataIn?.punches[i]?.id);
        dataOut +=
            dataIn?.punches[i]?.employee?.id?.toFixed(0)?.substring(0, 6)?.padEnd(6) ??
            missingInput(`dataIn.punches[${i}].employee.id`, 'packed', dataIn?.punches[i]?.employee?.id);
        dataOut +=
            dataIn?.punches[i]?.employee?.qualifier?.substring(0, 6)?.padEnd(6) ??
            missingInput(`dataIn.punches[${i}].employee.qualifier`, 'char', dataIn?.punches[i]?.employee?.qualifier);
        dataOut +=
            dataIn?.punches[i]?.employee?.name?.substring(0, 6)?.padEnd(6) ??
            missingInput(`dataIn.punches[${i}].employee.name`, 'char', dataIn?.punches[i]?.employee?.name);
        dataOut +=
            dataIn?.punches[i]?.punchDtm?.substring(0, 19)?.padEnd(19) ??
            missingInput(`dataIn.punches[${i}].punchDtm`, 'char', dataIn?.punches[i]?.punchDtm);
        dataOut +=
            dataIn?.punches[i]?.roundedPunchDtm?.substring(0, 19)?.padEnd(19) ??
            missingInput(`dataIn.punches[${i}].roundedPunchDtm`, 'char', dataIn?.punches[i]?.roundedPunchDtm);
        dataOut +=
            dataIn?.punches[i]?.timeZone?.id?.toFixed(0)?.substring(0, 8)?.padEnd(8) ??
            missingInput(`dataIn.punches[${i}].timeZone.id`, 'packed', dataIn?.punches[i]?.timeZone?.id);
        dataOut +=
            dataIn?.punches[i]?.timeZone?.qualifier?.substring(0, 39)?.padEnd(39) ??
            missingInput(`dataIn.punches[${i}].timeZone.qualifier`, 'char', dataIn?.punches[i]?.timeZone?.qualifier);
        dataOut +=
            dataIn?.punches[i]?.timeZone?.name?.substring(0, 39)?.padEnd(39) ??
            missingInput(`dataIn.punches[${i}].timeZone.name`, 'char', dataIn?.punches[i]?.timeZone?.name);
        dataOut +=
            dataIn?.punches[i]?.enteredOnDtm?.substring(0, 19)?.padEnd(19) ??
            missingInput(`dataIn.punches[${i}].enteredOnDtm`, 'char', dataIn?.punches[i]?.enteredOnDtm);
        dataOut +=
            dataIn?.punches[i]?.hasComments !== undefined
                ? dataIn?.punches[i]?.hasComments
                    ? '1'
                    : '0'
                : missingInput(`dataIn.punches[${i}].hasComments`, 'bool', dataIn?.punches[i]?.hasComments);
        dataOut +=
            dataIn?.punches[i]?.editByType?.id?.toFixed(0)?.substring(0, 4)?.padEnd(4) ??
            missingInput(`dataIn.punches[${i}].editByType.id`, 'packed', dataIn?.punches[i]?.editByType?.id);
        dataOut +=
            dataIn?.punches[i]?.editByType?.qualifier?.substring(0, 25)?.padEnd(25) ??
            missingInput(
                `dataIn.punches[${i}].editByType.qualifier`,
                'char',
                dataIn?.punches[i]?.editByType?.qualifier
            );
        dataOut +=
            dataIn?.punches[i]?.editByType?.name?.substring(0, 25)?.padEnd(25) ??
            missingInput(`dataIn.punches[${i}].editByType.name`, 'char', dataIn?.punches[i]?.editByType?.name);
        dataOut +=
            dataIn?.punches[i]?.dataSource?.id?.toFixed(0)?.substring(0, 7)?.padEnd(7) ??
            missingInput(`dataIn.punches[${i}].dataSource.id`, 'packed', dataIn?.punches[i]?.dataSource?.id);
        dataOut +=
            dataIn?.punches[i]?.dataSource?.qualifier?.substring(0, 15)?.padEnd(15) ??
            missingInput(
                `dataIn.punches[${i}].dataSource.qualifier`,
                'char',
                dataIn?.punches[i]?.dataSource?.qualifier
            );
        dataOut +=
            dataIn?.punches[i]?.dataSource?.displayName?.substring(0, 10)?.padEnd(10) ??
            missingInput(
                `dataIn.punches[${i}].dataSource.displayName`,
                'char',
                dataIn?.punches[i]?.dataSource?.displayName
            );
        dataOut +=
            dataIn?.punches[i]?.dataSource?.functionalAreaName?.substring(0, 37)?.padEnd(37) ??
            missingInput(
                `dataIn.punches[${i}].dataSource.functionalAreaName`,
                'char',
                dataIn?.punches[i]?.dataSource?.functionalAreaName
            );
        dataOut +=
            dataIn?.punches[i]?.dataSource?.name?.substring(0, 15)?.padEnd(15) ??
            missingInput(`dataIn.punches[${i}].dataSource.name`, 'char', dataIn?.punches[i]?.dataSource?.name);
        dataOut +=
            dataIn?.punches[i]?.exceptions?.substring(0, 10)?.padEnd(10) ??
            missingInput(`dataIn.punches[${i}].exceptions`, 'char', dataIn?.punches[i]?.exceptions);
        dataOut +=
            dataIn?.punches[i]?.commentsNotes?.substring(0, 10)?.padEnd(10) ??
            missingInput(`dataIn.punches[${i}].commentsNotes`, 'char', dataIn?.punches[i]?.commentsNotes);
        dataOut +=
            dataIn?.punches[i]?.isPhantom !== undefined
                ? dataIn?.punches[i]?.isPhantom
                    ? '1'
                    : '0'
                : missingInput(`dataIn.punches[${i}].isPhantom`, 'bool', dataIn?.punches[i]?.isPhantom);
        dataOut +=
            dataIn?.punches[i]?.isScheduled !== undefined
                ? dataIn?.punches[i]?.isScheduled
                    ? '1'
                    : '0'
                : missingInput(`dataIn.punches[${i}].isScheduled`, 'bool', dataIn?.punches[i]?.isScheduled);
        dataOut +=
            dataIn?.punches[i]?.updatedOnDtm?.substring(0, 19)?.padEnd(19) ??
            missingInput(`dataIn.punches[${i}].updatedOnDtm`, 'char', dataIn?.punches[i]?.updatedOnDtm);
        dataOut +=
            dataIn?.punches[i]?.geoLocation?.locationId?.toFixed(0)?.substring(0, 6)?.padEnd(6) ??
            missingInput(
                `dataIn.punches[${i}].geoLocation.locationId`,
                'packed',
                dataIn?.punches[i]?.geoLocation?.locationId
            );
        dataOut +=
            dataIn?.punches[i]?.geoLocation?.accuracy?.toFixed(0)?.substring(0, 9)?.padEnd(9) ??
            missingInput(
                `dataIn.punches[${i}].geoLocation.accuracy`,
                'packed',
                dataIn?.punches[i]?.geoLocation?.accuracy
            );
        dataOut +=
            dataIn?.punches[i]?.geoLocation?.outsideOfGeofence !== undefined
                ? dataIn?.punches[i]?.geoLocation?.outsideOfGeofence
                    ? '1'
                    : '0'
                : missingInput(
                      `dataIn.punches[${i}].geoLocation.outsideOfGeofence`,
                      'bool',
                      dataIn?.punches[i]?.geoLocation?.outsideOfGeofence
                  );
        dataOut +=
            dataIn?.punches[i]?.geoLocation?.updateTime?.substring(0, 19)?.padEnd(19) ??
            missingInput(
                `dataIn.punches[${i}].geoLocation.updateTime`,
                'char',
                dataIn?.punches[i]?.geoLocation?.updateTime
            );
        dataOut +=
            dataIn?.punches[i]?.geoLocation?.geofenceMethodId?.toFixed(0)?.substring(0, 3)?.padEnd(3) ??
            missingInput(
                `dataIn.punches[${i}].geoLocation.geofenceMethodId`,
                'packed',
                dataIn?.punches[i]?.geoLocation?.geofenceMethodId
            );
        dataOut +=
            dataIn?.punches[i]?.geoLocation?.unverified !== undefined
                ? dataIn?.punches[i]?.geoLocation?.unverified
                    ? '1'
                    : '0'
                : missingInput(
                      `dataIn.punches[${i}].geoLocation.unverified`,
                      'bool',
                      dataIn?.punches[i]?.geoLocation?.unverified
                  );
        dataOut +=
            dataIn?.punches[i]?.validateAsTimestamp !== undefined
                ? dataIn?.punches[i]?.validateAsTimestamp
                    ? '1'
                    : '0'
                : missingInput(
                      `dataIn.punches[${i}].validateAsTimestamp`,
                      'bool',
                      dataIn?.punches[i]?.validateAsTimestamp
                  );
        dataOut +=
            dataIn?.punches[i]?.attestationPunchEdit !== undefined
                ? dataIn?.punches[i]?.attestationPunchEdit
                    ? '1'
                    : '0'
                : missingInput(
                      `dataIn.punches[${i}].attestationPunchEdit`,
                      'bool',
                      dataIn?.punches[i]?.attestationPunchEdit
                  );
        dataOut +=
            dataIn?.punches[i]?.markRelatedExceptionsAsReviewed !== undefined
                ? dataIn?.punches[i]?.markRelatedExceptionsAsReviewed
                    ? '1'
                    : '0'
                : missingInput(
                      `dataIn.punches[${i}].markRelatedExceptionsAsReviewed`,
                      'bool',
                      dataIn?.punches[i]?.markRelatedExceptionsAsReviewed
                  );
        dataOut +=
            dataIn?.punches[i]?.editable !== undefined
                ? dataIn?.punches[i]?.editable
                    ? '1'
                    : '0'
                : missingInput(`dataIn.punches[${i}].editable`, 'bool', dataIn?.punches[i]?.editable);
        dataOut +=
            dataIn?.punches[i]?.cancelDeduct !== undefined
                ? dataIn?.punches[i]?.cancelDeduct
                    ? '1'
                    : '0'
                : missingInput(`dataIn.punches[${i}].cancelDeduct`, 'bool', dataIn?.punches[i]?.cancelDeduct);
        dataOut +=
            dataIn?.punches[i]?.fromPhantomEdited !== undefined
                ? dataIn?.punches[i]?.fromPhantomEdited
                    ? '1'
                    : '0'
                : missingInput(`dataIn.punches[${i}].fromPhantomEdited`, 'bool', dataIn?.punches[i]?.fromPhantomEdited);
        dataOut +=
            dataIn?.punches[i]?.exceptionResolved !== undefined
                ? dataIn?.punches[i]?.exceptionResolved
                    ? '1'
                    : '0'
                : missingInput(`dataIn.punches[${i}].exceptionResolved`, 'bool', dataIn?.punches[i]?.exceptionResolved);
    }

    return dataOut;
}

/* eslint-enable */

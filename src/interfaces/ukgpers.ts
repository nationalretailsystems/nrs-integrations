/* eslint-disable */
// @ts-nocheck
// Module: ukgpers
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
export interface dataAccessGroupsForSnapshotDateDS {
    /**
     * @size 10 characters
     * @default ``
     */
    dataAccessGroupsForSnapshotDate: string
}

/**
 * Output interface
 */
export interface effDatedAccountStatusesForExtensionSnapshotDateDS {
    /**
     * @size 10 characters
     * @default ``
     */
    effDatedAccountStatusesForExtensionSnapshotDate: string
}

/**
 * Output interface
 */
export interface effDatedPrimaryJobAccountForSnapshotDateDS {
    /**
     * @size 10 characters
     * @default ``
     */
    effDatedPrimaryJobAccountForSnapshotDate: string
}

/**
 * Output interface
 */
export interface employmentStatusesForExtensionSnapshotDateDS {
    /**
     * @size 10 characters
     * @default ``
     */
    employmentStatusesForExtensionSnapshotDate: string
}

/**
 * Output interface
 */
export interface dataAccessExtensionGroupsDS {
    /**
     * @size 6 digits
     * @precision 0 decimals
     * @default `0`
     */
    assignDAGID: number,
    /**
     * @size 10 characters
     * @default ``
     */
    dataAccessGroup: string,
    /**
     * @size 6 digits
     * @precision 0 decimals
     * @default `0`
     */
    dataAccessGroupId: number,
    /**
     * @size 20 characters
     * @default ``
     */
    dataAccessGroupRole: string,
    /**
     * @size 6 digits
     * @precision 0 decimals
     * @default `0`
     */
    dataAccessGroupRoleId: number,
    /**
     * @default `false`
     */
    defaultSwitch: boolean,
    /**
     * @size 10 characters
     * @default ``
     */
    effectiveDate: string,
    /**
     * @size 10 characters
     * @default ``
     */
    expirationDate: string,
    /**
     * @size 6 digits
     * @precision 0 decimals
     * @default `0`
     */
    personID: number
}

/**
 * Output interface
 */
export interface effDatedAccountStatusesDS {
    /**
     * @size 6 characters
     * @default ``
     */
    accountStatus: string,
    /**
     * @size 1 digits
     * @precision 0 decimals
     * @default `0`
     */
    accountStatusTypeId: number,
    /**
     * @size 10 characters
     * @default ``
     */
    effectiveDate: string,
    /**
     * @size 10 characters
     * @default ``
     */
    expirationDate: string
}

/**
 * Output interface
 */
export interface effDatedPrimaryJobAccountEntriesDS {
    /**
     * @size 26 characters
     * @default ``
     */
    effDatedCostCenterEntries: string,
    /**
     * @size 10 characters
     * @default ``
     */
    effectiveDate: string,
    /**
     * @size 10 characters
     * @default ``
     */
    expirationDate: string,
    /**
     * @size 93 characters
     * @default ``
     */
    primaryJob: string,
    /**
     * @size 55 characters
     * @default ``
     */
    primaryLaborCategory: string,
    /**
     * @size 6 digits
     * @precision 0 decimals
     * @default `0`
     */
    primaryLaborCategoryId: number,
    /**
     * @size 6 digits
     * @precision 0 decimals
     * @default `0`
     */
    primaryOrganizationId: number
}

/**
 * Output interface
 */
export interface emailContactDataEntriesDS {
    /**
     * @size 24 characters
     * @default ``
     */
    contactData: string,
    /**
     * @size 4 characters
     * @default ``
     */
    contactType: string,
    /**
     * @size 2 digits
     * @precision 0 decimals
     * @default `0`
     */
    contactTypeId: number,
    /**
     * @default `false`
     */
    hasEmailNotificationDelivery: boolean
}

/**
 * Output interface
 */
export interface employmentStatusesDS {
    /**
     * @size 10 characters
     * @default ``
     */
    effectiveDate: string,
    /**
     * @size 6 characters
     * @default ``
     */
    employmentStatus: string,
    /**
     * @size 1 digits
     * @precision 0 decimals
     * @default `0`
     */
    employmentStatusTypeId: number,
    /**
     * @size 10 characters
     * @default ``
     */
    expirationDate: string
}

/**
 * Output interface
 */
export interface identifierDS {
    /**
     * @size 18 characters
     * @default ``
     */
    identifier: string
}

/**
 * Output interface
 */
export interface licenseTypeListDS {
    /**
     * @default `false`
     */
    active: boolean,
    /**
     * @size 1 digits
     * @precision 0 decimals
     * @default `0`
     */
    licenseId: number,
    /**
     * @size 8 characters
     * @default ``
     */
    licenseType: string,
    /**
     * @size 31 characters
     * @default ``
     */
    licenseTypeName: string
}

/**
 * Output interface
 */
export interface personCustomDataEntriesDS {
    /**
     * @size 10 characters
     * @default ``
     */
    customDataType: string,
    /**
     * @size 1 digits
     * @precision 0 decimals
     * @default `0`
     */
    customDataTypeId: number
}

/**
 * Output interface
 */
export interface personDatesEntriesDS {
    /**
     * @size 1 digits
     * @precision 0 decimals
     * @default `0`
     */
    customDateTypeId: number,
    /**
     * @size 17 characters
     * @default ``
     */
    dateName: string,
    /**
     * @size 10 characters
     * @default ``
     */
    defaultDate: string,
    /**
     * @size 12 characters
     * @default ``
     */
    description: string,
    /**
     * @size 10 characters
     * @default ``
     */
    overrideDate: string
}

/**
 * Output interface
 */
export interface postalAddressDataEntriesDS {
    /**
     * @size 9 characters
     * @default ``
     */
    city: string,
    /**
     * @size 4 characters
     * @default ``
     */
    contactType: string,
    /**
     * @size 1 digits
     * @precision 0 decimals
     * @default `0`
     */
    contactTypeId: number,
    /**
     * @size 3 characters
     * @default ``
     */
    country: string,
    /**
     * @size 2 characters
     * @default ``
     */
    state: string,
    /**
     * @size 15 characters
     * @default ``
     */
    street: string,
    /**
     * @size 5 characters
     * @default ``
     */
    zipCode: string
}

/**
 * Output interface
 */
export interface preferenceProfileDataEntryDS {
    /**
     * @size 16 characters
     * @default ``
     */
    preferenceProfile: string,
    /**
     * @size 3 digits
     * @precision 0 decimals
     * @default `0`
     */
    preferenceProfileId: number,
    /**
     * @size 1 digits
     * @precision 0 decimals
     * @default `0`
     */
    schedulePeriodId: number,
    /**
     * @default `false`
     */
    usingShiftLabel: boolean,
    /**
     * @default `false`
     */
    usesTwelveHourFormat: boolean
}

/**
 * Output interface
 */
export interface telContactDataEntriesDS {
    /**
     * @size 14 characters
     * @default ``
     */
    contactData: string,
    /**
     * @size 7 characters
     * @default ``
     */
    contactType: string,
    /**
     * @size 1 digits
     * @precision 0 decimals
     * @default `0`
     */
    contactTypeId: number,
    /**
     * @default `false`
     */
    smsswitch: boolean
}

/**
 * Output interface
 */
export interface employeeExtensionDS {
    /**
     * @size 25 characters
     * @default ``
     */
    accessProfile: string,
    /**
     * @size 4 digits
     * @precision 0 decimals
     * @default `0`
     */
    accessProfileId: number,
    /**
     * @default `false`
     */
    accountLocked: boolean,
    /**
     * @default `false`
     */
    active: boolean,
    /**
     * @size 15 characters
     * @default ``
     */
    approvalMethod: string,
    /**
     * @size 1 digits
     * @precision 0 decimals
     * @default `0`
     */
    approvalMethodId: number,
    /**
     * @size 9 characters
     * @default ``
     */
    authenticationType: string,
    /**
     * @size 1 digits
     * @precision 0 decimals
     * @default `0`
     */
    authenticationTypeId: number,
    /**
     * @default `false`
     */
    clockOnlyUser: boolean,
    /**
     * @size 1 digits
     * @precision 0 decimals
     * @default `0`
     */
    consecutiveBadLogons: number,
    /**
     */
    dataAccessExtensionGroups: dataAccessExtensionGroupsDS,
    /**
     */
    dataAccessGroupsForSnapshotDate: dataAccessGroupsForSnapshotDateDS,
    /**
     * @size 13 characters
     * @default ``
     */
    delegateProfile: string,
    /**
     * @size 2 digits
     * @precision 0 decimals
     * @default `0`
     */
    delegateProfileId: number,
    /**
     */
    effDatedAccountStatuses: effDatedAccountStatusesDS,
    /**
     */
    effDatedAccountStatusesForExtensionSnapshotDate: effDatedAccountStatusesForExtensionSnapshotDateDS,
    /**
     */
    effDatedPrimaryJobAccountEntries: effDatedPrimaryJobAccountEntriesDS,
    /**
     */
    effDatedPrimaryJobAccountForSnapshotDate: effDatedPrimaryJobAccountForSnapshotDateDS,
    /**
     */
    emailContactDataEntries: emailContactDataEntriesDS,
    /**
     */
    employmentStatuses: employmentStatusesDS,
    /**
     */
    employmentStatusesForExtensionSnapshotDate: employmentStatusesForExtensionSnapshotDateDS,
    /**
     * @default `false`
     */
    faceRequiredFlag: boolean,
    /**
     * @default `false`
     */
    fingerRequiredFlag: boolean,
    /**
     * @size 7 characters
     * @default ``
     */
    firstName: string,
    /**
     * @size 16 characters
     * @default ``
     */
    fullName: string,
    /**
     * @default `false`
     */
    hasKmailNotificationDelivery: boolean,
    /**
     * @size 10 characters
     * @default ``
     */
    hireDate: string,
    /**
     */
    identifier: identifierDS,
    /**
     * @default `false`
     */
    isEmployee: boolean,
    /**
     * @default `false`
     */
    isManager: boolean,
    /**
     * @size 6 digits
     * @precision 0 decimals
     * @default `0`
     */
    jobAssigmentId: number,
    /**
     * @size 5 characters
     * @default ``
     */
    lastName: string,
    /**
     * @size 10 characters
     * @default ``
     */
    learnPath: string,
    /**
     */
    licenseTypeList: Array<licenseTypeListDS>,
    /**
     * @size 19 characters
     * @default ``
     */
    lockoutResetDateTime: string,
    /**
     * @size 7 characters
     * @default ``
     */
    logonProfile: string,
    /**
     * @size 6 digits
     * @precision 0 decimals
     * @default `0`
     */
    logonProfileId: number,
    /**
     * @default `false`
     */
    mfaRequired: boolean,
    /**
     * @size 1 characters
     * @default ``
     */
    middleName: string,
    /**
     * @size 25 characters
     * @default ``
     */
    notificationProfile: string,
    /**
     * @default `false`
     */
    passwordUpdateRequired: boolean,
    /**
     * @size 19 characters
     * @default ``
     */
    passwordUpdatedDateTime: string,
    /**
     */
    personCustomDataEntries: Array<personCustomDataEntriesDS>,
    /**
     */
    personDatesEntries: Array<personDatesEntriesDS>,
    /**
     * @size 6 digits
     * @precision 0 decimals
     * @default `0`
     */
    personId: number,
    /**
     * @size 6 characters
     * @default ``
     */
    personNumber: string,
    /**
     */
    postalAddressDataEntries: postalAddressDataEntriesDS,
    /**
     * @size 16 characters
     * @default ``
     */
    preferenceProfile: string,
    /**
     */
    preferenceProfileDataEntry: preferenceProfileDataEntryDS,
    /**
     * @size 13 characters
     * @default ``
     */
    processEmployeeProfile: string,
    /**
     * @size 13 characters
     * @default ``
     */
    processManagerProfile: string,
    /**
     * @default `false`
     */
    requirePassChange: boolean,
    /**
     * @default `false`
     */
    restrictedUser: boolean,
    /**
     * @size 10 characters
     * @default ``
     */
    seniorityDate: string,
    /**
     * @size 7 characters
     * @default ``
     */
    shortName: string,
    /**
     * @size 15 characters
     * @default ``
     */
    supervisorFullName: string,
    /**
     * @size 6 digits
     * @precision 0 decimals
     * @default `0`
     */
    supervisorPersonId: number,
    /**
     * @size 6 characters
     * @default ``
     */
    supervisorPersonNumber: string,
    /**
     */
    telContactDataEntries: Array<telContactDataEntriesDS>,
    /**
     * @size 25 characters
     * @default ``
     */
    timeZone: string,
    /**
     * @size 5 digits
     * @precision 0 decimals
     * @default `0`
     */
    timeZoneId: number,
    /**
     * @size 6 digits
     * @precision 0 decimals
     * @default `0`
     */
    userAccountId: number,
    /**
     * @size 24 characters
     * @default ``
     */
    userName: string
}

/**
 * Output interface
 */
export interface personReq {
    /**
     * @size 6 characters
     */
    employeenumber: string
}

/**
 * Convert personReq record to TypeScript object
 */
export function convertpersonReqToObject(dataIn: string): personReq {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.employeenumber = dataIn.substring(pos, pos + 6).trimEnd();
  pos += 6;

  return dataOut;
}

/**
 * Input interface
 */
export interface personResp {
    /**
     */
    employeeExtension: employeeExtensionDS,
    /**
     * @default `false`
     */
    exceptionPresent: boolean
}

/**
 * Convert JavaScript object to personResp record
 */
export function convertObjectTopersonResp(dataIn: personResp): string {
  let dataOut: string = "";

  dataOut += dataIn?.employeeExtension?.accessProfile?.substring(0, 25)?.padEnd(25) ?? "".substring(0, 25).padEnd(25);
  dataOut += dataIn?.employeeExtension?.accessProfileId?.toFixed(0)?.substring(0, 6)?.padEnd(6) ?? "0".substring(0, 6).padEnd(6);
  dataOut += (dataIn?.employeeExtension?.accountLocked !== undefined ? (dataIn?.employeeExtension?.accountLocked ? "1" : "0") : "0");
  dataOut += (dataIn?.employeeExtension?.active !== undefined ? (dataIn?.employeeExtension?.active ? "1" : "0") : "0");
  dataOut += dataIn?.employeeExtension?.approvalMethod?.substring(0, 15)?.padEnd(15) ?? "".substring(0, 15).padEnd(15);
  dataOut += dataIn?.employeeExtension?.approvalMethodId?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? "0".substring(0, 3).padEnd(3);
  dataOut += dataIn?.employeeExtension?.authenticationType?.substring(0, 9)?.padEnd(9) ?? "".substring(0, 9).padEnd(9);
  dataOut += dataIn?.employeeExtension?.authenticationTypeId?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? "0".substring(0, 3).padEnd(3);
  dataOut += (dataIn?.employeeExtension?.clockOnlyUser !== undefined ? (dataIn?.employeeExtension?.clockOnlyUser ? "1" : "0") : "0");
  dataOut += dataIn?.employeeExtension?.consecutiveBadLogons?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? "0".substring(0, 3).padEnd(3);
  dataOut += dataIn?.employeeExtension?.dataAccessExtensionGroups?.assignDAGID?.toFixed(0)?.substring(0, 8)?.padEnd(8) ?? "0".substring(0, 8).padEnd(8);
  dataOut += dataIn?.employeeExtension?.dataAccessExtensionGroups?.dataAccessGroup?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  dataOut += dataIn?.employeeExtension?.dataAccessExtensionGroups?.dataAccessGroupId?.toFixed(0)?.substring(0, 8)?.padEnd(8) ?? "0".substring(0, 8).padEnd(8);
  dataOut += dataIn?.employeeExtension?.dataAccessExtensionGroups?.dataAccessGroupRole?.substring(0, 20)?.padEnd(20) ?? "".substring(0, 20).padEnd(20);
  dataOut += dataIn?.employeeExtension?.dataAccessExtensionGroups?.dataAccessGroupRoleId?.toFixed(0)?.substring(0, 8)?.padEnd(8) ?? "0".substring(0, 8).padEnd(8);
  dataOut += (dataIn?.employeeExtension?.dataAccessExtensionGroups?.defaultSwitch !== undefined ? (dataIn?.employeeExtension?.dataAccessExtensionGroups?.defaultSwitch ? "1" : "0") : "0");
  dataOut += dataIn?.employeeExtension?.dataAccessExtensionGroups?.effectiveDate?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  dataOut += dataIn?.employeeExtension?.dataAccessExtensionGroups?.expirationDate?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  dataOut += dataIn?.employeeExtension?.dataAccessExtensionGroups?.personID?.toFixed(0)?.substring(0, 8)?.padEnd(8) ?? "0".substring(0, 8).padEnd(8);
  dataOut += dataIn?.employeeExtension?.dataAccessGroupsForSnapshotDate?.dataAccessGroupsForSnapshotDate?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  dataOut += dataIn?.employeeExtension?.delegateProfile?.substring(0, 13)?.padEnd(13) ?? "".substring(0, 13).padEnd(13);
  dataOut += dataIn?.employeeExtension?.delegateProfileId?.toFixed(0)?.substring(0, 4)?.padEnd(4) ?? "0".substring(0, 4).padEnd(4);
  dataOut += dataIn?.employeeExtension?.effDatedAccountStatuses?.accountStatus?.substring(0, 6)?.padEnd(6) ?? "".substring(0, 6).padEnd(6);
  dataOut += dataIn?.employeeExtension?.effDatedAccountStatuses?.accountStatusTypeId?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? "0".substring(0, 3).padEnd(3);
  dataOut += dataIn?.employeeExtension?.effDatedAccountStatuses?.effectiveDate?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  dataOut += dataIn?.employeeExtension?.effDatedAccountStatuses?.expirationDate?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  dataOut += dataIn?.employeeExtension?.effDatedAccountStatusesForExtensionSnapshotDate?.effDatedAccountStatusesForExtensionSnapshotDate?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  dataOut += dataIn?.employeeExtension?.effDatedPrimaryJobAccountEntries?.effDatedCostCenterEntries?.substring(0, 26)?.padEnd(26) ?? "".substring(0, 26).padEnd(26);
  dataOut += dataIn?.employeeExtension?.effDatedPrimaryJobAccountEntries?.effectiveDate?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  dataOut += dataIn?.employeeExtension?.effDatedPrimaryJobAccountEntries?.expirationDate?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  dataOut += dataIn?.employeeExtension?.effDatedPrimaryJobAccountEntries?.primaryJob?.substring(0, 93)?.padEnd(93) ?? "".substring(0, 93).padEnd(93);
  dataOut += dataIn?.employeeExtension?.effDatedPrimaryJobAccountEntries?.primaryLaborCategory?.substring(0, 55)?.padEnd(55) ?? "".substring(0, 55).padEnd(55);
  dataOut += dataIn?.employeeExtension?.effDatedPrimaryJobAccountEntries?.primaryLaborCategoryId?.toFixed(0)?.substring(0, 8)?.padEnd(8) ?? "0".substring(0, 8).padEnd(8);
  dataOut += dataIn?.employeeExtension?.effDatedPrimaryJobAccountEntries?.primaryOrganizationId?.toFixed(0)?.substring(0, 8)?.padEnd(8) ?? "0".substring(0, 8).padEnd(8);
  dataOut += dataIn?.employeeExtension?.effDatedPrimaryJobAccountForSnapshotDate?.effDatedPrimaryJobAccountForSnapshotDate?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  dataOut += dataIn?.employeeExtension?.emailContactDataEntries?.contactData?.substring(0, 24)?.padEnd(24) ?? "".substring(0, 24).padEnd(24);
  dataOut += dataIn?.employeeExtension?.emailContactDataEntries?.contactType?.substring(0, 4)?.padEnd(4) ?? "".substring(0, 4).padEnd(4);
  dataOut += dataIn?.employeeExtension?.emailContactDataEntries?.contactTypeId?.toFixed(0)?.substring(0, 4)?.padEnd(4) ?? "0".substring(0, 4).padEnd(4);
  dataOut += (dataIn?.employeeExtension?.emailContactDataEntries?.hasEmailNotificationDelivery !== undefined ? (dataIn?.employeeExtension?.emailContactDataEntries?.hasEmailNotificationDelivery ? "1" : "0") : "0");
  dataOut += dataIn?.employeeExtension?.employmentStatuses?.effectiveDate?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  dataOut += dataIn?.employeeExtension?.employmentStatuses?.employmentStatus?.substring(0, 6)?.padEnd(6) ?? "".substring(0, 6).padEnd(6);
  dataOut += dataIn?.employeeExtension?.employmentStatuses?.employmentStatusTypeId?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? "0".substring(0, 3).padEnd(3);
  dataOut += dataIn?.employeeExtension?.employmentStatuses?.expirationDate?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  dataOut += dataIn?.employeeExtension?.employmentStatusesForExtensionSnapshotDate?.employmentStatusesForExtensionSnapshotDate?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  dataOut += (dataIn?.employeeExtension?.faceRequiredFlag !== undefined ? (dataIn?.employeeExtension?.faceRequiredFlag ? "1" : "0") : "0");
  dataOut += (dataIn?.employeeExtension?.fingerRequiredFlag !== undefined ? (dataIn?.employeeExtension?.fingerRequiredFlag ? "1" : "0") : "0");
  dataOut += dataIn?.employeeExtension?.firstName?.substring(0, 7)?.padEnd(7) ?? "".substring(0, 7).padEnd(7);
  dataOut += dataIn?.employeeExtension?.fullName?.substring(0, 16)?.padEnd(16) ?? "".substring(0, 16).padEnd(16);
  dataOut += (dataIn?.employeeExtension?.hasKmailNotificationDelivery !== undefined ? (dataIn?.employeeExtension?.hasKmailNotificationDelivery ? "1" : "0") : "0");
  dataOut += dataIn?.employeeExtension?.hireDate?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  dataOut += dataIn?.employeeExtension?.identifier?.identifier?.substring(0, 18)?.padEnd(18) ?? "".substring(0, 18).padEnd(18);
  dataOut += (dataIn?.employeeExtension?.isEmployee !== undefined ? (dataIn?.employeeExtension?.isEmployee ? "1" : "0") : "0");
  dataOut += (dataIn?.employeeExtension?.isManager !== undefined ? (dataIn?.employeeExtension?.isManager ? "1" : "0") : "0");
  dataOut += dataIn?.employeeExtension?.jobAssigmentId?.toFixed(0)?.substring(0, 8)?.padEnd(8) ?? "0".substring(0, 8).padEnd(8);
  dataOut += dataIn?.employeeExtension?.lastName?.substring(0, 5)?.padEnd(5) ?? "".substring(0, 5).padEnd(5);
  dataOut += dataIn?.employeeExtension?.learnPath?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  for (let j: number = 0; j < 8; ++j) {
  dataOut += (dataIn?.employeeExtension?.licenseTypeList[j]?.active !== undefined ? (dataIn?.employeeExtension?.licenseTypeList[j]?.active ? "1" : "0") : "0");
  dataOut += dataIn?.employeeExtension?.licenseTypeList[j]?.licenseId?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? "0".substring(0, 3).padEnd(3);
  dataOut += dataIn?.employeeExtension?.licenseTypeList[j]?.licenseType?.substring(0, 8)?.padEnd(8) ?? "".substring(0, 8).padEnd(8);
  dataOut += dataIn?.employeeExtension?.licenseTypeList[j]?.licenseTypeName?.substring(0, 31)?.padEnd(31) ?? "".substring(0, 31).padEnd(31);
  }
  dataOut += dataIn?.employeeExtension?.lockoutResetDateTime?.substring(0, 19)?.padEnd(19) ?? "".substring(0, 19).padEnd(19);
  dataOut += dataIn?.employeeExtension?.logonProfile?.substring(0, 7)?.padEnd(7) ?? "".substring(0, 7).padEnd(7);
  dataOut += dataIn?.employeeExtension?.logonProfileId?.toFixed(0)?.substring(0, 8)?.padEnd(8) ?? "0".substring(0, 8).padEnd(8);
  dataOut += (dataIn?.employeeExtension?.mfaRequired !== undefined ? (dataIn?.employeeExtension?.mfaRequired ? "1" : "0") : "0");
  dataOut += dataIn?.employeeExtension?.middleName?.substring(0, 1)?.padEnd(1) ?? "".substring(0, 1).padEnd(1);
  dataOut += dataIn?.employeeExtension?.notificationProfile?.substring(0, 25)?.padEnd(25) ?? "".substring(0, 25).padEnd(25);
  dataOut += (dataIn?.employeeExtension?.passwordUpdateRequired !== undefined ? (dataIn?.employeeExtension?.passwordUpdateRequired ? "1" : "0") : "0");
  dataOut += dataIn?.employeeExtension?.passwordUpdatedDateTime?.substring(0, 19)?.padEnd(19) ?? "".substring(0, 19).padEnd(19);
  for (let j: number = 0; j < 4; ++j) {
  dataOut += dataIn?.employeeExtension?.personCustomDataEntries[j]?.customDataType?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  dataOut += dataIn?.employeeExtension?.personCustomDataEntries[j]?.customDataTypeId?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? "0".substring(0, 3).padEnd(3);
  }
  for (let j: number = 0; j < 7; ++j) {
  dataOut += dataIn?.employeeExtension?.personDatesEntries[j]?.customDateTypeId?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? "0".substring(0, 3).padEnd(3);
  dataOut += dataIn?.employeeExtension?.personDatesEntries[j]?.dateName?.substring(0, 17)?.padEnd(17) ?? "".substring(0, 17).padEnd(17);
  dataOut += dataIn?.employeeExtension?.personDatesEntries[j]?.defaultDate?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  dataOut += dataIn?.employeeExtension?.personDatesEntries[j]?.description?.substring(0, 12)?.padEnd(12) ?? "".substring(0, 12).padEnd(12);
  dataOut += dataIn?.employeeExtension?.personDatesEntries[j]?.overrideDate?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  }
  dataOut += dataIn?.employeeExtension?.personId?.toFixed(0)?.substring(0, 8)?.padEnd(8) ?? "0".substring(0, 8).padEnd(8);
  dataOut += dataIn?.employeeExtension?.personNumber?.substring(0, 6)?.padEnd(6) ?? "".substring(0, 6).padEnd(6);
  dataOut += dataIn?.employeeExtension?.postalAddressDataEntries?.city?.substring(0, 9)?.padEnd(9) ?? "".substring(0, 9).padEnd(9);
  dataOut += dataIn?.employeeExtension?.postalAddressDataEntries?.contactType?.substring(0, 4)?.padEnd(4) ?? "".substring(0, 4).padEnd(4);
  dataOut += dataIn?.employeeExtension?.postalAddressDataEntries?.contactTypeId?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? "0".substring(0, 3).padEnd(3);
  dataOut += dataIn?.employeeExtension?.postalAddressDataEntries?.country?.substring(0, 3)?.padEnd(3) ?? "".substring(0, 3).padEnd(3);
  dataOut += dataIn?.employeeExtension?.postalAddressDataEntries?.state?.substring(0, 2)?.padEnd(2) ?? "".substring(0, 2).padEnd(2);
  dataOut += dataIn?.employeeExtension?.postalAddressDataEntries?.street?.substring(0, 15)?.padEnd(15) ?? "".substring(0, 15).padEnd(15);
  dataOut += dataIn?.employeeExtension?.postalAddressDataEntries?.zipCode?.substring(0, 5)?.padEnd(5) ?? "".substring(0, 5).padEnd(5);
  dataOut += dataIn?.employeeExtension?.preferenceProfile?.substring(0, 16)?.padEnd(16) ?? "".substring(0, 16).padEnd(16);
  dataOut += dataIn?.employeeExtension?.preferenceProfileDataEntry?.preferenceProfile?.substring(0, 16)?.padEnd(16) ?? "".substring(0, 16).padEnd(16);
  dataOut += dataIn?.employeeExtension?.preferenceProfileDataEntry?.preferenceProfileId?.toFixed(0)?.substring(0, 5)?.padEnd(5) ?? "0".substring(0, 5).padEnd(5);
  dataOut += dataIn?.employeeExtension?.preferenceProfileDataEntry?.schedulePeriodId?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? "0".substring(0, 3).padEnd(3);
  dataOut += (dataIn?.employeeExtension?.preferenceProfileDataEntry?.usingShiftLabel !== undefined ? (dataIn?.employeeExtension?.preferenceProfileDataEntry?.usingShiftLabel ? "1" : "0") : "0");
  dataOut += (dataIn?.employeeExtension?.preferenceProfileDataEntry?.usesTwelveHourFormat !== undefined ? (dataIn?.employeeExtension?.preferenceProfileDataEntry?.usesTwelveHourFormat ? "1" : "0") : "0");
  dataOut += dataIn?.employeeExtension?.processEmployeeProfile?.substring(0, 13)?.padEnd(13) ?? "".substring(0, 13).padEnd(13);
  dataOut += dataIn?.employeeExtension?.processManagerProfile?.substring(0, 13)?.padEnd(13) ?? "".substring(0, 13).padEnd(13);
  dataOut += (dataIn?.employeeExtension?.requirePassChange !== undefined ? (dataIn?.employeeExtension?.requirePassChange ? "1" : "0") : "0");
  dataOut += (dataIn?.employeeExtension?.restrictedUser !== undefined ? (dataIn?.employeeExtension?.restrictedUser ? "1" : "0") : "0");
  dataOut += dataIn?.employeeExtension?.seniorityDate?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  dataOut += dataIn?.employeeExtension?.shortName?.substring(0, 7)?.padEnd(7) ?? "".substring(0, 7).padEnd(7);
  dataOut += dataIn?.employeeExtension?.supervisorFullName?.substring(0, 15)?.padEnd(15) ?? "".substring(0, 15).padEnd(15);
  dataOut += dataIn?.employeeExtension?.supervisorPersonId?.toFixed(0)?.substring(0, 8)?.padEnd(8) ?? "0".substring(0, 8).padEnd(8);
  dataOut += dataIn?.employeeExtension?.supervisorPersonNumber?.substring(0, 6)?.padEnd(6) ?? "".substring(0, 6).padEnd(6);
  for (let j: number = 0; j < 2; ++j) {
  dataOut += dataIn?.employeeExtension?.telContactDataEntries[j]?.contactData?.substring(0, 14)?.padEnd(14) ?? "".substring(0, 14).padEnd(14);
  dataOut += dataIn?.employeeExtension?.telContactDataEntries[j]?.contactType?.substring(0, 7)?.padEnd(7) ?? "".substring(0, 7).padEnd(7);
  dataOut += dataIn?.employeeExtension?.telContactDataEntries[j]?.contactTypeId?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? "0".substring(0, 3).padEnd(3);
  dataOut += (dataIn?.employeeExtension?.telContactDataEntries[j]?.smsswitch !== undefined ? (dataIn?.employeeExtension?.telContactDataEntries[j]?.smsswitch ? "1" : "0") : "0");
  }
  dataOut += dataIn?.employeeExtension?.timeZone?.substring(0, 25)?.padEnd(25) ?? "".substring(0, 25).padEnd(25);
  dataOut += dataIn?.employeeExtension?.timeZoneId?.toFixed(0)?.substring(0, 7)?.padEnd(7) ?? "0".substring(0, 7).padEnd(7);
  dataOut += dataIn?.employeeExtension?.userAccountId?.toFixed(0)?.substring(0, 8)?.padEnd(8) ?? "0".substring(0, 8).padEnd(8);
  dataOut += dataIn?.employeeExtension?.userName?.substring(0, 24)?.padEnd(24) ?? "".substring(0, 24).padEnd(24);
  dataOut += (dataIn?.exceptionPresent !== undefined ? (dataIn?.exceptionPresent ? "1" : "0") : "0");

  return dataOut;
}

/* eslint-enable */

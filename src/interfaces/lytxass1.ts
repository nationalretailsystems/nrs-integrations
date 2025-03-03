/* eslint-disable */
// @ts-nocheck
// Module: lytxass1
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

import eradaniConnect from "@eradani-inc/eradani-connect";
const { dataTypes } = eradaniConnect;

/**
 * Output interface
 */
export interface AssignReq {
    /**
     * @size 36 characters
     */
    vehicleId: string,
    /**
     * @size 36 characters
     */
    driverId: string
}

/**
 * Convert AssignReq record to TypeScript object
 */
export function convertAssignReqToObject(dataIn: string): AssignReq {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.vehicleId = dataIn.substring(pos, pos + 36).trimEnd();
  pos += 36;
  dataOut.driverId = dataIn.substring(pos, pos + 36).trimEnd();
  pos += 36;

  return dataOut;
}

/**
 * Input interface
 */
export interface AssignRes {
    /**
     * @size 36 characters
     */
    id: string,
    /**
     * @size 6 characters
     */
    name: string,
    /**
     * @size 2 digits
     * @precision 0 decimals
     */
    type: number,
    /**
     * @size 1 digits
     * @precision 0 decimals
     */
    status: number,
    /**
     * @size 10 characters
     */
    licensePlateNumber: string,
    /**
     * @size 10 characters
     */
    countrySubdivision: string,
    /**
     * @size 20 characters
     */
    lastConnected: string,
    /**
     * @size 36 characters
     */
    driverId: string,
    /**
     * @size 36 characters
     */
    groupId: string,
    /**
     * @size 30 characters
     */
    vin: string,
    /**
     * @size 1 digits
     * @precision 0 decimals
     */
    seatbeltType: number,
    /**
     * @size 20 characters
     */
    make: string,
    /**
     * @size 20 characters
     */
    model: string,
    /**
     * @size 4 digits
     * @precision 0 decimals
     */
    year: number,
    /**
     * @size 36 characters
     */
    deviceId: string,
    /**
     * @size 13 characters
     */
    hibernationDelay: string
}

/**
 * Convert JavaScript object to AssignRes record
 */
export function convertObjectToAssignRes(dataIn: AssignRes): string {
  let dataOut: string = "";

  dataOut += dataIn?.id?.substring(0, 36)?.padEnd(36) ?? missingInput(`dataIn.id`, "char", dataIn?.id);
  dataOut += dataIn?.name?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.name`, "char", dataIn?.name);
  dataOut += dataIn?.type?.toFixed(0)?.substring(0, 4)?.padEnd(4) ?? missingInput(`dataIn.type`, "packed", dataIn?.type);
  dataOut += dataIn?.status?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.status`, "packed", dataIn?.status);
  dataOut += dataIn?.licensePlateNumber?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.licensePlateNumber`, "char", dataIn?.licensePlateNumber);
  dataOut += dataIn?.countrySubdivision?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.countrySubdivision`, "char", dataIn?.countrySubdivision);
  dataOut += dataIn?.lastConnected?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.lastConnected`, "char", dataIn?.lastConnected);
  dataOut += dataIn?.driverId?.substring(0, 36)?.padEnd(36) ?? missingInput(`dataIn.driverId`, "char", dataIn?.driverId);
  dataOut += dataIn?.groupId?.substring(0, 36)?.padEnd(36) ?? missingInput(`dataIn.groupId`, "char", dataIn?.groupId);
  dataOut += dataIn?.vin?.substring(0, 30)?.padEnd(30) ?? missingInput(`dataIn.vin`, "char", dataIn?.vin);
  dataOut += dataIn?.seatbeltType?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.seatbeltType`, "packed", dataIn?.seatbeltType);
  dataOut += dataIn?.make?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.make`, "char", dataIn?.make);
  dataOut += dataIn?.model?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.model`, "char", dataIn?.model);
  dataOut += dataIn?.year?.toFixed(0)?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.year`, "packed", dataIn?.year);
  dataOut += dataIn?.deviceId?.substring(0, 36)?.padEnd(36) ?? missingInput(`dataIn.deviceId`, "char", dataIn?.deviceId);
  dataOut += dataIn?.hibernationDelay?.substring(0, 13)?.padEnd(13) ?? missingInput(`dataIn.hibernationDelay`, "char", dataIn?.hibernationDelay);

  return dataOut;
}

/* eslint-enable */

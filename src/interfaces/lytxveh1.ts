/* eslint-disable */
// @ts-nocheck
// Module: lytxveh1
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
export interface VehiclesDS {
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
     * @default ``
     */
    licensePlateNumber: string,
    /**
     * @size 10 characters
     * @default ``
     */
    countrySubdivision: string,
    /**
     * @size 28 characters
     * @default ``
     */
    lastConnected: string,
    /**
     * @size 36 characters
     * @default ``
     */
    driverId: string,
    /**
     * @size 36 characters
     */
    groupId: string,
    /**
     * @size 25 characters
     * @default ``
     */
    vin: string,
    /**
     * @size 1 digits
     * @precision 0 decimals
     */
    seatbeltType: number,
    /**
     * @size 20 characters
     * @default ``
     */
    make: string,
    /**
     * @size 20 characters
     * @default ``
     */
    model: string,
    /**
     * @size 4 characters
     * @default ``
     */
    year: string,
    /**
     * @size 36 characters
     */
    deviceId: string
}

/**
 * Output interface
 */
export interface VehReq {
    /**
     * @size 10 characters
     */
    vehicle: string
}

/**
 * Convert VehReq record to TypeScript object
 */
export function convertVehReqToObject(dataIn: string): VehReq {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.vehicle = dataIn.substring(pos, pos + 10).trimEnd();
  pos += 10;

  return dataOut;
}

/**
 * Input interface
 */
export interface VehRes {
    /**
     */
    vehicles: Array<VehiclesDS>,
    /**
     * @size 4 digits
     * @precision 0 decimals
     */
    totalResults: number
}

/**
 * Convert JavaScript object to VehRes record
 */
export function convertObjectToVehRes(dataIn: VehRes): string {
  let dataOut: string = "";

  for (let i: number = 0; i < 1; ++i) {
  dataOut += dataIn?.vehicles[i]?.id?.substring(0, 36)?.padEnd(36) ?? missingInput(`dataIn.vehicles[${i}].id`, "char", dataIn?.vehicles[i]?.id);
  dataOut += dataIn?.vehicles[i]?.name?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.vehicles[${i}].name`, "char", dataIn?.vehicles[i]?.name);
  dataOut += dataIn?.vehicles[i]?.type?.toFixed(0)?.substring(0, 4)?.padEnd(4) ?? missingInput(`dataIn.vehicles[${i}].type`, "packed", dataIn?.vehicles[i]?.type);
  dataOut += dataIn?.vehicles[i]?.status?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.vehicles[${i}].status`, "packed", dataIn?.vehicles[i]?.status);
  dataOut += dataIn?.vehicles[i]?.licensePlateNumber?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  dataOut += dataIn?.vehicles[i]?.countrySubdivision?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  dataOut += dataIn?.vehicles[i]?.lastConnected?.substring(0, 28)?.padEnd(28) ?? "".substring(0, 28).padEnd(28);
  dataOut += dataIn?.vehicles[i]?.driverId?.substring(0, 36)?.padEnd(36) ?? "".substring(0, 36).padEnd(36);
  dataOut += dataIn?.vehicles[i]?.groupId?.substring(0, 36)?.padEnd(36) ?? missingInput(`dataIn.vehicles[${i}].groupId`, "char", dataIn?.vehicles[i]?.groupId);
  dataOut += dataIn?.vehicles[i]?.vin?.substring(0, 25)?.padEnd(25) ?? "".substring(0, 25).padEnd(25);
  dataOut += dataIn?.vehicles[i]?.seatbeltType?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.vehicles[${i}].seatbeltType`, "packed", dataIn?.vehicles[i]?.seatbeltType);
  dataOut += dataIn?.vehicles[i]?.make?.substring(0, 20)?.padEnd(20) ?? "".substring(0, 20).padEnd(20);
  dataOut += dataIn?.vehicles[i]?.model?.substring(0, 20)?.padEnd(20) ?? "".substring(0, 20).padEnd(20);
  dataOut += dataIn?.vehicles[i]?.year?.substring(0, 4)?.padEnd(4) ?? "".substring(0, 4).padEnd(4);
  dataOut += dataIn?.vehicles[i]?.deviceId?.substring(0, 36)?.padEnd(36) ?? missingInput(`dataIn.vehicles[${i}].deviceId`, "char", dataIn?.vehicles[i]?.deviceId);
  }
  dataOut += dataIn?.totalResults?.toFixed(0)?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.totalResults`, "packed", dataIn?.totalResults);

  return dataOut;
}

/* eslint-enable */

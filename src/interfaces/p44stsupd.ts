/* eslint-disable */
// @ts-nocheck
// Module: p44stsupd
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
export interface ShipIdDS {
    /**
     * @size 10 characters
     * @default ` `
     */
    type: string,
    /**
     * @size 20 characters
     * @default ` `
     */
    value: string
}

/**
 * Output interface
 */
export interface P44SndRpt {
    /**
     */
    shipmentIdentifiers: Array<ShipIdDS>,
    /**
     * @size 20 digits
     * @precision 15 decimals
     */
    latitude: number,
    /**
     * @size 20 digits
     * @precision 15 decimals
     */
    longitude: number,
    /**
     * @size 19 characters
     */
    utcTimestamp: string,
    /**
     * @size 25 characters
     */
    customerId: string
}

/**
 * Convert P44SndRpt record to TypeScript object
 */
export function convertP44SndRptToObject(dataIn: string): P44SndRpt {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.shipmentIdentifiers = [
    
  ];
  for (let i: number = 0; i < 2; ++i) {
  dataOut.shipmentIdentifiers[i] =   {
  
    };
  dataOut.shipmentIdentifiers[i].type = dataIn.substring(pos, pos + 10).trimEnd();
  pos += 10;
  dataOut.shipmentIdentifiers[i].value = dataIn.substring(pos, pos + 20).trimEnd();
  pos += 20;
  }
  dataOut.latitude = Number(dataIn.substring(pos, pos + 22).trimEnd());
  pos += 22;
  dataOut.longitude = Number(dataIn.substring(pos, pos + 22).trimEnd());
  pos += 22;
  dataOut.utcTimestamp = dataIn.substring(pos, pos + 19).trimEnd();
  pos += 19;
  dataOut.customerId = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;

  return dataOut;
}

/**
 * Input interface
 */
export interface P44RcvRpt {
    /**
     */
    shipmentIdentifiers: ShipIdDS,
    /**
     * @size 20 digits
     * @precision 15 decimals
     * @default `0`
     */
    latitude: number,
    /**
     * @size 20 digits
     * @precision 15 decimals
     * @default `0`
     */
    longitude: number,
    /**
     * @size 19 characters
     * @default ` `
     */
    utcTimestamp: string,
    /**
     * @size 25 characters
     * @default ` `
     */
    customerId: string
}

/**
 * Convert JavaScript object to P44RcvRpt record
 */
export function convertObjectToP44RcvRpt(dataIn: P44RcvRpt): string {
  let dataOut: string = "";

  dataOut += dataIn?.shipmentIdentifiers?.type?.substring(0, 10)?.padEnd(10) ?? " ".substring(0, 10).padEnd(10);
  dataOut += dataIn?.shipmentIdentifiers?.value?.substring(0, 20)?.padEnd(20) ?? " ".substring(0, 20).padEnd(20);
  dataOut += dataIn?.latitude?.toFixed(15)?.substring(0, 22)?.padEnd(22) ?? "0".substring(0, 22).padEnd(22);
  dataOut += dataIn?.longitude?.toFixed(15)?.substring(0, 22)?.padEnd(22) ?? "0".substring(0, 22).padEnd(22);
  dataOut += dataIn?.utcTimestamp?.substring(0, 19)?.padEnd(19) ?? " ".substring(0, 19).padEnd(19);
  dataOut += dataIn?.customerId?.substring(0, 25)?.padEnd(25) ?? " ".substring(0, 25).padEnd(25);

  return dataOut;
}

/* eslint-enable */

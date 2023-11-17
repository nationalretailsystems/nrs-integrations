/* eslint-disable */
// @ts-nocheck
// Module: t4300inv
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
export interface SlotsDS {
    /**
     * @size 3 digits
     * @precision 0 decimals
     * @default `0`
     */
    PhysicalNumber: number,
    /**
     * @size 4 characters
     * @default ``
     */
    LogicalNumber: string,
    /**
     * @size 1 digits
     * @precision 0 decimals
     * @default `0`
     */
    Module: number,
    /**
     * @size 1 digits
     * @precision 0 decimals
     * @default `0`
     */
    LogicalLibrary: number,
    /**
     * @default `false`
     */
    Mailslot: boolean,
    /**
     * @default `true`
     */
    Cartridge: boolean,
    /**
     * @size 8 characters
     * @default ``
     */
    Barcode: string,
    /**
     * @size 10 characters
     * @default ``
     */
    CartridgeType: string,
    /**
     * @size 1 digits
     * @precision 0 decimals
     * @default `0`
     */
    CartridgeSubType: number,
    /**
     * @size 1 digits
     * @precision 0 decimals
     * @default `0`
     */
    CartridgeGeneration: number,
    /**
     * @default `false`
     */
    CartridgeEncrypted: boolean,
    /**
     * @default `true`
     */
    Access: boolean,
    /**
     * @default `false`
     */
    Blocked: boolean
}

/**
 * Output interface
 */
export interface DrivesDS {
    /**
     * @size 2 digits
     * @precision 0 decimals
     * @default `0`
     */
    PhysicalNumber: number,
    /**
     * @size 1 digits
     * @precision 0 decimals
     * @default `0`
     */
    LogicalNumber: number,
    /**
     * @size 1 digits
     * @precision 0 decimals
     * @default `0`
     */
    Module: number,
    /**
     * @size 1 digits
     * @precision 0 decimals
     * @default `0`
     */
    LogicalLibrary: number,
    /**
     * @size 8 characters
     * @default ``
     */
    Barcode: string,
    /**
     * @size 3 characters
     * @default ``
     */
    Vendor: string,
    /**
     * @size 11 characters
     * @default ``
     */
    Product: string,
    /**
     * @size 4 characters
     * @default ``
     */
    FWRevision: string,
    /**
     * @size 10 characters
     * @default ``
     */
    SerialNumber: string
}

/**
 * Input interface
 */
export interface TapeInvRes {
    /**
     */
    Slots: Array<SlotsDS>,
    /**
     */
    Drives: Array<DrivesDS>
}

/**
 * Convert JavaScript object to TapeInvRes record
 */
export function convertObjectToTapeInvRes(dataIn: TapeInvRes): string {
  let dataOut: string = "";

  for (let i: number = 0; i < 40; ++i) {
  dataOut += dataIn?.Slots[i]?.PhysicalNumber?.toFixed(0)?.substring(0, 5)?.padEnd(5) ?? "0".substring(0, 5).padEnd(5);
  dataOut += dataIn?.Slots[i]?.LogicalNumber?.substring(0, 4)?.padEnd(4) ?? "".substring(0, 4).padEnd(4);
  dataOut += dataIn?.Slots[i]?.Module?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? "0".substring(0, 3).padEnd(3);
  dataOut += dataIn?.Slots[i]?.LogicalLibrary?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? "0".substring(0, 3).padEnd(3);
  dataOut += (dataIn?.Slots[i]?.Mailslot !== undefined ? (dataIn?.Slots[i]?.Mailslot ? "1" : "0") : "0");
  dataOut += (dataIn?.Slots[i]?.Cartridge !== undefined ? (dataIn?.Slots[i]?.Cartridge ? "1" : "0") : "1");
  dataOut += dataIn?.Slots[i]?.Barcode?.substring(0, 8)?.padEnd(8) ?? "".substring(0, 8).padEnd(8);
  dataOut += dataIn?.Slots[i]?.CartridgeType?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  dataOut += dataIn?.Slots[i]?.CartridgeSubType?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? "0".substring(0, 3).padEnd(3);
  dataOut += dataIn?.Slots[i]?.CartridgeGeneration?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? "0".substring(0, 3).padEnd(3);
  dataOut += (dataIn?.Slots[i]?.CartridgeEncrypted !== undefined ? (dataIn?.Slots[i]?.CartridgeEncrypted ? "1" : "0") : "0");
  dataOut += (dataIn?.Slots[i]?.Access !== undefined ? (dataIn?.Slots[i]?.Access ? "1" : "0") : "1");
  dataOut += (dataIn?.Slots[i]?.Blocked !== undefined ? (dataIn?.Slots[i]?.Blocked ? "1" : "0") : "0");
  }
  for (let i: number = 0; i < 2; ++i) {
  dataOut += dataIn?.Drives[i]?.PhysicalNumber?.toFixed(0)?.substring(0, 4)?.padEnd(4) ?? "0".substring(0, 4).padEnd(4);
  dataOut += dataIn?.Drives[i]?.LogicalNumber?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? "0".substring(0, 3).padEnd(3);
  dataOut += dataIn?.Drives[i]?.Module?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? "0".substring(0, 3).padEnd(3);
  dataOut += dataIn?.Drives[i]?.LogicalLibrary?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? "0".substring(0, 3).padEnd(3);
  dataOut += dataIn?.Drives[i]?.Barcode?.substring(0, 8)?.padEnd(8) ?? "".substring(0, 8).padEnd(8);
  dataOut += dataIn?.Drives[i]?.Vendor?.substring(0, 3)?.padEnd(3) ?? "".substring(0, 3).padEnd(3);
  dataOut += dataIn?.Drives[i]?.Product?.substring(0, 11)?.padEnd(11) ?? "".substring(0, 11).padEnd(11);
  dataOut += dataIn?.Drives[i]?.FWRevision?.substring(0, 4)?.padEnd(4) ?? "".substring(0, 4).padEnd(4);
  dataOut += dataIn?.Drives[i]?.SerialNumber?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  }

  return dataOut;
}

/* eslint-enable */

/* eslint-disable */
// @ts-nocheck
// Module: pncerror
// Generated source -- do not modify

import { ibmiConversions } from "@eradani-inc/ec-client";
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
export interface AssetDS {
    /**
     * @size 26 characters
     */
    checked_in: string,
    /**
     * @size 26 characters
     */
    checked_out: string,
    /**
     * @size 15 characters
     */
    movement_type: string,
    /**
     * @size 15 characters
     */
    load_status: string,
    /**
     * @size 4 characters
     */
    SCAC: string,
    /**
     * @size 25 characters
     */
    trailer_number: string,
    /**
     * @size 25 characters
     */
    container_number: string,
    /**
     * @size 6 characters
     */
    fleet_code: string,
    /**
     * @size 4 characters
     */
    tractor_scac: string,
    /**
     * @size 4 characters
     */
    customer_code: string,
    /**
     * @size 15 characters
     */
    asset_type: string,
    /**
     * @size 9 characters
     */
    site_code: string,
    /**
     * @size 24 characters
     */
    rfid_tag: string
}

/**
 * Output interface
 */
export interface DataDS {
    /**
     */
    asset: AssetDS
}

/**
 * Output interface
 */
export interface MessageDS {
    /**
     * @size 100 characters
     */
    event: string,
    /**
     * @size 25 characters
     */
    time: string,
    /**
     * @size 10 characters
     */
    version: string,
    /**
     * @size 6 characters
     */
    campus: string,
    /**
     */
    data: DataDS
}

/**
 * Output interface
 */
export interface DataDS2 {
    /**
     * @size 256 characters
     */
    error: string,
    /**
     */
    message: MessageDS
}

/**
 * Output interface
 */
export interface LLReq {
    /**
     * @size 80 characters
     */
    comment: string,
    /**
     * @size 100 characters
     */
    filename: string
}

/**
 * Convert LLReq record to TypeScript object
 */
export function convertLLReqToObject(dataIn: string): LLReq {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.comment = dataIn.substring(pos, pos + 80).trimEnd();
  pos += 80;
  dataOut.filename = dataIn.substring(pos, pos + 100).trimEnd();
  pos += 100;

  return dataOut;
}

/**
 * Input interface
 */
export interface LLRes {
    /**
     * @size 50 characters
     */
    event: string,
    /**
     * @size 25 characters
     */
    time: string,
    /**
     */
    data: DataDS2
}

/**
 * Convert JavaScript object to LLRes record
 */
export function convertObjectToLLRes(dataIn: LLRes): string {
  let dataOut: string = "";

  dataOut += dataIn.event.substring(0, 50).padEnd(50);
  dataOut += dataIn.time.substring(0, 25).padEnd(25);
  dataOut += dataIn.data.error.substring(0, 256).padEnd(256);
  dataOut += dataIn.data.message.event.substring(0, 100).padEnd(100);
  dataOut += dataIn.data.message.time.substring(0, 25).padEnd(25);
  dataOut += dataIn.data.message.version.substring(0, 10).padEnd(10);
  dataOut += dataIn.data.message.campus.substring(0, 6).padEnd(6);
  dataOut += dataIn.data.message.data.asset.checked_in.substring(0, 26).padEnd(26);
  dataOut += dataIn.data.message.data.asset.checked_out.substring(0, 26).padEnd(26);
  dataOut += dataIn.data.message.data.asset.movement_type.substring(0, 15).padEnd(15);
  dataOut += dataIn.data.message.data.asset.load_status.substring(0, 15).padEnd(15);
  dataOut += dataIn.data.message.data.asset.SCAC.substring(0, 4).padEnd(4);
  dataOut += dataIn.data.message.data.asset.trailer_number.substring(0, 25).padEnd(25);
  dataOut += dataIn.data.message.data.asset.container_number.substring(0, 25).padEnd(25);
  dataOut += dataIn.data.message.data.asset.fleet_code.substring(0, 6).padEnd(6);
  dataOut += dataIn.data.message.data.asset.tractor_scac.substring(0, 4).padEnd(4);
  dataOut += dataIn.data.message.data.asset.customer_code.substring(0, 4).padEnd(4);
  dataOut += dataIn.data.message.data.asset.asset_type.substring(0, 15).padEnd(15);
  dataOut += dataIn.data.message.data.asset.site_code.substring(0, 9).padEnd(9);
  dataOut += dataIn.data.message.data.asset.rfid_tag.substring(0, 24).padEnd(24);

  return dataOut;
}

/* eslint-enable */

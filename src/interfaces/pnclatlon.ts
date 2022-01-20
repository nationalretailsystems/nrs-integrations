/* eslint-disable */
// @ts-nocheck
// Module: pnclatlon
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
     * @size 25 characters
     */
    reference_id: string,
    /**
     * @size 26 characters
     */
    checked_in: string,
    /**
     * @size 26 characters
     */
    checked_out: string,
    /**
     * @size 26 characters
     */
    updated_on: string,
    /**
     * @size 25 characters
     */
    check_in_agent: string,
    /**
     * @size 25 characters
     */
    check_out_agent: string,
    /**
     * @size 25 characters
     */
    purpose: string,
    /**
     * @size 10 characters
     */
    spot_number: string,
    /**
     * @size 26 characters
     */
    last_move_time: string,
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
    trailer_scac: string,
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
    asset_dimension: string,
    /**
     * @size 15 characters
     */
    asset_type: string,
    /**
     * @size 25 characters
     */
    site: string,
    /**
     * @size 9 characters
     */
    site_code: string,
    /**
     * @size 5 digits
     */
    asset_visit_id: number,
    /**
     */
    is_dock: boolean,
    /**
     * @size 15 characters
     */
    Latitude: string,
    /**
     * @size 25 characters
     */
    Longitude: string,
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
export interface LLReq {
    /**
     * @size 80 characters
     */
    comment: string,
    /**
     * @size 6 characters
     */
    facility: string
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
  dataOut.facility = dataIn.substring(pos, pos + 6).trimEnd();
  pos += 6;

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
     * @size 3 characters
     */
    version: string,
    /**
     * @size 6 characters
     */
    campus: string,
    /**
     * @size 25 characters
     */
    customer_facility_code: string,
    /**
     * @size 25 characters
     */
    event_id: string,
    /**
     */
    data: DataDS
}

/**
 * Convert JavaScript object to LLRes record
 */
export function convertObjectToLLRes(dataIn: LLRes): string {
  let dataOut: string = "";

  dataOut += dataIn.event.substring(0, 50).padEnd(50);
  dataOut += dataIn.time.substring(0, 25).padEnd(25);
  dataOut += dataIn.version.substring(0, 3).padEnd(3);
  dataOut += dataIn.campus.substring(0, 6).padEnd(6);
  dataOut += dataIn.customer_facility_code.substring(0, 25).padEnd(25);
  dataOut += dataIn.event_id.substring(0, 25).padEnd(25);
  dataOut += dataIn.data.asset.reference_id.substring(0, 25).padEnd(25);
  dataOut += dataIn.data.asset.checked_in.substring(0, 26).padEnd(26);
  dataOut += dataIn.data.asset.checked_out.substring(0, 26).padEnd(26);
  dataOut += dataIn.data.asset.updated_on.substring(0, 26).padEnd(26);
  dataOut += dataIn.data.asset.check_in_agent.substring(0, 25).padEnd(25);
  dataOut += dataIn.data.asset.check_out_agent.substring(0, 25).padEnd(25);
  dataOut += dataIn.data.asset.purpose.substring(0, 25).padEnd(25);
  dataOut += dataIn.data.asset.spot_number.substring(0, 10).padEnd(10);
  dataOut += dataIn.data.asset.last_move_time.substring(0, 26).padEnd(26);
  dataOut += dataIn.data.asset.movement_type.substring(0, 15).padEnd(15);
  dataOut += dataIn.data.asset.load_status.substring(0, 15).padEnd(15);
  dataOut += dataIn.data.asset.trailer_scac.substring(0, 4).padEnd(4);
  dataOut += dataIn.data.asset.trailer_number.substring(0, 25).padEnd(25);
  dataOut += dataIn.data.asset.container_number.substring(0, 25).padEnd(25);
  dataOut += dataIn.data.asset.fleet_code.substring(0, 6).padEnd(6);
  dataOut += dataIn.data.asset.tractor_scac.substring(0, 4).padEnd(4);
  dataOut += dataIn.data.asset.customer_code.substring(0, 4).padEnd(4);
  dataOut += dataIn.data.asset.asset_dimension.substring(0, 15).padEnd(15);
  dataOut += dataIn.data.asset.asset_type.substring(0, 15).padEnd(15);
  dataOut += dataIn.data.asset.site.substring(0, 25).padEnd(25);
  dataOut += dataIn.data.asset.site_code.substring(0, 9).padEnd(9);
  dataOut += dataIn.data.asset.asset_visit_id.toFixed().substring(0, 6).padEnd(6);
  dataOut += (dataIn.data.asset.is_dock ? "1" : "0");
  dataOut += dataIn.data.asset.Latitude.substring(0, 15).padEnd(15);
  dataOut += dataIn.data.asset.Longitude.substring(0, 25).padEnd(25);
  dataOut += dataIn.data.asset.rfid_tag.substring(0, 24).padEnd(24);

  return dataOut;
}

/* eslint-enable */

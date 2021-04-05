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

/**
 * Output interface
 */
export interface LLReq {
    /**
     * @size 80 characters
     */
    comment: string
}

/**
 * Convert LLReq record to TypeScript object
 */
export function convertLLReqToObject(dataIn: string): LLReq {
  const dataOut: any =   {
  
    };

  dataOut.comment = dataIn.substring(0, 80).trimEnd();

  return dataOut;
}

/**
 * Input interface
 */
export interface LatLonDS {
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
     * @size 2 characters
     */
    event_type: string,
    /**
     * @size 7 digits
     * @precision 0 decimals
     */
    event_no: number,
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
     * @size 1 characters
     */
    snyard: string,
    /**
     * @size 1 characters
     */
    snloctype: string,
    /**
     * @size 3 characters
     */
    snslotnumber: string,
    /**
     * @size 3 characters
     */
    yardloc3: string,
    /**
     * @size 1 characters
     */
    location1: string,
    /**
     * @size 5 characters
     */
    yardloc5: string,
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
 * Convert JavaScript object to LatLonDS record
 */
export function convertObjectToLatLonDS(dataIn: LatLonDS): string {
  let dataOut = "";

  dataOut += dataIn.event.substring(0, 50).padEnd(50);
  dataOut += dataIn.time.substring(0, 25).padEnd(25);
  dataOut += dataIn.version.substring(0, 3).padEnd(3);
  dataOut += dataIn.campus.substring(0, 6).padEnd(6);
  dataOut += dataIn.customer_facility_code.substring(0, 25).padEnd(25);
  dataOut += dataIn.event_id.substring(0, 25).padEnd(25);
  dataOut += dataIn.event_type.substring(0, 2).padEnd(2);
  dataOut += dataIn.event_no.toFixed(0).substring(0, 9).padEnd(9);
  dataOut += dataIn.reference_id.substring(0, 25).padEnd(25);
  dataOut += dataIn.checked_in.substring(0, 26).padEnd(26);
  dataOut += dataIn.checked_out.substring(0, 26).padEnd(26);
  dataOut += dataIn.updated_on.substring(0, 26).padEnd(26);
  dataOut += dataIn.check_in_agent.substring(0, 25).padEnd(25);
  dataOut += dataIn.check_out_agent.substring(0, 25).padEnd(25);
  dataOut += dataIn.purpose.substring(0, 25).padEnd(25);
  dataOut += dataIn.spot_number.substring(0, 10).padEnd(10);
  dataOut += dataIn.snyard.substring(0, 1).padEnd(1);
  dataOut += dataIn.snloctype.substring(0, 1).padEnd(1);
  dataOut += dataIn.snslotnumber.substring(0, 3).padEnd(3);
  dataOut += dataIn.yardloc3.substring(0, 3).padEnd(3);
  dataOut += dataIn.location1.substring(0, 1).padEnd(1);
  dataOut += dataIn.yardloc5.substring(0, 5).padEnd(5);
  dataOut += dataIn.last_move_time.substring(0, 26).padEnd(26);
  dataOut += dataIn.movement_type.substring(0, 15).padEnd(15);
  dataOut += dataIn.load_status.substring(0, 15).padEnd(15);
  dataOut += dataIn.trailer_scac.substring(0, 4).padEnd(4);
  dataOut += dataIn.trailer_number.substring(0, 25).padEnd(25);
  dataOut += dataIn.container_number.substring(0, 25).padEnd(25);
  dataOut += dataIn.fleet_code.substring(0, 6).padEnd(6);
  dataOut += dataIn.tractor_scac.substring(0, 4).padEnd(4);
  dataOut += dataIn.customer_code.substring(0, 4).padEnd(4);
  dataOut += dataIn.asset_dimension.substring(0, 15).padEnd(15);
  dataOut += dataIn.asset_type.substring(0, 15).padEnd(15);
  dataOut += dataIn.site.substring(0, 25).padEnd(25);
  dataOut += dataIn.site_code.substring(0, 9).padEnd(9);
  dataOut += dataIn.asset_visit_id.toFixed().substring(0, 6).padEnd(6);
  dataOut += (dataIn.is_dock ? "1" : "0");
  dataOut += dataIn.Latitude.substring(0, 15).padEnd(15);
  dataOut += dataIn.Longitude.substring(0, 25).padEnd(25);
  dataOut += dataIn.rfid_tag.substring(0, 24).padEnd(24);

  return dataOut;
}

/* eslint-enable */

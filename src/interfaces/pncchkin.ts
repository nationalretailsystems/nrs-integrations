/* eslint-disable */
// @ts-nocheck
// Module: pncchkin
// Generated source -- do not modify

import { ibmiConversions } from '@eradani-inc/ec-client';
const { fromIbmiDate, fromIbmiTime, fromIbmiTimestamp, toIbmiDate, toIbmiTime, toIbmiTimestamp } = ibmiConversions;

/**
 * Output interface
 */
export interface CheckinDS {
    /**
     * @size 25 characters
     */
    message_group_id: string;
    /**
     * @size 6 characters
     */
    campus: string;
    /**
     * @size 25 characters
     */
    checked_in: string;
    /**
     * @size 25 characters
     */
    asset_type: string;
    /**
     * @size 25 characters
     */
    rfid_tag: string;
    /**
     * @size 25 characters
     */
    site_code: string;
    /**
     * @size 4 characters
     */
    Trailer_SCAC: string;
    /**
     * @size 25 characters
     */
    Trailer_number: string;
    /**
     * @size 25 characters
     */
    container_number: string;
    /**
     * @size 25 characters
     */
    movement_type: string;
    /**
     * @size 25 characters
     */
    load_status: string;
    /**
     * @size 25 characters
     */
    customer_code: string;
    /**
     * @size 25 characters
     */
    fleet_code: string;
    /**
     * @size 25 characters
     */
    tractor_scac: string;
}

/**
 * Convert CheckinDS record to TypeScript object
 */
export function convertCheckinDSToObject(dataIn: string): CheckinDS {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.message_group_id = dataIn.substring(pos, pos + 25).trimEnd();
    pos += 25;
    dataOut.campus = dataIn.substring(pos, pos + 6).trimEnd();
    pos += 6;
    dataOut.checked_in = dataIn.substring(pos, pos + 25).trimEnd();
    pos += 25;
    dataOut.asset_type = dataIn.substring(pos, pos + 25).trimEnd();
    pos += 25;
    dataOut.rfid_tag = dataIn.substring(pos, pos + 25).trimEnd();
    pos += 25;
    dataOut.site_code = dataIn.substring(pos, pos + 25).trimEnd();
    pos += 25;
    dataOut.Trailer_SCAC = dataIn.substring(pos, pos + 4).trimEnd();
    pos += 4;
    dataOut.Trailer_number = dataIn.substring(pos, pos + 25).trimEnd();
    pos += 25;
    dataOut.container_number = dataIn.substring(pos, pos + 25).trimEnd();
    pos += 25;
    dataOut.movement_type = dataIn.substring(pos, pos + 25).trimEnd();
    pos += 25;
    dataOut.load_status = dataIn.substring(pos, pos + 25).trimEnd();
    pos += 25;
    dataOut.customer_code = dataIn.substring(pos, pos + 25).trimEnd();
    pos += 25;
    dataOut.fleet_code = dataIn.substring(pos, pos + 25).trimEnd();
    pos += 25;
    dataOut.tractor_scac = dataIn.substring(pos, pos + 25).trimEnd();
    pos += 25;

    return dataOut;
}

/* eslint-enable */

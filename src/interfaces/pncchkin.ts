/* eslint-disable */
// @ts-nocheck
// Module: pncchkin
// Generated source -- do not modify

import { ibmiConversions } from '@eradani-inc/ec-client';
const { fromIbmiDate, fromIbmiTime, fromIbmiTimestamp, toIbmiDate, toIbmiTime, toIbmiTimestamp } = ibmiConversions;

/**
 * Output interface
 */
export interface Checkin_ds {
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
 * Convert Checkin_ds record to TypeScript object
 */
export function convertCheckin_dsToObject(dataIn: string): Checkin_ds {
    const dataOut: any = {};

    dataOut.campus = dataIn.substring(0, 6).trimEnd();
    dataOut.checked_in = dataIn.substring(6, 31).trimEnd();
    dataOut.asset_type = dataIn.substring(31, 56).trimEnd();
    dataOut.rfid_tag = dataIn.substring(56, 81).trimEnd();
    dataOut.site_code = dataIn.substring(81, 106).trimEnd();
    dataOut.Trailer_SCAC = dataIn.substring(106, 110).trimEnd();
    dataOut.Trailer_number = dataIn.substring(110, 135).trimEnd();
    dataOut.container_number = dataIn.substring(135, 160).trimEnd();
    dataOut.movement_type = dataIn.substring(160, 185).trimEnd();
    dataOut.load_status = dataIn.substring(185, 210).trimEnd();
    dataOut.customer_code = dataIn.substring(210, 235).trimEnd();
    dataOut.fleet_code = dataIn.substring(235, 260).trimEnd();
    dataOut.tractor_scac = dataIn.substring(260, 285).trimEnd();

    return dataOut;
}

/* eslint-enable */

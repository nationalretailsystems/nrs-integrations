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

    dataOut.checked_in = dataIn.substring(0, 25).trimEnd();
    dataOut.asset_type = dataIn.substring(25, 50).trimEnd();
    dataOut.rfid_tag = dataIn.substring(50, 75).trimEnd();
    dataOut.site_code = dataIn.substring(75, 100).trimEnd();
    dataOut.Trailer_SCAC = dataIn.substring(100, 104).trimEnd();
    dataOut.Trailer_number = dataIn.substring(104, 129).trimEnd();
    dataOut.container_number = dataIn.substring(129, 154).trimEnd();
    dataOut.movement_type = dataIn.substring(154, 179).trimEnd();
    dataOut.load_status = dataIn.substring(179, 204).trimEnd();
    dataOut.customer_code = dataIn.substring(204, 229).trimEnd();
    dataOut.fleet_code = dataIn.substring(229, 254).trimEnd();
    dataOut.tractor_scac = dataIn.substring(254, 279).trimEnd();

    return dataOut;
}

/* eslint-enable */

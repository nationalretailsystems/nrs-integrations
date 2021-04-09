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
     * @size 60 characters
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

    dataOut.message_group_id = dataIn.substring(0, 25).trimEnd();
    dataOut.campus = dataIn.substring(25, 85).trimEnd();
    dataOut.checked_in = dataIn.substring(85, 110).trimEnd();
    dataOut.asset_type = dataIn.substring(110, 135).trimEnd();
    dataOut.rfid_tag = dataIn.substring(135, 160).trimEnd();
    dataOut.site_code = dataIn.substring(160, 185).trimEnd();
    dataOut.Trailer_SCAC = dataIn.substring(185, 189).trimEnd();
    dataOut.Trailer_number = dataIn.substring(189, 214).trimEnd();
    dataOut.container_number = dataIn.substring(214, 239).trimEnd();
    dataOut.movement_type = dataIn.substring(239, 264).trimEnd();
    dataOut.load_status = dataIn.substring(264, 289).trimEnd();
    dataOut.customer_code = dataIn.substring(289, 314).trimEnd();
    dataOut.fleet_code = dataIn.substring(314, 339).trimEnd();
    dataOut.tractor_scac = dataIn.substring(339, 364).trimEnd();

    return dataOut;
}

/* eslint-enable */

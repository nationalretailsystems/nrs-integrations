/* eslint-disable */
// @ts-nocheck
// Module: pncchkot
// Generated source -- do not modify

import { ibmiConversions, missingInput } from '@eradani-inc/ec-client';
const { fromIbmiDate, fromIbmiTime, fromIbmiTimestamp, toIbmiDate, toIbmiTime, toIbmiTimestamp } = ibmiConversions;

import eradaniConnect from '@eradani-inc/eradani-connect';
const { dataTypes } = eradaniConnect;

/**
 * Output interface
 */
export interface AssetDS {
    /**
     * @size 25 characters
     */
    checked_out: string;
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
    load_status: string;
    /**
     * @size 25 characters
     */
    movement_type: string;
    /**
     * @size 25 characters
     */
    outbound_seal: string;
}

/**
 * Output interface
 */
export interface DataDS {
    /**
     */
    asset: AssetDS;
}

/**
 * Output interface
 */
export interface CheckotDS {
    /**
     * @size 25 characters
     */
    message_group_id: string;
    /**
     * @size 6 characters
     */
    campus: string;
    /**
     */
    data: DataDS;
}

/**
 * Convert CheckotDS record to TypeScript object
 */
export function convertCheckotDSToObject(dataIn: string): CheckotDS {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.message_group_id = dataIn.substring(pos, pos + 25).trimEnd();
    pos += 25;
    dataOut.campus = dataIn.substring(pos, pos + 6).trimEnd();
    pos += 6;
    dataOut.data = {};
    dataOut.data.asset = {};
    dataOut.data.asset.checked_out = dataIn.substring(pos, pos + 25).trimEnd();
    pos += 25;
    dataOut.data.asset.asset_type = dataIn.substring(pos, pos + 25).trimEnd();
    pos += 25;
    dataOut.data.asset.rfid_tag = dataIn.substring(pos, pos + 25).trimEnd();
    pos += 25;
    dataOut.data.asset.site_code = dataIn.substring(pos, pos + 25).trimEnd();
    pos += 25;
    dataOut.data.asset.Trailer_SCAC = dataIn.substring(pos, pos + 4).trimEnd();
    pos += 4;
    dataOut.data.asset.Trailer_number = dataIn.substring(pos, pos + 25).trimEnd();
    pos += 25;
    dataOut.data.asset.container_number = dataIn.substring(pos, pos + 25).trimEnd();
    pos += 25;
    dataOut.data.asset.load_status = dataIn.substring(pos, pos + 25).trimEnd();
    pos += 25;
    dataOut.data.asset.movement_type = dataIn.substring(pos, pos + 25).trimEnd();
    pos += 25;
    dataOut.data.asset.outbound_seal = dataIn.substring(pos, pos + 25).trimEnd();
    pos += 25;

    return dataOut;
}

/* eslint-enable */

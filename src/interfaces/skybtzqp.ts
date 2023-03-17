/* eslint-disable */
// @ts-nocheck
// Module: skybtzqp
// Generated source -- do not modify

import { ibmiConversions, missingInput } from '@eradani-inc/ec-client';
const { fromIbmiDate, fromIbmiTime, fromIbmiTimestamp, toIbmiDate, toIbmiTime, toIbmiTimestamp } = ibmiConversions;

import eradaniConnect from '@eradani-inc/eradani-connect';
const { dataTypes } = eradaniConnect;

/**
 * Output interface
 */
export interface groupsDS {
    /**
     * @size 50 characters
     * @default ` `
     */
    groupname: Array<string>;
}

/**
 * Output interface
 */
export interface assetDS {
    /**
     * @size 10 characters
     * @default ` `
     */
    assetid: string;
    /**
     * @size 20 characters
     * @default ` `
     */
    assettype: string;
    /**
     * @size 50 characters
     * @default ` `
     */
    owner: string;
    /**
     * @size 30 characters
     * @default ` `
     */
    note: string;
    /**
     */
    groups: groupsDS;
}

/**
 * Output interface
 */
export interface binaryDS {
    /**
     * @size 20 characters
     * @default ` `
     */
    inputname: string;
    /**
     * @size 10 characters
     * @default ` `
     */
    inputid: string;
    /**
     * @size 10 characters
     * @default ` `
     */
    inputval: string;
    /**
     * @size 10 characters
     * @default ` `
     */
    inputstate: string;
}

/**
 * Output interface
 */
export interface serialDS {
    /**
     * @size 2 characters
     * @default ` `
     */
    serialtype: string;
    /**
     * @size 10 characters
     * @default ` `
     */
    serialid: string;
    /**
     * @size 20 characters
     * @default ` `
     */
    serialname: string;
    /**
     * @size 20 characters
     * @default ` `
     */
    serialdata: string;
}

/**
 * Output interface
 */
export interface landmarkDS {
    /**
     * @size 25 characters
     * @default ` `
     */
    geoname: string;
    /**
     * @size 10 characters
     * @default ` `
     */
    locationid: string;
    /**
     * @size 25 characters
     * @default ` `
     */
    city: string;
    /**
     * @size 2 characters
     * @default ` `
     */
    state: string;
    /**
     * @size 2 characters
     * @default ` `
     */
    country: string;
    /**
     * @size 10 characters
     * @default ` `
     */
    postal: string;
    /**
     * @size 15 characters
     * @default ` `
     */
    distance: string;
    /**
     * @size 3 characters
     * @default ` `
     */
    direction: string;
    /**
     * @size 15 characters
     * @default ` `
     */
    geotypename: string;
    /**
     * @size 15 characters
     * @default ` `
     */
    geoshape: string;
}

/**
 * Output interface
 */
export interface addressDS {
    /**
     * @size 25 characters
     * @default ` `
     */
    street: string;
    /**
     * @size 25 characters
     * @default ` `
     */
    city: string;
    /**
     * @size 2 characters
     * @default ` `
     */
    state: string;
    /**
     * @size 2 characters
     * @default ` `
     */
    country: string;
    /**
     * @size 10 characters
     * @default ` `
     */
    postal: string;
}

/**
 * Output interface
 */
export interface skyfenceDS {
    /**
     * @size 10 characters
     * @default ` `
     */
    skyfencestatus: string;
}

/**
 * Output interface
 */
export interface idleDS {
    /**
     * @size 10 characters
     * @default ` `
     */
    idlestatus: string;
    /**
     * @size 10 characters
     * @default ` `
     */
    idleduration: string;
    /**
     * @size 10 characters
     * @default ` `
     */
    idlegap: string;
}

/**
 * Output interface
 */
export interface glsDS {
    /**
     * @size 20 characters
     * @default ` `
     */
    mtsn: string;
    /**
     */
    asset: assetDS;
    /**
     * @size 20 characters
     * @default ` `
     */
    messagetype: string;
    /**
     */
    binary: binaryDS;
    /**
     * @size 1 characters
     * @default ` `
     */
    extpwr: string;
    /**
     */
    serial: Array<serialDS>;
    /**
     * @size 15 characters
     * @default ` `
     */
    latitude: string;
    /**
     * @size 15 characters
     * @default ` `
     */
    longitude: string;
    /**
     * @size 15 characters
     * @default ` `
     */
    speed: string;
    /**
     * @size 3 characters
     * @default ` `
     */
    heading: string;
    /**
     * @size 10 characters
     * @default ` `
     */
    headingdegrees: string;
    /**
     * @size 10 characters
     * @default ` `
     */
    battery: string;
    /**
     * @size 19 characters
     * @default ` `
     */
    time: string;
    /**
     * @size 10 characters
     * @default ` `
     */
    quality: string;
    /**
     */
    landmark: landmarkDS;
    /**
     */
    address: addressDS;
    /**
     */
    skyfence: skyfenceDS;
    /**
     */
    idle: idleDS;
    /**
     * @size 10 characters
     * @default ` `
     */
    epmflag: string;
    /**
     * @size 19 characters
     * @default ` `
     */
    messagercvtime: string;
    /**
     * @size 10 characters
     * @default ` `
     */
    devicetype: string;
}

/**
 * Output interface
 */
export interface skybitzDS {
    /**
     * @size 1 characters
     * @default ` `
     */
    error: string;
    /**
     */
    gls: glsDS;
}

/**
 * Output interface
 */
export interface GetTrlPos {
    /**
     * @size 20 characters
     * @default ` `
     */
    assetid: string;
}

/**
 * Convert GetTrlPos record to TypeScript object
 */
export function convertGetTrlPosToObject(dataIn: string): GetTrlPos {
    const dataOut: any = {};
    let pos: number = 0;

    dataOut.assetid = dataIn.substring(pos, pos + 20).trimEnd();
    pos += 20;

    return dataOut;
}

/**
 * Input interface
 */
export interface TrlRtnDta {
    /**
     */
    skybitz: skybitzDS;
    /**
     * @size 1 characters
     * @default ` `
     */
    error: string;
}

/**
 * Convert JavaScript object to TrlRtnDta record
 */
export function convertObjectToTrlRtnDta(dataIn: TrlRtnDta): string {
    let dataOut: string = '';

    dataOut += dataIn?.skybitz?.error?.substring(0, 1)?.padEnd(1) ?? ' '.substring(0, 1).padEnd(1);
    dataOut += dataIn?.skybitz?.gls?.mtsn?.substring(0, 20)?.padEnd(20) ?? ' '.substring(0, 20).padEnd(20);
    dataOut += dataIn?.skybitz?.gls?.asset?.assetid?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
    dataOut += dataIn?.skybitz?.gls?.asset?.assettype?.substring(0, 20)?.padEnd(20) ?? ' '.substring(0, 20).padEnd(20);
    dataOut += dataIn?.skybitz?.gls?.asset?.owner?.substring(0, 50)?.padEnd(50) ?? ' '.substring(0, 50).padEnd(50);
    dataOut += dataIn?.skybitz?.gls?.asset?.note?.substring(0, 30)?.padEnd(30) ?? ' '.substring(0, 30).padEnd(30);
    for (let m: number = 0; m < 10; ++m) {
        dataOut +=
            dataIn?.skybitz?.gls?.asset?.groups?.groupname[m]?.substring(0, 50)?.padEnd(50) ??
            ' '.substring(0, 50).padEnd(50);
    }
    dataOut += dataIn?.skybitz?.gls?.messagetype?.substring(0, 20)?.padEnd(20) ?? ' '.substring(0, 20).padEnd(20);
    dataOut += dataIn?.skybitz?.gls?.binary?.inputname?.substring(0, 20)?.padEnd(20) ?? ' '.substring(0, 20).padEnd(20);
    dataOut += dataIn?.skybitz?.gls?.binary?.inputid?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
    dataOut += dataIn?.skybitz?.gls?.binary?.inputval?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
    dataOut +=
        dataIn?.skybitz?.gls?.binary?.inputstate?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
    dataOut += dataIn?.skybitz?.gls?.extpwr?.substring(0, 1)?.padEnd(1) ?? ' '.substring(0, 1).padEnd(1);
    for (let k: number = 0; k < 10; ++k) {
        dataOut +=
            dataIn?.skybitz?.gls?.serial[k]?.serialtype?.substring(0, 2)?.padEnd(2) ?? ' '.substring(0, 2).padEnd(2);
        dataOut +=
            dataIn?.skybitz?.gls?.serial[k]?.serialid?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
        dataOut +=
            dataIn?.skybitz?.gls?.serial[k]?.serialname?.substring(0, 20)?.padEnd(20) ??
            ' '.substring(0, 20).padEnd(20);
        dataOut +=
            dataIn?.skybitz?.gls?.serial[k]?.serialdata?.substring(0, 20)?.padEnd(20) ??
            ' '.substring(0, 20).padEnd(20);
    }
    dataOut += dataIn?.skybitz?.gls?.latitude?.substring(0, 15)?.padEnd(15) ?? ' '.substring(0, 15).padEnd(15);
    dataOut += dataIn?.skybitz?.gls?.longitude?.substring(0, 15)?.padEnd(15) ?? ' '.substring(0, 15).padEnd(15);
    dataOut += dataIn?.skybitz?.gls?.speed?.substring(0, 15)?.padEnd(15) ?? ' '.substring(0, 15).padEnd(15);
    dataOut += dataIn?.skybitz?.gls?.heading?.substring(0, 3)?.padEnd(3) ?? ' '.substring(0, 3).padEnd(3);
    dataOut += dataIn?.skybitz?.gls?.headingdegrees?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
    dataOut += dataIn?.skybitz?.gls?.battery?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
    dataOut += dataIn?.skybitz?.gls?.time?.substring(0, 19)?.padEnd(19) ?? ' '.substring(0, 19).padEnd(19);
    dataOut += dataIn?.skybitz?.gls?.quality?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
    dataOut += dataIn?.skybitz?.gls?.landmark?.geoname?.substring(0, 25)?.padEnd(25) ?? ' '.substring(0, 25).padEnd(25);
    dataOut +=
        dataIn?.skybitz?.gls?.landmark?.locationid?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
    dataOut += dataIn?.skybitz?.gls?.landmark?.city?.substring(0, 25)?.padEnd(25) ?? ' '.substring(0, 25).padEnd(25);
    dataOut += dataIn?.skybitz?.gls?.landmark?.state?.substring(0, 2)?.padEnd(2) ?? ' '.substring(0, 2).padEnd(2);
    dataOut += dataIn?.skybitz?.gls?.landmark?.country?.substring(0, 2)?.padEnd(2) ?? ' '.substring(0, 2).padEnd(2);
    dataOut += dataIn?.skybitz?.gls?.landmark?.postal?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
    dataOut +=
        dataIn?.skybitz?.gls?.landmark?.distance?.substring(0, 15)?.padEnd(15) ?? ' '.substring(0, 15).padEnd(15);
    dataOut += dataIn?.skybitz?.gls?.landmark?.direction?.substring(0, 3)?.padEnd(3) ?? ' '.substring(0, 3).padEnd(3);
    dataOut +=
        dataIn?.skybitz?.gls?.landmark?.geotypename?.substring(0, 15)?.padEnd(15) ?? ' '.substring(0, 15).padEnd(15);
    dataOut +=
        dataIn?.skybitz?.gls?.landmark?.geoshape?.substring(0, 15)?.padEnd(15) ?? ' '.substring(0, 15).padEnd(15);
    dataOut += dataIn?.skybitz?.gls?.address?.street?.substring(0, 25)?.padEnd(25) ?? ' '.substring(0, 25).padEnd(25);
    dataOut += dataIn?.skybitz?.gls?.address?.city?.substring(0, 25)?.padEnd(25) ?? ' '.substring(0, 25).padEnd(25);
    dataOut += dataIn?.skybitz?.gls?.address?.state?.substring(0, 2)?.padEnd(2) ?? ' '.substring(0, 2).padEnd(2);
    dataOut += dataIn?.skybitz?.gls?.address?.country?.substring(0, 2)?.padEnd(2) ?? ' '.substring(0, 2).padEnd(2);
    dataOut += dataIn?.skybitz?.gls?.address?.postal?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
    dataOut +=
        dataIn?.skybitz?.gls?.skyfence?.skyfencestatus?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
    dataOut += dataIn?.skybitz?.gls?.idle?.idlestatus?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
    dataOut +=
        dataIn?.skybitz?.gls?.idle?.idleduration?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
    dataOut += dataIn?.skybitz?.gls?.idle?.idlegap?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
    dataOut += dataIn?.skybitz?.gls?.epmflag?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
    dataOut += dataIn?.skybitz?.gls?.messagercvtime?.substring(0, 19)?.padEnd(19) ?? ' '.substring(0, 19).padEnd(19);
    dataOut += dataIn?.skybitz?.gls?.devicetype?.substring(0, 10)?.padEnd(10) ?? ' '.substring(0, 10).padEnd(10);
    dataOut += dataIn?.error?.substring(0, 1)?.padEnd(1) ?? ' '.substring(0, 1).padEnd(1);

    return dataOut;
}

/* eslint-enable */

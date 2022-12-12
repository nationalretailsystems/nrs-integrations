/* eslint-disable */
// @ts-nocheck
// Module: skybtzqp
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
export interface groupsDS {
    /**
     * @size 50 characters
     * @default ` `
     */
    groupname: Array<string>
}

/**
 * Output interface
 */
export interface assetDS {
    /**
     * @size 10 characters
     */
    assetid: string,
    /**
     * @size 20 characters
     */
    assettype: string,
    /**
     * @size 50 characters
     */
    owner: string,
    /**
     * @size 30 characters
     */
    note: string,
    /**
     */
    groups: groupsDS
}

/**
 * Output interface
 */
export interface binaryDS {
    /**
     * @size 20 characters
     */
    inputname: string,
    /**
     * @size 10 characters
     */
    inputid: string,
    /**
     * @size 10 characters
     */
    inputval: string,
    /**
     * @size 10 characters
     */
    inputstate: string
}

/**
 * Output interface
 */
export interface serialDS {
    /**
     * @size 2 characters
     */
    serialtype: string,
    /**
     * @size 10 characters
     */
    serialid: string,
    /**
     * @size 20 characters
     */
    serialname: string,
    /**
     * @size 20 characters
     */
    serialdata: string
}

/**
 * Output interface
 */
export interface landmarkDS {
    /**
     * @size 25 characters
     */
    geoname: string,
    /**
     * @size 10 characters
     * @default ` `
     */
    locationid: string,
    /**
     * @size 25 characters
     */
    city: string,
    /**
     * @size 2 characters
     */
    state: string,
    /**
     * @size 2 characters
     */
    country: string,
    /**
     * @size 10 characters
     */
    postal: string,
    /**
     * @size 15 characters
     */
    distance: string,
    /**
     * @size 3 characters
     */
    direction: string,
    /**
     * @size 15 characters
     */
    geotypename: string,
    /**
     * @size 15 characters
     */
    geoshape: string
}

/**
 * Output interface
 */
export interface addressDS {
    /**
     * @size 25 characters
     */
    street: string,
    /**
     * @size 25 characters
     */
    city: string,
    /**
     * @size 2 characters
     */
    state: string,
    /**
     * @size 2 characters
     */
    country: string,
    /**
     * @size 10 characters
     */
    postal: string
}

/**
 * Output interface
 */
export interface skyfenceDS {
    /**
     * @size 10 characters
     */
    skyfencestatus: string
}

/**
 * Output interface
 */
export interface idleDS {
    /**
     * @size 10 characters
     */
    idlestatus: string,
    /**
     * @size 10 characters
     */
    idleduration: string,
    /**
     * @size 10 characters
     */
    idlegap: string
}

/**
 * Output interface
 */
export interface glsDS {
    /**
     * @size 20 characters
     */
    mtsn: string,
    /**
     */
    asset: assetDS,
    /**
     * @size 20 characters
     */
    messagetype: string,
    /**
     */
    binary: binaryDS,
    /**
     * @size 1 characters
     */
    extpwr: string,
    /**
     */
    serial: Array<serialDS>,
    /**
     * @size 15 characters
     */
    latitude: string,
    /**
     * @size 15 characters
     */
    longitude: string,
    /**
     * @size 15 characters
     */
    speed: string,
    /**
     * @size 3 characters
     */
    heading: string,
    /**
     * @size 10 characters
     */
    headingindegrees: string,
    /**
     * @size 10 characters
     */
    battery: string,
    /**
     * @size 19 characters
     */
    time: string,
    /**
     * @size 10 characters
     */
    quality: string,
    /**
     */
    landmark: landmarkDS,
    /**
     */
    address: addressDS,
    /**
     */
    skyfence: skyfenceDS,
    /**
     */
    idle: idleDS,
    /**
     * @size 10 characters
     */
    epmflag: string,
    /**
     * @size 19 characters
     */
    messagereceivedtime: string,
    /**
     * @size 10 characters
     */
    devicetype: string
}

/**
 * Output interface
 */
export interface skybitzDS {
    /**
     * @size 1 characters
     */
    error: string,
    /**
     */
    gls: glsDS
}

/**
 * Output interface
 */
export interface GetTrlPos {
    /**
     * @size 20 characters
     */
    assetid: string
}

/**
 * Convert GetTrlPos record to TypeScript object
 */
export function convertGetTrlPosToObject(dataIn: string): GetTrlPos {
  const dataOut: any =   {
  
    };
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
    skybitz: skybitzDS,
    /**
     * @size 1 characters
     * @default ` `
     */
    error: string
}

/**
 * Convert JavaScript object to TrlRtnDta record
 */
export function convertObjectToTrlRtnDta(dataIn: TrlRtnDta): string {
  let dataOut: string = "";

  dataOut += dataIn?.skybitz?.error?.substring(0, 1)?.padEnd(1) ?? missingInput(`dataIn.skybitz.error`, "char", dataIn?.skybitz?.error);
  dataOut += dataIn?.skybitz?.gls?.mtsn?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.skybitz.gls.mtsn`, "char", dataIn?.skybitz?.gls?.mtsn);
  dataOut += dataIn?.skybitz?.gls?.asset?.assetid?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.skybitz.gls.asset.assetid`, "char", dataIn?.skybitz?.gls?.asset?.assetid);
  dataOut += dataIn?.skybitz?.gls?.asset?.assettype?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.skybitz.gls.asset.assettype`, "char", dataIn?.skybitz?.gls?.asset?.assettype);
  dataOut += dataIn?.skybitz?.gls?.asset?.owner?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.skybitz.gls.asset.owner`, "char", dataIn?.skybitz?.gls?.asset?.owner);
  dataOut += dataIn?.skybitz?.gls?.asset?.note?.substring(0, 30)?.padEnd(30) ?? missingInput(`dataIn.skybitz.gls.asset.note`, "char", dataIn?.skybitz?.gls?.asset?.note);
  for (let m: number = 0; m < 10; ++m) {
  dataOut += dataIn?.skybitz?.gls?.asset?.groups?.groupname[m]?.substring(0, 50)?.padEnd(50) ?? " ".substring(0, 50).padEnd(50);
  }
  dataOut += dataIn?.skybitz?.gls?.messagetype?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.skybitz.gls.messagetype`, "char", dataIn?.skybitz?.gls?.messagetype);
  dataOut += dataIn?.skybitz?.gls?.binary?.inputname?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.skybitz.gls.binary.inputname`, "char", dataIn?.skybitz?.gls?.binary?.inputname);
  dataOut += dataIn?.skybitz?.gls?.binary?.inputid?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.skybitz.gls.binary.inputid`, "char", dataIn?.skybitz?.gls?.binary?.inputid);
  dataOut += dataIn?.skybitz?.gls?.binary?.inputval?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.skybitz.gls.binary.inputval`, "char", dataIn?.skybitz?.gls?.binary?.inputval);
  dataOut += dataIn?.skybitz?.gls?.binary?.inputstate?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.skybitz.gls.binary.inputstate`, "char", dataIn?.skybitz?.gls?.binary?.inputstate);
  dataOut += dataIn?.skybitz?.gls?.extpwr?.substring(0, 1)?.padEnd(1) ?? missingInput(`dataIn.skybitz.gls.extpwr`, "char", dataIn?.skybitz?.gls?.extpwr);
  for (let k: number = 0; k < 10; ++k) {
  dataOut += dataIn?.skybitz?.gls?.serial[k]?.serialtype?.substring(0, 2)?.padEnd(2) ?? missingInput(`dataIn.skybitz.gls.serial[${k}].serialtype`, "char", dataIn?.skybitz?.gls?.serial[k]?.serialtype);
  dataOut += dataIn?.skybitz?.gls?.serial[k]?.serialid?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.skybitz.gls.serial[${k}].serialid`, "char", dataIn?.skybitz?.gls?.serial[k]?.serialid);
  dataOut += dataIn?.skybitz?.gls?.serial[k]?.serialname?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.skybitz.gls.serial[${k}].serialname`, "char", dataIn?.skybitz?.gls?.serial[k]?.serialname);
  dataOut += dataIn?.skybitz?.gls?.serial[k]?.serialdata?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.skybitz.gls.serial[${k}].serialdata`, "char", dataIn?.skybitz?.gls?.serial[k]?.serialdata);
  }
  dataOut += dataIn?.skybitz?.gls?.latitude?.substring(0, 15)?.padEnd(15) ?? missingInput(`dataIn.skybitz.gls.latitude`, "char", dataIn?.skybitz?.gls?.latitude);
  dataOut += dataIn?.skybitz?.gls?.longitude?.substring(0, 15)?.padEnd(15) ?? missingInput(`dataIn.skybitz.gls.longitude`, "char", dataIn?.skybitz?.gls?.longitude);
  dataOut += dataIn?.skybitz?.gls?.speed?.substring(0, 15)?.padEnd(15) ?? missingInput(`dataIn.skybitz.gls.speed`, "char", dataIn?.skybitz?.gls?.speed);
  dataOut += dataIn?.skybitz?.gls?.heading?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.skybitz.gls.heading`, "char", dataIn?.skybitz?.gls?.heading);
  dataOut += dataIn?.skybitz?.gls?.headingindegrees?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.skybitz.gls.headingindegrees`, "char", dataIn?.skybitz?.gls?.headingindegrees);
  dataOut += dataIn?.skybitz?.gls?.battery?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.skybitz.gls.battery`, "char", dataIn?.skybitz?.gls?.battery);
  dataOut += dataIn?.skybitz?.gls?.time?.substring(0, 19)?.padEnd(19) ?? missingInput(`dataIn.skybitz.gls.time`, "char", dataIn?.skybitz?.gls?.time);
  dataOut += dataIn?.skybitz?.gls?.quality?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.skybitz.gls.quality`, "char", dataIn?.skybitz?.gls?.quality);
  dataOut += dataIn?.skybitz?.gls?.landmark?.geoname?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.skybitz.gls.landmark.geoname`, "char", dataIn?.skybitz?.gls?.landmark?.geoname);
  dataOut += dataIn?.skybitz?.gls?.landmark?.locationid?.substring(0, 10)?.padEnd(10) ?? " ".substring(0, 10).padEnd(10);
  dataOut += dataIn?.skybitz?.gls?.landmark?.city?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.skybitz.gls.landmark.city`, "char", dataIn?.skybitz?.gls?.landmark?.city);
  dataOut += dataIn?.skybitz?.gls?.landmark?.state?.substring(0, 2)?.padEnd(2) ?? missingInput(`dataIn.skybitz.gls.landmark.state`, "char", dataIn?.skybitz?.gls?.landmark?.state);
  dataOut += dataIn?.skybitz?.gls?.landmark?.country?.substring(0, 2)?.padEnd(2) ?? missingInput(`dataIn.skybitz.gls.landmark.country`, "char", dataIn?.skybitz?.gls?.landmark?.country);
  dataOut += dataIn?.skybitz?.gls?.landmark?.postal?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.skybitz.gls.landmark.postal`, "char", dataIn?.skybitz?.gls?.landmark?.postal);
  dataOut += dataIn?.skybitz?.gls?.landmark?.distance?.substring(0, 15)?.padEnd(15) ?? missingInput(`dataIn.skybitz.gls.landmark.distance`, "char", dataIn?.skybitz?.gls?.landmark?.distance);
  dataOut += dataIn?.skybitz?.gls?.landmark?.direction?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.skybitz.gls.landmark.direction`, "char", dataIn?.skybitz?.gls?.landmark?.direction);
  dataOut += dataIn?.skybitz?.gls?.landmark?.geotypename?.substring(0, 15)?.padEnd(15) ?? missingInput(`dataIn.skybitz.gls.landmark.geotypename`, "char", dataIn?.skybitz?.gls?.landmark?.geotypename);
  dataOut += dataIn?.skybitz?.gls?.landmark?.geoshape?.substring(0, 15)?.padEnd(15) ?? missingInput(`dataIn.skybitz.gls.landmark.geoshape`, "char", dataIn?.skybitz?.gls?.landmark?.geoshape);
  dataOut += dataIn?.skybitz?.gls?.address?.street?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.skybitz.gls.address.street`, "char", dataIn?.skybitz?.gls?.address?.street);
  dataOut += dataIn?.skybitz?.gls?.address?.city?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.skybitz.gls.address.city`, "char", dataIn?.skybitz?.gls?.address?.city);
  dataOut += dataIn?.skybitz?.gls?.address?.state?.substring(0, 2)?.padEnd(2) ?? missingInput(`dataIn.skybitz.gls.address.state`, "char", dataIn?.skybitz?.gls?.address?.state);
  dataOut += dataIn?.skybitz?.gls?.address?.country?.substring(0, 2)?.padEnd(2) ?? missingInput(`dataIn.skybitz.gls.address.country`, "char", dataIn?.skybitz?.gls?.address?.country);
  dataOut += dataIn?.skybitz?.gls?.address?.postal?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.skybitz.gls.address.postal`, "char", dataIn?.skybitz?.gls?.address?.postal);
  dataOut += dataIn?.skybitz?.gls?.skyfence?.skyfencestatus?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.skybitz.gls.skyfence.skyfencestatus`, "char", dataIn?.skybitz?.gls?.skyfence?.skyfencestatus);
  dataOut += dataIn?.skybitz?.gls?.idle?.idlestatus?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.skybitz.gls.idle.idlestatus`, "char", dataIn?.skybitz?.gls?.idle?.idlestatus);
  dataOut += dataIn?.skybitz?.gls?.idle?.idleduration?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.skybitz.gls.idle.idleduration`, "char", dataIn?.skybitz?.gls?.idle?.idleduration);
  dataOut += dataIn?.skybitz?.gls?.idle?.idlegap?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.skybitz.gls.idle.idlegap`, "char", dataIn?.skybitz?.gls?.idle?.idlegap);
  dataOut += dataIn?.skybitz?.gls?.epmflag?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.skybitz.gls.epmflag`, "char", dataIn?.skybitz?.gls?.epmflag);
  dataOut += dataIn?.skybitz?.gls?.messagereceivedtime?.substring(0, 19)?.padEnd(19) ?? missingInput(`dataIn.skybitz.gls.messagereceivedtime`, "char", dataIn?.skybitz?.gls?.messagereceivedtime);
  dataOut += dataIn?.skybitz?.gls?.devicetype?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.skybitz.gls.devicetype`, "char", dataIn?.skybitz?.gls?.devicetype);
  dataOut += dataIn?.error?.substring(0, 1)?.padEnd(1) ?? " ".substring(0, 1).padEnd(1);

  return dataOut;
}

/* eslint-enable */

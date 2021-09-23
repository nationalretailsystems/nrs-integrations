/* eslint-disable */
// @ts-nocheck
// Module: rmgetdvir
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
export interface dvirDS {
    /**
     * @size 10 digits
     */
    index: number,
    /**
     * @size 60 characters
     */
    driverId: string,
    /**
     * @size 20 digits
     */
    createdTimeStamp: number,
    /**
     * @size 20 digits
     */
    modifiedTimeStamp: number,
    /**
     * @size 5 characters
     */
    timeZone: string,
    /**
     * @size 200 characters
     */
    tripName: string,
    /**
     * @size 200 characters
     */
    driverComment: string,
    /**
     * @size 16 characters
     */
    tractorNumber: string,
    /**
     * @size 32 characters
     */
    trailerNumber: string,
    /**
     * @size 10 digits
     */
    totalTractorDefects: number,
    /**
     * @size 50 characters
     */
    tractorDefects: Array<string>,
    /**
     * @size 10 digits
     */
    totalTrailerDefects: number,
    /**
     * @size 50 characters
     */
    trailerDefects: Array<string>,
    /**
     * @size 255 characters
     */
    defectImages: Array<string>,
    /**
     */
    dvirIsDefective: boolean,
    /**
     */
    dvirIsCertified: boolean,
    /**
     * @size 200 characters
     */
    driverSignature: string,
    /**
     * @size 200 characters
     */
    mechanicSignature: string,
    /**
     * @size 4 bytes
     */
    latitude: number,
    /**
     * @size 4 bytes
     */
    longitude: number,
    /**
     * @size 200 characters
     */
    location: string,
    /**
     * @size 4 bytes
     */
    odometer: number,
    /**
     * @size 100 characters
     */
    status: string,
    /**
     */
    lastModifiedData: Date,
    /**
     */
    dvirIsDST: boolean
}

/**
 * Output interface
 */
export interface responseDS {
    /**
     * @size 5 digits
     */
    code: number,
    /**
     * @size 10 characters
     */
    type: string,
    /**
     * @size 200 characters
     */
    message: string
}

/**
 * Output interface
 */
export interface ReqDVIR {
    /**
     * @size 100 characters
     */
    accessToken: string,
    /**
     * @size 10 characters
     */
    companyCode: string,
    /**
     */
    lastModifiedDate: Date,
    /**
     * @size 10 digits
     */
    startIndex: number,
    /**
     * @size 10 digits
     */
    size: number
}

/**
 * Convert ReqDVIR record to TypeScript object
 */
export function convertReqDVIRToObject(dataIn: string): ReqDVIR {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.accessToken = dataIn.substring(pos, pos + 100).trimEnd();
  pos += 100;
  dataOut.companyCode = dataIn.substring(pos, pos + 10).trimEnd();
  pos += 10;
  dataOut.lastModifiedDate = fromIbmiDate(dataIn.substring(pos, pos + 10).trimEnd());
  pos += 10;
  dataOut.startIndex = Number(dataIn.substring(pos, pos + 11).trimEnd());
  pos += 11;
  dataOut.size = Number(dataIn.substring(pos, pos + 11).trimEnd());
  pos += 11;

  return dataOut;
}

/**
 * Input interface
 */
export interface RtnDVIR {
    /**
     */
    dvirs: dvirDS,
    /**
     */
    response: responseDS,
    /**
     * @size 200 characters
     */
    imageURL: string
}

/**
 * Convert JavaScript object to RtnDVIR record
 */
export function convertObjectToRtnDVIR(dataIn: RtnDVIR): string {
  let dataOut: string = "";

  dataOut += dataIn.dvirs.index.toFixed().substring(0, 11).padEnd(11);
  dataOut += dataIn.dvirs.driverId.substring(0, 60).padEnd(60);
  dataOut += dataIn.dvirs.createdTimeStamp.toFixed().substring(0, 21).padEnd(21);
  dataOut += dataIn.dvirs.modifiedTimeStamp.toFixed().substring(0, 21).padEnd(21);
  dataOut += dataIn.dvirs.timeZone.substring(0, 5).padEnd(5);
  dataOut += dataIn.dvirs.tripName.substring(0, 200).padEnd(200);
  dataOut += dataIn.dvirs.driverComment.substring(0, 200).padEnd(200);
  dataOut += dataIn.dvirs.tractorNumber.substring(0, 16).padEnd(16);
  dataOut += dataIn.dvirs.trailerNumber.substring(0, 32).padEnd(32);
  dataOut += dataIn.dvirs.totalTractorDefects.toFixed().substring(0, 11).padEnd(11);
  for (let j: number = 0; j < 25; ++j) {
  dataOut += dataIn.dvirs.tractorDefects[j].substring(0, 50).padEnd(50);
  }
  dataOut += dataIn.dvirs.totalTrailerDefects.toFixed().substring(0, 11).padEnd(11);
  for (let j: number = 0; j < 25; ++j) {
  dataOut += dataIn.dvirs.trailerDefects[j].substring(0, 50).padEnd(50);
  }
  for (let j: number = 0; j < 10; ++j) {
  dataOut += dataIn.dvirs.defectImages[j].substring(0, 255).padEnd(255);
  }
  dataOut += (dataIn.dvirs.dvirIsDefective ? "1" : "0");
  dataOut += (dataIn.dvirs.dvirIsCertified ? "1" : "0");
  dataOut += dataIn.dvirs.driverSignature.substring(0, 200).padEnd(200);
  dataOut += dataIn.dvirs.mechanicSignature.substring(0, 200).padEnd(200);
  dataOut += dataIn.dvirs.latitude.toExponential(7).substring(0, 14).padEnd(14);
  dataOut += dataIn.dvirs.longitude.toExponential(7).substring(0, 14).padEnd(14);
  dataOut += dataIn.dvirs.location.substring(0, 200).padEnd(200);
  dataOut += dataIn.dvirs.odometer.toExponential(7).substring(0, 14).padEnd(14);
  dataOut += dataIn.dvirs.status.substring(0, 100).padEnd(100);
  dataOut += toIbmiDate(dataIn.dvirs.lastModifiedData);
  dataOut += (dataIn.dvirs.dvirIsDST ? "1" : "0");
  dataOut += dataIn.response.code.toFixed().substring(0, 6).padEnd(6);
  dataOut += dataIn.response.type.substring(0, 10).padEnd(10);
  dataOut += dataIn.response.message.substring(0, 200).padEnd(200);
  dataOut += dataIn.imageURL.substring(0, 200).padEnd(200);

  return dataOut;
}

/* eslint-enable */

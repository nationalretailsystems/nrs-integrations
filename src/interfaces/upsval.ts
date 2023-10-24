/* eslint-disable */
// @ts-nocheck
// Module: upsval
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

/**
 * Output interface
 */
export interface ResponseStatusDS {
    /**
     * @size 10 characters
     * @default ``
     */
    Code: string,
    /**
     * @size 150 characters
     * @default ``
     */
    Description: string
}

/**
 * Output interface
 */
export interface ResponseDS {
    /**
     */
    ResponseStatus: ResponseStatusDS
}

/**
 * Output interface
 */
export interface AddressClassificationDS {
    /**
     * @size 10 characters
     * @default ``
     */
    Code: string,
    /**
     * @size 150 characters
     * @default ``
     */
    Description: string
}

/**
 * Output interface
 */
export interface AddressKeyFormatDS {
    /**
     * @size 50 characters
     * @default ``
     */
    ConsigneeName: string,
    /**
     * @size 100 characters
     * @default ``
     */
    AddressLine: Array<string>,
    /**
     * @size 30 characters
     * @default ``
     */
    PoliticalDivision2: string,
    /**
     * @size 30 characters
     * @default ``
     */
    PoliticalDivision1: string,
    /**
     * @size 10 characters
     * @default ``
     */
    PostcodePrimaryLow: string,
    /**
     * @size 10 characters
     * @default ``
     */
    PostCodeExtendedLow: string,
    /**
     * @size 30 characters
     * @default ``
     */
    Urbanization: string,
    /**
     * @size 100 characters
     * @default ``
     */
    Region: string,
    /**
     * @size 2 characters
     * @default ``
     */
    CountryCode: string
}

/**
 * Output interface
 */
export interface CandidateDS {
    /**
     */
    AddressClassification: AddressClassificationDS,
    /**
     */
    AddressKeyFormat: AddressKeyFormatDS
}

/**
 * Output interface
 */
export interface XAVResponseDS {
    /**
     */
    Response: ResponseDS,
    /**
     * @size 1 characters
     * @default ``
     */
    AmbiguousAddressIndicator: string,
    /**
     * @size 1 characters
     * @default ``
     */
    ValidAddressIndicator: string,
    /**
     */
    Candidate: Array<CandidateDS>
}

/**
 * Output interface
 */
export interface XAVRequestDS {
    /**
     */
    AddressKeyFormat: AddressKeyFormatDS
}

/**
 * Output interface
 */
export interface ReqFmt {
    /**
     */
    XAVRequest: XAVRequestDS
}

/**
 * Convert ReqFmt record to TypeScript object
 */
export function convertReqFmtToObject(dataIn: string): ReqFmt {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.XAVRequest =   {
  
    };
  dataOut.XAVRequest.AddressKeyFormat =   {
  
    };
  dataOut.XAVRequest.AddressKeyFormat.ConsigneeName = dataIn.substring(pos, pos + 50).trimEnd();
  pos += 50;
  dataOut.XAVRequest.AddressKeyFormat.AddressLine = [
    
  ];
  for (let i: number = 0; i < 2; ++i) {
  dataOut.XAVRequest.AddressKeyFormat.AddressLine[i] = dataIn.substring(pos, pos + 100).trimEnd();
  pos += 100;
  }
  dataOut.XAVRequest.AddressKeyFormat.PoliticalDivision2 = dataIn.substring(pos, pos + 30).trimEnd();
  pos += 30;
  dataOut.XAVRequest.AddressKeyFormat.PoliticalDivision1 = dataIn.substring(pos, pos + 30).trimEnd();
  pos += 30;
  dataOut.XAVRequest.AddressKeyFormat.PostcodePrimaryLow = dataIn.substring(pos, pos + 10).trimEnd();
  pos += 10;
  dataOut.XAVRequest.AddressKeyFormat.PostCodeExtendedLow = dataIn.substring(pos, pos + 10).trimEnd();
  pos += 10;
  dataOut.XAVRequest.AddressKeyFormat.Urbanization = dataIn.substring(pos, pos + 30).trimEnd();
  pos += 30;
  dataOut.XAVRequest.AddressKeyFormat.Region = dataIn.substring(pos, pos + 100).trimEnd();
  pos += 100;
  dataOut.XAVRequest.AddressKeyFormat.CountryCode = dataIn.substring(pos, pos + 2).trimEnd();
  pos += 2;

  return dataOut;
}

/**
 * Input interface
 */
export interface RespFmt {
    /**
     */
    XAVResponse: XAVResponseDS
}

/**
 * Convert JavaScript object to RespFmt record
 */
export function convertObjectToRespFmt(dataIn: RespFmt): string {
  let dataOut: string = "";

  dataOut += dataIn?.XAVResponse?.Response?.ResponseStatus?.Code?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  dataOut += dataIn?.XAVResponse?.Response?.ResponseStatus?.Description?.substring(0, 150)?.padEnd(150) ?? "".substring(0, 150).padEnd(150);
  dataOut += dataIn?.XAVResponse?.AmbiguousAddressIndicator?.substring(0, 1)?.padEnd(1) ?? "".substring(0, 1).padEnd(1);
  dataOut += dataIn?.XAVResponse?.ValidAddressIndicator?.substring(0, 1)?.padEnd(1) ?? "".substring(0, 1).padEnd(1);
  for (let j: number = 0; j < 5; ++j) {
  dataOut += dataIn?.XAVResponse?.Candidate[j]?.AddressClassification?.Code?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  dataOut += dataIn?.XAVResponse?.Candidate[j]?.AddressClassification?.Description?.substring(0, 150)?.padEnd(150) ?? "".substring(0, 150).padEnd(150);
  dataOut += dataIn?.XAVResponse?.Candidate[j]?.AddressKeyFormat?.ConsigneeName?.substring(0, 50)?.padEnd(50) ?? "".substring(0, 50).padEnd(50);
  for (let m: number = 0; m < 2; ++m) {
  dataOut += dataIn?.XAVResponse?.Candidate[j]?.AddressKeyFormat?.AddressLine[m]?.substring(0, 100)?.padEnd(100) ?? "".substring(0, 100).padEnd(100);
  }
  dataOut += dataIn?.XAVResponse?.Candidate[j]?.AddressKeyFormat?.PoliticalDivision2?.substring(0, 30)?.padEnd(30) ?? "".substring(0, 30).padEnd(30);
  dataOut += dataIn?.XAVResponse?.Candidate[j]?.AddressKeyFormat?.PoliticalDivision1?.substring(0, 30)?.padEnd(30) ?? "".substring(0, 30).padEnd(30);
  dataOut += dataIn?.XAVResponse?.Candidate[j]?.AddressKeyFormat?.PostcodePrimaryLow?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  dataOut += dataIn?.XAVResponse?.Candidate[j]?.AddressKeyFormat?.PostCodeExtendedLow?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  dataOut += dataIn?.XAVResponse?.Candidate[j]?.AddressKeyFormat?.Urbanization?.substring(0, 30)?.padEnd(30) ?? "".substring(0, 30).padEnd(30);
  dataOut += dataIn?.XAVResponse?.Candidate[j]?.AddressKeyFormat?.Region?.substring(0, 100)?.padEnd(100) ?? "".substring(0, 100).padEnd(100);
  dataOut += dataIn?.XAVResponse?.Candidate[j]?.AddressKeyFormat?.CountryCode?.substring(0, 2)?.padEnd(2) ?? "".substring(0, 2).padEnd(2);
  }

  return dataOut;
}

/* eslint-enable */

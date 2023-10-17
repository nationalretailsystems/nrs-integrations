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
     */
    Code: string,
    /**
     * @size 150 characters
     */
    Description: string
}

/**
 * Output interface
 */
export interface TransactionReferenceDS {
    /**
     * @size 88 characters
     */
    CustomerContext: string
}

/**
 * Output interface
 */
export interface ResponseDS {
    /**
     */
    ResponseStatus: ResponseStatusDS,
    /**
     */
    TransactionReference: TransactionReferenceDS
}

/**
 * Output interface
 */
export interface AddressKeyFormatDS {
    /**
     * @size 50 characters
     */
    ConsigneeName: string,
    /**
     * @size 100 characters
     */
    AddressLine: string,
    /**
     * @size 30 characters
     */
    PoliticalDivision2: string,
    /**
     * @size 30 characters
     */
    PoliticalDivision1: string,
    /**
     * @size 10 characters
     */
    PostcodePrimaryLow: string,
    /**
     * @size 10 characters
     */
    PostCodeExtendedLow: string,
    /**
     * @size 30 characters
     */
    Urbanization: string,
    /**
     * @size 100 characters
     */
    Region: string,
    /**
     * @size 2 characters
     */
    CountryCode: string
}

/**
 * Output interface
 */
export interface AnonymousDS {
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
     * @size 0 characters
     */
    AmbiguousAddressIndicator: string,
    /**
     */
    Candidate: Array<AnonymousDS>
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
export interface RequestFmt {
    /**
     */
    XAVRequest: XAVRequestDS
}

/**
 * Convert RequestFmt record to TypeScript object
 */
export function convertRequestFmtToObject(dataIn: string): RequestFmt {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.XAVRequest =   {
  
    };
  dataOut.XAVRequest.AddressKeyFormat =   {
  
    };
  dataOut.XAVRequest.AddressKeyFormat.ConsigneeName = dataIn.substring(pos, pos + 50).trimEnd();
  pos += 50;
  dataOut.XAVRequest.AddressKeyFormat.AddressLine = dataIn.substring(pos, pos + 100).trimEnd();
  pos += 100;
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
export interface ResponseFmt {
    /**
     */
    XAVResponse: XAVResponseDS
}

/**
 * Convert JavaScript object to ResponseFmt record
 */
export function convertObjectToResponseFmt(dataIn: ResponseFmt): string {
  let dataOut: string = "";

  dataOut += dataIn?.XAVResponse?.Response?.ResponseStatus?.Code?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.XAVResponse.Response.ResponseStatus.Code`, "char", dataIn?.XAVResponse?.Response?.ResponseStatus?.Code);
  dataOut += dataIn?.XAVResponse?.Response?.ResponseStatus?.Description?.substring(0, 150)?.padEnd(150) ?? missingInput(`dataIn.XAVResponse.Response.ResponseStatus.Description`, "char", dataIn?.XAVResponse?.Response?.ResponseStatus?.Description);
  dataOut += dataIn?.XAVResponse?.Response?.TransactionReference?.CustomerContext?.substring(0, 88)?.padEnd(88) ?? missingInput(`dataIn.XAVResponse.Response.TransactionReference.CustomerContext`, "char", dataIn?.XAVResponse?.Response?.TransactionReference?.CustomerContext);
  dataOut += dataIn?.XAVResponse?.AmbiguousAddressIndicator?.substring(0, 0)?.padEnd(0) ?? missingInput(`dataIn.XAVResponse.AmbiguousAddressIndicator`, "char", dataIn?.XAVResponse?.AmbiguousAddressIndicator);
  for (let j: number = 0; j < 5; ++j) {
  dataOut += dataIn?.XAVResponse?.Candidate[j]?.AddressKeyFormat?.ConsigneeName?.substring(0, 50)?.padEnd(50) ?? missingInput(`dataIn.XAVResponse.Candidate[${j}].AddressKeyFormat.ConsigneeName`, "char", dataIn?.XAVResponse?.Candidate[j]?.AddressKeyFormat?.ConsigneeName);
  dataOut += dataIn?.XAVResponse?.Candidate[j]?.AddressKeyFormat?.AddressLine?.substring(0, 100)?.padEnd(100) ?? missingInput(`dataIn.XAVResponse.Candidate[${j}].AddressKeyFormat.AddressLine`, "char", dataIn?.XAVResponse?.Candidate[j]?.AddressKeyFormat?.AddressLine);
  dataOut += dataIn?.XAVResponse?.Candidate[j]?.AddressKeyFormat?.PoliticalDivision2?.substring(0, 30)?.padEnd(30) ?? missingInput(`dataIn.XAVResponse.Candidate[${j}].AddressKeyFormat.PoliticalDivision2`, "char", dataIn?.XAVResponse?.Candidate[j]?.AddressKeyFormat?.PoliticalDivision2);
  dataOut += dataIn?.XAVResponse?.Candidate[j]?.AddressKeyFormat?.PoliticalDivision1?.substring(0, 30)?.padEnd(30) ?? missingInput(`dataIn.XAVResponse.Candidate[${j}].AddressKeyFormat.PoliticalDivision1`, "char", dataIn?.XAVResponse?.Candidate[j]?.AddressKeyFormat?.PoliticalDivision1);
  dataOut += dataIn?.XAVResponse?.Candidate[j]?.AddressKeyFormat?.PostcodePrimaryLow?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.XAVResponse.Candidate[${j}].AddressKeyFormat.PostcodePrimaryLow`, "char", dataIn?.XAVResponse?.Candidate[j]?.AddressKeyFormat?.PostcodePrimaryLow);
  dataOut += dataIn?.XAVResponse?.Candidate[j]?.AddressKeyFormat?.PostCodeExtendedLow?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.XAVResponse.Candidate[${j}].AddressKeyFormat.PostCodeExtendedLow`, "char", dataIn?.XAVResponse?.Candidate[j]?.AddressKeyFormat?.PostCodeExtendedLow);
  dataOut += dataIn?.XAVResponse?.Candidate[j]?.AddressKeyFormat?.Urbanization?.substring(0, 30)?.padEnd(30) ?? missingInput(`dataIn.XAVResponse.Candidate[${j}].AddressKeyFormat.Urbanization`, "char", dataIn?.XAVResponse?.Candidate[j]?.AddressKeyFormat?.Urbanization);
  dataOut += dataIn?.XAVResponse?.Candidate[j]?.AddressKeyFormat?.Region?.substring(0, 100)?.padEnd(100) ?? missingInput(`dataIn.XAVResponse.Candidate[${j}].AddressKeyFormat.Region`, "char", dataIn?.XAVResponse?.Candidate[j]?.AddressKeyFormat?.Region);
  dataOut += dataIn?.XAVResponse?.Candidate[j]?.AddressKeyFormat?.CountryCode?.substring(0, 2)?.padEnd(2) ?? missingInput(`dataIn.XAVResponse.Candidate[${j}].AddressKeyFormat.CountryCode`, "char", dataIn?.XAVResponse?.Candidate[j]?.AddressKeyFormat?.CountryCode);
  }

  return dataOut;
}

/* eslint-enable */

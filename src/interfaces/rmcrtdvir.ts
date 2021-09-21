/* eslint-disable */
// @ts-nocheck
// Module: rmcrtdvir
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
export interface CertDVIR {
    /**
     * @size 100 characters
     */
    accessToken: string,
    /**
     * @size 10 characters
     */
    companyCode: string,
    /**
     * @size 60 characters
     */
    userEmail: string,
    /**
     * @size 10 characters
     */
    userPassword: string,
    /**
     * @size 10 digits
     */
    dvirId: number,
    /**
     * @size 10 characters
     */
    certifiedBy: string
}

/**
 * Convert CertDVIR record to TypeScript object
 */
export function convertCertDVIRToObject(dataIn: string): CertDVIR {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.accessToken = dataIn.substring(pos, pos + 100).trimEnd();
  pos += 100;
  dataOut.companyCode = dataIn.substring(pos, pos + 10).trimEnd();
  pos += 10;
  dataOut.userEmail = dataIn.substring(pos, pos + 60).trimEnd();
  pos += 60;
  dataOut.userPassword = dataIn.substring(pos, pos + 10).trimEnd();
  pos += 10;
  dataOut.dvirId = Number(dataIn.substring(pos, pos + 11).trimEnd());
  pos += 11;
  dataOut.certifiedBy = dataIn.substring(pos, pos + 10).trimEnd();
  pos += 10;

  return dataOut;
}

/**
 * Input interface
 */
export interface ResDVIR {
    /**
     * @size 10 digits
     */
    dvirId: number,
    /**
     */
    response: responseDS
}

/**
 * Convert JavaScript object to ResDVIR record
 */
export function convertObjectToResDVIR(dataIn: ResDVIR): string {
  let dataOut: string = "";

  dataOut += dataIn.dvirId.toFixed().substring(0, 11).padEnd(11);
  dataOut += dataIn.response.code.toFixed().substring(0, 6).padEnd(6);
  dataOut += dataIn.response.type.substring(0, 10).padEnd(10);
  dataOut += dataIn.response.message.substring(0, 200).padEnd(200);

  return dataOut;
}

/* eslint-enable */

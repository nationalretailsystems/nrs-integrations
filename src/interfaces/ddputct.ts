/* eslint-disable */
// @ts-nocheck
// Module: ddputct
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
export interface tagsDS {
    /**
     * @size 20 characters
     * @default ``
     */
    tags: string
}

/**
 * Output interface
 */
export interface errorsDS {
    /**
     * @size 20 characters
     * @default ``
     */
    error: string
}

/**
 * Output interface
 */
export interface containerDS {
    /**
     * @size 11 characters
     * @default ``
     */
    container_number: string,
    /**
     * @size 7 digits
     * @default `0`
     */
    customer_id: number,
    /**
     * @size 25 characters
     * @default ``
     */
    master_bl: string,
    /**
     */
    tags: Array<tagsDS>
}

/**
 * Output interface
 */
export interface ReqWatch {
    /**
     * @size 10 digits
     * @default `0`
     */
    assign_to_user_id: number,
    /**
     */
    containers: Array<containerDS>
}

/**
 * Convert ReqWatch record to TypeScript object
 */
export function convertReqWatchToObject(dataIn: string): ReqWatch {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.assign_to_user_id = Number(dataIn.substring(pos, pos + 11).trimEnd());
  pos += 11;
  dataOut.containers = [
    
  ];
  for (let i: number = 0; i < 100; ++i) {
  dataOut.containers[i] =   {
  
    };
  dataOut.containers[i].container_number = dataIn.substring(pos, pos + 11).trimEnd();
  pos += 11;
  dataOut.containers[i].customer_id = Number(dataIn.substring(pos, pos + 8).trimEnd());
  pos += 8;
  dataOut.containers[i].master_bl = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  dataOut.containers[i].tags = [
    
  ];
  for (let j: number = 0; j < 10; ++j) {
  dataOut.containers[i].tags[j] =   {
  
    };
  dataOut.containers[i].tags[j].tags = dataIn.substring(pos, pos + 20).trimEnd();
  pos += 20;
  }
  }

  return dataOut;
}

/**
 * Input interface
 */
export interface ResWatch {
    /**
     */
    container_numbers: Array<containerDS>,
    /**
     */
    errors: Array<errorsDS>
}

/**
 * Convert JavaScript object to ResWatch record
 */
export function convertObjectToResWatch(dataIn: ResWatch): string {
  let dataOut: string = "";

  for (let i: number = 0; i < 100; ++i) {
  dataOut += dataIn?.container_numbers[i]?.container_number?.substring(0, 11)?.padEnd(11) ?? "".substring(0, 11).padEnd(11);
  dataOut += dataIn?.container_numbers[i]?.customer_id?.toFixed()?.substring(0, 8)?.padEnd(8) ?? "0".substring(0, 8).padEnd(8);
  dataOut += dataIn?.container_numbers[i]?.master_bl?.substring(0, 25)?.padEnd(25) ?? "".substring(0, 25).padEnd(25);
  for (let k: number = 0; k < 10; ++k) {
  dataOut += dataIn?.container_numbers[i]?.tags[k]?.tags?.substring(0, 20)?.padEnd(20) ?? "".substring(0, 20).padEnd(20);
  }
  }
  for (let i: number = 0; i < 100; ++i) {
  dataOut += dataIn?.errors[i]?.error?.substring(0, 20)?.padEnd(20) ?? "".substring(0, 20).padEnd(20);
  }

  return dataOut;
}

/* eslint-enable */

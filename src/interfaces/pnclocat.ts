/* eslint-disable */
// @ts-nocheck
// Module: pnclocat
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
 * Data structure
 */
  let AssetDSFields: any = [
      {
      name: "asset_type",
      type: new dataTypes.Char(25)
    },
      {
      name: "site_code",
      type: new dataTypes.Char(25)
    },
      {
      name: "Trailer_SCAC",
      type: new dataTypes.Char(4)
    },
      {
      name: "Trailer_number",
      type: new dataTypes.Char(25)
    },
      {
      name: "container_number",
      type: new dataTypes.Char(25)
    }
  ];

/**
 * Input interface
 */
export interface AssetDSInput {
    /**
     * @size 25 characters
     */
    asset_type: string,
    /**
     * @size 25 characters
     */
    site_code: string,
    /**
     * @size 4 characters
     */
    Trailer_SCAC: string,
    /**
     * @size 25 characters
     */
    Trailer_number: string,
    /**
     * @size 25 characters
     */
    container_number: string
}

/**
 * Output interface
 */
export interface AssetDS {
    /**
     * @size 25 characters
     */
    asset_type: string,
    /**
     * @size 25 characters
     */
    site_code: string,
    /**
     * @size 4 characters
     */
    Trailer_SCAC: string,
    /**
     * @size 25 characters
     */
    Trailer_number: string,
    /**
     * @size 25 characters
     */
    container_number: string
}

/**
 * Data structure
 */
  let DataDSFields: any = [
      {
      name: "asset",
      type: new dataTypes.DataStructure(AssetDSFields)
    }
  ];

/**
 * Input interface
 */
export interface DataDSInput {
    /**
     */
    asset: AssetDSInput
}

/**
 * Output interface
 */
export interface DataDS {
    /**
     */
    asset: AssetDS
}

/**
 * Output interface
 */
export interface LocatDS {
    /**
     * @size 25 characters
     */
    message_group_id: string,
    /**
     * @size 25 characters
     */
    event_id: string,
    /**
     * @size 6 characters
     */
    campus: string,
    /**
     */
    data: DataDS
}

/**
 * Convert LocatDS record to TypeScript object
 */
export function convertLocatDSToObject(dataIn: string): LocatDS {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.message_group_id = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  dataOut.event_id = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  dataOut.campus = dataIn.substring(pos, pos + 6).trimEnd();
  pos += 6;
  dataOut.data =   {
  
    };
  dataOut.data.asset =   {
  
    };
  dataOut.data.asset.asset_type = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  dataOut.data.asset.site_code = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  dataOut.data.asset.Trailer_SCAC = dataIn.substring(pos, pos + 4).trimEnd();
  pos += 4;
  dataOut.data.asset.Trailer_number = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  dataOut.data.asset.container_number = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;

  return dataOut;
}

/* eslint-enable */

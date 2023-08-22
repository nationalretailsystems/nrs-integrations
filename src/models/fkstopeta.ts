/* eslint-disable */
// @ts-nocheck
// Module: fkstopeta
// Generated source -- do not modify

import eradaniConnect from "@eradani-inc/eradani-connect";
const { dataTypes } = eradaniConnect;


// Manually entered import
import config from 'config';

/**
 * Program model
 */
export const FKSTOPETAModel =   new eradaniConnect.run.Pgm("FKSTOPETA",   {
      lib: config.eradaniConnect.native.pgmLib,
      mode: "ile",
      params: [
      {
      name: "BillOfLading",
      type: new dataTypes.Char(30),
      defaultValue: ""
    },
      {
      name: "BookingNumber",
      type: new dataTypes.Char(20),
      defaultValue: ""
    },
      {
      name: "ContainerNumber",
      type: new dataTypes.Char(20),
      defaultValue: ""
    },
      {
      name: "ContainerType",
      type: new dataTypes.Char(10),
      defaultValue: ""
    },
      {
      name: "EncryptedAccessToken",
      type: new dataTypes.Char(125),
      defaultValue: ""
    },
      {
      name: "FourKitesLoadId",
      type: new dataTypes.PackedDecimal(16, 0),
      defaultValue: 0.0
    },
      {
      name: "LoadNumber",
      type: new dataTypes.Char(50),
      defaultValue: ""
    },
      {
      name: "MessageType",
      type: new dataTypes.Char(20),
      defaultValue: ""
    },
      {
      name: "ProNumber",
      type: new dataTypes.Char(20),
      defaultValue: ""
    },
      {
      name: "ReferenceNumbers",
      type: new dataTypes.Char(50),
      defaultValue: "",
      dim: 15
    },
      {
      name: "Scac",
      type: new dataTypes.Char(4),
      defaultValue: ""
    },
      {
      name: "Shipper",
      type: new dataTypes.Char(30),
      defaultValue: ""
    },
      {
      name: "StopName",
      type: new dataTypes.Char(50),
      defaultValue: ""
    },
      {
      name: "StopReferenceId",
      type: new dataTypes.Char(15),
      defaultValue: ""
    },
      {
      name: "StopSequence",
      type: new dataTypes.PackedDecimal(7, 0),
      defaultValue: 0.0
    },
      {
      name: "StopStatus",
      type: new dataTypes.Char(20),
      defaultValue: ""
    },
      {
      name: "StopType",
      type: new dataTypes.Char(20),
      defaultValue: ""
    },
      {
      name: "StopUnlocode",
      type: new dataTypes.Char(10),
      defaultValue: ""
    },
      {
      name: "Tags",
      type: new dataTypes.Char(50),
      defaultValue: "",
      dim: 15
    },
      {
      name: "TerminalName",
      type: new dataTypes.Char(50),
      defaultValue: ""
    },
      {
      name: "Timestamp",
      type: new dataTypes.Timestamp()
    },
      {
      name: "Timezone",
      type: new dataTypes.Char(30),
      defaultValue: ""
    },
      {
      name: "TimezoneOffset",
      type: new dataTypes.Integer(10),
      defaultValue: 0
    },
      {
      name: "TimezoneShortName",
      type: new dataTypes.Char(5),
      defaultValue: ""
    },
      {
      name: "VesselName",
      type: new dataTypes.Char(30),
      defaultValue: ""
    },
      {
      name: "VoyageNumber",
      type: new dataTypes.Char(25),
      defaultValue: ""
    },
      {
      name: "Confidence",
      type: new dataTypes.Char(10),
      defaultValue: ""
    }
  ]
    });

/**
 * Input interface
 */
export interface FKSTOPETAInput {
    /**
     * @size 30 characters
     * @default ``
     */
    BillOfLading?: string,
    /**
     * @size 20 characters
     * @default ``
     */
    BookingNumber?: string,
    /**
     * @size 20 characters
     * @default ``
     */
    ContainerNumber?: string,
    /**
     * @size 10 characters
     * @default ``
     */
    ContainerType?: string,
    /**
     * @size 125 characters
     * @default ``
     */
    EncryptedAccessToken?: string,
    /**
     * @size 16 digits
     * @precision 0 decimals
     * @default `0`
     */
    FourKitesLoadId?: number | string,
    /**
     * @size 50 characters
     * @default ``
     */
    LoadNumber?: string,
    /**
     * @size 20 characters
     * @default ``
     */
    MessageType?: string,
    /**
     * @size 20 characters
     * @default ``
     */
    ProNumber?: string,
    /**
     * @size 50 characters
     * @default ``
     */
    ReferenceNumbers?: Array<string>,
    /**
     * @size 4 characters
     * @default ``
     */
    Scac?: string,
    /**
     * @size 30 characters
     * @default ``
     */
    Shipper?: string,
    /**
     * @size 50 characters
     * @default ``
     */
    StopName?: string,
    /**
     * @size 15 characters
     * @default ``
     */
    StopReferenceId?: string,
    /**
     * @size 7 digits
     * @precision 0 decimals
     * @default `0`
     */
    StopSequence?: number | string,
    /**
     * @size 20 characters
     * @default ``
     */
    StopStatus?: string,
    /**
     * @size 20 characters
     * @default ``
     */
    StopType?: string,
    /**
     * @size 10 characters
     * @default ``
     */
    StopUnlocode?: string,
    /**
     * @size 50 characters
     * @default ``
     */
    Tags?: Array<string>,
    /**
     * @size 50 characters
     * @default ``
     */
    TerminalName?: string,
    /**
     */
    Timestamp: Date | string,
    /**
     * @size 30 characters
     * @default ``
     */
    Timezone?: string,
    /**
     * @size 10 digits
     * @default `0`
     */
    TimezoneOffset?: number | string,
    /**
     * @size 5 characters
     * @default ``
     */
    TimezoneShortName?: string,
    /**
     * @size 30 characters
     * @default ``
     */
    VesselName?: string,
    /**
     * @size 25 characters
     * @default ``
     */
    VoyageNumber?: string,
    /**
     * @size 10 characters
     * @default ``
     */
    Confidence?: string
}

/**
 * Output interface
 */
export interface FKSTOPETAOutput {
    /**
     * @size 30 characters
     * @default ``
     */
    BillOfLading: string,
    /**
     * @size 20 characters
     * @default ``
     */
    BookingNumber: string,
    /**
     * @size 20 characters
     * @default ``
     */
    ContainerNumber: string,
    /**
     * @size 10 characters
     * @default ``
     */
    ContainerType: string,
    /**
     * @size 125 characters
     * @default ``
     */
    EncryptedAccessToken: string,
    /**
     * @size 16 digits
     * @precision 0 decimals
     * @default `0`
     */
    FourKitesLoadId: number,
    /**
     * @size 50 characters
     * @default ``
     */
    LoadNumber: string,
    /**
     * @size 20 characters
     * @default ``
     */
    MessageType: string,
    /**
     * @size 20 characters
     * @default ``
     */
    ProNumber: string,
    /**
     * @size 50 characters
     * @default ``
     */
    ReferenceNumbers: Array<string>,
    /**
     * @size 4 characters
     * @default ``
     */
    Scac: string,
    /**
     * @size 30 characters
     * @default ``
     */
    Shipper: string,
    /**
     * @size 50 characters
     * @default ``
     */
    StopName: string,
    /**
     * @size 15 characters
     * @default ``
     */
    StopReferenceId: string,
    /**
     * @size 7 digits
     * @precision 0 decimals
     * @default `0`
     */
    StopSequence: number,
    /**
     * @size 20 characters
     * @default ``
     */
    StopStatus: string,
    /**
     * @size 20 characters
     * @default ``
     */
    StopType: string,
    /**
     * @size 10 characters
     * @default ``
     */
    StopUnlocode: string,
    /**
     * @size 50 characters
     * @default ``
     */
    Tags: Array<string>,
    /**
     * @size 50 characters
     * @default ``
     */
    TerminalName: string,
    /**
     */
    Timestamp: Date,
    /**
     * @size 30 characters
     * @default ``
     */
    Timezone: string,
    /**
     * @size 10 digits
     * @default `0`
     */
    TimezoneOffset: number,
    /**
     * @size 5 characters
     * @default ``
     */
    TimezoneShortName: string,
    /**
     * @size 30 characters
     * @default ``
     */
    VesselName: string,
    /**
     * @size 25 characters
     * @default ``
     */
    VoyageNumber: string,
    /**
     * @size 10 characters
     * @default ``
     */
    Confidence: string
}

/* eslint-enable */

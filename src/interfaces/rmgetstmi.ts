/* eslint-disable */
// @ts-nocheck
// Module: rmgetstmi
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
  let responseDSFields: any = [
      {
      name: "code",
      type: new dataTypes.Integer(5)
    },
      {
      name: "type",
      type: new dataTypes.Char(5)
    },
      {
      name: "message",
      type: new dataTypes.Char(200)
    }
  ];

/**
 * Input interface
 */
export interface responseDSInput {
    /**
     * @size 5 digits
     */
    code: number | string,
    /**
     * @size 5 characters
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
export interface responseDS {
    /**
     * @size 5 digits
     */
    code: number,
    /**
     * @size 5 characters
     */
    type: string,
    /**
     * @size 200 characters
     */
    message: string
}

/**
 * Data structure
 */
  let stateMileageDSFields: any = [
      {
      name: "index",
      type: new dataTypes.Integer(10)
    },
      {
      name: "driverLoginId",
      type: new dataTypes.Char(60)
    },
      {
      name: "tractorNumber",
      type: new dataTypes.Char(12)
    },
      {
      name: "deviceSN",
      type: new dataTypes.Char(20)
    },
      {
      name: "fuelUsed",
      type: new dataTypes.PackedDecimal(15, 5)
    },
      {
      name: "fuelType",
      type: new dataTypes.Char(20)
    },
      {
      name: "distance",
      type: new dataTypes.PackedDecimal(15, 5)
    },
      {
      name: "manualMiles",
      type: new dataTypes.PackedDecimal(15, 5)
    },
      {
      name: "state",
      type: new dataTypes.Char(50)
    },
      {
      name: "entryOdometerReading",
      type: new dataTypes.PackedDecimal(15, 5)
    },
      {
      name: "exitOdometerReading",
      type: new dataTypes.PackedDecimal(15, 5)
    },
      {
      name: "country",
      type: new dataTypes.Char(50)
    },
      {
      name: "stateInTime",
      type: new dataTypes.Char(19)
    },
      {
      name: "stateOutTime",
      type: new dataTypes.Char(19)
    },
      {
      name: "logDate",
      type: new dataTypes.Char(19)
    },
      {
      name: "offSet",
      type: new dataTypes.Char(2)
    },
      {
      name: "oaNumber",
      type: new dataTypes.Char(100)
    },
      {
      name: "stateinLatitude",
      type: new dataTypes.PackedDecimal(50, 14)
    },
      {
      name: "stateInLongitude",
      type: new dataTypes.PackedDecimal(50, 14)
    },
      {
      name: "stateOutLatitude",
      type: new dataTypes.PackedDecimal(50, 14)
    },
      {
      name: "stateOutLongitude",
      type: new dataTypes.PackedDecimal(50, 14)
    },
      {
      name: "stateInAddress",
      type: new dataTypes.Char(200)
    },
      {
      name: "stateOutAddress",
      type: new dataTypes.Char(200)
    },
      {
      name: "vin",
      type: new dataTypes.Char(30)
    },
      {
      name: "dotNumber",
      type: new dataTypes.Char(50)
    }
  ];

/**
 * Input interface
 */
export interface stateMileageDSInput {
    /**
     * @size 10 digits
     */
    index: number | string,
    /**
     * @size 60 characters
     */
    driverLoginId: string,
    /**
     * @size 12 characters
     */
    tractorNumber: string,
    /**
     * @size 20 characters
     */
    deviceSN: string,
    /**
     * @size 15 digits
     * @precision 5 decimals
     */
    fuelUsed: number | string,
    /**
     * @size 20 characters
     */
    fuelType: string,
    /**
     * @size 15 digits
     * @precision 5 decimals
     */
    distance: number | string,
    /**
     * @size 15 digits
     * @precision 5 decimals
     */
    manualMiles: number | string,
    /**
     * @size 50 characters
     */
    state: string,
    /**
     * @size 15 digits
     * @precision 5 decimals
     */
    entryOdometerReading: number | string,
    /**
     * @size 15 digits
     * @precision 5 decimals
     */
    exitOdometerReading: number | string,
    /**
     * @size 50 characters
     */
    country: string,
    /**
     * @size 19 characters
     */
    stateInTime: string,
    /**
     * @size 19 characters
     */
    stateOutTime: string,
    /**
     * @size 19 characters
     */
    logDate: string,
    /**
     * @size 2 characters
     */
    offSet: string,
    /**
     * @size 100 characters
     */
    oaNumber: string,
    /**
     * @size 50 digits
     * @precision 14 decimals
     */
    stateinLatitude: number | string,
    /**
     * @size 50 digits
     * @precision 14 decimals
     */
    stateInLongitude: number | string,
    /**
     * @size 50 digits
     * @precision 14 decimals
     */
    stateOutLatitude: number | string,
    /**
     * @size 50 digits
     * @precision 14 decimals
     */
    stateOutLongitude: number | string,
    /**
     * @size 200 characters
     */
    stateInAddress: string,
    /**
     * @size 200 characters
     */
    stateOutAddress: string,
    /**
     * @size 30 characters
     */
    vin: string,
    /**
     * @size 50 characters
     */
    dotNumber: string
}

/**
 * Output interface
 */
export interface stateMileageDS {
    /**
     * @size 10 digits
     */
    index: number,
    /**
     * @size 60 characters
     */
    driverLoginId: string,
    /**
     * @size 12 characters
     */
    tractorNumber: string,
    /**
     * @size 20 characters
     */
    deviceSN: string,
    /**
     * @size 15 digits
     * @precision 5 decimals
     */
    fuelUsed: number,
    /**
     * @size 20 characters
     */
    fuelType: string,
    /**
     * @size 15 digits
     * @precision 5 decimals
     */
    distance: number,
    /**
     * @size 15 digits
     * @precision 5 decimals
     */
    manualMiles: number,
    /**
     * @size 50 characters
     */
    state: string,
    /**
     * @size 15 digits
     * @precision 5 decimals
     */
    entryOdometerReading: number,
    /**
     * @size 15 digits
     * @precision 5 decimals
     */
    exitOdometerReading: number,
    /**
     * @size 50 characters
     */
    country: string,
    /**
     * @size 19 characters
     */
    stateInTime: string,
    /**
     * @size 19 characters
     */
    stateOutTime: string,
    /**
     * @size 19 characters
     */
    logDate: string,
    /**
     * @size 2 characters
     */
    offSet: string,
    /**
     * @size 100 characters
     */
    oaNumber: string,
    /**
     * @size 50 digits
     * @precision 14 decimals
     */
    stateinLatitude: number,
    /**
     * @size 50 digits
     * @precision 14 decimals
     */
    stateInLongitude: number,
    /**
     * @size 50 digits
     * @precision 14 decimals
     */
    stateOutLatitude: number,
    /**
     * @size 50 digits
     * @precision 14 decimals
     */
    stateOutLongitude: number,
    /**
     * @size 200 characters
     */
    stateInAddress: string,
    /**
     * @size 200 characters
     */
    stateOutAddress: string,
    /**
     * @size 30 characters
     */
    vin: string,
    /**
     * @size 50 characters
     */
    dotNumber: string
}

/**
 * Output interface
 */
export interface ReqSttMiles {
    /**
     * @size 100 characters
     */
    accesstoken: string,
    /**
     * @size 10 characters
     */
    companyCode: string,
    /**
     */
    fromDate: Date,
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
 * Convert ReqSttMiles record to TypeScript object
 */
export function convertReqSttMilesToObject(dataIn: string): ReqSttMiles {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.accesstoken = dataIn.substring(pos, pos + 100).trimEnd();
  pos += 100;
  dataOut.companyCode = dataIn.substring(pos, pos + 10).trimEnd();
  pos += 10;
  dataOut.fromDate = fromIbmiDate(dataIn.substring(pos, pos + 10).trimEnd());
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
export interface RtnSttMiles {
    /**
     */
    stateMileage: stateMileageDS,
    /**
     */
    response: responseDS,
    /**
     * @size 3 digits
     * @precision 0 decimals
     */
    isDST: number
}

/**
 * Convert JavaScript object to RtnSttMiles record
 */
export function convertObjectToRtnSttMiles(dataIn: RtnSttMiles): string {
  let dataOut: string = "";

  dataOut += dataIn.stateMileage.index.toFixed().substring(0, 11).padEnd(11);
  dataOut += dataIn.stateMileage.driverLoginId.substring(0, 60).padEnd(60);
  dataOut += dataIn.stateMileage.tractorNumber.substring(0, 12).padEnd(12);
  dataOut += dataIn.stateMileage.deviceSN.substring(0, 20).padEnd(20);
  dataOut += dataIn.stateMileage.fuelUsed.toFixed(5).substring(0, 17).padEnd(17);
  dataOut += dataIn.stateMileage.fuelType.substring(0, 20).padEnd(20);
  dataOut += dataIn.stateMileage.distance.toFixed(5).substring(0, 17).padEnd(17);
  dataOut += dataIn.stateMileage.manualMiles.toFixed(5).substring(0, 17).padEnd(17);
  dataOut += dataIn.stateMileage.state.substring(0, 50).padEnd(50);
  dataOut += dataIn.stateMileage.entryOdometerReading.toFixed(5).substring(0, 17).padEnd(17);
  dataOut += dataIn.stateMileage.exitOdometerReading.toFixed(5).substring(0, 17).padEnd(17);
  dataOut += dataIn.stateMileage.country.substring(0, 50).padEnd(50);
  dataOut += dataIn.stateMileage.stateInTime.substring(0, 19).padEnd(19);
  dataOut += dataIn.stateMileage.stateOutTime.substring(0, 19).padEnd(19);
  dataOut += dataIn.stateMileage.logDate.substring(0, 19).padEnd(19);
  dataOut += dataIn.stateMileage.offSet.substring(0, 2).padEnd(2);
  dataOut += dataIn.stateMileage.oaNumber.substring(0, 100).padEnd(100);
  dataOut += dataIn.stateMileage.stateinLatitude.toFixed(14).substring(0, 52).padEnd(52);
  dataOut += dataIn.stateMileage.stateInLongitude.toFixed(14).substring(0, 52).padEnd(52);
  dataOut += dataIn.stateMileage.stateOutLatitude.toFixed(14).substring(0, 52).padEnd(52);
  dataOut += dataIn.stateMileage.stateOutLongitude.toFixed(14).substring(0, 52).padEnd(52);
  dataOut += dataIn.stateMileage.stateInAddress.substring(0, 200).padEnd(200);
  dataOut += dataIn.stateMileage.stateOutAddress.substring(0, 200).padEnd(200);
  dataOut += dataIn.stateMileage.vin.substring(0, 30).padEnd(30);
  dataOut += dataIn.stateMileage.dotNumber.substring(0, 50).padEnd(50);
  dataOut += dataIn.response.code.toFixed().substring(0, 6).padEnd(6);
  dataOut += dataIn.response.type.substring(0, 5).padEnd(5);
  dataOut += dataIn.response.message.substring(0, 200).padEnd(200);
  dataOut += dataIn.isDST.toFixed(0).substring(0, 5).padEnd(5);

  return dataOut;
}

/* eslint-enable */

/* eslint-disable */
// @ts-nocheck
// Module: drvordr
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
export interface ShipDocsDS {
    /**
     * @size 14 characters
     * @default ``
     */
    type: string,
    /**
     * @size 7 characters
     * @default ``
     */
    value: string
}

/**
 * Output interface
 */
export interface LocationsDS {
    /**
     * @size 16 characters
     * @default ``
     */
    external_id: string,
    /**
     * @size 3 characters
     * @default ``
     */
    type: string,
    /**
     * @size 23 characters
     * @default ``
     */
    name: string,
    /**
     * @size 25 characters
     * @default ``
     */
    address: string,
    /**
     * @size 6 characters
     * @default ``
     */
    city: string,
    /**
     * @size 2 characters
     * @default ``
     */
    state: string,
    /**
     * @size 2 characters
     * @default ``
     */
    country_code: string,
    /**
     * @size 5 characters
     * @default ``
     */
    postal_code: string,
    /**
     * @size 8 digits
     * @precision 6 decimals
     * @default `0`
     */
    latitude: number,
    /**
     * @size 9 digits
     * @precision 6 decimals
     * @default `0`
     */
    longitude: number,
    /**
     * @size 10 characters
     * @default ``
     */
    time_zone: string,
    /**
     * @size 25 characters
     * @default ``
     */
    created_at: string,
    /**
     * @size 25 characters
     * @default ``
     */
    updated_at: string
}

/**
 * Output interface
 */
export interface ExtDataDS {
    /**
     * @size 8 characters
     * @default ``
     */
    label: string,
    /**
     * @size 7 characters
     * @default ``
     */
    value: string,
    /**
     * @size 1 digits
     * @precision 0 decimals
     * @default `0`
     */
    order: number,
    /**
     */
    isLabel: boolean
}

/**
 * Output interface
 */
export interface appointmentDS {
    /**
     * @size 25 characters
     * @default ``
     */
    start_time: string,
    /**
     * @size 25 characters
     * @default ``
     */
    ready_time: string,
    /**
     * @size 25 characters
     * @default ``
     */
    late_time: string,
    /**
     * @size 25 characters
     * @default ``
     */
    end_time: string
}

/**
 * Output interface
 */
export interface centerDS {
    /**
     * @size 8 digits
     * @precision 6 decimals
     * @default `0`
     */
    latitude: number,
    /**
     * @size 9 digits
     * @precision 6 decimals
     * @default `0`
     */
    longitude: number
}

/**
 * Output interface
 */
export interface circleDS {
    /**
     */
    center: centerDS,
    /**
     * @size 3 digits
     * @precision 0 decimals
     * @default `0`
     */
    radius: number
}

/**
 * Output interface
 */
export interface geofenceDS {
    /**
     */
    circle: circleDS,
    /**
     * @size 3 digits
     * @precision 0 decimals
     * @default `0`
     */
    delay: number,
    /**
     */
    auto_complete: boolean,
    /**
     * @size 5 characters
     * @default ``
     */
    trigger_by: string,
    /**
     * @size 17 characters
     * @default ``
     */
    message: string
}

/**
 * Output interface
 */
export interface external_dataDS {
    /**
     */
    geofence: geofenceDS
}

/**
 * Output interface
 */
export interface fieldsDS {
    /**
     * @size 7 characters
     * @default ``
     */
    OrderNum: string,
    /**
     * @size 1 characters
     * @default ``
     */
    Tyepe: string,
    /**
     * @size 2 characters
     * @default ``
     */
    PCS: string,
    /**
     * @size 5 characters
     * @default ``
     */
    WGT: string,
    /**
     * @size 7 characters
     * @default ``
     */
    TRIP: string,
    /**
     * @size 30 characters
     * @default ``
     */
    Comment: string,
    /**
     * @size 1 characters
     * @default ``
     */
    DSP: string,
    /**
     * @size 6 characters
     * @default ``
     */
    Unit: string,
    /**
     * @size 9 characters
     * @default ``
     */
    hiddenLatitude: string,
    /**
     * @size 9 characters
     * @default ``
     */
    hiddenLongitude: string,
    /**
     * @size 16 characters
     * @default ``
     */
    locname: string,
    /**
     * @size 25 characters
     * @default ``
     */
    address: string,
    /**
     * @size 6 characters
     * @default ``
     */
    city: string,
    /**
     * @size 2 characters
     * @default ``
     */
    state: string,
    /**
     * @size 5 characters
     * @default ``
     */
    zipcode: string,
    /**
     * @size 8 characters
     * @default ``
     */
    stopkey: string,
    /**
     * @size 2 characters
     * @default ``
     */
    stopseq: string,
    /**
     * @size 16 digits
     * @precision 0 decimals
     * @default `0`
     */
    user_id: number
}

/**
 * Output interface
 */
export interface TasksDS {
    /**
     * @size 9 characters
     * @default ``
     */
    external_id: string,
    /**
     * @size 19 characters
     * @default ``
     */
    name: string,
    /**
     * @size 1 digits
     * @precision 0 decimals
     * @default `0`
     */
    order: number,
    /**
     * @size 19 characters
     * @default ``
     */
    type: string,
    /**
     */
    completed: boolean,
    /**
     * @size 25 characters
     * @default ``
     */
    completed_at: string,
    /**
     * @size 4 characters
     * @default ``
     */
    completed_by: string,
    /**
     * @size 6 characters
     * @default ``
     */
    completion_type: string,
    /**
     * @size 25 characters
     */
    created_at: string,
    /**
     * @size 25 characters
     */
    updated_at: string,
    /**
     */
    external_data: external_dataDS,
    /**
     */
    fields: fieldsDS
}

/**
 * Output interface
 */
export interface StepsDS {
    /**
     * @size 18 characters
     */
    external_id: string,
    /**
     * @size 23 characters
     */
    name: string,
    /**
     */
    completed: boolean,
    /**
     * @size 25 characters
     * @default ``
     */
    completed_at: string,
    /**
     * @size 6 characters
     * @default ``
     */
    type: string,
    /**
     * @size 1 digits
     * @precision 0 decimals
     * @default `0`
     */
    order: number,
    /**
     * @size 16 characters
     * @default ``
     */
    location_external_id: string,
    /**
     */
    appointment: appointmentDS,
    /**
     * @size 25 characters
     * @default ``
     */
    eta: string,
    /**
     * @size 25 characters
     * @default ``
     */
    created_at: string,
    /**
     * @size 25 characters
     * @default ``
     */
    updated_at: string,
    /**
     */
    tasks: Array<TasksDS>
}

/**
 * Output interface
 */
export interface OrderReqDS {
    /**
     * @size 6 characters
     * @default ``
     */
    drivers: string
}

/**
 * Convert OrderReqDS record to TypeScript object
 */
export function convertOrderReqDSToObject(dataIn: string): OrderReqDS {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.drivers = dataIn.substring(pos, pos + 6).trimEnd();
  pos += 6;

  return dataOut;
}

/**
 * Input interface
 */
export interface OrderResDS {
    /**
     * @size 6 characters
     * @default ``
     */
    drivers: Array<string>,
    /**
     * @size 16 digits
     * @precision 0 decimals
     * @default `0`
     */
    id: number,
    /**
     * @size 7 characters
     * @default ``
     */
    external_id: string,
    /**
     * @size 7 characters
     * @default ``
     */
    external_id_alias: string,
    /**
     * @size 6 characters
     * @default ``
     */
    status: string,
    /**
     * @size 1 characters
     * @default ``
     */
    sequence: string,
    /**
     */
    shipping_documents: Array<ShipDocsDS>,
    /**
     * @size 25 characters
     * @default ``
     */
    received_at: string,
    /**
     * @size 25 characters
     * @default ``
     */
    reviewed_at: string,
    /**
     * @size 25 characters
     * @default ``
     */
    created_at: string,
    /**
     * @size 25 characters
     * @default ``
     */
    updated_at: string,
    /**
     * @size 25 characters
     * @default ``
     */
    modified_at: string,
    /**
     */
    locations: Array<LocationsDS>,
    /**
     */
    external_data: Array<ExtDataDS>,
    /**
     */
    steps: Array<StepsDS>
}

/**
 * Convert JavaScript object to OrderResDS record
 */
export function convertObjectToOrderResDS(dataIn: OrderResDS): string {
  let dataOut: string = "";

  for (let i: number = 0; i < 1; ++i) {
  dataOut += dataIn?.drivers[i]?.substring(0, 6)?.padEnd(6) ?? "".substring(0, 6).padEnd(6);
  }
  dataOut += dataIn?.id?.toFixed(0)?.substring(0, 18)?.padEnd(18) ?? "0".substring(0, 18).padEnd(18);
  dataOut += dataIn?.external_id?.substring(0, 7)?.padEnd(7) ?? "".substring(0, 7).padEnd(7);
  dataOut += dataIn?.external_id_alias?.substring(0, 7)?.padEnd(7) ?? "".substring(0, 7).padEnd(7);
  dataOut += dataIn?.status?.substring(0, 6)?.padEnd(6) ?? "".substring(0, 6).padEnd(6);
  dataOut += dataIn?.sequence?.substring(0, 1)?.padEnd(1) ?? "".substring(0, 1).padEnd(1);
  for (let i: number = 0; i < 4; ++i) {
  dataOut += dataIn?.shipping_documents[i]?.type?.substring(0, 14)?.padEnd(14) ?? "".substring(0, 14).padEnd(14);
  dataOut += dataIn?.shipping_documents[i]?.value?.substring(0, 7)?.padEnd(7) ?? "".substring(0, 7).padEnd(7);
  }
  dataOut += dataIn?.received_at?.substring(0, 25)?.padEnd(25) ?? "".substring(0, 25).padEnd(25);
  dataOut += dataIn?.reviewed_at?.substring(0, 25)?.padEnd(25) ?? "".substring(0, 25).padEnd(25);
  dataOut += dataIn?.created_at?.substring(0, 25)?.padEnd(25) ?? "".substring(0, 25).padEnd(25);
  dataOut += dataIn?.updated_at?.substring(0, 25)?.padEnd(25) ?? "".substring(0, 25).padEnd(25);
  dataOut += dataIn?.modified_at?.substring(0, 25)?.padEnd(25) ?? "".substring(0, 25).padEnd(25);
  for (let i: number = 0; i < 20; ++i) {
  dataOut += dataIn?.locations[i]?.external_id?.substring(0, 16)?.padEnd(16) ?? "".substring(0, 16).padEnd(16);
  dataOut += dataIn?.locations[i]?.type?.substring(0, 3)?.padEnd(3) ?? "".substring(0, 3).padEnd(3);
  dataOut += dataIn?.locations[i]?.name?.substring(0, 23)?.padEnd(23) ?? "".substring(0, 23).padEnd(23);
  dataOut += dataIn?.locations[i]?.address?.substring(0, 25)?.padEnd(25) ?? "".substring(0, 25).padEnd(25);
  dataOut += dataIn?.locations[i]?.city?.substring(0, 6)?.padEnd(6) ?? "".substring(0, 6).padEnd(6);
  dataOut += dataIn?.locations[i]?.state?.substring(0, 2)?.padEnd(2) ?? "".substring(0, 2).padEnd(2);
  dataOut += dataIn?.locations[i]?.country_code?.substring(0, 2)?.padEnd(2) ?? "".substring(0, 2).padEnd(2);
  dataOut += dataIn?.locations[i]?.postal_code?.substring(0, 5)?.padEnd(5) ?? "".substring(0, 5).padEnd(5);
  dataOut += dataIn?.locations[i]?.latitude?.toFixed(6)?.substring(0, 10)?.padEnd(10) ?? "0".substring(0, 10).padEnd(10);
  dataOut += dataIn?.locations[i]?.longitude?.toFixed(6)?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  dataOut += dataIn?.locations[i]?.time_zone?.substring(0, 10)?.padEnd(10) ?? "".substring(0, 10).padEnd(10);
  dataOut += dataIn?.locations[i]?.created_at?.substring(0, 25)?.padEnd(25) ?? "".substring(0, 25).padEnd(25);
  dataOut += dataIn?.locations[i]?.updated_at?.substring(0, 25)?.padEnd(25) ?? "".substring(0, 25).padEnd(25);
  }
  for (let i: number = 0; i < 4; ++i) {
  dataOut += dataIn?.external_data[i]?.label?.substring(0, 8)?.padEnd(8) ?? "".substring(0, 8).padEnd(8);
  dataOut += dataIn?.external_data[i]?.value?.substring(0, 7)?.padEnd(7) ?? "".substring(0, 7).padEnd(7);
  dataOut += dataIn?.external_data[i]?.order?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? "0".substring(0, 3).padEnd(3);
  dataOut += (dataIn?.external_data[i]?.isLabel !== undefined ? (dataIn?.external_data[i]?.isLabel ? "1" : "0") : missingInput(`dataIn.external_data[${i}].isLabel`, "bool", dataIn?.external_data[i]?.isLabel));
  }
  for (let i: number = 0; i < 20; ++i) {
  dataOut += dataIn?.steps[i]?.external_id?.substring(0, 18)?.padEnd(18) ?? missingInput(`dataIn.steps[${i}].external_id`, "char", dataIn?.steps[i]?.external_id);
  dataOut += dataIn?.steps[i]?.name?.substring(0, 23)?.padEnd(23) ?? missingInput(`dataIn.steps[${i}].name`, "char", dataIn?.steps[i]?.name);
  dataOut += (dataIn?.steps[i]?.completed !== undefined ? (dataIn?.steps[i]?.completed ? "1" : "0") : missingInput(`dataIn.steps[${i}].completed`, "bool", dataIn?.steps[i]?.completed));
  dataOut += dataIn?.steps[i]?.completed_at?.substring(0, 25)?.padEnd(25) ?? "".substring(0, 25).padEnd(25);
  dataOut += dataIn?.steps[i]?.type?.substring(0, 6)?.padEnd(6) ?? "".substring(0, 6).padEnd(6);
  dataOut += dataIn?.steps[i]?.order?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? "0".substring(0, 3).padEnd(3);
  dataOut += dataIn?.steps[i]?.location_external_id?.substring(0, 16)?.padEnd(16) ?? "".substring(0, 16).padEnd(16);
  dataOut += dataIn?.steps[i]?.appointment?.start_time?.substring(0, 25)?.padEnd(25) ?? "".substring(0, 25).padEnd(25);
  dataOut += dataIn?.steps[i]?.appointment?.ready_time?.substring(0, 25)?.padEnd(25) ?? "".substring(0, 25).padEnd(25);
  dataOut += dataIn?.steps[i]?.appointment?.late_time?.substring(0, 25)?.padEnd(25) ?? "".substring(0, 25).padEnd(25);
  dataOut += dataIn?.steps[i]?.appointment?.end_time?.substring(0, 25)?.padEnd(25) ?? "".substring(0, 25).padEnd(25);
  dataOut += dataIn?.steps[i]?.eta?.substring(0, 25)?.padEnd(25) ?? "".substring(0, 25).padEnd(25);
  dataOut += dataIn?.steps[i]?.created_at?.substring(0, 25)?.padEnd(25) ?? "".substring(0, 25).padEnd(25);
  dataOut += dataIn?.steps[i]?.updated_at?.substring(0, 25)?.padEnd(25) ?? "".substring(0, 25).padEnd(25);
  for (let k: number = 0; k < 3; ++k) {
  dataOut += dataIn?.steps[i]?.tasks[k]?.external_id?.substring(0, 9)?.padEnd(9) ?? "".substring(0, 9).padEnd(9);
  dataOut += dataIn?.steps[i]?.tasks[k]?.name?.substring(0, 19)?.padEnd(19) ?? "".substring(0, 19).padEnd(19);
  dataOut += dataIn?.steps[i]?.tasks[k]?.order?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? "0".substring(0, 3).padEnd(3);
  dataOut += dataIn?.steps[i]?.tasks[k]?.type?.substring(0, 19)?.padEnd(19) ?? "".substring(0, 19).padEnd(19);
  dataOut += (dataIn?.steps[i]?.tasks[k]?.completed !== undefined ? (dataIn?.steps[i]?.tasks[k]?.completed ? "1" : "0") : missingInput(`dataIn.steps[${i}].tasks[${k}].completed`, "bool", dataIn?.steps[i]?.tasks[k]?.completed));
  dataOut += dataIn?.steps[i]?.tasks[k]?.completed_at?.substring(0, 25)?.padEnd(25) ?? "".substring(0, 25).padEnd(25);
  dataOut += dataIn?.steps[i]?.tasks[k]?.completed_by?.substring(0, 4)?.padEnd(4) ?? "".substring(0, 4).padEnd(4);
  dataOut += dataIn?.steps[i]?.tasks[k]?.completion_type?.substring(0, 6)?.padEnd(6) ?? "".substring(0, 6).padEnd(6);
  dataOut += dataIn?.steps[i]?.tasks[k]?.created_at?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].created_at`, "char", dataIn?.steps[i]?.tasks[k]?.created_at);
  dataOut += dataIn?.steps[i]?.tasks[k]?.updated_at?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].updated_at`, "char", dataIn?.steps[i]?.tasks[k]?.updated_at);
  dataOut += dataIn?.steps[i]?.tasks[k]?.external_data?.geofence?.circle?.center?.latitude?.toFixed(6)?.substring(0, 10)?.padEnd(10) ?? "0".substring(0, 10).padEnd(10);
  dataOut += dataIn?.steps[i]?.tasks[k]?.external_data?.geofence?.circle?.center?.longitude?.toFixed(6)?.substring(0, 11)?.padEnd(11) ?? "0".substring(0, 11).padEnd(11);
  dataOut += dataIn?.steps[i]?.tasks[k]?.external_data?.geofence?.circle?.radius?.toFixed(0)?.substring(0, 5)?.padEnd(5) ?? "0".substring(0, 5).padEnd(5);
  dataOut += dataIn?.steps[i]?.tasks[k]?.external_data?.geofence?.delay?.toFixed(0)?.substring(0, 5)?.padEnd(5) ?? "0".substring(0, 5).padEnd(5);
  dataOut += (dataIn?.steps[i]?.tasks[k]?.external_data?.geofence?.auto_complete !== undefined ? (dataIn?.steps[i]?.tasks[k]?.external_data?.geofence?.auto_complete ? "1" : "0") : missingInput(`dataIn.steps[${i}].tasks[${k}].external_data.geofence.auto_complete`, "bool", dataIn?.steps[i]?.tasks[k]?.external_data?.geofence?.auto_complete));
  dataOut += dataIn?.steps[i]?.tasks[k]?.external_data?.geofence?.trigger_by?.substring(0, 5)?.padEnd(5) ?? "".substring(0, 5).padEnd(5);
  dataOut += dataIn?.steps[i]?.tasks[k]?.external_data?.geofence?.message?.substring(0, 17)?.padEnd(17) ?? "".substring(0, 17).padEnd(17);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.OrderNum?.substring(0, 7)?.padEnd(7) ?? "".substring(0, 7).padEnd(7);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.Tyepe?.substring(0, 1)?.padEnd(1) ?? "".substring(0, 1).padEnd(1);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.PCS?.substring(0, 2)?.padEnd(2) ?? "".substring(0, 2).padEnd(2);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.WGT?.substring(0, 5)?.padEnd(5) ?? "".substring(0, 5).padEnd(5);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.TRIP?.substring(0, 7)?.padEnd(7) ?? "".substring(0, 7).padEnd(7);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.Comment?.substring(0, 30)?.padEnd(30) ?? "".substring(0, 30).padEnd(30);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.DSP?.substring(0, 1)?.padEnd(1) ?? "".substring(0, 1).padEnd(1);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.Unit?.substring(0, 6)?.padEnd(6) ?? "".substring(0, 6).padEnd(6);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.hiddenLatitude?.substring(0, 9)?.padEnd(9) ?? "".substring(0, 9).padEnd(9);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.hiddenLongitude?.substring(0, 9)?.padEnd(9) ?? "".substring(0, 9).padEnd(9);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.locname?.substring(0, 16)?.padEnd(16) ?? "".substring(0, 16).padEnd(16);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.address?.substring(0, 25)?.padEnd(25) ?? "".substring(0, 25).padEnd(25);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.city?.substring(0, 6)?.padEnd(6) ?? "".substring(0, 6).padEnd(6);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.state?.substring(0, 2)?.padEnd(2) ?? "".substring(0, 2).padEnd(2);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.zipcode?.substring(0, 5)?.padEnd(5) ?? "".substring(0, 5).padEnd(5);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.stopkey?.substring(0, 8)?.padEnd(8) ?? "".substring(0, 8).padEnd(8);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.stopseq?.substring(0, 2)?.padEnd(2) ?? "".substring(0, 2).padEnd(2);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.user_id?.toFixed(0)?.substring(0, 18)?.padEnd(18) ?? "0".substring(0, 18).padEnd(18);
  }
  }

  return dataOut;
}

/* eslint-enable */

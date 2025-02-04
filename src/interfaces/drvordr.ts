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

import eradaniConnect from "@eradani-inc/eradani-connect";
const { dataTypes } = eradaniConnect;

/**
 * Output interface
 */
export interface TotalDistDS {
    /**
     * @size 1 characters
     */
    value: string,
    /**
     * @size 2 characters
     */
    unit_of_measure: string
}

/**
 * Output interface
 */
export interface ShippingDocsDS {
    /**
     * @size 14 characters
     */
    type: string,
    /**
     * @size 10 characters
     */
    value: string
}

/**
 * Output interface
 */
export interface shipdetailsDS {
    /**
     */
    hazmat: boolean,
    /**
     */
    high_value: boolean,
    /**
     */
    temperature_controlled: boolean,
    /**
     */
    total_distance: TotalDistDS,
    /**
     * @size 4 characters
     */
    line_of_business: string,
    /**
     * @size 20 characters
     */
    master_bill_of_lading: string,
    /**
     */
    shipping_documents: Array<SHippingDocsDS>,
    /**
     * @size 5 characters
     */
    truck_profile: string
}

/**
 * Output interface
 */
export interface RemarksDS {
    /**
     * @size 7 characters
     */
    label: string,
    /**
     * @size 29 characters
     */
    value: string,
    /**
     * @size 1 digits
     * @precision 0 decimals
     */
    order: number
}

/**
 * Output interface
 */
export interface promptsDS {
    /**
     */
    eta: boolean,
    /**
     */
    fuel: boolean,
    /**
     */
    eta_change_available: boolean,
    /**
     */
    update_fuel_available: boolean
}

/**
 * Output interface
 */
export interface assetDS {
    /**
     * @size 6 characters
     */
    external_id: string,
    /**
     * @size 10 characters
     */
    type: string,
    /**
     * @size 17 characters
     */
    vin: string
}

/**
 * Output interface
 */
export interface locationDS {
    /**
     * @size 9 digits
     * @precision 7 decimals
     */
    latitude: number,
    /**
     * @size 17 digits
     * @precision 14 decimals
     */
    longitude: number
}

/**
 * Output interface
 */
export interface MetaDS {
    /**
     */
    asset: assetDS,
    /**
     * @size 3 digits
     * @precision 1 decimals
     */
    fuel_level: number,
    /**
     */
    location: locationDS,
    /**
     * @size 8 digits
     * @precision 2 decimals
     */
    odometer: number,
    /**
     * @size 25 characters
     */
    timestamp: string
}

/**
 * Output interface
 */
export interface LocationsDS {
    /**
     * @size 16 digits
     * @precision 0 decimals
     */
    id: number,
    /**
     * @size 15 characters
     */
    external_id: string,
    /**
     * @size 50 characters
     */
    email: string,
    /**
     * @size 3 characters
     */
    type: string,
    /**
     * @size 12 characters
     */
    name: string,
    /**
     * @size 18 characters
     */
    address: string,
    /**
     * @size 12 characters
     */
    city: string,
    /**
     * @size 2 characters
     */
    state: string,
    /**
     * @size 2 characters
     */
    country_code: string,
    /**
     * @size 5 characters
     */
    postal_code: string,
    /**
     * @size 5 characters
     */
    postal_splc: string,
    /**
     * @size 8 digits
     * @precision 6 decimals
     */
    latitude: number,
    /**
     * @size 9 digits
     * @precision 6 decimals
     */
    longitude: number,
    /**
     * @size 10 characters
     */
    time_zone: string,
    /**
     * @size 5 characters
     */
    open_hours: string,
    /**
     * @size 5 characters
     */
    external_data: string,
    /**
     */
    is_inventory_location: boolean,
    /**
     * @size 25 characters
     */
    created_at: string,
    /**
     * @size 25 characters
     */
    updated_at: string
}

/**
 * Output interface
 */
export interface ExternalDS {
    /**
     * @size 8 characters
     */
    label: string,
    /**
     * @size 5 characters
     */
    value: string,
    /**
     * @size 1 digits
     * @precision 0 decimals
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
     */
    start_time: string,
    /**
     * @size 25 characters
     */
    ready_time: string,
    /**
     * @size 25 characters
     */
    late_time: string,
    /**
     * @size 25 characters
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
     */
    latitude: number,
    /**
     * @size 9 digits
     * @precision 6 decimals
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
     */
    delay: number,
    /**
     */
    auto_complete: boolean,
    /**
     * @size 5 characters
     */
    trigger_by: string,
    /**
     * @size 17 characters
     */
    message: string
}

/**
 * Output interface
 */
export interface external_dataDS {
    /**
     */
    is_prompt_repeats: boolean,
    /**
     */
    is_allow_repeats: boolean,
    /**
     */
    is_required: boolean,
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
     */
    Order#: string,
    /**
     * @size 1 characters
     */
    Tyepe: string,
    /**
     * @size 4 characters
     */
    PCS: string,
    /**
     * @size 5 characters
     */
    WGT: string,
    /**
     * @size 7 characters
     */
    TRIP: string,
    /**
     * @size 25 characters
     */
    Comment: string,
    /**
     * @size 1 characters
     */
    DSP: string,
    /**
     * @size 6 characters
     */
    Unit: string,
    /**
     * @size 10 characters
     */
    hiddenLatitude: string,
    /**
     * @size 11 characters
     */
    hiddenLongitude: string,
    /**
     * @size 15 characters
     */
    locname: string,
    /**
     * @size 18 characters
     */
    address: string,
    /**
     * @size 12 characters
     */
    city: string,
    /**
     * @size 2 characters
     */
    state: string,
    /**
     * @size 5 characters
     */
    zipcode: string,
    /**
     * @size 8 characters
     */
    stopkey: string,
    /**
     * @size 2 characters
     */
    stopseq: string,
    /**
     * @size 16 digits
     * @precision 0 decimals
     */
    user_id: number
}

/**
 * Output interface
 */
export interface TasksDS {
    /**
     * @size 16 digits
     * @precision 0 decimals
     */
    id: number,
    /**
     * @size 9 characters
     */
    external_id: string,
    /**
     * @size 19 characters
     */
    name: string,
    /**
     * @size 1 digits
     * @precision 0 decimals
     */
    order: number,
    /**
     * @size 19 characters
     */
    type: string,
    /**
     */
    completed: boolean,
    /**
     * @size 25 characters
     */
    completed_at: string,
    /**
     * @size 5 characters
     */
    completed_by: string,
    /**
     * @size 18 characters
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
     * @size 16 digits
     * @precision 0 decimals
     */
    id: number,
    /**
     * @size 17 characters
     */
    external_id: string,
    /**
     * @size 12 characters
     */
    name: string,
    /**
     */
    is_disabled: boolean,
    /**
     */
    is_skippable: boolean,
    /**
     */
    is_skipped: boolean,
    /**
     * @size 5 characters
     */
    skip_reason: string,
    /**
     */
    is_bypassable: boolean,
    /**
     */
    is_bypassed: boolean,
    /**
     * @size 5 characters
     */
    bypass_reason: string,
    /**
     */
    is_reorderable: boolean,
    /**
     * @size 5 characters
     */
    reorder_reason: string,
    /**
     */
    completed: boolean,
    /**
     * @size 25 characters
     */
    completed_at: string,
    /**
     * @size 4 characters
     */
    type: string,
    /**
     * @size 1 digits
     * @precision 0 decimals
     */
    order: number,
    /**
     * @size 15 characters
     */
    location_external_id: string,
    /**
     * @size 5 characters
     */
    route_leg_external_id: string,
    /**
     * @size 5 characters
     */
    customer_external_id: string,
    /**
     */
    appointment: appointmentDS,
    /**
     * @size 25 characters
     */
    eta: string,
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
    tasks: Array<TasksDS>
}

/**
 * Output interface
 */
export interface OrderReq {
    /**
     * @size 7 characters
     */
    order: string
}

/**
 * Convert OrderReq record to TypeScript object
 */
export function convertOrderReqToObject(dataIn: string): OrderReq {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.order = dataIn.substring(pos, pos + 7).trimEnd();
  pos += 7;

  return dataOut;
}

/**
 * Input interface
 */
export interface OrderRes {
    /**
     * @size 5 characters
     */
    drivers: Array<string>,
    /**
     * @size 16 digits
     * @precision 0 decimals
     */
    id: number,
    /**
     * @size 7 characters
     */
    external_id: string,
    /**
     * @size 7 characters
     */
    external_id_alias: string,
    /**
     * @size 10 characters
     */
    preplan_external_id: string,
    /**
     * @size 6 characters
     */
    status: string,
    /**
     * @size 1 characters
     */
    sequence: string,
    /**
     */
    shipment_details: shipdetailsDS,
    /**
     * @size 25 characters
     */
    received_at: string,
    /**
     * @size 25 characters
     */
    reviewed_at: string,
    /**
     * @size 25 characters
     */
    created_at: string,
    /**
     * @size 25 characters
     */
    updated_at: string,
    /**
     * @size 25 characters
     */
    modified_at: string,
    /**
     */
    remarks: Array<RemarksDS>,
    /**
     */
    prompts: promptsDS,
    /**
     */
    meta: Array<MetaDS>,
    /**
     */
    locations: Array<LocationDS>,
    /**
     */
    external_data: Array<ExternalDS>,
    /**
     */
    steps: Array<StepsDS>,
    /**
     */
    is_declinable: boolean
}

/**
 * Convert JavaScript object to OrderRes record
 */
export function convertObjectToOrderRes(dataIn: OrderRes): string {
  let dataOut: string = "";

  for (let i: number = 0; i < 1; ++i) {
  dataOut += dataIn?.drivers[i]?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.drivers[${i}]`, "char", dataIn?.drivers[i]);
  }
  dataOut += dataIn?.id?.toFixed(0)?.substring(0, 18)?.padEnd(18) ?? missingInput(`dataIn.id`, "packed", dataIn?.id);
  dataOut += dataIn?.external_id?.substring(0, 7)?.padEnd(7) ?? missingInput(`dataIn.external_id`, "char", dataIn?.external_id);
  dataOut += dataIn?.external_id_alias?.substring(0, 7)?.padEnd(7) ?? missingInput(`dataIn.external_id_alias`, "char", dataIn?.external_id_alias);
  dataOut += dataIn?.preplan_external_id?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.preplan_external_id`, "char", dataIn?.preplan_external_id);
  dataOut += dataIn?.status?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.status`, "char", dataIn?.status);
  dataOut += dataIn?.sequence?.substring(0, 1)?.padEnd(1) ?? missingInput(`dataIn.sequence`, "char", dataIn?.sequence);
  dataOut += (dataIn?.shipment_details?.hazmat !== undefined ? (dataIn?.shipment_details?.hazmat ? "1" : "0") : missingInput(`dataIn.shipment_details.hazmat`, "bool", dataIn?.shipment_details?.hazmat));
  dataOut += (dataIn?.shipment_details?.high_value !== undefined ? (dataIn?.shipment_details?.high_value ? "1" : "0") : missingInput(`dataIn.shipment_details.high_value`, "bool", dataIn?.shipment_details?.high_value));
  dataOut += (dataIn?.shipment_details?.temperature_controlled !== undefined ? (dataIn?.shipment_details?.temperature_controlled ? "1" : "0") : missingInput(`dataIn.shipment_details.temperature_controlled`, "bool", dataIn?.shipment_details?.temperature_controlled));
  dataOut += dataIn?.shipment_details?.total_distance?.value?.substring(0, 1)?.padEnd(1) ?? missingInput(`dataIn.shipment_details.total_distance.value`, "char", dataIn?.shipment_details?.total_distance?.value);
  dataOut += dataIn?.shipment_details?.total_distance?.unit_of_measure?.substring(0, 2)?.padEnd(2) ?? missingInput(`dataIn.shipment_details.total_distance.unit_of_measure`, "char", dataIn?.shipment_details?.total_distance?.unit_of_measure);
  dataOut += dataIn?.shipment_details?.line_of_business?.substring(0, 4)?.padEnd(4) ?? missingInput(`dataIn.shipment_details.line_of_business`, "char", dataIn?.shipment_details?.line_of_business);
  dataOut += dataIn?.shipment_details?.master_bill_of_lading?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.shipment_details.master_bill_of_lading`, "char", dataIn?.shipment_details?.master_bill_of_lading);
  for (let j: number = 0; j < 4; ++j) {

  }
  dataOut += dataIn?.shipment_details?.truck_profile?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.shipment_details.truck_profile`, "char", dataIn?.shipment_details?.truck_profile);
  dataOut += dataIn?.received_at?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.received_at`, "char", dataIn?.received_at);
  dataOut += dataIn?.reviewed_at?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.reviewed_at`, "char", dataIn?.reviewed_at);
  dataOut += dataIn?.created_at?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.created_at`, "char", dataIn?.created_at);
  dataOut += dataIn?.updated_at?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.updated_at`, "char", dataIn?.updated_at);
  dataOut += dataIn?.modified_at?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.modified_at`, "char", dataIn?.modified_at);
  for (let i: number = 0; i < 3; ++i) {
  dataOut += dataIn?.remarks[i]?.label?.substring(0, 7)?.padEnd(7) ?? missingInput(`dataIn.remarks[${i}].label`, "char", dataIn?.remarks[i]?.label);
  dataOut += dataIn?.remarks[i]?.value?.substring(0, 29)?.padEnd(29) ?? missingInput(`dataIn.remarks[${i}].value`, "char", dataIn?.remarks[i]?.value);
  dataOut += dataIn?.remarks[i]?.order?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.remarks[${i}].order`, "packed", dataIn?.remarks[i]?.order);
  }
  dataOut += (dataIn?.prompts?.eta !== undefined ? (dataIn?.prompts?.eta ? "1" : "0") : missingInput(`dataIn.prompts.eta`, "bool", dataIn?.prompts?.eta));
  dataOut += (dataIn?.prompts?.fuel !== undefined ? (dataIn?.prompts?.fuel ? "1" : "0") : missingInput(`dataIn.prompts.fuel`, "bool", dataIn?.prompts?.fuel));
  dataOut += (dataIn?.prompts?.eta_change_available !== undefined ? (dataIn?.prompts?.eta_change_available ? "1" : "0") : missingInput(`dataIn.prompts.eta_change_available`, "bool", dataIn?.prompts?.eta_change_available));
  dataOut += (dataIn?.prompts?.update_fuel_available !== undefined ? (dataIn?.prompts?.update_fuel_available ? "1" : "0") : missingInput(`dataIn.prompts.update_fuel_available`, "bool", dataIn?.prompts?.update_fuel_available));
  for (let i: number = 0; i < 9; ++i) {
  dataOut += dataIn?.meta[i]?.asset?.external_id?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.meta[${i}].asset.external_id`, "char", dataIn?.meta[i]?.asset?.external_id);
  dataOut += dataIn?.meta[i]?.asset?.type?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.meta[${i}].asset.type`, "char", dataIn?.meta[i]?.asset?.type);
  dataOut += dataIn?.meta[i]?.asset?.vin?.substring(0, 17)?.padEnd(17) ?? missingInput(`dataIn.meta[${i}].asset.vin`, "char", dataIn?.meta[i]?.asset?.vin);
  dataOut += dataIn?.meta[i]?.fuel_level?.toFixed(1)?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.meta[${i}].fuel_level`, "packed", dataIn?.meta[i]?.fuel_level);
  dataOut += dataIn?.meta[i]?.location?.latitude?.toFixed(7)?.substring(0, 11)?.padEnd(11) ?? missingInput(`dataIn.meta[${i}].location.latitude`, "packed", dataIn?.meta[i]?.location?.latitude);
  dataOut += dataIn?.meta[i]?.location?.longitude?.toFixed(14)?.substring(0, 19)?.padEnd(19) ?? missingInput(`dataIn.meta[${i}].location.longitude`, "packed", dataIn?.meta[i]?.location?.longitude);
  dataOut += dataIn?.meta[i]?.odometer?.toFixed(2)?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.meta[${i}].odometer`, "packed", dataIn?.meta[i]?.odometer);
  dataOut += dataIn?.meta[i]?.timestamp?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.meta[${i}].timestamp`, "char", dataIn?.meta[i]?.timestamp);
  }
  for (let i: number = 0; i < 4; ++i) {

  }
  for (let i: number = 0; i < 4; ++i) {
  dataOut += dataIn?.external_data[i]?.label?.substring(0, 8)?.padEnd(8) ?? missingInput(`dataIn.external_data[${i}].label`, "char", dataIn?.external_data[i]?.label);
  dataOut += dataIn?.external_data[i]?.value?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.external_data[${i}].value`, "char", dataIn?.external_data[i]?.value);
  dataOut += dataIn?.external_data[i]?.order?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.external_data[${i}].order`, "packed", dataIn?.external_data[i]?.order);
  dataOut += (dataIn?.external_data[i]?.isLabel !== undefined ? (dataIn?.external_data[i]?.isLabel ? "1" : "0") : missingInput(`dataIn.external_data[${i}].isLabel`, "bool", dataIn?.external_data[i]?.isLabel));
  }
  for (let i: number = 0; i < 4; ++i) {
  dataOut += dataIn?.steps[i]?.id?.toFixed(0)?.substring(0, 18)?.padEnd(18) ?? missingInput(`dataIn.steps[${i}].id`, "packed", dataIn?.steps[i]?.id);
  dataOut += dataIn?.steps[i]?.external_id?.substring(0, 17)?.padEnd(17) ?? missingInput(`dataIn.steps[${i}].external_id`, "char", dataIn?.steps[i]?.external_id);
  dataOut += dataIn?.steps[i]?.name?.substring(0, 12)?.padEnd(12) ?? missingInput(`dataIn.steps[${i}].name`, "char", dataIn?.steps[i]?.name);
  dataOut += (dataIn?.steps[i]?.is_disabled !== undefined ? (dataIn?.steps[i]?.is_disabled ? "1" : "0") : missingInput(`dataIn.steps[${i}].is_disabled`, "bool", dataIn?.steps[i]?.is_disabled));
  dataOut += (dataIn?.steps[i]?.is_skippable !== undefined ? (dataIn?.steps[i]?.is_skippable ? "1" : "0") : missingInput(`dataIn.steps[${i}].is_skippable`, "bool", dataIn?.steps[i]?.is_skippable));
  dataOut += (dataIn?.steps[i]?.is_skipped !== undefined ? (dataIn?.steps[i]?.is_skipped ? "1" : "0") : missingInput(`dataIn.steps[${i}].is_skipped`, "bool", dataIn?.steps[i]?.is_skipped));
  dataOut += dataIn?.steps[i]?.skip_reason?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.steps[${i}].skip_reason`, "char", dataIn?.steps[i]?.skip_reason);
  dataOut += (dataIn?.steps[i]?.is_bypassable !== undefined ? (dataIn?.steps[i]?.is_bypassable ? "1" : "0") : missingInput(`dataIn.steps[${i}].is_bypassable`, "bool", dataIn?.steps[i]?.is_bypassable));
  dataOut += (dataIn?.steps[i]?.is_bypassed !== undefined ? (dataIn?.steps[i]?.is_bypassed ? "1" : "0") : missingInput(`dataIn.steps[${i}].is_bypassed`, "bool", dataIn?.steps[i]?.is_bypassed));
  dataOut += dataIn?.steps[i]?.bypass_reason?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.steps[${i}].bypass_reason`, "char", dataIn?.steps[i]?.bypass_reason);
  dataOut += (dataIn?.steps[i]?.is_reorderable !== undefined ? (dataIn?.steps[i]?.is_reorderable ? "1" : "0") : missingInput(`dataIn.steps[${i}].is_reorderable`, "bool", dataIn?.steps[i]?.is_reorderable));
  dataOut += dataIn?.steps[i]?.reorder_reason?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.steps[${i}].reorder_reason`, "char", dataIn?.steps[i]?.reorder_reason);
  dataOut += (dataIn?.steps[i]?.completed !== undefined ? (dataIn?.steps[i]?.completed ? "1" : "0") : missingInput(`dataIn.steps[${i}].completed`, "bool", dataIn?.steps[i]?.completed));
  dataOut += dataIn?.steps[i]?.completed_at?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.steps[${i}].completed_at`, "char", dataIn?.steps[i]?.completed_at);
  dataOut += dataIn?.steps[i]?.type?.substring(0, 4)?.padEnd(4) ?? missingInput(`dataIn.steps[${i}].type`, "char", dataIn?.steps[i]?.type);
  dataOut += dataIn?.steps[i]?.order?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.steps[${i}].order`, "packed", dataIn?.steps[i]?.order);
  dataOut += dataIn?.steps[i]?.location_external_id?.substring(0, 15)?.padEnd(15) ?? missingInput(`dataIn.steps[${i}].location_external_id`, "char", dataIn?.steps[i]?.location_external_id);
  dataOut += dataIn?.steps[i]?.route_leg_external_id?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.steps[${i}].route_leg_external_id`, "char", dataIn?.steps[i]?.route_leg_external_id);
  dataOut += dataIn?.steps[i]?.customer_external_id?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.steps[${i}].customer_external_id`, "char", dataIn?.steps[i]?.customer_external_id);
  dataOut += dataIn?.steps[i]?.appointment?.start_time?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.steps[${i}].appointment.start_time`, "char", dataIn?.steps[i]?.appointment?.start_time);
  dataOut += dataIn?.steps[i]?.appointment?.ready_time?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.steps[${i}].appointment.ready_time`, "char", dataIn?.steps[i]?.appointment?.ready_time);
  dataOut += dataIn?.steps[i]?.appointment?.late_time?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.steps[${i}].appointment.late_time`, "char", dataIn?.steps[i]?.appointment?.late_time);
  dataOut += dataIn?.steps[i]?.appointment?.end_time?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.steps[${i}].appointment.end_time`, "char", dataIn?.steps[i]?.appointment?.end_time);
  dataOut += dataIn?.steps[i]?.eta?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.steps[${i}].eta`, "char", dataIn?.steps[i]?.eta);
  dataOut += dataIn?.steps[i]?.created_at?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.steps[${i}].created_at`, "char", dataIn?.steps[i]?.created_at);
  dataOut += dataIn?.steps[i]?.updated_at?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.steps[${i}].updated_at`, "char", dataIn?.steps[i]?.updated_at);
  for (let k: number = 0; k < 3; ++k) {
  dataOut += dataIn?.steps[i]?.tasks[k]?.id?.toFixed(0)?.substring(0, 18)?.padEnd(18) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].id`, "packed", dataIn?.steps[i]?.tasks[k]?.id);
  dataOut += dataIn?.steps[i]?.tasks[k]?.external_id?.substring(0, 9)?.padEnd(9) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].external_id`, "char", dataIn?.steps[i]?.tasks[k]?.external_id);
  dataOut += dataIn?.steps[i]?.tasks[k]?.name?.substring(0, 19)?.padEnd(19) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].name`, "char", dataIn?.steps[i]?.tasks[k]?.name);
  dataOut += dataIn?.steps[i]?.tasks[k]?.order?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].order`, "packed", dataIn?.steps[i]?.tasks[k]?.order);
  dataOut += dataIn?.steps[i]?.tasks[k]?.type?.substring(0, 19)?.padEnd(19) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].type`, "char", dataIn?.steps[i]?.tasks[k]?.type);
  dataOut += (dataIn?.steps[i]?.tasks[k]?.completed !== undefined ? (dataIn?.steps[i]?.tasks[k]?.completed ? "1" : "0") : missingInput(`dataIn.steps[${i}].tasks[${k}].completed`, "bool", dataIn?.steps[i]?.tasks[k]?.completed));
  dataOut += dataIn?.steps[i]?.tasks[k]?.completed_at?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].completed_at`, "char", dataIn?.steps[i]?.tasks[k]?.completed_at);
  dataOut += dataIn?.steps[i]?.tasks[k]?.completed_by?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].completed_by`, "char", dataIn?.steps[i]?.tasks[k]?.completed_by);
  dataOut += dataIn?.steps[i]?.tasks[k]?.completion_type?.substring(0, 18)?.padEnd(18) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].completion_type`, "char", dataIn?.steps[i]?.tasks[k]?.completion_type);
  dataOut += dataIn?.steps[i]?.tasks[k]?.created_at?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].created_at`, "char", dataIn?.steps[i]?.tasks[k]?.created_at);
  dataOut += dataIn?.steps[i]?.tasks[k]?.updated_at?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].updated_at`, "char", dataIn?.steps[i]?.tasks[k]?.updated_at);
  dataOut += (dataIn?.steps[i]?.tasks[k]?.external_data?.is_prompt_repeats !== undefined ? (dataIn?.steps[i]?.tasks[k]?.external_data?.is_prompt_repeats ? "1" : "0") : missingInput(`dataIn.steps[${i}].tasks[${k}].external_data.is_prompt_repeats`, "bool", dataIn?.steps[i]?.tasks[k]?.external_data?.is_prompt_repeats));
  dataOut += (dataIn?.steps[i]?.tasks[k]?.external_data?.is_allow_repeats !== undefined ? (dataIn?.steps[i]?.tasks[k]?.external_data?.is_allow_repeats ? "1" : "0") : missingInput(`dataIn.steps[${i}].tasks[${k}].external_data.is_allow_repeats`, "bool", dataIn?.steps[i]?.tasks[k]?.external_data?.is_allow_repeats));
  dataOut += (dataIn?.steps[i]?.tasks[k]?.external_data?.is_required !== undefined ? (dataIn?.steps[i]?.tasks[k]?.external_data?.is_required ? "1" : "0") : missingInput(`dataIn.steps[${i}].tasks[${k}].external_data.is_required`, "bool", dataIn?.steps[i]?.tasks[k]?.external_data?.is_required));
  dataOut += dataIn?.steps[i]?.tasks[k]?.external_data?.geofence?.circle?.center?.latitude?.toFixed(6)?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].external_data.geofence.circle.center.latitude`, "packed", dataIn?.steps[i]?.tasks[k]?.external_data?.geofence?.circle?.center?.latitude);
  dataOut += dataIn?.steps[i]?.tasks[k]?.external_data?.geofence?.circle?.center?.longitude?.toFixed(6)?.substring(0, 11)?.padEnd(11) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].external_data.geofence.circle.center.longitude`, "packed", dataIn?.steps[i]?.tasks[k]?.external_data?.geofence?.circle?.center?.longitude);
  dataOut += dataIn?.steps[i]?.tasks[k]?.external_data?.geofence?.circle?.radius?.toFixed(0)?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].external_data.geofence.circle.radius`, "packed", dataIn?.steps[i]?.tasks[k]?.external_data?.geofence?.circle?.radius);
  dataOut += dataIn?.steps[i]?.tasks[k]?.external_data?.geofence?.delay?.toFixed(0)?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].external_data.geofence.delay`, "packed", dataIn?.steps[i]?.tasks[k]?.external_data?.geofence?.delay);
  dataOut += (dataIn?.steps[i]?.tasks[k]?.external_data?.geofence?.auto_complete !== undefined ? (dataIn?.steps[i]?.tasks[k]?.external_data?.geofence?.auto_complete ? "1" : "0") : missingInput(`dataIn.steps[${i}].tasks[${k}].external_data.geofence.auto_complete`, "bool", dataIn?.steps[i]?.tasks[k]?.external_data?.geofence?.auto_complete));
  dataOut += dataIn?.steps[i]?.tasks[k]?.external_data?.geofence?.trigger_by?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].external_data.geofence.trigger_by`, "char", dataIn?.steps[i]?.tasks[k]?.external_data?.geofence?.trigger_by);
  dataOut += dataIn?.steps[i]?.tasks[k]?.external_data?.geofence?.message?.substring(0, 17)?.padEnd(17) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].external_data.geofence.message`, "char", dataIn?.steps[i]?.tasks[k]?.external_data?.geofence?.message);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.Order#?.substring(0, 7)?.padEnd(7) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].fields.Order#`, "char", dataIn?.steps[i]?.tasks[k]?.fields?.Order#);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.Tyepe?.substring(0, 1)?.padEnd(1) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].fields.Tyepe`, "char", dataIn?.steps[i]?.tasks[k]?.fields?.Tyepe);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.PCS?.substring(0, 4)?.padEnd(4) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].fields.PCS`, "char", dataIn?.steps[i]?.tasks[k]?.fields?.PCS);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.WGT?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].fields.WGT`, "char", dataIn?.steps[i]?.tasks[k]?.fields?.WGT);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.TRIP?.substring(0, 7)?.padEnd(7) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].fields.TRIP`, "char", dataIn?.steps[i]?.tasks[k]?.fields?.TRIP);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.Comment?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].fields.Comment`, "char", dataIn?.steps[i]?.tasks[k]?.fields?.Comment);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.DSP?.substring(0, 1)?.padEnd(1) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].fields.DSP`, "char", dataIn?.steps[i]?.tasks[k]?.fields?.DSP);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.Unit?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].fields.Unit`, "char", dataIn?.steps[i]?.tasks[k]?.fields?.Unit);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.hiddenLatitude?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].fields.hiddenLatitude`, "char", dataIn?.steps[i]?.tasks[k]?.fields?.hiddenLatitude);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.hiddenLongitude?.substring(0, 11)?.padEnd(11) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].fields.hiddenLongitude`, "char", dataIn?.steps[i]?.tasks[k]?.fields?.hiddenLongitude);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.locname?.substring(0, 15)?.padEnd(15) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].fields.locname`, "char", dataIn?.steps[i]?.tasks[k]?.fields?.locname);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.address?.substring(0, 18)?.padEnd(18) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].fields.address`, "char", dataIn?.steps[i]?.tasks[k]?.fields?.address);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.city?.substring(0, 12)?.padEnd(12) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].fields.city`, "char", dataIn?.steps[i]?.tasks[k]?.fields?.city);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.state?.substring(0, 2)?.padEnd(2) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].fields.state`, "char", dataIn?.steps[i]?.tasks[k]?.fields?.state);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.zipcode?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].fields.zipcode`, "char", dataIn?.steps[i]?.tasks[k]?.fields?.zipcode);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.stopkey?.substring(0, 8)?.padEnd(8) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].fields.stopkey`, "char", dataIn?.steps[i]?.tasks[k]?.fields?.stopkey);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.stopseq?.substring(0, 2)?.padEnd(2) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].fields.stopseq`, "char", dataIn?.steps[i]?.tasks[k]?.fields?.stopseq);
  dataOut += dataIn?.steps[i]?.tasks[k]?.fields?.user_id?.toFixed(0)?.substring(0, 18)?.padEnd(18) ?? missingInput(`dataIn.steps[${i}].tasks[${k}].fields.user_id`, "packed", dataIn?.steps[i]?.tasks[k]?.fields?.user_id);
  }
  }
  dataOut += (dataIn?.is_declinable !== undefined ? (dataIn?.is_declinable ? "1" : "0") : missingInput(`dataIn.is_declinable`, "bool", dataIn?.is_declinable));

  return dataOut;
}

/* eslint-enable */

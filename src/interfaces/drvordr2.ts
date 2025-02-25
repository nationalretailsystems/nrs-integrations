/* eslint-disable */
// @ts-nocheck
// Module: drvordr2
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
    shipping_documents: Array<ShippingDocsDS>,
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
    OrderNum: string,
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
export interface OrderResDS {
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
    locations: Array<locationDS>,
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
 * Output interface
 */
export interface OrdReq {
    /**
     * @size 7 characters
     */
    orderin: string,
    /**
     * @size 6 characters
     */
    driverin: string
}

/**
 * Convert OrdReq record to TypeScript object
 */
export function convertOrdReqToObject(dataIn: string): OrdReq {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.orderin = dataIn.substring(pos, pos + 7).trimEnd();
  pos += 7;
  dataOut.driverin = dataIn.substring(pos, pos + 6).trimEnd();
  pos += 6;

  return dataOut;
}

/**
 * Input interface
 */
export interface OrdRes {
    /**
     */
    order: OrderResDS
}

/**
 * Convert JavaScript object to OrdRes record
 */
export function convertObjectToOrdRes(dataIn: OrdRes): string {
  let dataOut: string = "";

  for (let j: number = 0; j < 1; ++j) {
  dataOut += dataIn?.order?.drivers[j]?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.order.drivers[${j}]`, "char", dataIn?.order?.drivers[j]);
  }
  dataOut += dataIn?.order?.id?.toFixed(0)?.substring(0, 18)?.padEnd(18) ?? missingInput(`dataIn.order.id`, "packed", dataIn?.order?.id);
  dataOut += dataIn?.order?.external_id?.substring(0, 7)?.padEnd(7) ?? missingInput(`dataIn.order.external_id`, "char", dataIn?.order?.external_id);
  dataOut += dataIn?.order?.external_id_alias?.substring(0, 7)?.padEnd(7) ?? missingInput(`dataIn.order.external_id_alias`, "char", dataIn?.order?.external_id_alias);
  dataOut += dataIn?.order?.preplan_external_id?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.order.preplan_external_id`, "char", dataIn?.order?.preplan_external_id);
  dataOut += dataIn?.order?.status?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.order.status`, "char", dataIn?.order?.status);
  dataOut += dataIn?.order?.sequence?.substring(0, 1)?.padEnd(1) ?? missingInput(`dataIn.order.sequence`, "char", dataIn?.order?.sequence);
  dataOut += (dataIn?.order?.shipment_details?.hazmat !== undefined ? (dataIn?.order?.shipment_details?.hazmat ? "1" : "0") : missingInput(`dataIn.order.shipment_details.hazmat`, "bool", dataIn?.order?.shipment_details?.hazmat));
  dataOut += (dataIn?.order?.shipment_details?.high_value !== undefined ? (dataIn?.order?.shipment_details?.high_value ? "1" : "0") : missingInput(`dataIn.order.shipment_details.high_value`, "bool", dataIn?.order?.shipment_details?.high_value));
  dataOut += (dataIn?.order?.shipment_details?.temperature_controlled !== undefined ? (dataIn?.order?.shipment_details?.temperature_controlled ? "1" : "0") : missingInput(`dataIn.order.shipment_details.temperature_controlled`, "bool", dataIn?.order?.shipment_details?.temperature_controlled));
  dataOut += dataIn?.order?.shipment_details?.total_distance?.value?.substring(0, 1)?.padEnd(1) ?? missingInput(`dataIn.order.shipment_details.total_distance.value`, "char", dataIn?.order?.shipment_details?.total_distance?.value);
  dataOut += dataIn?.order?.shipment_details?.total_distance?.unit_of_measure?.substring(0, 2)?.padEnd(2) ?? missingInput(`dataIn.order.shipment_details.total_distance.unit_of_measure`, "char", dataIn?.order?.shipment_details?.total_distance?.unit_of_measure);
  dataOut += dataIn?.order?.shipment_details?.line_of_business?.substring(0, 4)?.padEnd(4) ?? missingInput(`dataIn.order.shipment_details.line_of_business`, "char", dataIn?.order?.shipment_details?.line_of_business);
  dataOut += dataIn?.order?.shipment_details?.master_bill_of_lading?.substring(0, 20)?.padEnd(20) ?? missingInput(`dataIn.order.shipment_details.master_bill_of_lading`, "char", dataIn?.order?.shipment_details?.master_bill_of_lading);
  for (let k: number = 0; k < 4; ++k) {
  dataOut += dataIn?.order?.shipment_details?.shipping_documents[k]?.type?.substring(0, 14)?.padEnd(14) ?? missingInput(`dataIn.order.shipment_details.shipping_documents[${k}].type`, "char", dataIn?.order?.shipment_details?.shipping_documents[k]?.type);
  dataOut += dataIn?.order?.shipment_details?.shipping_documents[k]?.value?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.order.shipment_details.shipping_documents[${k}].value`, "char", dataIn?.order?.shipment_details?.shipping_documents[k]?.value);
  }
  dataOut += dataIn?.order?.shipment_details?.truck_profile?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.order.shipment_details.truck_profile`, "char", dataIn?.order?.shipment_details?.truck_profile);
  dataOut += dataIn?.order?.received_at?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.order.received_at`, "char", dataIn?.order?.received_at);
  dataOut += dataIn?.order?.reviewed_at?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.order.reviewed_at`, "char", dataIn?.order?.reviewed_at);
  dataOut += dataIn?.order?.created_at?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.order.created_at`, "char", dataIn?.order?.created_at);
  dataOut += dataIn?.order?.updated_at?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.order.updated_at`, "char", dataIn?.order?.updated_at);
  dataOut += dataIn?.order?.modified_at?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.order.modified_at`, "char", dataIn?.order?.modified_at);
  for (let j: number = 0; j < 3; ++j) {
  dataOut += dataIn?.order?.remarks[j]?.label?.substring(0, 7)?.padEnd(7) ?? missingInput(`dataIn.order.remarks[${j}].label`, "char", dataIn?.order?.remarks[j]?.label);
  dataOut += dataIn?.order?.remarks[j]?.value?.substring(0, 29)?.padEnd(29) ?? missingInput(`dataIn.order.remarks[${j}].value`, "char", dataIn?.order?.remarks[j]?.value);
  dataOut += dataIn?.order?.remarks[j]?.order?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.order.remarks[${j}].order`, "packed", dataIn?.order?.remarks[j]?.order);
  }
  dataOut += (dataIn?.order?.prompts?.eta !== undefined ? (dataIn?.order?.prompts?.eta ? "1" : "0") : missingInput(`dataIn.order.prompts.eta`, "bool", dataIn?.order?.prompts?.eta));
  dataOut += (dataIn?.order?.prompts?.fuel !== undefined ? (dataIn?.order?.prompts?.fuel ? "1" : "0") : missingInput(`dataIn.order.prompts.fuel`, "bool", dataIn?.order?.prompts?.fuel));
  dataOut += (dataIn?.order?.prompts?.eta_change_available !== undefined ? (dataIn?.order?.prompts?.eta_change_available ? "1" : "0") : missingInput(`dataIn.order.prompts.eta_change_available`, "bool", dataIn?.order?.prompts?.eta_change_available));
  dataOut += (dataIn?.order?.prompts?.update_fuel_available !== undefined ? (dataIn?.order?.prompts?.update_fuel_available ? "1" : "0") : missingInput(`dataIn.order.prompts.update_fuel_available`, "bool", dataIn?.order?.prompts?.update_fuel_available));
  for (let j: number = 0; j < 9; ++j) {
  dataOut += dataIn?.order?.meta[j]?.asset?.external_id?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.order.meta[${j}].asset.external_id`, "char", dataIn?.order?.meta[j]?.asset?.external_id);
  dataOut += dataIn?.order?.meta[j]?.asset?.type?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.order.meta[${j}].asset.type`, "char", dataIn?.order?.meta[j]?.asset?.type);
  dataOut += dataIn?.order?.meta[j]?.asset?.vin?.substring(0, 17)?.padEnd(17) ?? missingInput(`dataIn.order.meta[${j}].asset.vin`, "char", dataIn?.order?.meta[j]?.asset?.vin);
  dataOut += dataIn?.order?.meta[j]?.fuel_level?.toFixed(1)?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.order.meta[${j}].fuel_level`, "packed", dataIn?.order?.meta[j]?.fuel_level);
  dataOut += dataIn?.order?.meta[j]?.location?.latitude?.toFixed(7)?.substring(0, 11)?.padEnd(11) ?? missingInput(`dataIn.order.meta[${j}].location.latitude`, "packed", dataIn?.order?.meta[j]?.location?.latitude);
  dataOut += dataIn?.order?.meta[j]?.location?.longitude?.toFixed(14)?.substring(0, 19)?.padEnd(19) ?? missingInput(`dataIn.order.meta[${j}].location.longitude`, "packed", dataIn?.order?.meta[j]?.location?.longitude);
  dataOut += dataIn?.order?.meta[j]?.odometer?.toFixed(2)?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.order.meta[${j}].odometer`, "packed", dataIn?.order?.meta[j]?.odometer);
  dataOut += dataIn?.order?.meta[j]?.timestamp?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.order.meta[${j}].timestamp`, "char", dataIn?.order?.meta[j]?.timestamp);
  }
  for (let j: number = 0; j < 4; ++j) {
  dataOut += dataIn?.order?.locations[j]?.latitude?.toFixed(7)?.substring(0, 11)?.padEnd(11) ?? missingInput(`dataIn.order.locations[${j}].latitude`, "packed", dataIn?.order?.locations[j]?.latitude);
  dataOut += dataIn?.order?.locations[j]?.longitude?.toFixed(14)?.substring(0, 19)?.padEnd(19) ?? missingInput(`dataIn.order.locations[${j}].longitude`, "packed", dataIn?.order?.locations[j]?.longitude);
  }
  for (let j: number = 0; j < 4; ++j) {
  dataOut += dataIn?.order?.external_data[j]?.label?.substring(0, 8)?.padEnd(8) ?? missingInput(`dataIn.order.external_data[${j}].label`, "char", dataIn?.order?.external_data[j]?.label);
  dataOut += dataIn?.order?.external_data[j]?.value?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.order.external_data[${j}].value`, "char", dataIn?.order?.external_data[j]?.value);
  dataOut += dataIn?.order?.external_data[j]?.order?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.order.external_data[${j}].order`, "packed", dataIn?.order?.external_data[j]?.order);
  dataOut += (dataIn?.order?.external_data[j]?.isLabel !== undefined ? (dataIn?.order?.external_data[j]?.isLabel ? "1" : "0") : missingInput(`dataIn.order.external_data[${j}].isLabel`, "bool", dataIn?.order?.external_data[j]?.isLabel));
  }
  for (let j: number = 0; j < 4; ++j) {
  dataOut += dataIn?.order?.steps[j]?.id?.toFixed(0)?.substring(0, 18)?.padEnd(18) ?? missingInput(`dataIn.order.steps[${j}].id`, "packed", dataIn?.order?.steps[j]?.id);
  dataOut += dataIn?.order?.steps[j]?.external_id?.substring(0, 17)?.padEnd(17) ?? missingInput(`dataIn.order.steps[${j}].external_id`, "char", dataIn?.order?.steps[j]?.external_id);
  dataOut += dataIn?.order?.steps[j]?.name?.substring(0, 12)?.padEnd(12) ?? missingInput(`dataIn.order.steps[${j}].name`, "char", dataIn?.order?.steps[j]?.name);
  dataOut += (dataIn?.order?.steps[j]?.is_disabled !== undefined ? (dataIn?.order?.steps[j]?.is_disabled ? "1" : "0") : missingInput(`dataIn.order.steps[${j}].is_disabled`, "bool", dataIn?.order?.steps[j]?.is_disabled));
  dataOut += (dataIn?.order?.steps[j]?.is_skippable !== undefined ? (dataIn?.order?.steps[j]?.is_skippable ? "1" : "0") : missingInput(`dataIn.order.steps[${j}].is_skippable`, "bool", dataIn?.order?.steps[j]?.is_skippable));
  dataOut += (dataIn?.order?.steps[j]?.is_skipped !== undefined ? (dataIn?.order?.steps[j]?.is_skipped ? "1" : "0") : missingInput(`dataIn.order.steps[${j}].is_skipped`, "bool", dataIn?.order?.steps[j]?.is_skipped));
  dataOut += dataIn?.order?.steps[j]?.skip_reason?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.order.steps[${j}].skip_reason`, "char", dataIn?.order?.steps[j]?.skip_reason);
  dataOut += (dataIn?.order?.steps[j]?.is_bypassable !== undefined ? (dataIn?.order?.steps[j]?.is_bypassable ? "1" : "0") : missingInput(`dataIn.order.steps[${j}].is_bypassable`, "bool", dataIn?.order?.steps[j]?.is_bypassable));
  dataOut += (dataIn?.order?.steps[j]?.is_bypassed !== undefined ? (dataIn?.order?.steps[j]?.is_bypassed ? "1" : "0") : missingInput(`dataIn.order.steps[${j}].is_bypassed`, "bool", dataIn?.order?.steps[j]?.is_bypassed));
  dataOut += dataIn?.order?.steps[j]?.bypass_reason?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.order.steps[${j}].bypass_reason`, "char", dataIn?.order?.steps[j]?.bypass_reason);
  dataOut += (dataIn?.order?.steps[j]?.is_reorderable !== undefined ? (dataIn?.order?.steps[j]?.is_reorderable ? "1" : "0") : missingInput(`dataIn.order.steps[${j}].is_reorderable`, "bool", dataIn?.order?.steps[j]?.is_reorderable));
  dataOut += dataIn?.order?.steps[j]?.reorder_reason?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.order.steps[${j}].reorder_reason`, "char", dataIn?.order?.steps[j]?.reorder_reason);
  dataOut += (dataIn?.order?.steps[j]?.completed !== undefined ? (dataIn?.order?.steps[j]?.completed ? "1" : "0") : missingInput(`dataIn.order.steps[${j}].completed`, "bool", dataIn?.order?.steps[j]?.completed));
  dataOut += dataIn?.order?.steps[j]?.completed_at?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.order.steps[${j}].completed_at`, "char", dataIn?.order?.steps[j]?.completed_at);
  dataOut += dataIn?.order?.steps[j]?.type?.substring(0, 4)?.padEnd(4) ?? missingInput(`dataIn.order.steps[${j}].type`, "char", dataIn?.order?.steps[j]?.type);
  dataOut += dataIn?.order?.steps[j]?.order?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.order.steps[${j}].order`, "packed", dataIn?.order?.steps[j]?.order);
  dataOut += dataIn?.order?.steps[j]?.location_external_id?.substring(0, 15)?.padEnd(15) ?? missingInput(`dataIn.order.steps[${j}].location_external_id`, "char", dataIn?.order?.steps[j]?.location_external_id);
  dataOut += dataIn?.order?.steps[j]?.route_leg_external_id?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.order.steps[${j}].route_leg_external_id`, "char", dataIn?.order?.steps[j]?.route_leg_external_id);
  dataOut += dataIn?.order?.steps[j]?.customer_external_id?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.order.steps[${j}].customer_external_id`, "char", dataIn?.order?.steps[j]?.customer_external_id);
  dataOut += dataIn?.order?.steps[j]?.appointment?.start_time?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.order.steps[${j}].appointment.start_time`, "char", dataIn?.order?.steps[j]?.appointment?.start_time);
  dataOut += dataIn?.order?.steps[j]?.appointment?.ready_time?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.order.steps[${j}].appointment.ready_time`, "char", dataIn?.order?.steps[j]?.appointment?.ready_time);
  dataOut += dataIn?.order?.steps[j]?.appointment?.late_time?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.order.steps[${j}].appointment.late_time`, "char", dataIn?.order?.steps[j]?.appointment?.late_time);
  dataOut += dataIn?.order?.steps[j]?.appointment?.end_time?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.order.steps[${j}].appointment.end_time`, "char", dataIn?.order?.steps[j]?.appointment?.end_time);
  dataOut += dataIn?.order?.steps[j]?.eta?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.order.steps[${j}].eta`, "char", dataIn?.order?.steps[j]?.eta);
  dataOut += dataIn?.order?.steps[j]?.created_at?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.order.steps[${j}].created_at`, "char", dataIn?.order?.steps[j]?.created_at);
  dataOut += dataIn?.order?.steps[j]?.updated_at?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.order.steps[${j}].updated_at`, "char", dataIn?.order?.steps[j]?.updated_at);
  for (let l: number = 0; l < 3; ++l) {
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.id?.toFixed(0)?.substring(0, 18)?.padEnd(18) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].id`, "packed", dataIn?.order?.steps[j]?.tasks[l]?.id);
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.external_id?.substring(0, 9)?.padEnd(9) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].external_id`, "char", dataIn?.order?.steps[j]?.tasks[l]?.external_id);
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.name?.substring(0, 19)?.padEnd(19) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].name`, "char", dataIn?.order?.steps[j]?.tasks[l]?.name);
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.order?.toFixed(0)?.substring(0, 3)?.padEnd(3) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].order`, "packed", dataIn?.order?.steps[j]?.tasks[l]?.order);
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.type?.substring(0, 19)?.padEnd(19) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].type`, "char", dataIn?.order?.steps[j]?.tasks[l]?.type);
  dataOut += (dataIn?.order?.steps[j]?.tasks[l]?.completed !== undefined ? (dataIn?.order?.steps[j]?.tasks[l]?.completed ? "1" : "0") : missingInput(`dataIn.order.steps[${j}].tasks[${l}].completed`, "bool", dataIn?.order?.steps[j]?.tasks[l]?.completed));
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.completed_at?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].completed_at`, "char", dataIn?.order?.steps[j]?.tasks[l]?.completed_at);
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.completed_by?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].completed_by`, "char", dataIn?.order?.steps[j]?.tasks[l]?.completed_by);
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.completion_type?.substring(0, 18)?.padEnd(18) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].completion_type`, "char", dataIn?.order?.steps[j]?.tasks[l]?.completion_type);
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.created_at?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].created_at`, "char", dataIn?.order?.steps[j]?.tasks[l]?.created_at);
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.updated_at?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].updated_at`, "char", dataIn?.order?.steps[j]?.tasks[l]?.updated_at);
  dataOut += (dataIn?.order?.steps[j]?.tasks[l]?.external_data?.is_prompt_repeats !== undefined ? (dataIn?.order?.steps[j]?.tasks[l]?.external_data?.is_prompt_repeats ? "1" : "0") : missingInput(`dataIn.order.steps[${j}].tasks[${l}].external_data.is_prompt_repeats`, "bool", dataIn?.order?.steps[j]?.tasks[l]?.external_data?.is_prompt_repeats));
  dataOut += (dataIn?.order?.steps[j]?.tasks[l]?.external_data?.is_allow_repeats !== undefined ? (dataIn?.order?.steps[j]?.tasks[l]?.external_data?.is_allow_repeats ? "1" : "0") : missingInput(`dataIn.order.steps[${j}].tasks[${l}].external_data.is_allow_repeats`, "bool", dataIn?.order?.steps[j]?.tasks[l]?.external_data?.is_allow_repeats));
  dataOut += (dataIn?.order?.steps[j]?.tasks[l]?.external_data?.is_required !== undefined ? (dataIn?.order?.steps[j]?.tasks[l]?.external_data?.is_required ? "1" : "0") : missingInput(`dataIn.order.steps[${j}].tasks[${l}].external_data.is_required`, "bool", dataIn?.order?.steps[j]?.tasks[l]?.external_data?.is_required));
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.external_data?.geofence?.circle?.center?.latitude?.toFixed(6)?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].external_data.geofence.circle.center.latitude`, "packed", dataIn?.order?.steps[j]?.tasks[l]?.external_data?.geofence?.circle?.center?.latitude);
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.external_data?.geofence?.circle?.center?.longitude?.toFixed(6)?.substring(0, 11)?.padEnd(11) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].external_data.geofence.circle.center.longitude`, "packed", dataIn?.order?.steps[j]?.tasks[l]?.external_data?.geofence?.circle?.center?.longitude);
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.external_data?.geofence?.circle?.radius?.toFixed(0)?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].external_data.geofence.circle.radius`, "packed", dataIn?.order?.steps[j]?.tasks[l]?.external_data?.geofence?.circle?.radius);
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.external_data?.geofence?.delay?.toFixed(0)?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].external_data.geofence.delay`, "packed", dataIn?.order?.steps[j]?.tasks[l]?.external_data?.geofence?.delay);
  dataOut += (dataIn?.order?.steps[j]?.tasks[l]?.external_data?.geofence?.auto_complete !== undefined ? (dataIn?.order?.steps[j]?.tasks[l]?.external_data?.geofence?.auto_complete ? "1" : "0") : missingInput(`dataIn.order.steps[${j}].tasks[${l}].external_data.geofence.auto_complete`, "bool", dataIn?.order?.steps[j]?.tasks[l]?.external_data?.geofence?.auto_complete));
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.external_data?.geofence?.trigger_by?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].external_data.geofence.trigger_by`, "char", dataIn?.order?.steps[j]?.tasks[l]?.external_data?.geofence?.trigger_by);
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.external_data?.geofence?.message?.substring(0, 17)?.padEnd(17) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].external_data.geofence.message`, "char", dataIn?.order?.steps[j]?.tasks[l]?.external_data?.geofence?.message);
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.fields?.OrderNum?.substring(0, 7)?.padEnd(7) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].fields.OrderNum`, "char", dataIn?.order?.steps[j]?.tasks[l]?.fields?.OrderNum);
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.fields?.Tyepe?.substring(0, 1)?.padEnd(1) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].fields.Tyepe`, "char", dataIn?.order?.steps[j]?.tasks[l]?.fields?.Tyepe);
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.fields?.PCS?.substring(0, 4)?.padEnd(4) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].fields.PCS`, "char", dataIn?.order?.steps[j]?.tasks[l]?.fields?.PCS);
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.fields?.WGT?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].fields.WGT`, "char", dataIn?.order?.steps[j]?.tasks[l]?.fields?.WGT);
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.fields?.TRIP?.substring(0, 7)?.padEnd(7) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].fields.TRIP`, "char", dataIn?.order?.steps[j]?.tasks[l]?.fields?.TRIP);
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.fields?.Comment?.substring(0, 25)?.padEnd(25) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].fields.Comment`, "char", dataIn?.order?.steps[j]?.tasks[l]?.fields?.Comment);
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.fields?.DSP?.substring(0, 1)?.padEnd(1) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].fields.DSP`, "char", dataIn?.order?.steps[j]?.tasks[l]?.fields?.DSP);
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.fields?.Unit?.substring(0, 6)?.padEnd(6) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].fields.Unit`, "char", dataIn?.order?.steps[j]?.tasks[l]?.fields?.Unit);
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.fields?.hiddenLatitude?.substring(0, 10)?.padEnd(10) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].fields.hiddenLatitude`, "char", dataIn?.order?.steps[j]?.tasks[l]?.fields?.hiddenLatitude);
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.fields?.hiddenLongitude?.substring(0, 11)?.padEnd(11) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].fields.hiddenLongitude`, "char", dataIn?.order?.steps[j]?.tasks[l]?.fields?.hiddenLongitude);
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.fields?.locname?.substring(0, 15)?.padEnd(15) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].fields.locname`, "char", dataIn?.order?.steps[j]?.tasks[l]?.fields?.locname);
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.fields?.address?.substring(0, 18)?.padEnd(18) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].fields.address`, "char", dataIn?.order?.steps[j]?.tasks[l]?.fields?.address);
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.fields?.city?.substring(0, 12)?.padEnd(12) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].fields.city`, "char", dataIn?.order?.steps[j]?.tasks[l]?.fields?.city);
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.fields?.state?.substring(0, 2)?.padEnd(2) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].fields.state`, "char", dataIn?.order?.steps[j]?.tasks[l]?.fields?.state);
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.fields?.zipcode?.substring(0, 5)?.padEnd(5) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].fields.zipcode`, "char", dataIn?.order?.steps[j]?.tasks[l]?.fields?.zipcode);
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.fields?.stopkey?.substring(0, 8)?.padEnd(8) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].fields.stopkey`, "char", dataIn?.order?.steps[j]?.tasks[l]?.fields?.stopkey);
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.fields?.stopseq?.substring(0, 2)?.padEnd(2) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].fields.stopseq`, "char", dataIn?.order?.steps[j]?.tasks[l]?.fields?.stopseq);
  dataOut += dataIn?.order?.steps[j]?.tasks[l]?.fields?.user_id?.toFixed(0)?.substring(0, 18)?.padEnd(18) ?? missingInput(`dataIn.order.steps[${j}].tasks[${l}].fields.user_id`, "packed", dataIn?.order?.steps[j]?.tasks[l]?.fields?.user_id);
  }
  }
  dataOut += (dataIn?.order?.is_declinable !== undefined ? (dataIn?.order?.is_declinable ? "1" : "0") : missingInput(`dataIn.order.is_declinable`, "bool", dataIn?.order?.is_declinable));

  return dataOut;
}

/* eslint-enable */

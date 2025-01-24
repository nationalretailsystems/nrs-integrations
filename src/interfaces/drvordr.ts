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
export interface total_distanceDS {
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
export interface shipment_detailsDS {
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
    total_distance: total_distanceDS,
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
export interface FormatName {
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
    shipment_details: shipment_detailsDS,
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
 * Convert FormatName record to TypeScript object
 */
export function convertFormatNameToObject(dataIn: string): FormatName {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.drivers = [
    
  ];
  for (let i: number = 0; i < 1; ++i) {
  dataOut.drivers[i] = dataIn.substring(pos, pos + 5).trimEnd();
  pos += 5;
  }
  dataOut.id = Number(dataIn.substring(pos, pos + 18).trimEnd());
  pos += 18;
  dataOut.external_id = dataIn.substring(pos, pos + 7).trimEnd();
  pos += 7;
  dataOut.external_id_alias = dataIn.substring(pos, pos + 7).trimEnd();
  pos += 7;
  dataOut.preplan_external_id = dataIn.substring(pos, pos + 10).trimEnd();
  pos += 10;
  dataOut.status = dataIn.substring(pos, pos + 6).trimEnd();
  pos += 6;
  dataOut.sequence = dataIn.substring(pos, pos + 1).trimEnd();
  pos += 1;
  dataOut.shipment_details =   {
  
    };
  dataOut.shipment_details.hazmat = dataIn.substring(pos, pos + 1).trimEnd() === "1";
  pos += 1;
  dataOut.shipment_details.high_value = dataIn.substring(pos, pos + 1).trimEnd() === "1";
  pos += 1;
  dataOut.shipment_details.temperature_controlled = dataIn.substring(pos, pos + 1).trimEnd() === "1";
  pos += 1;
  dataOut.shipment_details.total_distance =   {
  
    };
  dataOut.shipment_details.total_distance.value = dataIn.substring(pos, pos + 1).trimEnd();
  pos += 1;
  dataOut.shipment_details.total_distance.unit_of_measure = dataIn.substring(pos, pos + 2).trimEnd();
  pos += 2;
  dataOut.shipment_details.line_of_business = dataIn.substring(pos, pos + 4).trimEnd();
  pos += 4;
  dataOut.shipment_details.master_bill_of_lading = dataIn.substring(pos, pos + 20).trimEnd();
  pos += 20;
  dataOut.shipment_details.shipping_documents = [
    
  ];
  for (let i: number = 0; i < 4; ++i) {
  dataOut.shipment_details.shipping_documents[i] =   {
  
    };
  }
  dataOut.shipment_details.truck_profile = dataIn.substring(pos, pos + 5).trimEnd();
  pos += 5;
  dataOut.received_at = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  dataOut.reviewed_at = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  dataOut.created_at = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  dataOut.updated_at = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  dataOut.modified_at = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  dataOut.remarks = [
    
  ];
  for (let i: number = 0; i < 3; ++i) {
  dataOut.remarks[i] =   {
  
    };
  dataOut.remarks[i].label = dataIn.substring(pos, pos + 7).trimEnd();
  pos += 7;
  dataOut.remarks[i].value = dataIn.substring(pos, pos + 29).trimEnd();
  pos += 29;
  dataOut.remarks[i].order = Number(dataIn.substring(pos, pos + 3).trimEnd());
  pos += 3;
  }
  dataOut.prompts =   {
  
    };
  dataOut.prompts.eta = dataIn.substring(pos, pos + 1).trimEnd() === "1";
  pos += 1;
  dataOut.prompts.fuel = dataIn.substring(pos, pos + 1).trimEnd() === "1";
  pos += 1;
  dataOut.prompts.eta_change_available = dataIn.substring(pos, pos + 1).trimEnd() === "1";
  pos += 1;
  dataOut.prompts.update_fuel_available = dataIn.substring(pos, pos + 1).trimEnd() === "1";
  pos += 1;
  dataOut.meta = [
    
  ];
  for (let i: number = 0; i < 9; ++i) {
  dataOut.meta[i] =   {
  
    };
  dataOut.meta[i].asset =   {
  
    };
  dataOut.meta[i].asset.external_id = dataIn.substring(pos, pos + 6).trimEnd();
  pos += 6;
  dataOut.meta[i].asset.type = dataIn.substring(pos, pos + 10).trimEnd();
  pos += 10;
  dataOut.meta[i].asset.vin = dataIn.substring(pos, pos + 17).trimEnd();
  pos += 17;
  dataOut.meta[i].fuel_level = Number(dataIn.substring(pos, pos + 5).trimEnd());
  pos += 5;
  dataOut.meta[i].location =   {
  
    };
  dataOut.meta[i].location.latitude = Number(dataIn.substring(pos, pos + 11).trimEnd());
  pos += 11;
  dataOut.meta[i].location.longitude = Number(dataIn.substring(pos, pos + 19).trimEnd());
  pos += 19;
  dataOut.meta[i].odometer = Number(dataIn.substring(pos, pos + 10).trimEnd());
  pos += 10;
  dataOut.meta[i].timestamp = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  }
  dataOut.locations = [
    
  ];
  for (let i: number = 0; i < 4; ++i) {
  dataOut.locations[i] =   {
  
    };
  }
  dataOut.external_data = [
    
  ];
  for (let i: number = 0; i < 4; ++i) {
  dataOut.external_data[i] =   {
  
    };
  dataOut.external_data[i].label = dataIn.substring(pos, pos + 8).trimEnd();
  pos += 8;
  dataOut.external_data[i].value = dataIn.substring(pos, pos + 5).trimEnd();
  pos += 5;
  dataOut.external_data[i].order = Number(dataIn.substring(pos, pos + 3).trimEnd());
  pos += 3;
  dataOut.external_data[i].isLabel = dataIn.substring(pos, pos + 1).trimEnd() === "1";
  pos += 1;
  }
  dataOut.steps = [
    
  ];
  for (let i: number = 0; i < 4; ++i) {
  dataOut.steps[i] =   {
  
    };
  dataOut.steps[i].id = Number(dataIn.substring(pos, pos + 18).trimEnd());
  pos += 18;
  dataOut.steps[i].external_id = dataIn.substring(pos, pos + 17).trimEnd();
  pos += 17;
  dataOut.steps[i].name = dataIn.substring(pos, pos + 12).trimEnd();
  pos += 12;
  dataOut.steps[i].is_disabled = dataIn.substring(pos, pos + 1).trimEnd() === "1";
  pos += 1;
  dataOut.steps[i].is_skippable = dataIn.substring(pos, pos + 1).trimEnd() === "1";
  pos += 1;
  dataOut.steps[i].is_skipped = dataIn.substring(pos, pos + 1).trimEnd() === "1";
  pos += 1;
  dataOut.steps[i].skip_reason = dataIn.substring(pos, pos + 5).trimEnd();
  pos += 5;
  dataOut.steps[i].is_bypassable = dataIn.substring(pos, pos + 1).trimEnd() === "1";
  pos += 1;
  dataOut.steps[i].is_bypassed = dataIn.substring(pos, pos + 1).trimEnd() === "1";
  pos += 1;
  dataOut.steps[i].bypass_reason = dataIn.substring(pos, pos + 5).trimEnd();
  pos += 5;
  dataOut.steps[i].is_reorderable = dataIn.substring(pos, pos + 1).trimEnd() === "1";
  pos += 1;
  dataOut.steps[i].reorder_reason = dataIn.substring(pos, pos + 5).trimEnd();
  pos += 5;
  dataOut.steps[i].completed = dataIn.substring(pos, pos + 1).trimEnd() === "1";
  pos += 1;
  dataOut.steps[i].completed_at = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  dataOut.steps[i].type = dataIn.substring(pos, pos + 4).trimEnd();
  pos += 4;
  dataOut.steps[i].order = Number(dataIn.substring(pos, pos + 3).trimEnd());
  pos += 3;
  dataOut.steps[i].location_external_id = dataIn.substring(pos, pos + 15).trimEnd();
  pos += 15;
  dataOut.steps[i].route_leg_external_id = dataIn.substring(pos, pos + 5).trimEnd();
  pos += 5;
  dataOut.steps[i].customer_external_id = dataIn.substring(pos, pos + 5).trimEnd();
  pos += 5;
  dataOut.steps[i].appointment =   {
  
    };
  dataOut.steps[i].appointment.start_time = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  dataOut.steps[i].appointment.ready_time = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  dataOut.steps[i].appointment.late_time = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  dataOut.steps[i].appointment.end_time = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  dataOut.steps[i].eta = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  dataOut.steps[i].created_at = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  dataOut.steps[i].updated_at = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  dataOut.steps[i].tasks = [
    
  ];
  for (let j: number = 0; j < 3; ++j) {
  dataOut.steps[i].tasks[j] =   {
  
    };
  dataOut.steps[i].tasks[j].id = Number(dataIn.substring(pos, pos + 18).trimEnd());
  pos += 18;
  dataOut.steps[i].tasks[j].external_id = dataIn.substring(pos, pos + 9).trimEnd();
  pos += 9;
  dataOut.steps[i].tasks[j].name = dataIn.substring(pos, pos + 19).trimEnd();
  pos += 19;
  dataOut.steps[i].tasks[j].order = Number(dataIn.substring(pos, pos + 3).trimEnd());
  pos += 3;
  dataOut.steps[i].tasks[j].type = dataIn.substring(pos, pos + 19).trimEnd();
  pos += 19;
  dataOut.steps[i].tasks[j].completed = dataIn.substring(pos, pos + 1).trimEnd() === "1";
  pos += 1;
  dataOut.steps[i].tasks[j].completed_at = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  dataOut.steps[i].tasks[j].completed_by = dataIn.substring(pos, pos + 5).trimEnd();
  pos += 5;
  dataOut.steps[i].tasks[j].completion_type = dataIn.substring(pos, pos + 18).trimEnd();
  pos += 18;
  dataOut.steps[i].tasks[j].created_at = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  dataOut.steps[i].tasks[j].updated_at = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  dataOut.steps[i].tasks[j].external_data =   {
  
    };
  dataOut.steps[i].tasks[j].external_data.is_prompt_repeats = dataIn.substring(pos, pos + 1).trimEnd() === "1";
  pos += 1;
  dataOut.steps[i].tasks[j].external_data.is_allow_repeats = dataIn.substring(pos, pos + 1).trimEnd() === "1";
  pos += 1;
  dataOut.steps[i].tasks[j].external_data.is_required = dataIn.substring(pos, pos + 1).trimEnd() === "1";
  pos += 1;
  dataOut.steps[i].tasks[j].external_data.geofence =   {
  
    };
  dataOut.steps[i].tasks[j].external_data.geofence.circle =   {
  
    };
  dataOut.steps[i].tasks[j].external_data.geofence.circle.center =   {
  
    };
  dataOut.steps[i].tasks[j].external_data.geofence.circle.center.latitude = Number(dataIn.substring(pos, pos + 10).trimEnd());
  pos += 10;
  dataOut.steps[i].tasks[j].external_data.geofence.circle.center.longitude = Number(dataIn.substring(pos, pos + 11).trimEnd());
  pos += 11;
  dataOut.steps[i].tasks[j].external_data.geofence.circle.radius = Number(dataIn.substring(pos, pos + 5).trimEnd());
  pos += 5;
  dataOut.steps[i].tasks[j].external_data.geofence.delay = Number(dataIn.substring(pos, pos + 5).trimEnd());
  pos += 5;
  dataOut.steps[i].tasks[j].external_data.geofence.auto_complete = dataIn.substring(pos, pos + 1).trimEnd() === "1";
  pos += 1;
  dataOut.steps[i].tasks[j].external_data.geofence.trigger_by = dataIn.substring(pos, pos + 5).trimEnd();
  pos += 5;
  dataOut.steps[i].tasks[j].external_data.geofence.message = dataIn.substring(pos, pos + 17).trimEnd();
  pos += 17;
  dataOut.steps[i].tasks[j].fields =   {
  
    };
  dataOut.steps[i].tasks[j].fields.Order# = dataIn.substring(pos, pos + 7).trimEnd();
  pos += 7;
  dataOut.steps[i].tasks[j].fields.Tyepe = dataIn.substring(pos, pos + 1).trimEnd();
  pos += 1;
  dataOut.steps[i].tasks[j].fields.PCS = dataIn.substring(pos, pos + 4).trimEnd();
  pos += 4;
  dataOut.steps[i].tasks[j].fields.WGT = dataIn.substring(pos, pos + 5).trimEnd();
  pos += 5;
  dataOut.steps[i].tasks[j].fields.TRIP = dataIn.substring(pos, pos + 7).trimEnd();
  pos += 7;
  dataOut.steps[i].tasks[j].fields.Comment = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  dataOut.steps[i].tasks[j].fields.DSP = dataIn.substring(pos, pos + 1).trimEnd();
  pos += 1;
  dataOut.steps[i].tasks[j].fields.Unit = dataIn.substring(pos, pos + 6).trimEnd();
  pos += 6;
  dataOut.steps[i].tasks[j].fields.hiddenLatitude = dataIn.substring(pos, pos + 10).trimEnd();
  pos += 10;
  dataOut.steps[i].tasks[j].fields.hiddenLongitude = dataIn.substring(pos, pos + 11).trimEnd();
  pos += 11;
  dataOut.steps[i].tasks[j].fields.locname = dataIn.substring(pos, pos + 15).trimEnd();
  pos += 15;
  dataOut.steps[i].tasks[j].fields.address = dataIn.substring(pos, pos + 18).trimEnd();
  pos += 18;
  dataOut.steps[i].tasks[j].fields.city = dataIn.substring(pos, pos + 12).trimEnd();
  pos += 12;
  dataOut.steps[i].tasks[j].fields.state = dataIn.substring(pos, pos + 2).trimEnd();
  pos += 2;
  dataOut.steps[i].tasks[j].fields.zipcode = dataIn.substring(pos, pos + 5).trimEnd();
  pos += 5;
  dataOut.steps[i].tasks[j].fields.stopkey = dataIn.substring(pos, pos + 8).trimEnd();
  pos += 8;
  dataOut.steps[i].tasks[j].fields.stopseq = dataIn.substring(pos, pos + 2).trimEnd();
  pos += 2;
  dataOut.steps[i].tasks[j].fields.user_id = Number(dataIn.substring(pos, pos + 18).trimEnd());
  pos += 18;
  }
  }
  dataOut.is_declinable = dataIn.substring(pos, pos + 1).trimEnd() === "1";
  pos += 1;

  return dataOut;
}

/* eslint-enable */

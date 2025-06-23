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
export interface FormatName {
    /**
     * @size 4 characters
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
 * Convert FormatName record to TypeScript object
 */
export function convertFormatNameToObject(dataIn: string): FormatName {
  const dataOut: any =   {
  
    };
  let pos: number = 0;

  dataOut.drivers = [
    
  ];
  for (let i: number = 0; i < 1; ++i) {
  dataOut.drivers[i] = dataIn.substring(pos, pos + 4).trimEnd();
  pos += 4;
  }
  dataOut.id = Number(dataIn.substring(pos, pos + 18).trimEnd());
  pos += 18;
  dataOut.external_id = dataIn.substring(pos, pos + 7).trimEnd();
  pos += 7;
  dataOut.external_id_alias = dataIn.substring(pos, pos + 7).trimEnd();
  pos += 7;
  dataOut.status = dataIn.substring(pos, pos + 6).trimEnd();
  pos += 6;
  dataOut.sequence = dataIn.substring(pos, pos + 1).trimEnd();
  pos += 1;
  dataOut.shipping_documents = [
    
  ];
  for (let i: number = 0; i < 4; ++i) {
  dataOut.shipping_documents[i] =   {
  
    };
  dataOut.shipping_documents[i].type = dataIn.substring(pos, pos + 14).trimEnd();
  pos += 14;
  dataOut.shipping_documents[i].value = dataIn.substring(pos, pos + 7).trimEnd();
  pos += 7;
  }
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
  dataOut.locations = [
    
  ];
  for (let i: number = 0; i < 20; ++i) {
  dataOut.locations[i] =   {
  
    };
  dataOut.locations[i].external_id = dataIn.substring(pos, pos + 16).trimEnd();
  pos += 16;
  dataOut.locations[i].type = dataIn.substring(pos, pos + 3).trimEnd();
  pos += 3;
  dataOut.locations[i].name = dataIn.substring(pos, pos + 23).trimEnd();
  pos += 23;
  dataOut.locations[i].address = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  dataOut.locations[i].city = dataIn.substring(pos, pos + 6).trimEnd();
  pos += 6;
  dataOut.locations[i].state = dataIn.substring(pos, pos + 2).trimEnd();
  pos += 2;
  dataOut.locations[i].country_code = dataIn.substring(pos, pos + 2).trimEnd();
  pos += 2;
  dataOut.locations[i].postal_code = dataIn.substring(pos, pos + 5).trimEnd();
  pos += 5;
  dataOut.locations[i].latitude = Number(dataIn.substring(pos, pos + 10).trimEnd());
  pos += 10;
  dataOut.locations[i].longitude = Number(dataIn.substring(pos, pos + 11).trimEnd());
  pos += 11;
  dataOut.locations[i].time_zone = dataIn.substring(pos, pos + 10).trimEnd();
  pos += 10;
  dataOut.locations[i].created_at = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  dataOut.locations[i].updated_at = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  }
  dataOut.external_data = [
    
  ];
  for (let i: number = 0; i < 4; ++i) {
  dataOut.external_data[i] =   {
  
    };
  dataOut.external_data[i].label = dataIn.substring(pos, pos + 8).trimEnd();
  pos += 8;
  dataOut.external_data[i].value = dataIn.substring(pos, pos + 7).trimEnd();
  pos += 7;
  dataOut.external_data[i].order = Number(dataIn.substring(pos, pos + 3).trimEnd());
  pos += 3;
  dataOut.external_data[i].isLabel = dataIn.substring(pos, pos + 1).trimEnd() === "1";
  pos += 1;
  }
  dataOut.steps = [
    
  ];
  for (let i: number = 0; i < 20; ++i) {
  dataOut.steps[i] =   {
  
    };
  dataOut.steps[i].external_id = dataIn.substring(pos, pos + 18).trimEnd();
  pos += 18;
  dataOut.steps[i].name = dataIn.substring(pos, pos + 23).trimEnd();
  pos += 23;
  dataOut.steps[i].completed = dataIn.substring(pos, pos + 1).trimEnd() === "1";
  pos += 1;
  dataOut.steps[i].completed_at = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  dataOut.steps[i].type = dataIn.substring(pos, pos + 6).trimEnd();
  pos += 6;
  dataOut.steps[i].order = Number(dataIn.substring(pos, pos + 3).trimEnd());
  pos += 3;
  dataOut.steps[i].location_external_id = dataIn.substring(pos, pos + 16).trimEnd();
  pos += 16;
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
  dataOut.steps[i].tasks[j].completed_by = dataIn.substring(pos, pos + 4).trimEnd();
  pos += 4;
  dataOut.steps[i].tasks[j].completion_type = dataIn.substring(pos, pos + 6).trimEnd();
  pos += 6;
  dataOut.steps[i].tasks[j].created_at = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  dataOut.steps[i].tasks[j].updated_at = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  dataOut.steps[i].tasks[j].external_data =   {
  
    };
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
  dataOut.steps[i].tasks[j].fields.OrderNum = dataIn.substring(pos, pos + 7).trimEnd();
  pos += 7;
  dataOut.steps[i].tasks[j].fields.Tyepe = dataIn.substring(pos, pos + 1).trimEnd();
  pos += 1;
  dataOut.steps[i].tasks[j].fields.PCS = dataIn.substring(pos, pos + 2).trimEnd();
  pos += 2;
  dataOut.steps[i].tasks[j].fields.WGT = dataIn.substring(pos, pos + 5).trimEnd();
  pos += 5;
  dataOut.steps[i].tasks[j].fields.TRIP = dataIn.substring(pos, pos + 7).trimEnd();
  pos += 7;
  dataOut.steps[i].tasks[j].fields.Comment = dataIn.substring(pos, pos + 30).trimEnd();
  pos += 30;
  dataOut.steps[i].tasks[j].fields.DSP = dataIn.substring(pos, pos + 1).trimEnd();
  pos += 1;
  dataOut.steps[i].tasks[j].fields.Unit = dataIn.substring(pos, pos + 6).trimEnd();
  pos += 6;
  dataOut.steps[i].tasks[j].fields.hiddenLatitude = dataIn.substring(pos, pos + 9).trimEnd();
  pos += 9;
  dataOut.steps[i].tasks[j].fields.hiddenLongitude = dataIn.substring(pos, pos + 9).trimEnd();
  pos += 9;
  dataOut.steps[i].tasks[j].fields.locname = dataIn.substring(pos, pos + 16).trimEnd();
  pos += 16;
  dataOut.steps[i].tasks[j].fields.address = dataIn.substring(pos, pos + 25).trimEnd();
  pos += 25;
  dataOut.steps[i].tasks[j].fields.city = dataIn.substring(pos, pos + 6).trimEnd();
  pos += 6;
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

  return dataOut;
}

/* eslint-enable */

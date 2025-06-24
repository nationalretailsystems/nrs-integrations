/* eslint-disable */
// @ts-nocheck
// Module: drvordrin
// Generated source -- do not modify

import eradaniConnect from "@eradani-inc/eradani-connect";
const { dataTypes } = eradaniConnect;


// Manually entered import
import config from 'config';

/**
 * Data structure
 */
  let ShipDocsDSFields: any = [
      {
      name: "type",
      type: new dataTypes.Char(14),
      defaultValue: ""
    },
      {
      name: "value",
      type: new dataTypes.Char(7),
      defaultValue: ""
    }
  ];

/**
 * Input interface
 */
export interface ShipDocsDSInput {
    /**
     * @size 14 characters
     * @default ``
     */
    type?: string,
    /**
     * @size 7 characters
     * @default ``
     */
    value?: string
}

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
 * Data structure
 */
  let LocationsDSFields: any = [
      {
      name: "external_id",
      type: new dataTypes.Char(16),
      defaultValue: ""
    },
      {
      name: "type",
      type: new dataTypes.Char(3),
      defaultValue: ""
    },
      {
      name: "name",
      type: new dataTypes.Char(23),
      defaultValue: ""
    },
      {
      name: "address",
      type: new dataTypes.Char(25),
      defaultValue: ""
    },
      {
      name: "city",
      type: new dataTypes.Char(6),
      defaultValue: ""
    },
      {
      name: "state",
      type: new dataTypes.Char(2),
      defaultValue: ""
    },
      {
      name: "country_code",
      type: new dataTypes.Char(2),
      defaultValue: ""
    },
      {
      name: "postal_code",
      type: new dataTypes.Char(5),
      defaultValue: ""
    },
      {
      name: "latitude",
      type: new dataTypes.PackedDecimal(8, 6),
      defaultValue: 0.0
    },
      {
      name: "longitude",
      type: new dataTypes.PackedDecimal(9, 6),
      defaultValue: 0.0
    },
      {
      name: "time_zone",
      type: new dataTypes.Char(10),
      defaultValue: ""
    },
      {
      name: "created_at",
      type: new dataTypes.Char(25),
      defaultValue: ""
    },
      {
      name: "updated_at",
      type: new dataTypes.Char(25),
      defaultValue: ""
    }
  ];

/**
 * Input interface
 */
export interface LocationsDSInput {
    /**
     * @size 16 characters
     * @default ``
     */
    external_id?: string,
    /**
     * @size 3 characters
     * @default ``
     */
    type?: string,
    /**
     * @size 23 characters
     * @default ``
     */
    name?: string,
    /**
     * @size 25 characters
     * @default ``
     */
    address?: string,
    /**
     * @size 6 characters
     * @default ``
     */
    city?: string,
    /**
     * @size 2 characters
     * @default ``
     */
    state?: string,
    /**
     * @size 2 characters
     * @default ``
     */
    country_code?: string,
    /**
     * @size 5 characters
     * @default ``
     */
    postal_code?: string,
    /**
     * @size 8 digits
     * @precision 6 decimals
     * @default `0`
     */
    latitude?: number | string,
    /**
     * @size 9 digits
     * @precision 6 decimals
     * @default `0`
     */
    longitude?: number | string,
    /**
     * @size 10 characters
     * @default ``
     */
    time_zone?: string,
    /**
     * @size 25 characters
     * @default ``
     */
    created_at?: string,
    /**
     * @size 25 characters
     * @default ``
     */
    updated_at?: string
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
 * Data structure
 */
  let ExtDataDSFields: any = [
      {
      name: "label",
      type: new dataTypes.Char(8),
      defaultValue: ""
    },
      {
      name: "value",
      type: new dataTypes.Char(7),
      defaultValue: ""
    },
      {
      name: "order",
      type: new dataTypes.PackedDecimal(1, 0),
      defaultValue: 0.0
    },
      {
      name: "isLabel",
      type: new dataTypes.Bool()
    }
  ];

/**
 * Input interface
 */
export interface ExtDataDSInput {
    /**
     * @size 8 characters
     * @default ``
     */
    label?: string,
    /**
     * @size 7 characters
     * @default ``
     */
    value?: string,
    /**
     * @size 1 digits
     * @precision 0 decimals
     * @default `0`
     */
    order?: number | string,
    /**
     */
    isLabel: boolean
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
 * Data structure
 */
  let appointmentDSFields: any = [
      {
      name: "start_time",
      type: new dataTypes.Char(25),
      defaultValue: ""
    },
      {
      name: "ready_time",
      type: new dataTypes.Char(25),
      defaultValue: ""
    },
      {
      name: "late_time",
      type: new dataTypes.Char(25),
      defaultValue: ""
    },
      {
      name: "end_time",
      type: new dataTypes.Char(25),
      defaultValue: ""
    }
  ];

/**
 * Input interface
 */
export interface appointmentDSInput {
    /**
     * @size 25 characters
     * @default ``
     */
    start_time?: string,
    /**
     * @size 25 characters
     * @default ``
     */
    ready_time?: string,
    /**
     * @size 25 characters
     * @default ``
     */
    late_time?: string,
    /**
     * @size 25 characters
     * @default ``
     */
    end_time?: string
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
 * Data structure
 */
  let centerDSFields: any = [
      {
      name: "latitude",
      type: new dataTypes.PackedDecimal(8, 6),
      defaultValue: 0.0
    },
      {
      name: "longitude",
      type: new dataTypes.PackedDecimal(9, 6),
      defaultValue: 0.0
    }
  ];

/**
 * Input interface
 */
export interface centerDSInput {
    /**
     * @size 8 digits
     * @precision 6 decimals
     * @default `0`
     */
    latitude?: number | string,
    /**
     * @size 9 digits
     * @precision 6 decimals
     * @default `0`
     */
    longitude?: number | string
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
 * Data structure
 */
  let circleDSFields: any = [
      {
      name: "center",
      type: new dataTypes.DataStructure(centerDSFields)
    },
      {
      name: "radius",
      type: new dataTypes.PackedDecimal(3, 0),
      defaultValue: 0.0
    }
  ];

/**
 * Input interface
 */
export interface circleDSInput {
    /**
     */
    center: centerDSInput,
    /**
     * @size 3 digits
     * @precision 0 decimals
     * @default `0`
     */
    radius?: number | string
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
 * Data structure
 */
  let geofenceDSFields: any = [
      {
      name: "circle",
      type: new dataTypes.DataStructure(circleDSFields)
    },
      {
      name: "delay",
      type: new dataTypes.PackedDecimal(3, 0),
      defaultValue: 0.0
    },
      {
      name: "auto_complete",
      type: new dataTypes.Bool()
    },
      {
      name: "trigger_by",
      type: new dataTypes.Char(5),
      defaultValue: ""
    },
      {
      name: "message",
      type: new dataTypes.Char(17),
      defaultValue: ""
    }
  ];

/**
 * Input interface
 */
export interface geofenceDSInput {
    /**
     */
    circle: circleDSInput,
    /**
     * @size 3 digits
     * @precision 0 decimals
     * @default `0`
     */
    delay?: number | string,
    /**
     */
    auto_complete: boolean,
    /**
     * @size 5 characters
     * @default ``
     */
    trigger_by?: string,
    /**
     * @size 17 characters
     * @default ``
     */
    message?: string
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
 * Data structure
 */
  let external_dataDSFields: any = [
      {
      name: "geofence",
      type: new dataTypes.DataStructure(geofenceDSFields)
    }
  ];

/**
 * Input interface
 */
export interface external_dataDSInput {
    /**
     */
    geofence: geofenceDSInput
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
 * Data structure
 */
  let fieldsDSFields: any = [
      {
      name: "OrderNum",
      type: new dataTypes.Char(7),
      defaultValue: ""
    },
      {
      name: "Tyepe",
      type: new dataTypes.Char(1),
      defaultValue: ""
    },
      {
      name: "PCS",
      type: new dataTypes.Char(2),
      defaultValue: ""
    },
      {
      name: "WGT",
      type: new dataTypes.Char(5),
      defaultValue: ""
    },
      {
      name: "TRIP",
      type: new dataTypes.Char(7),
      defaultValue: ""
    },
      {
      name: "Comment",
      type: new dataTypes.Char(30),
      defaultValue: ""
    },
      {
      name: "DSP",
      type: new dataTypes.Char(1),
      defaultValue: ""
    },
      {
      name: "Unit",
      type: new dataTypes.Char(6),
      defaultValue: ""
    },
      {
      name: "hiddenLatitude",
      type: new dataTypes.Char(9),
      defaultValue: ""
    },
      {
      name: "hiddenLongitude",
      type: new dataTypes.Char(9),
      defaultValue: ""
    },
      {
      name: "locname",
      type: new dataTypes.Char(16),
      defaultValue: ""
    },
      {
      name: "address",
      type: new dataTypes.Char(25),
      defaultValue: ""
    },
      {
      name: "city",
      type: new dataTypes.Char(6),
      defaultValue: ""
    },
      {
      name: "state",
      type: new dataTypes.Char(2),
      defaultValue: ""
    },
      {
      name: "zipcode",
      type: new dataTypes.Char(5),
      defaultValue: ""
    },
      {
      name: "stopkey",
      type: new dataTypes.Char(8),
      defaultValue: ""
    },
      {
      name: "stopseq",
      type: new dataTypes.Char(2),
      defaultValue: ""
    },
      {
      name: "user_id",
      type: new dataTypes.PackedDecimal(16, 0),
      defaultValue: 0.0
    }
  ];

/**
 * Input interface
 */
export interface fieldsDSInput {
    /**
     * @size 7 characters
     * @default ``
     */
    OrderNum?: string,
    /**
     * @size 1 characters
     * @default ``
     */
    Tyepe?: string,
    /**
     * @size 2 characters
     * @default ``
     */
    PCS?: string,
    /**
     * @size 5 characters
     * @default ``
     */
    WGT?: string,
    /**
     * @size 7 characters
     * @default ``
     */
    TRIP?: string,
    /**
     * @size 30 characters
     * @default ``
     */
    Comment?: string,
    /**
     * @size 1 characters
     * @default ``
     */
    DSP?: string,
    /**
     * @size 6 characters
     * @default ``
     */
    Unit?: string,
    /**
     * @size 9 characters
     * @default ``
     */
    hiddenLatitude?: string,
    /**
     * @size 9 characters
     * @default ``
     */
    hiddenLongitude?: string,
    /**
     * @size 16 characters
     * @default ``
     */
    locname?: string,
    /**
     * @size 25 characters
     * @default ``
     */
    address?: string,
    /**
     * @size 6 characters
     * @default ``
     */
    city?: string,
    /**
     * @size 2 characters
     * @default ``
     */
    state?: string,
    /**
     * @size 5 characters
     * @default ``
     */
    zipcode?: string,
    /**
     * @size 8 characters
     * @default ``
     */
    stopkey?: string,
    /**
     * @size 2 characters
     * @default ``
     */
    stopseq?: string,
    /**
     * @size 16 digits
     * @precision 0 decimals
     * @default `0`
     */
    user_id?: number | string
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
 * Data structure
 */
  let TasksDSFields: any = [
      {
      name: "external_id",
      type: new dataTypes.Char(9),
      defaultValue: ""
    },
      {
      name: "name",
      type: new dataTypes.Char(19),
      defaultValue: ""
    },
      {
      name: "order",
      type: new dataTypes.PackedDecimal(1, 0),
      defaultValue: 0.0
    },
      {
      name: "type",
      type: new dataTypes.Char(19),
      defaultValue: ""
    },
      {
      name: "completed",
      type: new dataTypes.Bool()
    },
      {
      name: "completed_at",
      type: new dataTypes.Char(25),
      defaultValue: ""
    },
      {
      name: "completed_by",
      type: new dataTypes.Char(4),
      defaultValue: ""
    },
      {
      name: "completion_type",
      type: new dataTypes.Char(6),
      defaultValue: ""
    },
      {
      name: "created_at",
      type: new dataTypes.Char(25)
    },
      {
      name: "updated_at",
      type: new dataTypes.Char(25)
    },
      {
      name: "external_data",
      type: new dataTypes.DataStructure(external_dataDSFields)
    },
      {
      name: "fields",
      type: new dataTypes.DataStructure(fieldsDSFields)
    }
  ];

/**
 * Input interface
 */
export interface TasksDSInput {
    /**
     * @size 9 characters
     * @default ``
     */
    external_id?: string,
    /**
     * @size 19 characters
     * @default ``
     */
    name?: string,
    /**
     * @size 1 digits
     * @precision 0 decimals
     * @default `0`
     */
    order?: number | string,
    /**
     * @size 19 characters
     * @default ``
     */
    type?: string,
    /**
     */
    completed: boolean,
    /**
     * @size 25 characters
     * @default ``
     */
    completed_at?: string,
    /**
     * @size 4 characters
     * @default ``
     */
    completed_by?: string,
    /**
     * @size 6 characters
     * @default ``
     */
    completion_type?: string,
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
    external_data: external_dataDSInput,
    /**
     */
    fields: fieldsDSInput
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
 * Data structure
 */
  let StepsDSFields: any = [
      {
      name: "external_id",
      type: new dataTypes.Char(18)
    },
      {
      name: "name",
      type: new dataTypes.Char(23)
    },
      {
      name: "completed",
      type: new dataTypes.Bool()
    },
      {
      name: "completed_at",
      type: new dataTypes.Char(25),
      defaultValue: ""
    },
      {
      name: "type",
      type: new dataTypes.Char(6),
      defaultValue: ""
    },
      {
      name: "order",
      type: new dataTypes.PackedDecimal(1, 0),
      defaultValue: 0.0
    },
      {
      name: "location_external_id",
      type: new dataTypes.Char(16),
      defaultValue: ""
    },
      {
      name: "appointment",
      type: new dataTypes.DataStructure(appointmentDSFields)
    },
      {
      name: "eta",
      type: new dataTypes.Char(25),
      defaultValue: ""
    },
      {
      name: "created_at",
      type: new dataTypes.Char(25),
      defaultValue: ""
    },
      {
      name: "updated_at",
      type: new dataTypes.Char(25),
      defaultValue: ""
    },
      {
      name: "tasks",
      type: new dataTypes.DataStructure(TasksDSFields),
      dim: 3
    }
  ];

/**
 * Input interface
 */
export interface StepsDSInput {
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
    completed_at?: string,
    /**
     * @size 6 characters
     * @default ``
     */
    type?: string,
    /**
     * @size 1 digits
     * @precision 0 decimals
     * @default `0`
     */
    order?: number | string,
    /**
     * @size 16 characters
     * @default ``
     */
    location_external_id?: string,
    /**
     */
    appointment: appointmentDSInput,
    /**
     * @size 25 characters
     * @default ``
     */
    eta?: string,
    /**
     * @size 25 characters
     * @default ``
     */
    created_at?: string,
    /**
     * @size 25 characters
     * @default ``
     */
    updated_at?: string,
    /**
     */
    tasks: Array<TasksDSInput>
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
 * Program model
 */
export const DRVORDRINModel =   new eradaniConnect.run.Pgm("DRVORDRIN",   {
      lib: config.eradaniConnect.native.pgmLib,
      mode: "ile",
      params: [
      {
      name: "driverin",
      type: new dataTypes.Char(6),
      defaultValue: ""
    },
      {
      name: "ordtype",
      type: new dataTypes.Char(1),
      defaultValue: ""
    },
      {
      name: "drivers",
      type: new dataTypes.Char(6),
      defaultValue: "",
      dim: 1
    },
      {
      name: "id",
      type: new dataTypes.PackedDecimal(16, 0),
      defaultValue: 0.0
    },
      {
      name: "external_id",
      type: new dataTypes.Char(7),
      defaultValue: ""
    },
      {
      name: "external_id_alias",
      type: new dataTypes.Char(7),
      defaultValue: ""
    },
      {
      name: "status",
      type: new dataTypes.Char(6),
      defaultValue: ""
    },
      {
      name: "sequence",
      type: new dataTypes.Char(1),
      defaultValue: ""
    },
      {
      name: "shipping_documents",
      type: new dataTypes.DataStructure(ShipDocsDSFields),
      dim: 4
    },
      {
      name: "received_at",
      type: new dataTypes.Char(25),
      defaultValue: ""
    },
      {
      name: "reviewed_at",
      type: new dataTypes.Char(25),
      defaultValue: ""
    },
      {
      name: "created_at",
      type: new dataTypes.Char(25),
      defaultValue: ""
    },
      {
      name: "updated_at",
      type: new dataTypes.Char(25),
      defaultValue: ""
    },
      {
      name: "modified_at",
      type: new dataTypes.Char(25),
      defaultValue: ""
    },
      {
      name: "locations",
      type: new dataTypes.DataStructure(LocationsDSFields),
      dim: 20
    },
      {
      name: "external_data",
      type: new dataTypes.DataStructure(ExtDataDSFields),
      dim: 4
    },
      {
      name: "steps",
      type: new dataTypes.DataStructure(StepsDSFields),
      dim: 20
    }
  ]
    });

/**
 * Input interface
 */
export interface DRVORDRINInput {
    /**
     * @size 6 characters
     * @default ``
     */
    driverin?: string,
    /**
     * @size 1 characters
     * @default ``
     */
    ordtype?: string,
    /**
     * @size 6 characters
     * @default ``
     */
    drivers?: Array<string>,
    /**
     * @size 16 digits
     * @precision 0 decimals
     * @default `0`
     */
    id?: number | string,
    /**
     * @size 7 characters
     * @default ``
     */
    external_id?: string,
    /**
     * @size 7 characters
     * @default ``
     */
    external_id_alias?: string,
    /**
     * @size 6 characters
     * @default ``
     */
    status?: string,
    /**
     * @size 1 characters
     * @default ``
     */
    sequence?: string,
    /**
     */
    shipping_documents: Array<ShipDocsDSInput>,
    /**
     * @size 25 characters
     * @default ``
     */
    received_at?: string,
    /**
     * @size 25 characters
     * @default ``
     */
    reviewed_at?: string,
    /**
     * @size 25 characters
     * @default ``
     */
    created_at?: string,
    /**
     * @size 25 characters
     * @default ``
     */
    updated_at?: string,
    /**
     * @size 25 characters
     * @default ``
     */
    modified_at?: string,
    /**
     */
    locations: Array<LocationsDSInput>,
    /**
     */
    external_data: Array<ExtDataDSInput>,
    /**
     */
    steps: Array<StepsDSInput>
}

/**
 * Output interface
 */
export interface DRVORDRINOutput {
    /**
     * @size 6 characters
     * @default ``
     */
    driverin: string,
    /**
     * @size 1 characters
     * @default ``
     */
    ordtype: string,
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

/* eslint-enable */

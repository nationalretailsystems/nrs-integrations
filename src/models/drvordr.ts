/* eslint-disable */
// @ts-nocheck
// Module: drvordr
// Generated source -- do not modify

import eradaniConnect from "@eradani-inc/eradani-connect";
const { dataTypes } = eradaniConnect;

''
// Manually entered import
import config from 'config'

/**
 * Data structure
 */
  let TotalDistDSFields: any = [
      {
      name: "value",
      type: new dataTypes.Char(1)
    },
      {
      name: "unit_of_measure",
      type: new dataTypes.Char(2)
    }
  ];

/**
 * Input interface
 */
export interface TotalDistDSInput {
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
 * Data structure
 */
  let ShippingDocsDSFields: any = [
      {
      name: "type",
      type: new dataTypes.Char(14)
    },
      {
      name: "value",
      type: new dataTypes.Char(10)
    }
  ];

/**
 * Input interface
 */
export interface ShippingDocsDSInput {
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
 * Data structure
 */
  let shipdetailsDSFields: any = [
      {
      name: "hazmat",
      type: new dataTypes.Bool()
    },
      {
      name: "high_value",
      type: new dataTypes.Bool()
    },
      {
      name: "temperature_controlled",
      type: new dataTypes.Bool()
    },
      {
      name: "total_distance",
      type: new dataTypes.DataStructure(TotalDistDSFields)
    },
      {
      name: "line_of_business",
      type: new dataTypes.Char(4)
    },
      {
      name: "master_bill_of_lading",
      type: new dataTypes.Char(20)
    },
      {
      name: "shipping_documents",
      type: new dataTypes.DataStructure(ShippingDocsDSFields),
      dim: 4
    },
      {
      name: "truck_profile",
      type: new dataTypes.Char(5)
    }
  ];

/**
 * Input interface
 */
export interface shipdetailsDSInput {
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
    total_distance: TotalDistDSInput,
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
    shipping_documents: Array<ShippingDocsDSInput>,
    /**
     * @size 5 characters
     */
    truck_profile: string
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
 * Data structure
 */
  let RemarksDSFields: any = [
      {
      name: "label",
      type: new dataTypes.Char(7)
    },
      {
      name: "value",
      type: new dataTypes.Char(29)
    },
      {
      name: "order",
      type: new dataTypes.PackedDecimal(1, 0)
    }
  ];

/**
 * Input interface
 */
export interface RemarksDSInput {
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
    order: number | string
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
 * Data structure
 */
  let promptsDSFields: any = [
      {
      name: "eta",
      type: new dataTypes.Bool()
    },
      {
      name: "fuel",
      type: new dataTypes.Bool()
    },
      {
      name: "eta_change_available",
      type: new dataTypes.Bool()
    },
      {
      name: "update_fuel_available",
      type: new dataTypes.Bool()
    }
  ];

/**
 * Input interface
 */
export interface promptsDSInput {
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
 * Data structure
 */
  let assetDSFields: any = [
      {
      name: "external_id",
      type: new dataTypes.Char(6)
    },
      {
      name: "type",
      type: new dataTypes.Char(10)
    },
      {
      name: "vin",
      type: new dataTypes.Char(17)
    }
  ];

/**
 * Input interface
 */
export interface assetDSInput {
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
 * Data structure
 */
  let locationDSFields: any = [
      {
      name: "latitude",
      type: new dataTypes.PackedDecimal(9, 7)
    },
      {
      name: "longitude",
      type: new dataTypes.PackedDecimal(17, 14)
    }
  ];

/**
 * Input interface
 */
export interface locationDSInput {
    /**
     * @size 9 digits
     * @precision 7 decimals
     */
    latitude: number | string,
    /**
     * @size 17 digits
     * @precision 14 decimals
     */
    longitude: number | string
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
 * Data structure
 */
  let MetaDSFields: any = [
      {
      name: "asset",
      type: new dataTypes.DataStructure(assetDSFields)
    },
      {
      name: "fuel_level",
      type: new dataTypes.PackedDecimal(3, 1)
    },
      {
      name: "location",
      type: new dataTypes.DataStructure(locationDSFields)
    },
      {
      name: "odometer",
      type: new dataTypes.PackedDecimal(8, 2)
    },
      {
      name: "timestamp",
      type: new dataTypes.Char(25)
    }
  ];

/**
 * Input interface
 */
export interface MetaDSInput {
    /**
     */
    asset: assetDSInput,
    /**
     * @size 3 digits
     * @precision 1 decimals
     */
    fuel_level: number | string,
    /**
     */
    location: locationDSInput,
    /**
     * @size 8 digits
     * @precision 2 decimals
     */
    odometer: number | string,
    /**
     * @size 25 characters
     */
    timestamp: string
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
 * Data structure
 */
  let LocationsDSFields: any = [
      {
      name: "id",
      type: new dataTypes.PackedDecimal(16, 0)
    },
      {
      name: "external_id",
      type: new dataTypes.Char(15)
    },
      {
      name: "email",
      type: new dataTypes.Char(50)
    },
      {
      name: "type",
      type: new dataTypes.Char(3)
    },
      {
      name: "name",
      type: new dataTypes.Char(12)
    },
      {
      name: "address",
      type: new dataTypes.Char(18)
    },
      {
      name: "city",
      type: new dataTypes.Char(12)
    },
      {
      name: "state",
      type: new dataTypes.Char(2)
    },
      {
      name: "country_code",
      type: new dataTypes.Char(2)
    },
      {
      name: "postal_code",
      type: new dataTypes.Char(5)
    },
      {
      name: "postal_splc",
      type: new dataTypes.Char(5)
    },
      {
      name: "latitude",
      type: new dataTypes.PackedDecimal(8, 6)
    },
      {
      name: "longitude",
      type: new dataTypes.PackedDecimal(9, 6)
    },
      {
      name: "time_zone",
      type: new dataTypes.Char(10)
    },
      {
      name: "open_hours",
      type: new dataTypes.Char(5)
    },
      {
      name: "external_data",
      type: new dataTypes.Char(5)
    },
      {
      name: "is_inventory_location",
      type: new dataTypes.Bool()
    },
      {
      name: "created_at",
      type: new dataTypes.Char(25)
    },
      {
      name: "updated_at",
      type: new dataTypes.Char(25)
    }
  ];

/**
 * Input interface
 */
export interface LocationsDSInput {
    /**
     * @size 16 digits
     * @precision 0 decimals
     */
    id: number | string,
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
    latitude: number | string,
    /**
     * @size 9 digits
     * @precision 6 decimals
     */
    longitude: number | string,
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
 * Data structure
 */
  let ExternalDSFields: any = [
      {
      name: "label",
      type: new dataTypes.Char(8)
    },
      {
      name: "value",
      type: new dataTypes.Char(5)
    },
      {
      name: "order",
      type: new dataTypes.PackedDecimal(1, 0)
    },
      {
      name: "isLabel",
      type: new dataTypes.Bool()
    }
  ];

/**
 * Input interface
 */
export interface ExternalDSInput {
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
    order: number | string,
    /**
     */
    isLabel: boolean
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
 * Data structure
 */
  let appointmentDSFields: any = [
      {
      name: "start_time",
      type: new dataTypes.Char(25)
    },
      {
      name: "ready_time",
      type: new dataTypes.Char(25)
    },
      {
      name: "late_time",
      type: new dataTypes.Char(25)
    },
      {
      name: "end_time",
      type: new dataTypes.Char(25)
    }
  ];

/**
 * Input interface
 */
export interface appointmentDSInput {
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
 * Data structure
 */
  let centerDSFields: any = [
      {
      name: "latitude",
      type: new dataTypes.PackedDecimal(8, 6)
    },
      {
      name: "longitude",
      type: new dataTypes.PackedDecimal(9, 6)
    }
  ];

/**
 * Input interface
 */
export interface centerDSInput {
    /**
     * @size 8 digits
     * @precision 6 decimals
     */
    latitude: number | string,
    /**
     * @size 9 digits
     * @precision 6 decimals
     */
    longitude: number | string
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
 * Data structure
 */
  let circleDSFields: any = [
      {
      name: "center",
      type: new dataTypes.DataStructure(centerDSFields)
    },
      {
      name: "radius",
      type: new dataTypes.PackedDecimal(3, 0)
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
     */
    radius: number | string
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
 * Data structure
 */
  let geofenceDSFields: any = [
      {
      name: "circle",
      type: new dataTypes.DataStructure(circleDSFields)
    },
      {
      name: "delay",
      type: new dataTypes.PackedDecimal(3, 0)
    },
      {
      name: "auto_complete",
      type: new dataTypes.Bool()
    },
      {
      name: "trigger_by",
      type: new dataTypes.Char(5)
    },
      {
      name: "message",
      type: new dataTypes.Char(17)
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
     */
    delay: number | string,
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
 * Data structure
 */
  let external_dataDSFields: any = [
      {
      name: "is_prompt_repeats",
      type: new dataTypes.Bool()
    },
      {
      name: "is_allow_repeats",
      type: new dataTypes.Bool()
    },
      {
      name: "is_required",
      type: new dataTypes.Bool()
    },
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
    is_prompt_repeats: boolean,
    /**
     */
    is_allow_repeats: boolean,
    /**
     */
    is_required: boolean,
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
 * Data structure
 */
  let fieldsDSFields: any = [
      {
      name: "OrderNum",
      type: new dataTypes.Char(7)
    },
      {
      name: "Tyepe",
      type: new dataTypes.Char(1)
    },
      {
      name: "PCS",
      type: new dataTypes.Char(4)
    },
      {
      name: "WGT",
      type: new dataTypes.Char(5)
    },
      {
      name: "TRIP",
      type: new dataTypes.Char(7)
    },
      {
      name: "Comment",
      type: new dataTypes.Char(25)
    },
      {
      name: "DSP",
      type: new dataTypes.Char(1)
    },
      {
      name: "Unit",
      type: new dataTypes.Char(6)
    },
      {
      name: "hiddenLatitude",
      type: new dataTypes.Char(10)
    },
      {
      name: "hiddenLongitude",
      type: new dataTypes.Char(11)
    },
      {
      name: "locname",
      type: new dataTypes.Char(15)
    },
      {
      name: "address",
      type: new dataTypes.Char(18)
    },
      {
      name: "city",
      type: new dataTypes.Char(12)
    },
      {
      name: "state",
      type: new dataTypes.Char(2)
    },
      {
      name: "zipcode",
      type: new dataTypes.Char(5)
    },
      {
      name: "stopkey",
      type: new dataTypes.Char(8)
    },
      {
      name: "stopseq",
      type: new dataTypes.Char(2)
    },
      {
      name: "user_id",
      type: new dataTypes.PackedDecimal(16, 0)
    }
  ];

/**
 * Input interface
 */
export interface fieldsDSInput {
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
    user_id: number | string
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
 * Data structure
 */
  let TasksDSFields: any = [
      {
      name: "id",
      type: new dataTypes.PackedDecimal(16, 0)
    },
      {
      name: "external_id",
      type: new dataTypes.Char(9)
    },
      {
      name: "name",
      type: new dataTypes.Char(19)
    },
      {
      name: "order",
      type: new dataTypes.PackedDecimal(1, 0)
    },
      {
      name: "type",
      type: new dataTypes.Char(19)
    },
      {
      name: "completed",
      type: new dataTypes.Bool()
    },
      {
      name: "completed_at",
      type: new dataTypes.Char(25)
    },
      {
      name: "completed_by",
      type: new dataTypes.Char(5)
    },
      {
      name: "completion_type",
      type: new dataTypes.Char(18)
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
     * @size 16 digits
     * @precision 0 decimals
     */
    id: number | string,
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
    order: number | string,
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
 * Data structure
 */
  let StepsDSFields: any = [
      {
      name: "id",
      type: new dataTypes.PackedDecimal(16, 0)
    },
      {
      name: "external_id",
      type: new dataTypes.Char(17)
    },
      {
      name: "name",
      type: new dataTypes.Char(12)
    },
      {
      name: "is_disabled",
      type: new dataTypes.Bool()
    },
      {
      name: "is_skippable",
      type: new dataTypes.Bool()
    },
      {
      name: "is_skipped",
      type: new dataTypes.Bool()
    },
      {
      name: "skip_reason",
      type: new dataTypes.Char(5)
    },
      {
      name: "is_bypassable",
      type: new dataTypes.Bool()
    },
      {
      name: "is_bypassed",
      type: new dataTypes.Bool()
    },
      {
      name: "bypass_reason",
      type: new dataTypes.Char(5)
    },
      {
      name: "is_reorderable",
      type: new dataTypes.Bool()
    },
      {
      name: "reorder_reason",
      type: new dataTypes.Char(5)
    },
      {
      name: "completed",
      type: new dataTypes.Bool()
    },
      {
      name: "completed_at",
      type: new dataTypes.Char(25)
    },
      {
      name: "type",
      type: new dataTypes.Char(4)
    },
      {
      name: "order",
      type: new dataTypes.PackedDecimal(1, 0)
    },
      {
      name: "location_external_id",
      type: new dataTypes.Char(15)
    },
      {
      name: "route_leg_external_id",
      type: new dataTypes.Char(5)
    },
      {
      name: "customer_external_id",
      type: new dataTypes.Char(5)
    },
      {
      name: "appointment",
      type: new dataTypes.DataStructure(appointmentDSFields)
    },
      {
      name: "eta",
      type: new dataTypes.Char(25)
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
     * @size 16 digits
     * @precision 0 decimals
     */
    id: number | string,
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
    order: number | string,
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
    appointment: appointmentDSInput,
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
    tasks: Array<TasksDSInput>
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
 * Data structure
 */
  let OrderResDSFields: any = [
      {
      name: "drivers",
      type: new dataTypes.Char(5),
      dim: 1
    },
      {
      name: "id",
      type: new dataTypes.PackedDecimal(16, 0)
    },
      {
      name: "external_id",
      type: new dataTypes.Char(7)
    },
      {
      name: "external_id_alias",
      type: new dataTypes.Char(7)
    },
      {
      name: "preplan_external_id",
      type: new dataTypes.Char(10)
    },
      {
      name: "status",
      type: new dataTypes.Char(6)
    },
      {
      name: "sequence",
      type: new dataTypes.Char(1)
    },
      {
      name: "shipment_details",
      type: new dataTypes.DataStructure(shipdetailsDSFields)
    },
      {
      name: "received_at",
      type: new dataTypes.Char(25)
    },
      {
      name: "reviewed_at",
      type: new dataTypes.Char(25)
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
      name: "modified_at",
      type: new dataTypes.Char(25)
    },
      {
      name: "remarks",
      type: new dataTypes.DataStructure(RemarksDSFields),
      dim: 3
    },
      {
      name: "prompts",
      type: new dataTypes.DataStructure(promptsDSFields)
    },
      {
      name: "meta",
      type: new dataTypes.DataStructure(MetaDSFields),
      dim: 9
    },
      {
      name: "locations",
      type: new dataTypes.DataStructure(LocationsDSFields),
      dim: 20
    },
      {
      name: "external_data",
      type: new dataTypes.DataStructure(ExternalDSFields),
      dim: 4
    },
      {
      name: "steps",
      type: new dataTypes.DataStructure(StepsDSFields),
      dim: 20
    },
      {
      name: "is_declinable",
      type: new dataTypes.Bool()
    }
  ];

/**
 * Input interface
 */
export interface OrderResDSInput {
    /**
     * @size 5 characters
     */
    drivers: Array<string>,
    /**
     * @size 16 digits
     * @precision 0 decimals
     */
    id: number | string,
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
    shipment_details: shipdetailsDSInput,
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
    remarks: Array<RemarksDSInput>,
    /**
     */
    prompts: promptsDSInput,
    /**
     */
    meta: Array<MetaDSInput>,
    /**
     */
    locations: Array<LocationsDSInput>,
    /**
     */
    external_data: Array<ExternalDSInput>,
    /**
     */
    steps: Array<StepsDSInput>,
    /**
     */
    is_declinable: boolean
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
    locations: Array<LocationsDS>,
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
 * Program model
 */
export const DVGETORDRModel =   new eradaniConnect.run.Pgm("DVGETORDR",   {
      lib: config.eradaniConnect.native.PSLib,
      mode: "ile",
      params: [
      {
      name: "order",
      type: new dataTypes.Char(7)
    },
      {
      name: "drivers",
      type: new dataTypes.Char(6)
    },
      {
      name: "OrderRes",
      type: new dataTypes.DataStructure(OrderResDSFields)
    }
  ]
    });

/**
 * Input interface
 */
export interface DVGETORDRInput {
    /**
     * @size 7 characters
     */
    order: string,
    /**
     * @size 6 characters
     */
    drivers: string,
    /**
     */
    OrderRes: OrderResDSInput
}

/**
 * Output interface
 */
export interface DVGETORDROutput {
    /**
     * @size 7 characters
     */
    order: string,
    /**
     * @size 6 characters
     */
    drivers: string,
    /**
     */
    OrderRes: OrderResDS
}

/* eslint-enable */

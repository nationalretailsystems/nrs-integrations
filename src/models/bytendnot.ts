/* eslint-disable */
// @ts-nocheck
// Module: bytendnot
// Generated source -- do not modify

import eradaniConnect from '@eradani-inc/eradani-connect';
const { dataTypes } = eradaniConnect;

// Manually entered import
import config from 'config';

/**
 * Data structure
 */
let apiHeaderDSFields: any = [
    {
        name: 'companyCode',
        type: new dataTypes.Char(15),
        defaultValue: ''
    },
    {
        name: 'contractedCompanyCode',
        type: new dataTypes.Char(15),
        defaultValue: ''
    },
    {
        name: 'contractedCompanyName',
        type: new dataTypes.Char(50),
        defaultValue: ''
    },
    {
        name: 'customerCode',
        type: new dataTypes.Char(15),
        defaultValue: '',
        dim: 1
    },
    {
        name: 'messageID',
        type: new dataTypes.Char(25),
        defaultValue: ''
    },
    {
        name: 'providerCode',
        type: new dataTypes.Char(20),
        defaultValue: '',
        dim: 1
    },
    {
        name: 'timestamp',
        type: new dataTypes.Char(20),
        defaultValue: ''
    },
    {
        name: 'providerCustomerCode',
        type: new dataTypes.Char(25),
        defaultValue: ''
    }
];

/**
 * Input interface
 */
export interface apiHeaderDSInput {
    /**
     * @size 15 characters
     * @default ``
     */
    companyCode?: string;
    /**
     * @size 15 characters
     * @default ``
     */
    contractedCompanyCode?: string;
    /**
     * @size 50 characters
     * @default ``
     */
    contractedCompanyName?: string;
    /**
     * @size 15 characters
     * @default ``
     */
    customerCode?: Array<string>;
    /**
     * @size 25 characters
     * @default ``
     */
    messageID?: string;
    /**
     * @size 20 characters
     * @default ``
     */
    providerCode?: Array<string>;
    /**
     * @size 20 characters
     * @default ``
     */
    timestamp?: string;
    /**
     * @size 25 characters
     * @default ``
     */
    providerCustomerCode?: string;
}

/**
 * Output interface
 */
export interface apiHeaderDS {
    /**
     * @size 15 characters
     * @default ``
     */
    companyCode: string;
    /**
     * @size 15 characters
     * @default ``
     */
    contractedCompanyCode: string;
    /**
     * @size 50 characters
     * @default ``
     */
    contractedCompanyName: string;
    /**
     * @size 15 characters
     * @default ``
     */
    customerCode: Array<string>;
    /**
     * @size 25 characters
     * @default ``
     */
    messageID: string;
    /**
     * @size 20 characters
     * @default ``
     */
    providerCode: Array<string>;
    /**
     * @size 20 characters
     * @default ``
     */
    timestamp: string;
    /**
     * @size 25 characters
     * @default ``
     */
    providerCustomerCode: string;
}

/**
 * Data structure
 */
let geographicalCoordinatesDSFields: any = [
    {
        name: 'latitude',
        type: new dataTypes.PackedDecimal(9, 6),
        defaultValue: 0.0
    },
    {
        name: 'longitude',
        type: new dataTypes.PackedDecimal(9, 6),
        defaultValue: 0.0
    }
];

/**
 * Input interface
 */
export interface geographicalCoordinatesDSInput {
    /**
     * @size 9 digits
     * @precision 6 decimals
     * @default `0`
     */
    latitude?: number | string;
    /**
     * @size 9 digits
     * @precision 6 decimals
     * @default `0`
     */
    longitude?: number | string;
}

/**
 * Output interface
 */
export interface geographicalCoordinatesDS {
    /**
     * @size 9 digits
     * @precision 6 decimals
     * @default `0`
     */
    latitude: number;
    /**
     * @size 9 digits
     * @precision 6 decimals
     * @default `0`
     */
    longitude: number;
}

/**
 * Data structure
 */
let addressDSFields: any = [
    {
        name: 'city',
        type: new dataTypes.Char(20),
        defaultValue: ''
    },
    {
        name: 'countryCode',
        type: new dataTypes.Char(3),
        defaultValue: ''
    },
    {
        name: 'fullAddress',
        type: new dataTypes.Char(100),
        defaultValue: ''
    },
    {
        name: 'geographicalCoordinates',
        type: new dataTypes.DataStructure(geographicalCoordinatesDSFields)
    },
    {
        name: 'postalCode',
        type: new dataTypes.Char(9),
        defaultValue: ''
    },
    {
        name: 'state',
        type: new dataTypes.Char(3),
        defaultValue: ''
    },
    {
        name: 'streetAddressOne',
        type: new dataTypes.Char(50),
        defaultValue: ''
    }
];

/**
 * Input interface
 */
export interface addressDSInput {
    /**
     * @size 20 characters
     * @default ``
     */
    city?: string;
    /**
     * @size 3 characters
     * @default ``
     */
    countryCode?: string;
    /**
     * @size 100 characters
     * @default ``
     */
    fullAddress?: string;
    /**
     */
    geographicalCoordinates: geographicalCoordinatesDSInput;
    /**
     * @size 9 characters
     * @default ``
     */
    postalCode?: string;
    /**
     * @size 3 characters
     * @default ``
     */
    state?: string;
    /**
     * @size 50 characters
     * @default ``
     */
    streetAddressOne?: string;
}

/**
 * Output interface
 */
export interface addressDS {
    /**
     * @size 20 characters
     * @default ``
     */
    city: string;
    /**
     * @size 3 characters
     * @default ``
     */
    countryCode: string;
    /**
     * @size 100 characters
     * @default ``
     */
    fullAddress: string;
    /**
     */
    geographicalCoordinates: geographicalCoordinatesDS;
    /**
     * @size 9 characters
     * @default ``
     */
    postalCode: string;
    /**
     * @size 3 characters
     * @default ``
     */
    state: string;
    /**
     * @size 50 characters
     * @default ``
     */
    streetAddressOne: string;
}

/**
 * Data structure
 */
let billToPartyDSFields: any = [
    {
        name: 'address',
        type: new dataTypes.DataStructure(addressDSFields)
    }
];

/**
 * Input interface
 */
export interface billToPartyDSInput {
    /**
     */
    address: addressDSInput;
}

/**
 * Output interface
 */
export interface billToPartyDS {
    /**
     */
    address: addressDS;
}

/**
 * Data structure
 */
let EquipmentDSFields: any = [
    {
        name: 'equipmentID',
        type: new dataTypes.Char(4),
        defaultValue: ''
    },
    {
        name: 'equipmentType',
        type: new dataTypes.Char(15),
        defaultValue: ''
    },
    {
        name: 'height',
        type: new dataTypes.PackedDecimal(3, 0),
        defaultValue: 0.0
    },
    {
        name: 'length',
        type: new dataTypes.PackedDecimal(3, 0),
        defaultValue: 0.0
    },
    {
        name: 'width',
        type: new dataTypes.PackedDecimal(3, 0),
        defaultValue: 0.0
    }
];

/**
 * Input interface
 */
export interface EquipmentDSInput {
    /**
     * @size 4 characters
     * @default ``
     */
    equipmentID?: string;
    /**
     * @size 15 characters
     * @default ``
     */
    equipmentType?: string;
    /**
     * @size 3 digits
     * @precision 0 decimals
     * @default `0`
     */
    height?: number | string;
    /**
     * @size 3 digits
     * @precision 0 decimals
     * @default `0`
     */
    length?: number | string;
    /**
     * @size 3 digits
     * @precision 0 decimals
     * @default `0`
     */
    width?: number | string;
}

/**
 * Output interface
 */
export interface EquipmentDS {
    /**
     * @size 4 characters
     * @default ``
     */
    equipmentID: string;
    /**
     * @size 15 characters
     * @default ``
     */
    equipmentType: string;
    /**
     * @size 3 digits
     * @precision 0 decimals
     * @default `0`
     */
    height: number;
    /**
     * @size 3 digits
     * @precision 0 decimals
     * @default `0`
     */
    length: number;
    /**
     * @size 3 digits
     * @precision 0 decimals
     * @default `0`
     */
    width: number;
}

/**
 * Data structure
 */
let freightRequirementsDSFields: any = [
    {
        name: 'hazardousMaterials',
        type: new dataTypes.Bool(),
        defaultValue: false
    },
    {
        name: 'paymentTerms',
        type: new dataTypes.Char(7),
        defaultValue: ''
    }
];

/**
 * Input interface
 */
export interface freightRequirementsDSInput {
    /**
     * @default `false`
     */
    hazardousMaterials?: boolean;
    /**
     * @size 7 characters
     * @default ``
     */
    paymentTerms?: string;
}

/**
 * Output interface
 */
export interface freightRequirementsDS {
    /**
     * @default `false`
     */
    hazardousMaterials: boolean;
    /**
     * @size 7 characters
     * @default ``
     */
    paymentTerms: string;
}

/**
 * Data structure
 */
let loadDetailsDSFields: any = [
    {
        name: 'commodity',
        type: new dataTypes.Char(15),
        defaultValue: ''
    },
    {
        name: 'commodityDescription',
        type: new dataTypes.Char(50),
        defaultValue: ''
    },
    {
        name: 'loadDescription',
        type: new dataTypes.Char(15),
        defaultValue: ''
    }
];

/**
 * Input interface
 */
export interface loadDetailsDSInput {
    /**
     * @size 15 characters
     * @default ``
     */
    commodity?: string;
    /**
     * @size 50 characters
     * @default ``
     */
    commodityDescription?: string;
    /**
     * @size 15 characters
     * @default ``
     */
    loadDescription?: string;
}

/**
 * Output interface
 */
export interface loadDetailsDS {
    /**
     * @size 15 characters
     * @default ``
     */
    commodity: string;
    /**
     * @size 50 characters
     * @default ``
     */
    commodityDescription: string;
    /**
     * @size 15 characters
     * @default ``
     */
    loadDescription: string;
}

/**
 * Data structure
 */
let loadTotalsDSFields: any = [
    {
        name: 'declaredValue',
        type: new dataTypes.PackedDecimal(11, 0),
        defaultValue: 2.0
    },
    {
        name: 'distance',
        type: new dataTypes.PackedDecimal(5, 1),
        defaultValue: 0.0
    },
    {
        name: 'linearLength',
        type: new dataTypes.PackedDecimal(2, 0),
        defaultValue: 0.0
    },
    {
        name: 'orderValue',
        type: new dataTypes.PackedDecimal(11, 0),
        defaultValue: 2.0
    },
    {
        name: 'pallets',
        type: new dataTypes.PackedDecimal(2, 0),
        defaultValue: 0.0
    },
    {
        name: 'pieces',
        type: new dataTypes.PackedDecimal(4, 0),
        defaultValue: 0.0
    },
    {
        name: 'volume',
        type: new dataTypes.PackedDecimal(4, 0),
        defaultValue: 0.0
    },
    {
        name: 'weight',
        type: new dataTypes.PackedDecimal(5, 0),
        defaultValue: 0.0
    }
];

/**
 * Input interface
 */
export interface loadTotalsDSInput {
    /**
     * @size 11 digits
     * @precision 0 decimals
     * @default `2`
     */
    declaredValue?: number | string;
    /**
     * @size 5 digits
     * @precision 1 decimals
     * @default `0`
     */
    distance?: number | string;
    /**
     * @size 2 digits
     * @precision 0 decimals
     * @default `0`
     */
    linearLength?: number | string;
    /**
     * @size 11 digits
     * @precision 0 decimals
     * @default `2`
     */
    orderValue?: number | string;
    /**
     * @size 2 digits
     * @precision 0 decimals
     * @default `0`
     */
    pallets?: number | string;
    /**
     * @size 4 digits
     * @precision 0 decimals
     * @default `0`
     */
    pieces?: number | string;
    /**
     * @size 4 digits
     * @precision 0 decimals
     * @default `0`
     */
    volume?: number | string;
    /**
     * @size 5 digits
     * @precision 0 decimals
     * @default `0`
     */
    weight?: number | string;
}

/**
 * Output interface
 */
export interface loadTotalsDS {
    /**
     * @size 11 digits
     * @precision 0 decimals
     * @default `2`
     */
    declaredValue: number;
    /**
     * @size 5 digits
     * @precision 1 decimals
     * @default `0`
     */
    distance: number;
    /**
     * @size 2 digits
     * @precision 0 decimals
     * @default `0`
     */
    linearLength: number;
    /**
     * @size 11 digits
     * @precision 0 decimals
     * @default `2`
     */
    orderValue: number;
    /**
     * @size 2 digits
     * @precision 0 decimals
     * @default `0`
     */
    pallets: number;
    /**
     * @size 4 digits
     * @precision 0 decimals
     * @default `0`
     */
    pieces: number;
    /**
     * @size 4 digits
     * @precision 0 decimals
     * @default `0`
     */
    volume: number;
    /**
     * @size 5 digits
     * @precision 0 decimals
     * @default `0`
     */
    weight: number;
}

/**
 * Data structure
 */
let CommodityDSFields: any = [
    {
        name: 'commodity',
        type: new dataTypes.Char(15),
        defaultValue: ''
    },
    {
        name: 'commodityDescription',
        type: new dataTypes.Char(50),
        defaultValue: ''
    },
    {
        name: 'hazardousMaterials',
        type: new dataTypes.Bool(),
        defaultValue: false
    },
    {
        name: 'pallets',
        type: new dataTypes.PackedDecimal(2, 0),
        defaultValue: 0.0
    },
    {
        name: 'pieces',
        type: new dataTypes.PackedDecimal(4, 0),
        defaultValue: 0.0
    },
    {
        name: 'shipmentID',
        type: new dataTypes.Char(10),
        defaultValue: ''
    },
    {
        name: 'shipmentName',
        type: new dataTypes.Char(15),
        defaultValue: ''
    },
    {
        name: 'volume',
        type: new dataTypes.PackedDecimal(4, 0),
        defaultValue: 0.0
    },
    {
        name: 'weight',
        type: new dataTypes.PackedDecimal(5, 0),
        defaultValue: 0.0
    }
];

/**
 * Input interface
 */
export interface CommodityDSInput {
    /**
     * @size 15 characters
     * @default ``
     */
    commodity?: string;
    /**
     * @size 50 characters
     * @default ``
     */
    commodityDescription?: string;
    /**
     * @default `false`
     */
    hazardousMaterials?: boolean;
    /**
     * @size 2 digits
     * @precision 0 decimals
     * @default `0`
     */
    pallets?: number | string;
    /**
     * @size 4 digits
     * @precision 0 decimals
     * @default `0`
     */
    pieces?: number | string;
    /**
     * @size 10 characters
     * @default ``
     */
    shipmentID?: string;
    /**
     * @size 15 characters
     * @default ``
     */
    shipmentName?: string;
    /**
     * @size 4 digits
     * @precision 0 decimals
     * @default `0`
     */
    volume?: number | string;
    /**
     * @size 5 digits
     * @precision 0 decimals
     * @default `0`
     */
    weight?: number | string;
}

/**
 * Output interface
 */
export interface CommodityDS {
    /**
     * @size 15 characters
     * @default ``
     */
    commodity: string;
    /**
     * @size 50 characters
     * @default ``
     */
    commodityDescription: string;
    /**
     * @default `false`
     */
    hazardousMaterials: boolean;
    /**
     * @size 2 digits
     * @precision 0 decimals
     * @default `0`
     */
    pallets: number;
    /**
     * @size 4 digits
     * @precision 0 decimals
     * @default `0`
     */
    pieces: number;
    /**
     * @size 10 characters
     * @default ``
     */
    shipmentID: string;
    /**
     * @size 15 characters
     * @default ``
     */
    shipmentName: string;
    /**
     * @size 4 digits
     * @precision 0 decimals
     * @default `0`
     */
    volume: number;
    /**
     * @size 5 digits
     * @precision 0 decimals
     * @default `0`
     */
    weight: number;
}

/**
 * Data structure
 */
let stopsDSFields: any = [
    {
        name: 'activityType',
        type: new dataTypes.Char(15),
        defaultValue: ''
    },
    {
        name: 'address',
        type: new dataTypes.DataStructure(addressDSFields)
    },
    {
        name: 'appointmentRequired',
        type: new dataTypes.Bool(),
        defaultValue: false
    },
    {
        name: 'earliestArrival',
        type: new dataTypes.Char(20),
        defaultValue: ''
    },
    {
        name: 'earliestArrivalUtc',
        type: new dataTypes.Char(20),
        defaultValue: ''
    },
    {
        name: 'latestArrival',
        type: new dataTypes.Char(20),
        defaultValue: ''
    },
    {
        name: 'latestArrivalUtc',
        type: new dataTypes.Char(20)
    },
    {
        name: 'liveHandling',
        type: new dataTypes.Bool(),
        defaultValue: true
    },
    {
        name: 'locationID',
        type: new dataTypes.Char(7),
        defaultValue: ''
    },
    {
        name: 'locationName',
        type: new dataTypes.Char(50),
        defaultValue: ''
    },
    {
        name: 'pickShipments',
        type: new dataTypes.DataStructure(CommodityDSFields),
        dim: 1
    },
    {
        name: 'dropShipments',
        type: new dataTypes.DataStructure(CommodityDSFields),
        dim: 1
    },
    {
        name: 'stopSequence',
        type: new dataTypes.PackedDecimal(1, 0),
        defaultValue: 0.0
    }
];

/**
 * Input interface
 */
export interface stopsDSInput {
    /**
     * @size 15 characters
     * @default ``
     */
    activityType?: string;
    /**
     */
    address: addressDSInput;
    /**
     * @default `false`
     */
    appointmentRequired?: boolean;
    /**
     * @size 20 characters
     * @default ``
     */
    earliestArrival?: string;
    /**
     * @size 20 characters
     * @default ``
     */
    earliestArrivalUtc?: string;
    /**
     * @size 20 characters
     * @default ``
     */
    latestArrival?: string;
    /**
     * @size 20 characters
     */
    latestArrivalUtc: string;
    /**
     * @default `true`
     */
    liveHandling?: boolean;
    /**
     * @size 7 characters
     * @default ``
     */
    locationID?: string;
    /**
     * @size 50 characters
     * @default ``
     */
    locationName?: string;
    /**
     */
    pickShipments: Array<CommodityDSInput>;
    /**
     */
    dropShipments: Array<CommodityDSInput>;
    /**
     * @size 1 digits
     * @precision 0 decimals
     * @default `0`
     */
    stopSequence?: number | string;
}

/**
 * Output interface
 */
export interface stopsDS {
    /**
     * @size 15 characters
     * @default ``
     */
    activityType: string;
    /**
     */
    address: addressDS;
    /**
     * @default `false`
     */
    appointmentRequired: boolean;
    /**
     * @size 20 characters
     * @default ``
     */
    earliestArrival: string;
    /**
     * @size 20 characters
     * @default ``
     */
    earliestArrivalUtc: string;
    /**
     * @size 20 characters
     * @default ``
     */
    latestArrival: string;
    /**
     * @size 20 characters
     */
    latestArrivalUtc: string;
    /**
     * @default `true`
     */
    liveHandling: boolean;
    /**
     * @size 7 characters
     * @default ``
     */
    locationID: string;
    /**
     * @size 50 characters
     * @default ``
     */
    locationName: string;
    /**
     */
    pickShipments: Array<CommodityDS>;
    /**
     */
    dropShipments: Array<CommodityDS>;
    /**
     * @size 1 digits
     * @precision 0 decimals
     * @default `0`
     */
    stopSequence: number;
}

/**
 * Data structure
 */
let tenderContactDSFields: any = [
    {
        name: 'contactType',
        type: new dataTypes.Char(25),
        defaultValue: ''
    },
    {
        name: 'email',
        type: new dataTypes.Char(50),
        defaultValue: ''
    },
    {
        name: 'firstName',
        type: new dataTypes.Char(25),
        defaultValue: ''
    },
    {
        name: 'fullName',
        type: new dataTypes.Char(50),
        defaultValue: ''
    },
    {
        name: 'lastName',
        type: new dataTypes.Char(25),
        defaultValue: ''
    },
    {
        name: 'phone1',
        type: new dataTypes.Char(15),
        defaultValue: ''
    },
    {
        name: 'primaryLanguage',
        type: new dataTypes.Char(10),
        defaultValue: ''
    }
];

/**
 * Input interface
 */
export interface tenderContactDSInput {
    /**
     * @size 25 characters
     * @default ``
     */
    contactType?: string;
    /**
     * @size 50 characters
     * @default ``
     */
    email?: string;
    /**
     * @size 25 characters
     * @default ``
     */
    firstName?: string;
    /**
     * @size 50 characters
     * @default ``
     */
    fullName?: string;
    /**
     * @size 25 characters
     * @default ``
     */
    lastName?: string;
    /**
     * @size 15 characters
     * @default ``
     */
    phone1?: string;
    /**
     * @size 10 characters
     * @default ``
     */
    primaryLanguage?: string;
}

/**
 * Output interface
 */
export interface tenderContactDS {
    /**
     * @size 25 characters
     * @default ``
     */
    contactType: string;
    /**
     * @size 50 characters
     * @default ``
     */
    email: string;
    /**
     * @size 25 characters
     * @default ``
     */
    firstName: string;
    /**
     * @size 50 characters
     * @default ``
     */
    fullName: string;
    /**
     * @size 25 characters
     * @default ``
     */
    lastName: string;
    /**
     * @size 15 characters
     * @default ``
     */
    phone1: string;
    /**
     * @size 10 characters
     * @default ``
     */
    primaryLanguage: string;
}

/**
 * Data structure
 */
let unitsOfMeasureDSFields: any = [
    {
        name: 'distanceUOM',
        type: new dataTypes.Char(10),
        defaultValue: ''
    },
    {
        name: 'lengthUOM',
        type: new dataTypes.Char(10),
        defaultValue: ''
    },
    {
        name: 'temperatureUOM',
        type: new dataTypes.Char(10),
        defaultValue: ''
    },
    {
        name: 'volumeUOM',
        type: new dataTypes.Char(10),
        defaultValue: ''
    },
    {
        name: 'weightUOM',
        type: new dataTypes.Char(10),
        defaultValue: ''
    }
];

/**
 * Input interface
 */
export interface unitsOfMeasureDSInput {
    /**
     * @size 10 characters
     * @default ``
     */
    distanceUOM?: string;
    /**
     * @size 10 characters
     * @default ``
     */
    lengthUOM?: string;
    /**
     * @size 10 characters
     * @default ``
     */
    temperatureUOM?: string;
    /**
     * @size 10 characters
     * @default ``
     */
    volumeUOM?: string;
    /**
     * @size 10 characters
     * @default ``
     */
    weightUOM?: string;
}

/**
 * Output interface
 */
export interface unitsOfMeasureDS {
    /**
     * @size 10 characters
     * @default ``
     */
    distanceUOM: string;
    /**
     * @size 10 characters
     * @default ``
     */
    lengthUOM: string;
    /**
     * @size 10 characters
     * @default ``
     */
    temperatureUOM: string;
    /**
     * @size 10 characters
     * @default ``
     */
    volumeUOM: string;
    /**
     * @size 10 characters
     * @default ``
     */
    weightUOM: string;
}

/**
 * Program model
 */
export const BYTENDNOTModel = new eradaniConnect.run.Pgm('BYTENDNOT', {
    lib: config.blueyonder.pgmlib,
    mode: 'ile',
    params: [
        {
            name: 'apiHeader',
            type: new dataTypes.DataStructure(apiHeaderDSFields)
        },
        {
            name: 'billToParty',
            type: new dataTypes.DataStructure(billToPartyDSFields)
        },
        {
            name: 'carrierSCAC',
            type: new dataTypes.Char(4),
            defaultValue: ''
        },
        {
            name: 'deliveryTime',
            type: new dataTypes.Char(20),
            defaultValue: ''
        },
        {
            name: 'deliveryTimeUtc',
            type: new dataTypes.Char(20),
            defaultValue: ''
        },
        {
            name: 'equipmentDetails',
            type: new dataTypes.DataStructure(EquipmentDSFields),
            dim: 1
        },
        {
            name: 'freightRequirements',
            type: new dataTypes.DataStructure(freightRequirementsDSFields)
        },
        {
            name: 'loadDetails',
            type: new dataTypes.DataStructure(loadDetailsDSFields)
        },
        {
            name: 'loadID',
            type: new dataTypes.Char(7),
            defaultValue: ''
        },
        {
            name: 'loadTotals',
            type: new dataTypes.DataStructure(loadTotalsDSFields)
        },
        {
            name: 'notificationType',
            type: new dataTypes.Char(7),
            defaultValue: ''
        },
        {
            name: 'pickupTime',
            type: new dataTypes.Char(20),
            defaultValue: ''
        },
        {
            name: 'pickupTimeUtc',
            type: new dataTypes.Char(20),
            defaultValue: ''
        },
        {
            name: 'quoteID',
            type: new dataTypes.Char(7),
            defaultValue: ''
        },
        {
            name: 'respondByTime',
            type: new dataTypes.Char(20),
            defaultValue: ''
        },
        {
            name: 'serviceType',
            type: new dataTypes.Char(2),
            defaultValue: ''
        },
        {
            name: 'stops',
            type: new dataTypes.DataStructure(stopsDSFields),
            dim: 2
        },
        {
            name: 'teamDriver',
            type: new dataTypes.Bool(),
            defaultValue: true
        },
        {
            name: 'tenderContact',
            type: new dataTypes.DataStructure(tenderContactDSFields)
        },
        {
            name: 'unitsOfMeasure',
            type: new dataTypes.DataStructure(unitsOfMeasureDSFields)
        }
    ]
});

/**
 * Input interface
 */
export interface BYTENDNOTInput {
    /**
     */
    apiHeader: apiHeaderDSInput;
    /**
     */
    billToParty: billToPartyDSInput;
    /**
     * @size 4 characters
     * @default ``
     */
    carrierSCAC?: string;
    /**
     * @size 20 characters
     * @default ``
     */
    deliveryTime?: string;
    /**
     * @size 20 characters
     * @default ``
     */
    deliveryTimeUtc?: string;
    /**
     */
    equipmentDetails: Array<EquipmentDSInput>;
    /**
     */
    freightRequirements: freightRequirementsDSInput;
    /**
     */
    loadDetails: loadDetailsDSInput;
    /**
     * @size 7 characters
     * @default ``
     */
    loadID?: string;
    /**
     */
    loadTotals: loadTotalsDSInput;
    /**
     * @size 7 characters
     * @default ``
     */
    notificationType?: string;
    /**
     * @size 20 characters
     * @default ``
     */
    pickupTime?: string;
    /**
     * @size 20 characters
     * @default ``
     */
    pickupTimeUtc?: string;
    /**
     * @size 7 characters
     * @default ``
     */
    quoteID?: string;
    /**
     * @size 20 characters
     * @default ``
     */
    respondByTime?: string;
    /**
     * @size 2 characters
     * @default ``
     */
    serviceType?: string;
    /**
     */
    stops: Array<stopsDSInput>;
    /**
     * @default `true`
     */
    teamDriver?: boolean;
    /**
     */
    tenderContact: tenderContactDSInput;
    /**
     */
    unitsOfMeasure: unitsOfMeasureDSInput;
}

/**
 * Output interface
 */
export interface BYTENDNOTOutput {
    /**
     */
    apiHeader: apiHeaderDS;
    /**
     */
    billToParty: billToPartyDS;
    /**
     * @size 4 characters
     * @default ``
     */
    carrierSCAC: string;
    /**
     * @size 20 characters
     * @default ``
     */
    deliveryTime: string;
    /**
     * @size 20 characters
     * @default ``
     */
    deliveryTimeUtc: string;
    /**
     */
    equipmentDetails: Array<EquipmentDS>;
    /**
     */
    freightRequirements: freightRequirementsDS;
    /**
     */
    loadDetails: loadDetailsDS;
    /**
     * @size 7 characters
     * @default ``
     */
    loadID: string;
    /**
     */
    loadTotals: loadTotalsDS;
    /**
     * @size 7 characters
     * @default ``
     */
    notificationType: string;
    /**
     * @size 20 characters
     * @default ``
     */
    pickupTime: string;
    /**
     * @size 20 characters
     * @default ``
     */
    pickupTimeUtc: string;
    /**
     * @size 7 characters
     * @default ``
     */
    quoteID: string;
    /**
     * @size 20 characters
     * @default ``
     */
    respondByTime: string;
    /**
     * @size 2 characters
     * @default ``
     */
    serviceType: string;
    /**
     */
    stops: Array<stopsDS>;
    /**
     * @default `true`
     */
    teamDriver: boolean;
    /**
     */
    tenderContact: tenderContactDS;
    /**
     */
    unitsOfMeasure: unitsOfMeasureDS;
}

/* eslint-enable */

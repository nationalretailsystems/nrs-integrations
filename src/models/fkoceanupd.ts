/* eslint-disable */
// @ts-nocheck
// Module: fkoceanupd
// Generated source -- do not modify

import eradaniConnect from '@eradani-inc/eradani-connect';
const { dataTypes } = eradaniConnect;

// Manually entered import
import config from 'config';

/**
 * Program model
 */
export const FKOCEANUPDModel = new eradaniConnect.run.Pgm('FKOCEANUPD', {
    lib: config.eradaniConnect.native.pgmLib,
    mode: 'ile',
    params: [
        {
            name: 'BillOfLading',
            type: new dataTypes.Char(30),
            defaultValue: ''
        },
        {
            name: 'BookingNumber',
            type: new dataTypes.Char(20),
            defaultValue: ''
        },
        {
            name: 'ContainerNumber',
            type: new dataTypes.Char(20),
            defaultValue: ''
        },
        {
            name: 'ContainerType',
            type: new dataTypes.Char(20),
            defaultValue: ''
        },
        {
            name: 'FourKitesLoadId',
            type: new dataTypes.PackedDecimal(16, 0)
        },
        {
            name: 'LoadNumber',
            type: new dataTypes.Char(50)
        },
        {
            name: 'Message',
            type: new dataTypes.Char(100)
        },
        {
            name: 'MessageType',
            type: new dataTypes.Char(20)
        },
        {
            name: 'ProNumber',
            type: new dataTypes.Char(20),
            defaultValue: ''
        },
        {
            name: 'ReferenceNumbers',
            type: new dataTypes.Char(50),
            defaultValue: '',
            dim: 20
        },
        {
            name: 'Scac',
            type: new dataTypes.Char(4)
        },
        {
            name: 'Shipper',
            type: new dataTypes.Char(30)
        },
        {
            name: 'Status',
            type: new dataTypes.Char(30)
        },
        {
            name: 'StatusCode',
            type: new dataTypes.Char(5)
        },
        {
            name: 'StopName',
            type: new dataTypes.Char(50)
        },
        {
            name: 'Tags',
            type: new dataTypes.Char(50),
            defaultValue: '',
            dim: 15
        },
        {
            name: 'Timestamp',
            type: new dataTypes.Timestamp()
        },
        {
            name: 'VesselName',
            type: new dataTypes.Char(30),
            defaultValue: ''
        },
        {
            name: 'VoyageNumber',
            type: new dataTypes.Char(25),
            defaultValue: ''
        }
    ]
});

/**
 * Input interface
 */
export interface FKOCEANUPDInput {
    /**
     * @size 30 characters
     * @default ``
     */
    BillOfLading?: string;
    /**
     * @size 20 characters
     * @default ``
     */
    BookingNumber?: string;
    /**
     * @size 20 characters
     * @default ``
     */
    ContainerNumber?: string;
    /**
     * @size 20 characters
     * @default ``
     */
    ContainerType?: string;
    /**
     * @size 16 digits
     * @precision 0 decimals
     */
    FourKitesLoadId: number | string;
    /**
     * @size 50 characters
     */
    LoadNumber: string;
    /**
     * @size 100 characters
     */
    Message: string;
    /**
     * @size 20 characters
     */
    MessageType: string;
    /**
     * @size 20 characters
     * @default ``
     */
    ProNumber?: string;
    /**
     * @size 50 characters
     * @default ``
     */
    ReferenceNumbers?: Array<string>;
    /**
     * @size 4 characters
     */
    Scac: string;
    /**
     * @size 30 characters
     */
    Shipper: string;
    /**
     * @size 30 characters
     */
    Status: string;
    /**
     * @size 5 characters
     */
    StatusCode: string;
    /**
     * @size 50 characters
     */
    StopName: string;
    /**
     * @size 50 characters
     * @default ``
     */
    Tags?: Array<string>;
    /**
     */
    Timestamp: Date | string;
    /**
     * @size 30 characters
     * @default ``
     */
    VesselName?: string;
    /**
     * @size 25 characters
     * @default ``
     */
    VoyageNumber?: string;
}

/**
 * Output interface
 */
export interface FKOCEANUPDOutput {
    /**
     * @size 30 characters
     * @default ``
     */
    BillOfLading: string;
    /**
     * @size 20 characters
     * @default ``
     */
    BookingNumber: string;
    /**
     * @size 20 characters
     * @default ``
     */
    ContainerNumber: string;
    /**
     * @size 20 characters
     * @default ``
     */
    ContainerType: string;
    /**
     * @size 16 digits
     * @precision 0 decimals
     */
    FourKitesLoadId: number;
    /**
     * @size 50 characters
     */
    LoadNumber: string;
    /**
     * @size 100 characters
     */
    Message: string;
    /**
     * @size 20 characters
     */
    MessageType: string;
    /**
     * @size 20 characters
     * @default ``
     */
    ProNumber: string;
    /**
     * @size 50 characters
     * @default ``
     */
    ReferenceNumbers: Array<string>;
    /**
     * @size 4 characters
     */
    Scac: string;
    /**
     * @size 30 characters
     */
    Shipper: string;
    /**
     * @size 30 characters
     */
    Status: string;
    /**
     * @size 5 characters
     */
    StatusCode: string;
    /**
     * @size 50 characters
     */
    StopName: string;
    /**
     * @size 50 characters
     * @default ``
     */
    Tags: Array<string>;
    /**
     */
    Timestamp: Date;
    /**
     * @size 30 characters
     * @default ``
     */
    VesselName: string;
    /**
     * @size 25 characters
     * @default ``
     */
    VoyageNumber: string;
}

/* eslint-enable */

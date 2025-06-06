/* eslint-disable */
// @ts-nocheck
// Module: fkstparriv
// Generated source -- do not modify

import eradaniConnect from '@eradani-inc/eradani-connect';
const { dataTypes } = eradaniConnect;

// Manually entered import
import config from 'config';

/**
 * Program model
 */
export const FKSTPARRIVModel = new eradaniConnect.run.Pgm('FKSTPARRIV', {
    lib: config.eradaniConnect.native.pgmLib,
    mode: 'ile',
    params: [
        {
            name: 'FourKitesLoadId',
            type: new dataTypes.PackedDecimal(16, 0)
        },
        {
            name: 'LoadNumber',
            type: new dataTypes.Char(10)
        },
        {
            name: 'MessageType',
            type: new dataTypes.Char(20)
        },
        {
            name: 'ProNumber',
            type: new dataTypes.Char(20)
        },
        {
            name: 'ReferenceNumbers',
            type: new dataTypes.Char(15),
            defaultValue: '',
            dim: 10
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
            name: 'StopName',
            type: new dataTypes.Char(30)
        },
        {
            name: 'StopReferenceId',
            type: new dataTypes.Char(15)
        },
        {
            name: 'StopSequence',
            type: new dataTypes.PackedDecimal(7, 0)
        },
        {
            name: 'Tags',
            type: new dataTypes.Char(15),
            defaultValue: '',
            dim: 10
        },
        {
            name: 'Timestamp',
            type: new dataTypes.Timestamp()
        }
    ]
});

/**
 * Input interface
 */
export interface FKSTPARRIVInput {
    /**
     * @size 16 digits
     * @precision 0 decimals
     */
    FourKitesLoadId: number | string;
    /**
     * @size 10 characters
     */
    LoadNumber: string;
    /**
     * @size 20 characters
     */
    MessageType: string;
    /**
     * @size 20 characters
     */
    ProNumber: string;
    /**
     * @size 15 characters
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
    StopName: string;
    /**
     * @size 15 characters
     */
    StopReferenceId: string;
    /**
     * @size 7 digits
     * @precision 0 decimals
     */
    StopSequence: number | string;
    /**
     * @size 15 characters
     * @default ``
     */
    Tags?: Array<string>;
    /**
     */
    Timestamp: Date | string;
}

/**
 * Output interface
 */
export interface FKSTPARRIVOutput {
    /**
     * @size 16 digits
     * @precision 0 decimals
     */
    FourKitesLoadId: number;
    /**
     * @size 10 characters
     */
    LoadNumber: string;
    /**
     * @size 20 characters
     */
    MessageType: string;
    /**
     * @size 20 characters
     */
    ProNumber: string;
    /**
     * @size 15 characters
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
    StopName: string;
    /**
     * @size 15 characters
     */
    StopReferenceId: string;
    /**
     * @size 7 digits
     * @precision 0 decimals
     */
    StopSequence: number;
    /**
     * @size 15 characters
     * @default ``
     */
    Tags: Array<string>;
    /**
     */
    Timestamp: Date;
}

/* eslint-enable */

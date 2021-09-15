const mocha = require('mocha');
const { expect } = require('chai');

const utils = require('./utils');

const { sanitizeValues } = require('../src/services/safe-values');

describe('Safe Values', function () {
    it('Replaces Top-Level Missing Values', async function () {
        const safeValues = {
            a: 1,
            b: 2
        };

        let input = {
            a: 4,
            c: 5
        };

        const output = sanitizeValues(input, safeValues);

        expect(output).to.deep.equal({
            a: 4,
            b: 2,
            c: 5
        });
    });

    it('Replaces Nested Object Values', async function () {
        const safeValues = {
            a: 1,
            b: 2,
            c: {
                d: 4,
                e: 5
            }
        };

        let input = {
            a: 4,
            b: 5,
            c: {
                d: 6
            }
        };

        const output = sanitizeValues(input, safeValues);

        expect(output).to.deep.equal({
            a: 4,
            b: 5,
            c: { d: 6, e: 5 }
        });
    });

    it('Replaces Nested Missing Objects', async function () {
        const safeValues = {
            a: 1,
            b: 2,
            c: {
                d: 4,
                e: 5
            }
        };

        let input = {
            a: 4,
            b: 5
        };

        const output = sanitizeValues(input, safeValues);

        expect(output).to.deep.equal({
            a: 4,
            b: 5,
            c: { d: 4, e: 5 }
        });
    });

    it('Replaces Nested Array Values', async function () {
        const safeValues = {
            a: 1,
            b: 2,
            c: {
                '*3': {
                    d: 4
                }
            }
        };

        let input = {
            a: 4,
            b: 3,
            c: [{ d: 5 }]
        };

        const output = sanitizeValues(input, safeValues);

        expect(output).to.deep.equal({
            a: 4,
            b: 3,
            c: [{ d: 5 }, { d: 4 }, { d: 4 }]
        });
    });

    it('Replaces Doubly Nested Array Values', async function () {
        const safeValues = {
            a: 1,
            b: 2,
            c: {
                '*3': {
                    '*2': {
                        d: 4
                    }
                }
            }
        };

        let input = {
            a: 4,
            b: 3,
            c: [[{ d: 5 }]]
        };

        const output = sanitizeValues(input, safeValues);

        expect(output).to.deep.equal({
            a: 4,
            b: 3,
            c: [
                [{ d: 5 }, { d: 4 }],
                [{ d: 4 }, { d: 4 }],
                [{ d: 4 }, { d: 4 }]
            ]
        });
    });

    it('Extends Arrays to Expected Length', async function () {
        const safeValues = {
            a: 1,
            b: 2,
            c: {
                '*3': {
                    d: 4
                }
            }
        };

        let input = {
            a: 4,
            b: 3,
            c: [{ d: 5 }]
        };

        const output = sanitizeValues(input, safeValues);

        expect(output).to.deep.equal({
            a: 4,
            b: 3,
            c: [{ d: 5 }, { d: 4 }, { d: 4 }]
        });
    });

    it('Sanitizes MPGetEqIp Payload', async function () {
        const safeValues = {
            assetKey: 0,
            entityName: '',
            assetId: '',
            parentAssetId: '',
            description: '',
            groupKey: 0,
            groupId: '',
            categoryId: '',
            typeId: '',
            budgetGroupId: '',
            budgetId: '',
            statusId: '',
            barcode: '',
            manufacturer: '',
            model: '',
            serialNumber: '',
            customer: '',
            customerKey: 0,
            purchaseDate: '0001-01-01',
            dateCreated: '0001-01-01',
            dateCompleted: '0001-01-01',
            dateDue: '0001-01-01',
            scheduledDate: '0001-01-01',
            estimatedCompletion: '0001-01-01',
            purchaseCost: 0,
            requestId: 0,
            inspectionId: 0,
            invoiceNumber: 0,
            partsCost: 0,
            laborCost: 0,
            otherCost: 0,
            totalCosts: 0,
            scheduleId: '',
            laborRate: 0,
            assigned: '',
            failureCode: '',
            customFields: {
                '*100': {
                    key: 0,
                    customFieldKey: 0,
                    fieldName: '',
                    value: ''
                }
            }
        };

        let input = {
            assetKey: 100,
            entityName: 'abcdef',
            assetId: null,
            customFields: [
                {
                    key: 1,
                    customFieldKey: 3,
                    fieldName: 'test',
                    value: 'test2'
                },
                {
                    key: 2,
                    value: 'test3'
                }
            ]
        };

        let output = sanitizeValues(input, safeValues);

        expect(output).to.deep.equal({
            assetKey: 100,
            entityName: 'abcdef',
            assetId: '',
            parentAssetId: '',
            description: '',
            groupKey: 0,
            groupId: '',
            categoryId: '',
            typeId: '',
            budgetGroupId: '',
            budgetId: '',
            statusId: '',
            barcode: '',
            manufacturer: '',
            model: '',
            serialNumber: '',
            customer: '',
            customerKey: 0,
            purchaseDate: '0001-01-01',
            dateCreated: '0001-01-01',
            dateCompleted: '0001-01-01',
            dateDue: '0001-01-01',
            scheduledDate: '0001-01-01',
            estimatedCompletion: '0001-01-01',
            purchaseCost: 0,
            requestId: 0,
            inspectionId: 0,
            invoiceNumber: 0,
            partsCost: 0,
            laborCost: 0,
            otherCost: 0,
            totalCosts: 0,
            scheduleId: '',
            laborRate: 0,
            assigned: '',
            failureCode: '',
            customFields: [
                {
                    key: 1,
                    customFieldKey: 3,
                    fieldName: 'test',
                    value: 'test2'
                },
                {
                    key: 2,
                    customFieldKey: 0,
                    fieldName: '',
                    value: 'test3'
                }
            ].concat(
                new Array(98).fill({
                    key: 0,
                    customFieldKey: 0,
                    fieldName: '',
                    value: ''
                })
            )
        });
    });
});

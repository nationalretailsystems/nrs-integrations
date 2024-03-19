import { body } from 'express-validator';
import { InputCheckChain } from 'src/types';

export const loadTender: InputCheckChain[] = [
    // body('ConsignmentEncryptedAccessToken').optional({nullable:true}).exists().isString().isLength({max: 125}),
    // body('EncryptedAccessToken').optional({nullable:true}).exists().isString().isLength({max: 125}),
    // body('EncryptedUrl').optional({nullable:true}).exists().isString().isLength({max: 150}),
    // body('Errors').exists().isArray({max: 4}),
    // body('Errors.*').isString().isLength({max: 125}),
    // body('FourKitesLoadId').optional({nullable:true}).isInt().isLength({max: 16}),
    // body('IsSuccess').exists().isBoolean(),
    // body('LoadNumber').exists().isString().isLength({max: 40}),
    // body('MessageType').exists().isString().isLength({max: 40}),
    // body('ProNumber').optional({nullable:true}).isString().isLength({max: 20}),
    // body('ReferenceNumbers').exists().isArray(),
    // body('ReferenceNumbers.*').isString().isLength({max: 50}),
    // body('Scac').optional({nullable:true}).exists().isString().isLength({max: 4}),
    // body('Shipper').exists().isString().isLength({max: 30}),
    // body('Tags').exists().isArray({max: 15}),
    // body('Tags.*').isString().isLength({max: 50}),
    // body('Timestamp').exists().isISO8601(),
    // body('Timezone').optional({nullable:true}).isString().isLength({max:30}),
    // body('TimezoneOffset').optional({nullable:true}).isInt().isLength ({max:10}),
    // body('TimezonShortName').optional({nullable:true}).isString().isLength({max:5})   
];

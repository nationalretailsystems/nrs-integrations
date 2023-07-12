import { body } from 'express-validator';
import { InputCheckChain } from 'src/types';

export const loadCreation: InputCheckChain[] = [
    body('ConsignmentEncryptedAccessToken').optional({nullable:true}).exists().isString().isLength({max: 125}),
    body('EncryptedAccessToken').optional({nullable:true}).exists().isString().isLength({max: 125}),
    body('EncryptedUrl').optional({nullable:true}).exists().isString().isLength({max: 150}),
    body('Errors').exists().isArray({max: 4}),
    body('Errors.*').isString().isLength({max: 125}),
    body('FourKitesLoadId').optional({nullable:true}).isInt().isLength({max: 16}),
    body('IsSuccess').exists().isBoolean(),
    body('LoadNumber').exists().isString().isLength({max: 40}),
    body('MessageType').exists().isString().isLength({max: 20}),
    body('ProNumber').optional({nullable:true}).isString().isLength({max: 20}),
    body('ReferenceNumbers').exists().isArray({max: 10}),
    body('ReferenceNumbers.*').isString().isLength({max: 50}),
    body('Scac').optional({nullable:true}).exists().isString().isLength({max: 4}),
    body('Shipper').exists().isString().isLength({max: 30}),
    body('Tags').exists().isArray({max: 10}),
    body('Tags.*').isString().isLength({max: 50}),
    body('Timestamp').exists().isISO8601()
];
export const stopEtaUpdate: InputCheckChain[] = [
    body('BillOfLading').optional({nullable:true}).isString().isLength({max: 30 }),
    body('BookingNumber').optional({nullable:true}).isString().isLength({max: 20 }),
    body('ContainerNumber').optional({nullable:true}).isString().isLength({max: 20}),    
    body('ContainerType').optional({nullable:true}).isString().isLength({max: 10}),
    body('EncryptedAccessToken').optional({nullable:true}).exists().isString().isLength({max: 125}),
    body('FourKitesLoadId').exists().isInt().isLength({max: 16}),
    body('LoadNumber').exists().isString().isLength({max: 50}),
    body('MessageType').exists().isString().isLength({max: 20}),
    body('ProNumber').optional({nullable:true}).isString().isLength({max: 20}),
    body('ReferenceNumbers').exists().isArray({max: 10}), 
    body('ReferenceNumbers.*').isString().isLength({max: 50}),
    body('Scac').optional({nullable:true}).exists().isString().isLength({max: 4}),
    body('Shipper').exists().isString().isLength({max: 30}),
    body('StopName').exists().isString().isLength({max: 30}),
    body('StopReferenceId').optional({nullable:true}).isString().isLength({max: 15}),
    body('StopSequence').exists().isInt().isLength({max: 7}),
    body('StopStatus').optional({nullable:true}).isString().isLength({max:20}),
    body('StopType').exists().isString().isLength({max: 20}),
    body('StopUnlocode').optional().isString().isLength({max: 10}),
    body('Tags').exists().isArray({max: 10}), 
    body('Tags.*').isString().isLength({max: 50}),
    body('TerminalName').optional({nullable:true}).isString().isLength({max:20}),
    body('Timestamp').exists().isISO8601(),
    body('Timezone').optional({nullable:true}).isString().isLength({max:20}),
    body('TimezoneOffset').optional({nullable:true}).isInt().isLength({max:10}),
    body('TimezonShortName').optional({nullable:true}).isString().isLength({max:5}),
    body('VesselName').optional({nullable:true}).isString().isLength({max: 30}),
    body('VoyageNumber').optional({nullable:true}).isString().isLength({max: 25})
];
export const oceanUpdate: InputCheckChain[] = [
    body('BillOfLading').optional({nullable:true}).isString().isLength({max: 30 }),
    body('BookingNumber').optional({nullable:true}).isString().isLength({max: 20 }),
    body('ContainerNumber').optional({nullable:true}).isString().isLength({max: 20}),    
    body('ContainerType').optional({nullable:true}).isString().isLength({max: 5}),
    body('FourKitesLoadId').exists().isInt().isLength({max: 16}),
    body('LoadNumber').exists().isString().isLength({max: 50}),
    body('Message').exists().isString().isLength({max: 100}),
    body('MessageType').exists().isString().isLength({max: 20}),
    body('ProNumber').optional({nullable:true, checkFalsy: true}).isString().isLength({max: 20}),
    body('ReferenceNumbers').exists().isArray({max: 10}),
    body('ReferenceNumbers.*').isString().isLength({max: 50}),
    body('Scac').optional({nullable:true}).exists().isString().isLength({max: 4}),
    body('Shipper').exists().isString().isLength({max: 30}),
    body('Status').exists().isString().isLength({max: 30}),
    body('StatusCode').exists().isString().isLength({max: 5}),
    body('Tags').exists().isArray({max: 10}),
    body('Tags.*').isString().isLength({max: 50}),
    body('Timestamp').exists().isISO8601(),
    body('VesselName').optional({nullable:true}).isString().isLength({max: 30}),
    body('VoyageNumber').optional({nullable:true}).isString().isLength({max: 25})
];
export const trackingUpdate: InputCheckChain[] = [
];
export const loadDeletion: InputCheckChain[] = [
];
export const locationUpdate: InputCheckChain[] = [
];
export const assetAssignment: InputCheckChain[] = [
];
export const stopArrival: InputCheckChain[] = [
];
export const stopDeparture: InputCheckChain[] = [
];


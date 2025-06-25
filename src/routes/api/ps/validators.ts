import { InputCheckChain } from 'src/types';
import { check } from "express-validator";
export const drvordin: InputCheckChain[] = [
    check('driverin').isLength({ max: 6 }).withMessage('driverin must be 6 characters or fewer').isString().withMessage('driverin must be a string'),
    check('ordtype').isIn(['D','P']).isLength({ max: 1 }).withMessage('ordtype must be 1 characters or fewer').isString().withMessage('ordtype must be a string'),
    check('error_message').optional({nullable:true}).isString().withMessage('error_message must be a string'),
    check('drivers').isLength({ max: 6 }).optional({nullable:true}).withMessage('drivers must be 6 characters or fewer').isArray().withMessage('drivers must be an array'),
    check('id').isLength({ max: 16 }).optional({nullable:true}).withMessage('id must be 16 characters or fewer').isNumeric().toFloat().withMessage('id must be a number'),
    check('external_id').isLength({ max: 7 }).optional({nullable:true}).withMessage('external_id must be 7 characters or fewer').isString().withMessage('external_id must be a string'),
    check('external_id_alias').isLength({ max: 7 }).optional({nullable:true}).withMessage('external_id_alias must be 7 characters or fewer').isString().withMessage('external_id_alias must be a string'),
    check('status').isLength({ max: 6 }).optional({nullable:true}).withMessage('status must be 6 characters or fewer').isString().withMessage('status must be a string'),
    check('sequence').isLength({ max: 1 }).optional({nullable:true}).withMessage('sequence must be 1 characters or fewer').isString().withMessage('sequence must be a string'),
    check('shipping_documents').exists().optional({nullable:true}).withMessage('shipping_documents is required').isArray().withMessage('shipping_documents must be an array'),
    check('received_at').isLength({ max: 25 }).optional({nullable:true}).withMessage('received_at must be 25 characters or fewer').isString().withMessage('received_at must be a string'),
    check('reviewed_at').isLength({ max: 25 }).optional({nullable:true}).withMessage('reviewed_at must be 25 characters or fewer').isString().withMessage('reviewed_at must be a string'),
    check('created_at').isLength({ max: 25 }).optional({nullable:true}).withMessage('created_at must be 25 characters or fewer').isString().withMessage('created_at must be a string'),
    check('updated_at').isLength({ max: 25 }).optional({nullable:true}).withMessage('updated_at must be 25 characters or fewer').isString().withMessage('updated_at must be a string'),
    check('modified_at').isLength({ max: 25 }).optional({nullable:true}).withMessage('modified_at must be 25 characters or fewer').isString().withMessage('modified_at must be a string'),
    check('locations').exists().optional({nullable:true}).withMessage('locations is required').isArray().withMessage('locations must be an array'),
    check('external_data').exists().optional({nullable:true}).withMessage('external_data is required').isArray().withMessage('external_data must be an array'),
    check('steps').exists().optional({nullable:true}).withMessage('steps is required').isArray().withMessage('steps must be an array')
];


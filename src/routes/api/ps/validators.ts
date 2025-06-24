import { InputCheckChain } from 'src/types';
import { check } from "express-validator";
export const drvordin: InputCheckChain[] = [
    check('driverin').isLength({ max: 6 }).withMessage('driverin must be 6 characters or fewer').optional().isString().withMessage('driverin must be a string'),
    check('ordtype').isLength({ max: 1 }).withMessage('ordtype must be 1 characters or fewer').optional().isString().withMessage('ordtype must be a string'),
    check('drivers').isLength({ max: 6 }).withMessage('drivers must be 6 characters or fewer').optional().isArray().withMessage('drivers must be an array'),
    check('id').isLength({ max: 16 }).withMessage('id must be 16 characters or fewer').optional().isNumeric().toFloat().withMessage('id must be a number'),
    check('external_id').isLength({ max: 7 }).withMessage('external_id must be 7 characters or fewer').optional().isString().withMessage('external_id must be a string'),
    check('external_id_alias').isLength({ max: 7 }).withMessage('external_id_alias must be 7 characters or fewer').optional().isString().withMessage('external_id_alias must be a string'),
    check('status').isLength({ max: 6 }).withMessage('status must be 6 characters or fewer').optional().isString().withMessage('status must be a string'),
    check('sequence').isLength({ max: 1 }).withMessage('sequence must be 1 characters or fewer').optional().isString().withMessage('sequence must be a string'),
    check('shipping_documents').exists().withMessage('shipping_documents is required').isArray().withMessage('shipping_documents must be an array'),
    check('received_at').isLength({ max: 25 }).withMessage('received_at must be 25 characters or fewer').optional().isString().withMessage('received_at must be a string'),
    check('reviewed_at').isLength({ max: 25 }).withMessage('reviewed_at must be 25 characters or fewer').optional().isString().withMessage('reviewed_at must be a string'),
    check('created_at').isLength({ max: 25 }).withMessage('created_at must be 25 characters or fewer').optional().isString().withMessage('created_at must be a string'),
    check('updated_at').isLength({ max: 25 }).withMessage('updated_at must be 25 characters or fewer').optional().isString().withMessage('updated_at must be a string'),
    check('modified_at').isLength({ max: 25 }).withMessage('modified_at must be 25 characters or fewer').optional().isString().withMessage('modified_at must be a string'),
    check('locations').exists().withMessage('locations is required').isArray().withMessage('locations must be an array'),
    check('external_data').exists().withMessage('external_data is required').isArray().withMessage('external_data must be an array'),
    check('steps').exists().withMessage('steps is required').isArray().withMessage('steps must be an array')
];


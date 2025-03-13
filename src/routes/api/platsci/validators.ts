import { InputCheckChain } from 'src/types';
import { check } from "express-validator";
export const tmsorder: InputCheckChain[] = [
    check('order').isLength({ max: 7 }).withMessage('order must be 7 characters or fewer').exists().withMessage('order is required').isString().withMessage('order must be a string'),
    check('drivers').isLength({ max: 6 }).withMessage('drivers must be 6 characters or fewer').exists().withMessage('drivers is required').isString().withMessage('drivers must be a string'),
    check('OrderRes')
];


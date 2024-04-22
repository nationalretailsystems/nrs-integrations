import { body } from 'express-validator';
import { InputCheckChain } from 'src/types';

export const token: InputCheckChain[] = [
        body('client_id').exists().isString(),
        body('client_secret').exists().isString(),
        body('grant_type').exists().isString().equals('client_credentials')
]


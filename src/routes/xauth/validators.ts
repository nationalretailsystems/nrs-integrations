import { body } from 'express-validator';
import { InputCheckChain } from 'src/types';

export const xauth: InputCheckChain[] = [
        body('client_id').exists().isString(),
        body('client_secret').exists().isString()
]


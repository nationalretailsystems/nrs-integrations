import { body, oneOf } from 'express-validator';
import config from 'config';
import { InputCheckChain } from 'src/types';
const regexes = config.get().regexes;

export const login: InputCheckChain[] = [
    oneOf([body('username').exists().isString(),
    body('password').exists().isString().matches(regexes.password)
],[
    body('client_id').exists().isString(),
    body('client_secret').exists().isString().matches(regexes.password)
]
)];

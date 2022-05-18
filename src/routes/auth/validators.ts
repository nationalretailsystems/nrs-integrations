import { body } from 'express-validator';
import config from 'config';
import { InputCheckChain } from 'src/types';
const regexes = config.get().regexes;

export const login: InputCheckChain[] = [
        body('username').exists().isString(),
        body('password').exists().isString().matches(regexes.password)
]



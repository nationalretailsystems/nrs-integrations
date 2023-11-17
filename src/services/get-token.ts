import config from 'config';
const { paycargo, ukg, ts4300 } = config;
import axios from 'axios';
import createLogger from 'src/services/logger';
const logger = createLogger('commands/ukgtoken');

// const axiosInstance = axios.create(paycargo_dev.axios);
const axiosInstance = axios.create(paycargo.axios);

let _token: string;
let _expiration: number;

export const getToken = async (): Promise<string> => {
    logger.debug('Entering GetToken Routine');
    if (_token && _expiration > Date.now() + 300000) {
        logger.debug('old token: expiration-' + _expiration + ' ' + _token);
        return _token;
    }

    const credentials = {
        // apiKey: paycargo_dev.apikey,
        // apiSecret: paycargo_dev.apisecret
        apiKey: paycargo.apikey,
        apiSecret: paycargo.apisecret
    };
    logger.debug('Attempting to Get New Token');
    const response = await axiosInstance.post('/login/developer', credentials);
    _token = response.data.token;
    _expiration = Date.now() + 1000 * 60 * 60 * 8; // 1000ms * 60s * 60m * 8h = 8 hours
    logger.debug('new token: expiration-' + _expiration + ' ' + _token);
    return _token;
};

const axiosInstance2 = axios.create(ukg.prd.axios);
let _tokenukg: string;
let _expirationukg: number;

export const getTokenUkg = async (): Promise<string> => {
    logger.error('token request');
    if (_tokenukg && _expirationukg > Date.now() + 300000) {
        logger.error('nonexpired token');
        return _tokenukg;
    }

    /* eslint-disable camelcase */
    const credentials = new URLSearchParams({
        username: ukg.prd.username,
        password: ukg.prd.password,
        client_id: ukg.prd.client_id,
        client_secret: ukg.prd.client_secret,
        grant_type: 'password',
        auth_chain: 'OAuthLdapService'
    }).toString();
    /* eslint-enable camelcase */

    const response = await axiosInstance2.post('/authentication/access_token' + '?' + credentials, null, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            appkey: ukg.prd.appkey
        }
    });
    _tokenukg = response.data.access_token;
    _expirationukg = Date.now() + response.data.expires_in * 1000; // 1000ms * 60s * 60m * 8h = 8 hours
    logger.error('returning token');
    return _tokenukg;
};
const axiosInstanceTS = axios.create(ts4300.axios);
let _tokents: string;
let _expirationts: number;

export const getTokenTS = async (): Promise<string> => {
    if (_tokents && _expirationts > Date.now() + 300000) {
        return _tokents;
    }

    const credentials = {
        // apiKey: paycargo_dev.apikey,
        // apiSecret: paycargo_dev.apisecret
        username: ts4300.username,
        password: ts4300.password        
    };
    logger.debug('Attempting to Get TS4300 New Token');
    const response = await axiosInstance.post('/login/developer', credentials);
    _tokents = response.data.token;
    _expirationts = Date.now() + 1000 * 60 * 60 * 8; // 1000ms * 60s * 60m * 8h = 8 hours
    return _tokents;
};

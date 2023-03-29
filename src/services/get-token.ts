import config from 'config';
// const { paycargo_dev } = config;
const { paycargo } = config;
import axios from 'axios';

// const axiosInstance = axios.create(paycargo_dev.axios);
const axiosInstance = axios.create(paycargo.axios);

let _token: string;
let _expiration: number;
export const getToken = async (): Promise<string> => {
    if (_token && _expiration > Date.now() + 300000) {
        return _token;
    }

    const credentials = {
        // apiKey: paycargo_dev.apikey,
        // apiSecret: paycargo_dev.apisecret
        apiKey: paycargo.apikey,
        apiSecret: paycargo.apisecret
    };

    const response = await axiosInstance.post('/login/developer', credentials);
    _token = response.data.token;
    _expiration = Date.now() + 1000 * 60 * 60 * 8; // 1000ms * 60s * 60m * 8h = 8 hours
    return _token;
};

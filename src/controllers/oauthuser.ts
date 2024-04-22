import * as jwt from 'src/services/jwt';
import config from 'config';
const credentials = config.credentials;
const blueyonder = config.blueyonder.credentials;
import APIError from 'src/APIError';
import { JWTUserData } from 'src/types';
import mountBlueYonder from 'src/routes/api/blueyonder';

export function login(username: string, password: string) {
    return new Promise((resolve, reject) => {
        if ((username === credentials.username && password === credentials.password) ||
        (username === blueyonder.username && password === blueyonder.password)) {
            resolve(generateJWT({ username }));
        } else {
            reject(new APIError(400, 'Username / Password Combination Not Found'));
        }
    });
}

export function generateJWT(userData: JWTUserData) {
    const user = {
        username: userData.username
    };

    return jwt.sign(user).then((token: string) => {
        /* eslint-disable-next-line camelcase */
        return { 
            "access_token": token,
            // X expiration: 3600,
            "token_type": "bearer"
         };
    });
}

import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { verify } from './controller';
import * as mlgnveri from 'src/interfaces/mlgnveri';

export default function registerMailgun(router: ECCInternalRouter) {
    router.use('verify', mlgnveri, verify);
}

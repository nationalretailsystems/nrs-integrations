import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { validateAddress } from './controller';
import * as validateaddress from 'src/interfaces/upsval';

export default function registerUPS(router: ECCInternalRouter) {
    router.use('validateaddress', validateaddress, validateAddress);
}

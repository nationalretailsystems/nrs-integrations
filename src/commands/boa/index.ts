import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { payment } from './controller';
import * as boapayment from 'src/interfaces/boapayment';

export default function registerPinc(router: ECCInternalRouter) {
    router.use('payment', boapayment, payment);
}

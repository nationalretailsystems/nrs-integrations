import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { checkin } from './controller';
import * as pncchkin from 'src/interfaces/pncchkin';

export default function registerPinc(router: ECCInternalRouter) {
    router.use('checkin', pncchkin, checkin);
}

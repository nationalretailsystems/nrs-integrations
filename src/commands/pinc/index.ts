import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { checkin, latlon } from './controller';
import * as pncchkin from 'src/interfaces/pncchkin';
import * as pnclatlon from 'src/interfaces/pnclatlon';

export default function registerPinc(router: ECCInternalRouter) {
    router.use('checkin', pncchkin, checkin);

    router.use('latlon', pnclatlon, latlon);
}

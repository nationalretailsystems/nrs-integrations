import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { checkin, latlon, checkot, updat } from './controller';
import * as pncchkin from 'src/interfaces/pncchkin';
import * as pnclatlon from 'src/interfaces/pnclatlon';
import * as pncchkot from 'src/interfaces/pncchkot';
import * as pncupdat from 'src/interfaces/pncupdat';

export default function registerPinc(router: ECCInternalRouter) {
    router.use('checkin', pncchkin, checkin);
    router.use('checkot', pncchkot, checkot);
    router.use('latlon', pnclatlon, latlon);
    router.use('updat', pncupdat, updat);
}

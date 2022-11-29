import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { checkin, latlon, checkot, updat, locat, errors, updt2 } from './controller';
import * as pncchkin from 'src/interfaces/pncchkin';
import * as pnclatlon from 'src/interfaces/pnclatlon';
import * as pncchkot from 'src/interfaces/pncchkot';
import * as pncupdat from 'src/interfaces/pncupdat';
import * as pnclocat from 'src/interfaces/pnclocat';
import * as pncerror from 'src/interfaces/pncerror';
import * as pncupdt2 from 'src/interfaces/pncupdt2';

export default function registerPinc(router: ECCInternalRouter) {
    router.use('checkin', pncchkin, checkin);
    router.use('checkot', pncchkot, checkot);
    router.use('latlon', pnclatlon, latlon);
    router.use('updat', pncupdat, updat);
    router.use('locat', pnclocat, locat);
    router.use('errors', pncerror, errors);
    router.use('updt2', pncupdt2, updt2);
}

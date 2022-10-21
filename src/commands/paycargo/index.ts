import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { getUsraut, getAchrpt } from './controller';
import * as pcusraut from 'src/interfaces/pcusraut';
import * as pcachrpt from 'src/interfaces/pcachrpt';

export default function registerPayCargo(router: ECCInternalRouter) {
    router.use('paycargo', pcusraut, getUsraut);
    router.use('achrpt', pcachrpt, getAchrpt);
}

import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { getUsraut, getAchrpt, getTransaction } from './controller';
import * as pcusraut from 'src/interfaces/pcusraut';
import * as pcachrpt from 'src/interfaces/pcachrpt';
import * as pcgettran from 'src/interfaces/pcgettran';

export default function registerPayCargo(router: ECCInternalRouter) {
    router.use('paycargo', pcusraut, getUsraut);
    router.use('achrpt', pcachrpt, getAchrpt);
    router.use('gettran',pcgettran, getTransaction)
}

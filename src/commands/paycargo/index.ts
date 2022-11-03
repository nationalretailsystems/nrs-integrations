import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { getAchrpt, getTransaction, getTransactions } from './controller';
import * as pcachrpt from 'src/interfaces/pcachrpt';
import * as pcgettran from 'src/interfaces/pcgettran';
import * as pcgettrns from 'src/interfaces/pcgettrns';

export default function registerPayCargo(router: ECCInternalRouter) {
    router.use('achrpt', pcachrpt, getAchrpt);
    router.use('gettran',pcgettran, getTransaction)
    router.use('gettrns',pcgettrns, getTransactions)    
}

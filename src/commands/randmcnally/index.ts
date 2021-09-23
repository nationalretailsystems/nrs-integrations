import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { 
    getStateMiles,
    getDVIR 
} from './controller';

import * as randmcnally from 'src/interfaces/rmgetstmi';
import * as randmcnallydvir from 'src/interfaces/rmgetdvir';

export default function registerRandMcnally(router: ECCInternalRouter) {
    router.use('getStateMiles', randmcnally, getStateMiles);
    router.use('getDVIR', randmcnallydvir, getDVIR);
}

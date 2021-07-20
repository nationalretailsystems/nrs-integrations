import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { getStateMiles } from './controller';
import * as randmcnally from 'src/interfaces/rmgetstmi';

export default function registerRandMcnally(router: ECCInternalRouter) {
    router.use('getStateMiles', randmcnally, getStateMiles);
}

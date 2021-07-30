import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { getAssetChanges, getAssetAll } from './controller';
import * as managerplus from 'src/interfaces/mpgeteqip';

export default function registerManagerplus(router: ECCInternalRouter) {
    router.use('getAssetChanges', managerplus, getAssetChanges);
    router.use('getAssetAll', managerplus, getAssetAll);
}

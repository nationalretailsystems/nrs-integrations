import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { getAssetChanges, getAssetAll, putLogMileage } from './controller';
import * as managerplus from 'src/interfaces/mpgeteqip';
import * as managerplus2 from 'src/interfaces/mpgeteq2';
import * as managerplus3 from 'src/interfaces/mpputlog';

export default function registerManagerplus(router: ECCInternalRouter) {
    router.use('getAssetChanges', managerplus, getAssetChanges);
    router.use('getAssetAll', managerplus2, getAssetAll);
    router.use('putLogMileage', managerplus3, putLogMileage);
}

import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { getAssetChanges } from './controller';
import * as mileageplus from 'src/interfaces/mpgeteqip';

export default function registerRandmcnally(router: ECCInternalRouter) {
    router.use('getAssetChanges', mileageplus, getAssetChanges);
}

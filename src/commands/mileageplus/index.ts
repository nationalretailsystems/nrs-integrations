import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { getAssetChanges } from './controller';
import * as mileageplus from 'src/interfaces/mpgeteqip';

export default function registerMileageplus(router: ECCInternalRouter) {
    router.use('getAssetChanges', mileageplus, getAssetChanges);
}

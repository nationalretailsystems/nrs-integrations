import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { getTrailerMileages } from './controller';
import * as skybitz from 'src/interfaces/skybtz';

export default function registerSkybitz(router: ECCInternalRouter) {
    router.use('trailermileages', skybitz, getTrailerMileages);
}

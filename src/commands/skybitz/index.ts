import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { getQueryMileage, getTrailerMileages, getQueryPosition } from './controller';
import * as skybitz from 'src/interfaces/skybtz';

export default function registerSkybitz(router: ECCInternalRouter) {
    router.use('trailermileages', skybitz, getTrailerMileages);
    router.use('querymileage', skybitz, getQueryMileage);
    router.use('queryposition', skybitz, getQueryPosition);
}

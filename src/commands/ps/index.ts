import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { getOrder } from './controller';
import * as ps from 'src/interfaces/drvordr';

export default function registerPS(router: ECCInternalRouter) {
    router.use('getorder', ps, getOrder);
}

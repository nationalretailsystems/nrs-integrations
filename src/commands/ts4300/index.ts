import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { getCartInventory } from './controller';
import * as getcartinventory from 'src/interfaces/t4300inv';

export default function registerTS4300(router: ECCInternalRouter) {
    router.use('getCartInventory', getcartinventory, getCartInventory);
}

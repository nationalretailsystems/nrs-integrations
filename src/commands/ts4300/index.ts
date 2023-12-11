import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { getCartInventory, postCartMove } from './controller';
import * as getcartinventory from 'src/interfaces/t4300inv';
import * as postcartmove from 'src/interfaces/t4300mov';

export default function registerTS4300(router: ECCInternalRouter) {
    router.use('getCartInventory', getcartinventory, getCartInventory);
    router.use('postCartMove', postcartmove, postCartMove);
}

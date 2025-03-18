import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { getVehicles, assignVehicle, getDrivers } from './controller';
import * as getvehiclelist from 'src/interfaces/lytxveh1';
import * as assigndriver from 'src/interfaces/lytxass1';
import * as getdriverid from 'src/interfaces/lytxdrv';

export default function registerLytx(router: ECCInternalRouter) {
    router.use('getVehicles',getvehiclelist,getVehicles);
    router.use('assignVehicle',assigndriver,assignVehicle);
    router.use('getDrivers', getdriverid, getDrivers );
}

import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import {
    getAssetChanges,
    getAssetAll,
    putLogMileage,
    getWorkOrderChanges,
    getWorkOrderHours,
    putNewWorkOrder,
    getVendor,
    getSvcItem
} from './controller';
import * as managerplus from 'src/interfaces/mpgeteqip';
import * as managerplus2 from 'src/interfaces/mpgeteq2';
import * as managerplus3 from 'src/interfaces/mpputlog';
import * as managerpluswoch from 'src/interfaces/mpgetwoch';
import * as managerpluswohr from 'src/interfaces/mpgetwohr';
import * as managerpluswkor from 'src/interfaces/mpputwo';
import * as managerplusvndr from 'src/interfaces/mpvendor';
import * as managerplussvcitm from 'src/interfaces/mpsvcitm';

export default function registerManagerplus(router: ECCInternalRouter) {
    router.use('getAssetChanges', managerplus, getAssetChanges);
    router.use('getAssetAll', managerplus2, getAssetAll);
    router.use('putLogMileage', managerplus3, putLogMileage);
    router.use('getWorkOrderChanges', managerpluswoch, getWorkOrderChanges);
    router.use('getWorkOrderHours', managerpluswohr, getWorkOrderHours);
    router.use('putNewWorkOrder', managerpluswkor, putNewWorkOrder);
    router.use('getVendor', managerplusvndr, getVendor);
    router.use('getSvcItem', managerplussvcitm, getSvcItem);    
}

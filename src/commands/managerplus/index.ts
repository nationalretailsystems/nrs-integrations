import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import {
    getAssetChanges,
    getAssetAll,
    putLogMileage,
    getWorkOrderChanges,
    getWorkOrderHours,
    putNewWorkOrder,
    getVendor,
    getSvcItem,
    getEmploy,
    getAsset,
    getWOChanges2,
    getWO,
    getWoNotes,
    getDowntime
} from './controller';
import * as managerplus from 'src/interfaces/mpgeteqip';
import * as managerplus2 from 'src/interfaces/mpgeteq2';
import * as managerplusasset from 'src/interfaces/mpgeteq';
import * as managerplus3 from 'src/interfaces/mpputlog';
import * as managerpluswoch from 'src/interfaces/mpgetwoch';
import * as managerpluswohr from 'src/interfaces/mpgetwohr';
import * as managerpluswkor from 'src/interfaces/mpputwo';
import * as managerplusvndr from 'src/interfaces/mpvendor';
import * as managerplussvcitm from 'src/interfaces/mpsvcitm';
import * as managerplusempl from 'src/interfaces/mpemploy';
import * as managerpluswc2 from 'src/interfaces/mpgetwc2';
import * as managerpluswo from 'src/interfaces/mpgetwo';
import * as managerplusnotes from 'src/interfaces/mpwonote';
import * as managerplusdown from 'src/interfaces/mpgetdown';


export default function registerManagerplus(router: ECCInternalRouter) {
    router.use('getAssetChanges', managerplus, getAssetChanges);
    router.use('getAssetAll', managerplus2, getAssetAll);
    router.use('getAsset', managerplusasset, getAsset);
    router.use('putLogMileage', managerplus3, putLogMileage);
    router.use('getWorkOrderChanges', managerpluswoch, getWorkOrderChanges);
    router.use('getWorkOrderHours', managerpluswohr, getWorkOrderHours);
    router.use('putNewWorkOrder', managerpluswkor, putNewWorkOrder);
    router.use('getVendor', managerplusvndr, getVendor);
    router.use('getSvcItem', managerplussvcitm, getSvcItem);
    router.use('getEmploy', managerplusempl, getEmploy);
    router.use('getWOChanges2', managerpluswc2, getWOChanges2);
    router.use('getWO', managerpluswo, getWO);
    router.use('getWoNotes', managerplusnotes, getWoNotes);
    router.use('getDowntime', managerplusdown, getDowntime);
}

import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { getTotals, getPunches, getSummary, putHours, getPers, putHos, delSignoff, postPunch } from './controller';
import * as getsummary from 'src/interfaces/ukgdlysumm';
import * as getpunches from 'src/interfaces/ukgpunches';
import * as gettotals from 'src/interfaces/ukgtotals';
import * as puthours from 'src/interfaces/ukgputhr';
import * as getpers from 'src/interfaces/ukgpers';
import * as puthos from 'src/interfaces/ukgputhos';
import * as delsignoff from 'src/interfaces/ukgdelof';
import * as postpunch from 'src/interfaces/ukgdrvr';

export default function registerUKG(router: ECCInternalRouter) {
    router.use('getpunches', getpunches, getPunches);
    router.use('getsummary', getsummary, getSummary);
    router.use('gettotals', gettotals, getTotals);
    router.use('puthours', puthours, putHours);
    router.use('getpers', getpers, getPers);
    router.use('puthos', puthos, putHos);
    router.use('delsignoff',delsignoff,delSignoff);
    router.use('postpunch',postpunch,postPunch);
}

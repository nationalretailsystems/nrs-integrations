import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { getTotals, getPunches, getSummary, putHours } from './controller';
import * as getsummary from 'src/interfaces/ukgdlysumm';
import * as getpunches from 'src/interfaces/ukgpunches';
import * as gettotals from 'src/interfaces/ukgtotals';
import * as puthours from 'src/interfaces/ukgputhr';

export default function registerUKG(router: ECCInternalRouter) {
    router.use('getpunches', getpunches, getPunches);
    router.use('getsummary', getsummary, getSummary);
    router.use('gettotals', gettotals, getTotals);
    router.use('puthours', puthours, putHours);
}

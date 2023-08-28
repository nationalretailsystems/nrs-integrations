import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { getLatestSessions } from './controller';
import * as hystergetsessions from 'src/interfaces/hygetchg';

export default function registerManagerplus(router: ECCInternalRouter) {
    router.use('getLatestSessions', hystergetsessions, getLatestSessions);
}

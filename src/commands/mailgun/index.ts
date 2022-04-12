import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { getMailgun } from './controller';
import * as mailgun from 'src/interfaces/mlgnveri';

export default function registerMailgun(router: ECCInternalRouter) {
    router.use('getMailgun', mailgun, getMailgun);
}

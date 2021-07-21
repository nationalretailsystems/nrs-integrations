import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { preauth } from './controller';
import * as duosecurity from 'src/interfaces/duosecurity';

export default function registerDuosecurity(router: ECCInternalRouter) {
    router.use('preauth', duosecurity, preauth);
}

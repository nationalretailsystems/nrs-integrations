import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { postZpl } from './controller';
import * as zplapi from 'src/interfaces/zplapi';

export default function registerZpl(router: ECCInternalRouter) {
    router.use('postZpl', zplapi, postZpl);
}

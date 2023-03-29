import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { postP44 } from './controller';
import * as postp44 from 'src/interfaces/p44stsupd';

export default function registerPayCargo(router: ECCInternalRouter) {
    router.use('poststsupd', postp44, postP44);
}

import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { putDrayDogCT, getDrayDogCT } from './controller';
import * as draydogget from 'src/interfaces/ddgetct';
import * as draydogput from 'src/interfaces/ddputct';

export default function registerManagerplus(router: ECCInternalRouter) {
    router.use('getDrayDogCT', draydogget, getDrayDogCT);
    router.use('putDrayDogCT', draydogput, putDrayDogCT);
}

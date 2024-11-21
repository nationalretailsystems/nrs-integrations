import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { putDrayDogCT, getDrayDogCT, getDrayDog1CT } from './controller';
import * as draydogget from 'src/interfaces/ddgetct';
import * as draydogput from 'src/interfaces/ddputct';

export default function registerManagerplus(router: ECCInternalRouter) {
    router.use('getDrayDogCT', draydogget, getDrayDogCT);
    router.use('getDrayDog1CT', draydogget, getDrayDog1CT);
    router.use('putDrayDogCT', draydogput, putDrayDogCT);
}

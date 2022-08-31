import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { getPwd } from './controller';
import * as makeme from 'src/interfaces/makeme';

export default function registerGetPwd(router: ECCInternalRouter) {
    router.use('getpwd', makeme, getPwd);
}

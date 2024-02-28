import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { getEmployee, postUpload, postEmpDoc } from './controller';
import * as getemployee from 'src/interfaces/hrsdgetemp';
import * as postupload from 'src/interfaces/hrsdupdoc';
import * as postempdoc from 'src/interfaces/hrsdupld';

export default function registerUKG(router: ECCInternalRouter) {
    router.use('getemployee', getemployee, getEmployee);
    router.use('postupload', postupload, postUpload);
    router.use('postempdoc', postempdoc, postEmpDoc);
}

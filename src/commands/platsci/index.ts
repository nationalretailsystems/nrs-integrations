import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { getDVIRPdf } from './controller';
import * as platsci from 'src/interfaces/psdvir';

export default function registerPlatsci(router: ECCInternalRouter) {
    router.use('getdvirpdf', platsci, getDVIRPdf);
}


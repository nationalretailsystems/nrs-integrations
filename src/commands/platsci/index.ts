import { ECCInternalRouter } from '@eradani-inc/ecc-router/ecc-router';
import { getDVIRPdf,getTMSOrder } from './controller';
import * as platsci from 'src/interfaces/psdvir';
import * as tmsorder from 'src/interfaces/drvordr';

export default function registerPlatsci(router: ECCInternalRouter) {
    router.use('getdvirpdf', platsci, getDVIRPdf);
    router.use('gettmsorder', tmsorder, getTMSOrder);
}


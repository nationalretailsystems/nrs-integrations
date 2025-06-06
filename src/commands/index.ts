import ECCRouter from '@eradani-inc/ecc-router';
import registerJokes from './jokes';
import registerTraffic from './traffic';
import registerVehicle from './vehicle';
import registerWeather from './weather';
import registerShipping from './shipping';
import registerPinc from './pinc';
import registerSkybitz from './skybitz';
import registerManagerplus from './managerplus';
import registerRandmcnally from './randmcnally';
import registerBoa from './boa';
import registerZpl from './zpl';
import registerMailgun from './mailgun';
import registerMakeme from './mmpwd';
import registerPaycargo from './paycargo';
import registerProject44 from './project44';
import registerUKG from './ukg';
import registerHYSTER from './hyster';
import registerUPS from './ups';
import registerTS4300 from './ts4300';
import registerHRSD from './hrsd';
import registerPlatsci from './platsci';
import { Route53RecoveryCluster } from 'aws-sdk';

export default async function registerCommands(router: ECCRouter) {
    const jokes = new ECCRouter.Router();
    registerJokes(jokes);
    router.use('jokes', jokes);

    const traffic = new ECCRouter.Router();
    registerTraffic(traffic);
    router.use('traffic', traffic);

    const vehicle = new ECCRouter.Router();
    registerVehicle(vehicle);
    router.use('vehicle', vehicle);

    const weather = new ECCRouter.Router();
    registerWeather(weather);
    router.use('weather', weather);

    const shipping = new ECCRouter.Router();
    registerShipping(shipping);
    router.use('shipping', shipping);

    const pinc = new ECCRouter.Router();
    registerPinc(pinc);
    router.use('pinc', pinc);

    const skybitz = new ECCRouter.Router();
    registerSkybitz(skybitz);
    router.use('skybitz', skybitz);

    const managerplus = new ECCRouter.Router();
    registerManagerplus(managerplus);
    router.use('managerplus', managerplus);

    const randmcnally = new ECCRouter.Router();
    registerRandmcnally(randmcnally);
    router.use('randmcnally', randmcnally);

    const boa = new ECCRouter.Router();
    registerBoa(boa);
    router.use('boa', boa);

    const zpl = new ECCRouter.Router();
    registerZpl(zpl);
    router.use('zpl', zpl);

    const mailgun = new ECCRouter.Router();
    registerMailgun(mailgun);
    router.use('mailgun', mailgun);

    const makeme = new ECCRouter.Router();
    registerMakeme(makeme);
    router.use('mmpwd', makeme);

    const paycargo = new ECCRouter.Router();
    registerPaycargo(paycargo);
    router.use('paycargo', paycargo);

    const project44 = new ECCRouter.Router();
    registerProject44(project44);
    router.use('project44', project44);

    const ukg = new ECCRouter.Router();
    registerUKG(ukg);
    router.use('ukg', ukg);

    const hyster = new ECCRouter.Router();
    registerHYSTER(hyster);
    router.use('hyster', hyster);

    const ups = new ECCRouter.Router();
    registerUPS(ups);
    router.use('ups', ups);

    const ts4300 = new ECCRouter.Router();
    registerTS4300(ts4300);
    router.use('ts4300', ts4300);

    const hrsd = new ECCRouter.Router();
    registerHRSD(hrsd);
    router.use('hrsd', hrsd);

    const platsci = new ECCRouter.Router();
    registerPlatsci(platsci);
    router.use('platsci', platsci);

    return router;
}

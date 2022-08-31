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
    return router;
}

import ECCRouter from '@eradani-inc/ecc-router';
import registerJokes from './jokes';
import registerTraffic from './traffic';
import registerVehicle from './vehicle';
import registerWeather from './weather';
import registerShipping from './shipping';
import registerPinc from './pinc';
import registerSkybitz from './skybitz';
import registerMileageplus from './mileageplus';

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

    const mileageplus = new ECCRouter.Router();
    registerMileageplus(mileageplus);
    router.use('mileageplus', mileageplus);

    return router;
}

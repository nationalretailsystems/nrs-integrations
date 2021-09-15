import ECCRouter from '@eradani-inc/ecc-router';
import { ECClient } from '@eradani-inc/ec-client';

import config from 'config';
import createLogger from 'src/services/logger';
const { ecclient, debug } = config;
import registerCommands from 'src/commands';

const logger = createLogger('app');
const requestLogger = createLogger('requests');
let router: ECCRouter;

export async function start() {
    const ecc = new ECClient(ecclient);
    router = new ECCRouter(ecc, { logger: requestLogger, debug });

    await registerCommands(router);

    await router.listen();

    logger.info('ECC App Listening for Commands');
}

export async function stop() {
    return router.close();
}

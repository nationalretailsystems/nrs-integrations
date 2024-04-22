import createLogger from 'src/services/logger';
import { BYTENDNOTModel, BYTENDNOTInput, BYTENDNOTOutput } from 'src/models/bytendnot';
import transport from 'src/services/connection';
import APIError from 'src/APIError';

const logger = createLogger('controllers/blueyonder');

export async function loadTender(load: BYTENDNOTInput) {
    logger.debug('Calling BYTENDNOT program');

    return transport.execute(BYTENDNOTModel, load) as Promise<BYTENDNOTOutput>;
}


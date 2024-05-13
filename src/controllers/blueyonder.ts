import createLogger from 'src/services/logger';
import { BYTENDNOTModel, BYTENDNOTInput, BYTENDNOTOutput } from 'src/models/bytendnot';
import transport from 'src/services/connection';
import APIError from 'src/APIError';

const logger = createLogger('controllers/blueyonder');

export async function loadTender(load: BYTENDNOTInput) {
    logger.debug('Calling BYTENDNOT program');

    // X return transport.execute(BYTENDNOTModel, load) as Promise<BYTENDNOTOutput>;
    const result = (await transport.execute(BYTENDNOTModel, load)) as Promise<BYTENDNOTOutput>;
    const resultRes = {
        apiHeader: {
            providerCode: [(await result).apiHeader.providerCode],
            messageId: (await result).apiHeader.messageID,
            timestamp: (await result).apiHeader.timestamp,
            providerCustomerCode: (await result).apiHeader.providerCustomerCode,
            targetContext: 'TMS'
        },
        ':responseStatus': 'Accepted',
        loadID: (await result).loadID,
        carrierSCAC: (await result).carrierSCAC,
        tenderResponse: {
            providerLoadID: (await result).loadID,
            pickupTime: (await result).pickupTime
        }
    };
    return resultRes;
}

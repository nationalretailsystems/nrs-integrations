import createLogger from 'src/services/logger';
     import transport from 'src/services/connection';
import { DVGETORDRModel,DVGETORDROutput,DVGETORDRInput } from "src/models/drvordr";

const logger = createLogger('controllers/ps');

  export async function drvordr(inputs: any) {
    logger.debug('Calling drvordr');
    const params: DVGETORDRInput = {
        order: inputs.order,
        drivers: inputs.drivers,
        OrderRes: inputs.OrderRes
    };
                
    return transport.execute(DVGETORDRModel, params) ;
}

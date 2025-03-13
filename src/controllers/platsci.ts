import createLogger from 'src/services/logger';
     import transport from 'src/services/connection';
import { DVGETORDRModel,DVGETORDROutput,DVGETORDRInput } from "src/models/drvordr";

     const logger = createLogger('controllers/platsci');

            export async function tmsorder(inputs: any) {
                logger.debug('Calling tmsorder');
                

                const params: DVGETORDRInput = {
                    order: inputs.order,
drivers: inputs.drivers,
OrderRes: inputs.OrderRes
                };
                
                return transport.execute(DVGETORDRModel, params) ;
            }

        
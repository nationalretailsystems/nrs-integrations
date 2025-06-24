import createLogger from 'src/services/logger';
     import transport from 'src/services/connection';
import { DRVORDRINModel,DRVORDRINOutput,DRVORDRINInput } from "src/models/drvordrin";

     const logger = createLogger('controllers/ps');

            export async function drvordin(inputs: any) {
                logger.debug('Calling drvordin');
                

                const params: DRVORDRINInput = {
                    driverin: inputs.driverin,
ordtype: inputs.ordtype,
drivers: inputs.drivers,
id: inputs.id,
external_id: inputs.external_id,
external_id_alias: inputs.external_id_alias,
status: inputs.status,
sequence: inputs.sequence,
shipping_documents: inputs.shipping_documents,
received_at: inputs.received_at,
reviewed_at: inputs.reviewed_at,
created_at: inputs.created_at,
updated_at: inputs.updated_at,
modified_at: inputs.modified_at,
locations: inputs.locations,
external_data: inputs.external_data,
steps: inputs.steps
                };
                
                return transport.execute(DRVORDRINModel, params) ;
            }

        
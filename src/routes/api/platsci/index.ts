import { Router } from 'express';
        import * as platsciController from 'src/controllers/platsci';
        import validate from 'src/middlewares/validate';
        import respond from 'src/middlewares/respond';
        import * as validators from './validators';
        export default function mountPlatsci(router: Router) {
            router.get(
                        '/tmsorder',
                        validate(validators.tmsorder),
                        respond((req: any) => platsciController.tmsorder(Object.assign({}, req.params, req.body, req.query)))
                    );
          
        }
        
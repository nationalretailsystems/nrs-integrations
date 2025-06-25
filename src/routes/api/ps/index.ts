import { Router } from 'express';
        import * as psController from 'src/controllers/ps';
        import validate from 'src/middlewares/validate';
        import respond from 'src/middlewares/respond';
        import * as validators from './validators';
        export default function mountPs(router: Router) {
            router.get(
                        '/drvordin',
                        validate(validators.drvordin),
                        respond((req: any) => psController.drvordin(Object.assign({}, req.params, req.body, req.query)))
                    );
          
        }

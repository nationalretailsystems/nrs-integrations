import { Router } from 'express';
import * as blueyonderController from 'src/controllers/blueyonder';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
import requireAuth from 'src/middlewares/require-auth';

// You can set login requirements on an API endpoint by putting `requireAuth` after the URL specification
export default function mountBlueYonder(router: Router) {
    router.use(requireAuth);

    router.post(
        '/loadtender',
        validate(validators.loadTender),
        respond((req: any) => blueyonderController.loadTender(req.body))
    );
}

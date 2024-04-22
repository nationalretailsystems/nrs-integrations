import express, { Router } from 'express';
import mountRPG from './rpg';
import mountSQL from './sql';
import mountFourKites from './fourkites';
import mountPinc from './pinc';
import mountBlueyonder from './blueyonder';
import mountOauth from './oauth';

export default function mountAPI(router: Router) {
    // You can set auth requirements on a whole API section by putting `router.use(requireAuth);` here instead of on individual route definitions

    const rpg = express.Router();
    mountRPG(rpg);
    router.use('/rpg', rpg);

    const sql = express.Router();
    mountSQL(sql);
    router.use('/sql', sql);

    const fourkites = express.Router();
    mountFourKites(fourkites);
    router.use('/fourkites', fourkites);

    const pinc = express.Router();
    mountPinc(pinc);
    router.use('/pinc', pinc);

    const blueyonder = Router();
    mountBlueyonder(blueyonder);
    router.use('/blueyonder', blueyonder);

    const oauth = Router();
    mountOauth(oauth);
    router.use('/oauth', oauth);
}

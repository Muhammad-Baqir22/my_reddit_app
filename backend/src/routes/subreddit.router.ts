import {Router} from 'express';
import {createSub} from '../Controllers/subreddit.controller.js'
import {getsubs} from '../Controllers/subreddit.controller.js'
import {tokenVerify} from '../Middleware/auth.middleware.js';
const router = Router();

router.post('/create_subreddit',tokenVerify,createSub)

router.get('/getsubs/',tokenVerify,getsubs)

export default router;
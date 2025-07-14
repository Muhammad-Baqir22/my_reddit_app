import {Router} from 'express';
import {createSub} from '../Controllers/subreddit.controller.js'
import {getsubs} from '../Controllers/subreddit.controller.js'
import {tokenVerify} from '../Middleware/auth.middleware.js'
import validaterequest from '../Middleware/validateRequest.middleware.js';
import subsValidation from '../validators/create_subs.validator.js'
const router = Router();

router.post('/create_subreddit',validaterequest(subsValidation),tokenVerify,createSub)

router.get('/getsubs/',tokenVerify,getsubs)

export default router;
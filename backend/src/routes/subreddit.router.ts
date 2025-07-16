import {Router} from 'express';
import {createSub} from '../Controllers/subreddit.controller.js'
import {getsubs} from '../Controllers/subreddit.controller.js'
import {tokenVerify} from '../Middleware/auth.middleware.js'
import validaterequest from '../Middleware/validateRequest.middleware.js';
import subsValidation from '../validators/create_subs.validator.js'
import {followcontroller} from '../Controllers/followsubs.controller.js'
import subfollowValidation from "../validators/subfollow.validator.js";
import {getfollowsubs} from '../Controllers/followsubs.controller.js'
import {unfollowsub} from '../Controllers/followsubs.controller.js'
const router = Router();

router.post('/sub',validaterequest(subsValidation),tokenVerify,createSub)

router.get('/subs/',tokenVerify,getsubs)

router.post('/followsub',validaterequest(subfollowValidation),tokenVerify,followcontroller);

router.get('/followsub',tokenVerify,getfollowsubs);

router.post('/unfollowsub',tokenVerify,unfollowsub);

export default router;
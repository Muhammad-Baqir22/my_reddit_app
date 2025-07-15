import { Router } from "express";
import {followcontroller} from '../Controllers/followsubs.controller.js'
import {tokenVerify} from '../Middleware/auth.middleware.js';
import subfollowValidation from "../validators/subfollow.validator.js";
import validaterequest from "../Middleware/validateRequest.middleware.js";
import {getfollowsubs} from '../Controllers/followsubs.controller.js'
import {unfollowsub} from '../Controllers/followsubs.controller.js'

const router = Router();

router.post('/followsubs',validaterequest(subfollowValidation),tokenVerify,followcontroller);
router.get('/getfollowsubs',tokenVerify,getfollowsubs);
router.post('/unfollowsub',tokenVerify,unfollowsub);

export default router;
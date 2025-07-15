import { Router } from "express";
import {postController} from '../Controllers/post.controller.js'
import {getPostController} from '../Controllers/post.controller.js'
import {getuserpost} from '../Controllers/post.controller.js'
import {tokenVerify} from '../Middleware/auth.middleware.js';
import postValidation from "../validators/create_post.validator.js";
import validaterequest from "../Middleware/validateRequest.middleware.js";
const router = Router();

router.post('/createpost',validaterequest(postValidation),tokenVerify,postController);
router.get('/getposts',tokenVerify,getPostController);
router.get('/getuserpost',tokenVerify,getuserpost);

export default router;
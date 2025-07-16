import { Router } from "express";
import {postController} from '../Controllers/post.controller.js'
import {getPostController} from '../Controllers/post.controller.js'
import {getuserpost} from '../Controllers/post.controller.js'
import {tokenVerify} from '../Middleware/auth.middleware.js';
import postValidation from "../validators/create_post.validator.js";
import validaterequest from "../Middleware/validateRequest.middleware.js";
import {post} from '../Controllers/post.controller.js'
const router = Router();

router.post('/',validaterequest(postValidation),tokenVerify,postController);
router.get('/',tokenVerify,getPostController);
router.get('/user',tokenVerify,getuserpost);
router.get('/post/:id',tokenVerify,post)
// "/post/:id"

export default router;
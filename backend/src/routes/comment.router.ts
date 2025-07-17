import { Router } from "express";
import {postcomment} from '../Controllers/comment.controller.js'
import {tokenVerify} from '../Middleware/auth.middleware.js';
import {getcomments} from '../Controllers/comment.controller.js'
import validaterequest from "../Middleware/validateRequest.middleware.js";
import commentValidator from "../validators/comment.validator.js"
const router = Router();

router.post('/',validaterequest(commentValidator),tokenVerify,postcomment);
router.get('/:id',tokenVerify,getcomments);

export default router;
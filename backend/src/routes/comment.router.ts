import { Router } from "express";
import {postcomment} from '../Controllers/comment.controller.js'
import {tokenVerify} from '../Middleware/auth.middleware.js';
import {getcomments} from '../Controllers/comment.controller.js'

const router = Router();

router.post('/',tokenVerify,postcomment);
router.get('/:id',tokenVerify,getcomments);

export default router;
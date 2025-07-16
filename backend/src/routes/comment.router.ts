import { Router } from "express";
import {postcomment} from '../Controllers/comment.controller.js'
import {tokenVerify} from '../Middleware/auth.middleware.js';
import {getcomments} from '../Controllers/comment.controller.js'

const router = Router();

router.post('/addcomment',tokenVerify,postcomment);
router.get('/getcomment',tokenVerify,getcomments);

export default router;
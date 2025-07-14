import { Router } from "express";
import {postController} from '../Controllers/post.controller.js'
import {getPostController} from '../Controllers/post.controller.js'
import {tokenVerify} from '../Middleware/auth.middleware.js';
const router = Router();

router.post('/createpost',tokenVerify,postController);
router.get('/getsubreddits',tokenVerify,getPostController);

export default router;
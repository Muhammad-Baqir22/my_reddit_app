import Router from 'express';
import { votePost } from '../Controllers/vote.controller.js';
import {tokenVerify} from '../Middleware/auth.middleware.js'
const router = Router();

router.post('/',tokenVerify,votePost);

export default router;
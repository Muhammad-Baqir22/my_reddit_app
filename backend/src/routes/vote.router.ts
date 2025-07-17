import Router from 'express';
import { votePost } from '../Controllers/vote.controller.js';
import {tokenVerify} from '../Middleware/auth.middleware.js'
import { commentVote } from '../Controllers/vote.controller.js';
import validaterequest from "../Middleware/validateRequest.middleware.js";
import {votepost} from '../validators/votepost.validator.js'
import {commentvote} from '../validators/commentvote.validator.js'
const router = Router();

router.post('/',validaterequest(votepost),tokenVerify,votePost);
router.post('/comment',validaterequest(commentvote),tokenVerify,commentVote);

export default router;
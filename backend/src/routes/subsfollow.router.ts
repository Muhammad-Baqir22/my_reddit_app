import { Router } from "express";
import {followcontroller} from '../Controllers/followsubs.controller.js'
import {tokenVerify} from '../Middleware/auth.middleware.js';

const router = Router();

router.post('/followsubs',tokenVerify,followcontroller);

export default router;
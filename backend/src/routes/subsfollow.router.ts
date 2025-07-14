import { Router } from "express";
import {followcontroller} from '../Controllers/followsubs.controller.js'
import {tokenVerify} from '../Middleware/auth.middleware.js';
import subfollowValidation from "../validators/subfollow.validator.js";
import validaterequest from "../Middleware/validateRequest.middleware.js";

const router = Router();

router.post('/followsubs',validaterequest(subfollowValidation),tokenVerify,followcontroller);

export default router;
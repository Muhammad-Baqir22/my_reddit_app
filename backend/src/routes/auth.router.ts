import { Router } from "express";
import {loginController } from '../Controllers/user.controllers.js';
import validaterequest from '../Middleware/validateRequest.middleware.js';
import loginValidator from "../validators/login.validator.js";

const router = Router();

router.post('/login' ,validaterequest(loginValidator),loginController);
export default router;
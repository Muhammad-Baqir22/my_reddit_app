import { Router } from "express";
import {loginController } from '../Controllers/user.controllers.js';

const router = Router();

router.post('/login' ,loginController);

export default router;
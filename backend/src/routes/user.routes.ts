import { Router } from 'express';
import { createUser } from '../Controllers/user.controllers.js';

const router = Router();
router.post('/', createUser);

export default router;

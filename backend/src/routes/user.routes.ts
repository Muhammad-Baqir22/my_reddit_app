import { Router } from 'express';
import { createUser } from '../Controllers/user.controllers.js';
import validaterequest from '../Middleware/validateRequest.middleware.js';
import userValidation from '../validators/user.validator.js'

const router = Router();
router.post('/', validaterequest(userValidation),createUser);

export default router;

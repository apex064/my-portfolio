import { Router } from 'express';
import { login, createAdmin } from '../controllers/authController';

const router = Router();

router.post('/login', login);
router.post('/create', createAdmin); // only for initial setup, remove after use

export default router;

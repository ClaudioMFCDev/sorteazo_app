import { Router } from 'express';
import * as prizeController from '../controllers/prize.controller.js'
import { authenticateToken } from '../middlewares/auth.middleware';

const router = Router();

// Route to add a prize - Protected
router.post('/', authenticateToken, prizeController.addPrize);

export default router;

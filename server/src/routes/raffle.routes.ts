import { Router } from "express";
import * as raffleController from '../controllers/raffle.controller.js';
import { authenticateToken } from "../middlewares/auth.middleware.js";

const router = Router();

// GET /api/raffles/me
router.get('/me', authenticateToken, raffleController.getMyRaffles);

// GET /api/raffles - Public route to list all raffles
router.get('/', raffleController.list);
router.get('/:id', raffleController.getById);

// POST /api/raffles - Protecte route
router.post('/', authenticateToken, raffleController.create);

export default router;

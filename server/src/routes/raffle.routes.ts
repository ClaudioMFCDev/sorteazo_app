import { Router } from "express";
import * as raffleController from '../controllers/raffle.controller.js';
import { authenticateToken } from "../middlewares/auth.middleware.js";

const router = Router();

// GET /api/raffles - Public route to list all raffles
router.get('/', raffleController.list);

// POST /api/raffles - Protecte route
router.post('/', authenticateToken, raffleController.create);

export default router;

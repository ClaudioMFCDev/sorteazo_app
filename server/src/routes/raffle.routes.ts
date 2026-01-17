import { Router } from "express";
import * as raffleController from '../controllers/raffle.controller.js';
import { authenticateToken } from "../middlewares/auth.middleware.js";

const router = Router();

// POST /api/raffles - Protecte route
router.post('/', authenticateToken, raffleController.create);

export default router;

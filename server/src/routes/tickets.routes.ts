import { Router } from "express";
import { optionalAuthentication } from "../middlewares/auth.middleware.js";
import * as ticketController from '../controllers/ticket.controller.js';

const router = Router();


router.post('/purchase', optionalAuthentication, ticketController.purcharse);

export default router;
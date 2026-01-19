import { Request, Response } from "express";
import { AuthRequest } from "../middlewares/auth.middleware.js";
import * as raffleService from '../services/raffle.service.js';
import { count } from "node:console";

// Controller to handle the creation a new raffle
export const create = async (req: AuthRequest, res: Response) => {
    try {
        // 1. Extract data from the body
        const { title, description, pricePerTicket, maxTickets, startDate, endDate} = req.body;

        const creatorId = req.user?.userId;

        if (!creatorId) {
            return res.status(401).json({ mesage: 'User not authenticated'});
        }

        // Call service to persist data in Neon
        const newRaffle = await raffleService.createRaffle({
            title, description, pricePerTicket: Number(pricePerTicket),
            maxTickets: Number(maxTickets),
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            creatorId
        });

        res.status(201).json({ message: 'Raffle created succefully'});

    } catch (error){
        console.error('Error in raffle controller: ', error);
        res.status(500).json({ message: 'Internal server error'});
    }
};

// Controller to list all raffles
export const list = async (_req: Request, res: Response) => {
    try {
        const raffles = await raffleService.getAllRafles();

        res.json({
            count: raffles.length,
            raffles
        });

    } catch(error) {
        console.error('Error listing raffles: ', error);
        res.status(500).json({ message: 'Internal server error'});
    }
};

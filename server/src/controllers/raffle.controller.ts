import { Request, Response } from "express";
import { AuthRequest } from "../middlewares/auth.middleware.js";
import * as raffleService from '../services/raffle.service.js';
import { count } from "node:console";

// Controller to handle the creation a new raffle
export const create = async (req: AuthRequest, res: Response) => {
    try {
        // 1. Extract data from the body
        const { title, description, pricePerTicket, maxTickets, startDate, endDate, locationId, bankCbu, bankAlias} = req.body;

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
            ownerId: creatorId
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
        const raffles = await raffleService.getAllRaffles();

        res.json({
            count: raffles.length,
            raffles
        });

    } catch(error) {
        console.error('Error listing raffles: ', error);
        res.status(500).json({ message: 'Internal server error'});
    }
};

// Controller to get a single raffle by ID
export const getById = async (req: Request, res: Response) => {
    try {

        const { id } = req.params;
        // I ensure 'id' is treated as a string to match the service expectations
        const raffle = await raffleService.getRaffleById(id as string);

        if (!raffle) {
            return res.status(404).json({ message: 'Raffle not found'});
        }

        res.json(raffle);

    } catch (error) {
        console.error('Error getting raffle: ', error);
        res.status(500).json({ mesagge: 'Internal server error'});
    }
}

// Controller to get raffle by slug
export const getBySlug = async (req: Request, res: Response) => {
    try {
        const { slug } = req.params;

        const raffle = await raffleService.getRaffleBySlug(slug as string);

        if (!raffle) {
            return res.status(404).json({ message: `El sorteo de código ${slug} no existe`});
        }

        res.status(200).json(raffle);

    } catch(error) {
        console.error(error);
        res.status(500).json({ message: 'Error consultando sorteo por código'});
    }
};

// Controller to get raffles belonging to the authenticated user
export const getMyRaffles = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user?.userId;

        if (!userId) {
            return res.status(401).json({ message: 'Unautherized'});
        }

        const raffles = await raffleService.getRaffleByUserId(userId);

        const safeRaffle = raffles || [];

        res.json({
            count: safeRaffle.length,
            raffles: safeRaffle
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error'});
    }
};









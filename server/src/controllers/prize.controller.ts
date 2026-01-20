import { Request, Response } from "express";
import * as prizeService from '../services/prize.service.js'
import * as raffleService from '../services/raffle.service.js'
import { AuthRequest } from "../middlewares/auth.middleware.js";


// Controler to create a prize to a specific raffle
export const addPrize = async (req: AuthRequest, res: Response) => {
    try {
        const {title, description, imagenUrl, position, raffleId} = req.body;
        const userId = req.user?.userId;

        // Safety check: existing and relation between raffleId and userId
        const raffle = await raffleService.getRaffleById(raffleId);
        if (!raffle) {
            return res.status(404).json({ message: 'Raffle not found'});
        }

        if (userId !== raffle.ownerId){
            return res.status(403).json({message: 'You are not the owner of this raffle'});
        }

        const newPrize = await prizeService.createPrize({
            title,
            description,
            position: Number(position),
            raffleId
        });

        res.status(201).json(newPrize);

    } catch (error) {
        console.error('Error creating a prize: ', error);
        res.status(500).json({message: 'Internal server error'});
    }
}


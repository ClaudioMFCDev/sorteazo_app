import { Request, Response } from 'express';
import { AuthRequest } from '../middlewares/auth.middleware';
import * as ticketService from '../services/ticket.service.js';


export const purcharse = async (req: Request, res: Response) => {
    try {
        const { raffleId, numberValue, guestEmail} = req.body;

        // We try to get the user ID if the token exists (using a cast o check);
        const userId = (req as AuthRequest).user?.userId;
        console.log('User id from req: ', userId);

        // Logic: If there is no userId or no guestEmail, we can't proceed
        if(!userId && !guestEmail) {
            return res.status(400).json( { message: 'Buyer identification is necesary (login o email)'});
        }

        const newTicket = await ticketService.buyTicket({
            raffleId,
            userId: userId,
            guestEmail: guestEmail,
            numberValue: Number(numberValue)
        });

        res.status(201).json({
            message: 'Ticket purchased successfully',
            ticket: newTicket});
    } catch(error: any) {
        if (error.code === 'P2002'){
            return res.status(400).json({ message: 'This number is already taken'});
        }

        res.status(400).json({ message: error.message || 'Error purchasing ticket'});
    }
};

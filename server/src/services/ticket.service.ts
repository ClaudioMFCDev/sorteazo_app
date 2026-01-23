import { PrismaClient } from "@prisma/client";
import { generateShortCode} from '../utils/generateCode';

const prisma = new PrismaClient();


// Function to buy a ticket of a specific raffle
export const buyTicket = async (data: {
    raffleId: string;
    userId?: string;
    guestEmail?: string;
    numberValue: number;
}) => {

    // We created random operationId;
    const operationId = `T-${generateShortCode()}`;
    // First, we check if the raffle exists and get its maxTickets
    const raffle = await prisma.raffle.findUnique({
        where: { id: data.raffleId}
    });

    if (!raffle) throw new Error('Raffle not found');

    // Check if the number is withinn the allowed range
    if(data.numberValue < 1 || data.numberValue > raffle.maxTickets){
        throw new Error(`Numbers must be between 1 and ${raffle.maxTickets}`)
    }

    return await prisma.ticket.create({
        data: {
            numberValue: data.numberValue,
            raffleId: data.raffleId,
            operationId: operationId,
            buyerId: data.userId || null,
            guestEmail: data.guestEmail || null,
            status: 'SOLD'
        }
    });
};

import { PrismaClient } from "@prisma/client";
import { generateShortCode} from '../utils/generateCode';

const prisma = new PrismaClient();


// Function to buy a ticket of a specific raffle
export const buyTicket = async (data: {
    raffleId: string;
    userId?: string | null;
    guestEmail?: string | null;
    numberValue: number;
}) => {

    // First, we check if the raffle exists and get its maxTickets
    const raffle = await prisma.raffle.findUnique({
        where: { id: data.raffleId},
        include:{
            _count:{
                select:{
                    tickets: true
                } 
            }
        }
    });

    if (!raffle) throw new Error('Raffle not found');

    if (raffle._count.tickets >= raffle.maxTickets) {
        throw new Error('Agotado! Este sorteo alcanzó el máximo de números vendidos');
    }

    // Check if the number is withinn the allowed range
    if(data.numberValue < 1 || data.numberValue > raffle.maxTickets){
        throw new Error(`Número inválido! Por favor ingresar entre 1 y ${raffle.maxTickets}`);
    }

    // We created random operationId;
    const operationId = `T-${generateShortCode()}`;


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

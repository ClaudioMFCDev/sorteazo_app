import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Function to create a new raffle in the database
export const createRaffle = async (data : {
    title: string;
    description?: string;
    pricePerTicket: number;
    maxTickets: number;
    startDate: Date;
    endDate: Date;
    creatorId: string;
}) => {

    return await prisma.raffle.create({
        data: {
            title: data.title,
            description: data.description,
            pricePerTicket: data.pricePerTicket,
            maxTickets: data.maxTickets,
            startDate: data.startDate,
            endDate: data.endDate,
            // Connect the raffle to the existing user
            owner: {
                connect: { id: data.creatorId }
            }
        }
    });

};
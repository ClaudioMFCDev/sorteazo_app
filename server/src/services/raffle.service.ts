import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Function to create a new raffle in the database
export const createRaffle = async (data : {
    title: string;
    description?: string;
    pricePerTicket: number;
    totalTickets: number;
    startDate: Date;
    endDate: Date;
    creatorId: string;
}) => {

    return await prisma.raffle.create({
        data: {
            title: data.title,
            description: data.description,
            pricePerTicket: data.pricePerTicket,
            totalTickets: data.totalTickets,
            startDate: data.startDate,
            endDate: data.endDate,
            owner: {
                connect: { id: data.creatorId }
            }
        }
    });

};
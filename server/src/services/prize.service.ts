import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


// Function to add a prize to an specific raffle
export const createPrize = async (data: {
    title: string,
    description?: string,   // optional
    imageUrl?: string,      //optional
    position: number,
    raffleId: string
}) => {
  return await prisma.prize.create({data});
};


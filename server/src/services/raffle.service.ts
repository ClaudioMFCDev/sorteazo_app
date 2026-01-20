import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Function to create a new raffle in the database
export const createRaffle = async (data: {
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
        connect: { id: data.creatorId },
      },
    },
  });
};

// Function to retrieve all raffles from the database
export const getAllRaffles = async () => {
  return await prisma.raffle.findMany({
    include: {
      // we include the owner's basic info but skip sensitive data
      owner: {
        select: {
          id: true,
          fullName: true,
          email: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

// Find a single  raffle by its unique ID
export const getRaffleById = async (id: string) => {
  return await prisma.raffle.findUnique({
    // Id recived from call
    where: { id },
    include: {
      owner: {
        select: {
          fullName: true,
          email: true,
        },
      },
      prizes: true
    },
  });
};


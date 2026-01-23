import { PrismaClient } from "@prisma/client";
import { generateShortCode } from "../utils/generateCode";
import { count } from "node:console";

const prisma = new PrismaClient();

// Function to create a new raffle in the database
export const createRaffle = async (data: {
  title: string;
  description?: string;
  pricePerTicket: number;
  maxTickets: number;
  startDate: Date;
  endDate: Date;
  ownerId: string;
  locationId?: string;
  bankCbu?: string;
  bankAlias?: string;
}) => {
  return await prisma.raffle.create({
    data: {
      title: data.title,
      description: data.description,
      slug: generateShortCode(),
      pricePerTicket: data.pricePerTicket,
      maxTickets: data.maxTickets,
      locationId: data.locationId,
      bankCbu: data.bankCbu,
      bankAlias: data.bankAlias,
      startDate: data.startDate,
      endDate: data.endDate,
      // Connect the raffle to the existing user
      ownerId: data.ownerId,
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

// Get only raffle created by a specific user
export const getRaffleByUserId = async (userId: string) => {
  const raffles = await prisma.raffle.findMany({
    where: {
      ownerId: userId, // Filter by the foreign key
    },
    include: {
      prizes: true, // I include prizes to show a complete summary
      _count: {
        select: { tickets: true }, // Bonus: This counts the tickets sold without fetching them all
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

// ¡No uses return null aquí! findMany siempre da un array.
  return raffles.map((raffle) => {
    const soldCount = raffle._count.tickets;
    const progressPercentage = (soldCount / raffle.maxTickets) * 100;

    return {
      ...raffle,
      progressPercentage: Number(progressPercentage.toFixed(2)),
    };
  });
  
};

// Find a single  raffle by its unique ID
export const getRaffleById = async (id: string) => {
  const raffle = await prisma.raffle.findUnique({
    // Id recived from call
    where: { id },
    include: {
      owner: {
        select: {
          fullName: true,
          phoneNumber: true,
        },
      },
      prizes: true,
      _count:{
        select:{
          tickets: true
        }
      },
      tickets: {
        select: {
          numberValue: true,
          status: true,
        },
      },
    },
  });

  if (!raffle) return null;

  const soldCount = raffle._count.tickets;
  const progressPercentage = (soldCount/ raffle.maxTickets) * 100;

  return {
    ...raffle,
    progressPercentage: Number(progressPercentage.toFixed(2))
  };
};


export const getRaffleBySlug = async (slug: string) => {
  const raffle = await prisma.raffle.findUnique({
    where: { slug },
    include: {
      prizes: true,
      tickets: {
        select: {
          numberValue: true,
          status: true,
        },
      },
      owner: {
        select: { fullName: true, phoneNumber: true },
      },
      _count: {
        select: { tickets: true },
      },
    },
  });

  if (!raffle) return null;

  const soldCount = raffle._count.tickets;
  const progressPercentage = (soldCount/ raffle.maxTickets) * 100;

  return {
    ...raffle,
    progressPercentage: Number(progressPercentage.toFixed(2))
  };

};

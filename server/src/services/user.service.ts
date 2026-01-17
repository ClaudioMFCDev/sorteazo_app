import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const createUser = async (email: string, passwordHash: string, fullName: string) => {
    return await prisma.user.create({
        data: {
            email, passwordHash, fullName
        }
    })
}

export const findUserByEmail = async (email: string) => {
    return await prisma.user.findUnique({
        where: { email }
    });
};
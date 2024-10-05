import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAll = async() => {
    return await prisma.promocoes.findMany();
}

export const getOne = async(id) => {
    return await prisma.promocoes.findUnique({
        where: {id: parseInt(id)}
    });
}

export const deletar = async(id) => {
    return await prisma.promocoes.delete({
        where: {id: parseInt(id)}
    });
}

export const store = async(body) => {
    return await prisma.promocoes.create({
        data:body
    });
}

export const update = async(id,body) => {
    return await prisma.promocoes.update({
        where: {id: parseInt(id)},
        data:body
    });
}
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAll = async() => {
    return await prisma.pedidos.findMany();
}

export const getOne = async(id) => {
    return await prisma.pedidos.findUnique({
        where: {id: parseInt(id)}
    });
}

export const deletar = async(id) => {
    return await prisma.pedidos.delete({
        where: {id: parseInt(id)}
    });
}

export const store = async(body) => {
    return await prisma.pedidos.create({
        data:body
    });
}

export const update = async(id,body) => {
    return await prisma.pedidos.update({
        where: {id: parseInt(id)},
        data:body
    });
}
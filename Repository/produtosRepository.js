import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAll = async() => {
    return await prisma.produtos.findMany();
}

export const getOne = async(id) => {
    return await prisma.produtos.findUnique({
        where: {id: parseInt(id)}
    });
}

export const deletar = async(id) => {
    return await prisma.produtos.delete({
        where: {id: parseInt(id)}
    });
}

export const store = async(body) => {
    return await prisma.produtos.create({
        data:body
    });
}

export const update = async(id,body) => {
    return await prisma.produtos.update({
        where: {id: parseInt(id)},
        data:body
    });
}
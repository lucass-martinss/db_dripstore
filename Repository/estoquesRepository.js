import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAll = async() => {
    return await prisma.estoque.findMany();
}

export const getOne = async(id) => {
    return await prisma.estoque.findUnique({
        where: {id: parseInt(id)}
    });
}

export const deletar = async(id) => {
    return await prisma.estoque.delete({
        where: {id: parseInt(id)}
    });
}

export const store = async(body) => {
    return await prisma.estoque.create({
        data:body
    });
}

export const update = async(id,body) => {
    return await prisma.estoque.update({
        where: {id: parseInt(id)},
        data:body
    });
}
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAll = async() => {
    return await prisma.categorias.findMany();
}

export const getOne = async(id) => {
    return await prisma.categorias.findUnique({
        where: {id: parseInt(id)}
    });
}

export const deletar = async(id) => {
    return await prisma.categorias.delete({
        where: {id: parseInt(id)}
    });
}

export const store = async(body) => {
    return await prisma.categorias.create({
        data:body
    });
}

export const update = async(id,body) => {
    return await prisma.categorias.update({
        where: {id: parseInt(id)},
        data:body
    });
}
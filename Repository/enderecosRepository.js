import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAll = async() => {
    return await prisma.enderecos.findMany();
}

export const getOne = async(id) => {
    return await prisma.enderecos.findUnique({
        where: {id: parseInt(id)}
    });
}

export const deletar = async(id) => {
    return await prisma.enderecos.delete({
        where: {id: parseInt(id)}
    });
}

export const store = async(body) => {
    return await prisma.enderecos.create({
        data:body
    });
}

export const update = async(id,body) => {
    return await prisma.enderecos.update({
        where: {id: parseInt(id)},
        data:body
    });
}
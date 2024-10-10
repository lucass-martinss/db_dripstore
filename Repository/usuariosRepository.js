import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"

const prisma = new PrismaClient();

export const findOrCreateUser = async (profile) => {
    const existingUser = await prisma.usuarios.findUnique({
      where: {
        OR: [
          { googleId: profile.googleId },
          { facebookId: profile.facebookId },
          { email: profile.email },
        ],
      },
    });
  
    if (existingUser) {
      return existingUser; // Se o usuário já existe, retorna ele
    }
  
    // Cria o usuário se não existir
    return await prisma.usuarios.create({
      data: {
        nome: profile.nome,               // Nome do Google ou Facebook
        email: profile.email,             // Email do Google ou Facebook
        googleId: profile.googleId || null, // Google ID (se for do Google)
        telefone: "",
        senha: "", // Senha pode ser null, pois autenticação OAuth não exige senha
        cpf: "",
        enderecos: {
            create:{
              rua: "",
              bairro: "",
              cidade: "",
              cep: "",
              complemento: "",
            },
        },
      },
    });
  };

export const getAll = async() => {
    return await prisma.usuarios.findMany();
}

export const getOne = async(id) => {
    return await prisma.usuarios.findUnique({
        where: {id: parseInt(id)},
        
    });
}

export const deletar = async(id) => {
    return await prisma.usuarios.delete({
        where: {id: parseInt(id)}
    });
}

export const store = async(body) => {
    const { nome, telefone, email, cpf, senha , enderecos } = body;
    const hashedsenha = await bcrypt.hash(senha,10)
 
    return await prisma.usuarios.create({
        data: {
            nome,
            telefone,
            email,
            cpf,
            senha: hashedsenha,
            enderecos: {
              create: enderecos.map((endereco) => ({
                rua: endereco.rua,
                bairro: endereco.bairro,
                cidade: endereco.cidade,
                cep: endereco.cep,
                complemento: endereco.complemento,
              })),
            },
          },
        })
    }

export const update = async(id,body) => {
    return await prisma.usuarios.update({
        where: {id: parseInt(id)},
        data:body
    });
}

export const login = async (email, senha) => {
    const usuario = await prisma.usuarios.findFirst({
        where: { email: email },
        include: {
            enderecos: true,
          },
    });
   console.log(`usuario encontrado no repository: -- ${usuario}`)

    if (!usuario) {
        throw new Error("Usuário não encontrado");
    }

    const issenhaValid = await bcrypt.compare(senha, usuario.senha);
    if (!issenhaValid) {
        throw new Error("Senha inválida");
    }

    return usuario; // Retorna o usuário se a senha for válida
};

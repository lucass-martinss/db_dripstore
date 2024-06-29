import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());

app.post("/clients", async (req, res) => {

  await prisma.user.create({
    data: {
      cpf: req.body.cpf,
      email: req.body.email,
      name: req.body.name,
      telefone: req.body.telefone,
      id: req.body.id,
      address:{
        create:{
          street:req.body.address.street,
          Neighborhood:req.body.address.Neighborhood,
          City:req.body.address.City,
          Zip:req.body.address.Zip,
          Complement:req.body.address.Complement,
        },  
      },
    },
  });
  console.log(req)

  res.status(201).json("Deu  certo PVT!");
});

app.get("/clients", async (req, res) => {
  let clients = [];
  if (req.query) {
    clients = await prisma.user.findMany({
      include:{address:true},
      where: {
        id: req.query.id,
        name: req.query.name,
        telefone: req.query.telefone,
        cpf: req.query.cpf,
        email: req.query.email,
      },
    });
    res.status(200).json(clients);
  } else {
    clients = await prisma.user.findMany();
    res.status(200).json(clients);
  }
});

app.put("/clients/:id", async (req, res) => {
  await prisma.user.update({
    where: {
      id: req.params.id,
    },
    data: {
      cpf: req.body.cpf,
      email: req.body.email,
      name: req.body.name,
      telefone: req.body.telefone,
    },
  });
  res.status(201).json("Deu  certo PVT!");
});

app.delete("/clients/:id", async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.id,
    },
  });
  res.status(202).json(`Os registros do cliente:${req.body.name} foi deletado`);
});

app.listen(3000);


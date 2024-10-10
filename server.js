import express from "express";
import produtosRoutes from "./Routes/produtosRoutes.js"
import pedidosRoutes from "./Routes/pedidosRoutes.js"
import categoriasRoutes from "./Routes/categoriasRoutes.js"
import promocoesRoutes from "./Routes/promocoesRoutes.js"
import usuariosRoutes from "./Routes/usuariosRoutes.js"
import estoquesRoutes from "./Routes/estoquesRoutes.js"
import enderecosRoutes from "./Routes/enderecosRoutes.js"
import authRouter from "./Routes/authRoutes.js"
import passport from './Config/passportConfig.js';
import session from 'express-session';
import cors from "cors"
import bodyParser from "body-parser";
import dotenv from 'dotenv';

dotenv.config();


const app = express();
const PORT = 3000;

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));
  
  app.use(passport.initialize());
  app.use(passport.session());
app.use(cors());
app.use(bodyParser.json())
app.use(express.json());

app.use("/auth",authRouter)
app.use("/produtos",produtosRoutes)
app.use("/pedidos",pedidosRoutes)
app.use("/categorias",categoriasRoutes)
app.use("/promocoes",promocoesRoutes)
app.use("/usuarios",usuariosRoutes)
app.use("/enderecos",enderecosRoutes)
app.use("/estoques",estoquesRoutes)


app.listen(PORT, () => {
    console.log(`Aplicação rodando em http://localhost:${PORT}`)
})
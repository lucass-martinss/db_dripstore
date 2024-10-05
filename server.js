

import express from "express";
import produtosRoutes from "./Routes/produtosRoutes.js"
import pedidosRoutes from "./Routes/pedidosRoutes.js"
import categoriasRoutes from "./Routes/categoriasRoutes.js"
import promocoesRoutes from "./Routes/promocoesRoutes.js"
import usuariosRoutes from "./Routes/usuariosRoutes.js"
import estoquesRoutes from "./Routes/estoquesRoutes.js"
import cors from "cors"
import bodyParser from "body-parser";
import dotenv from 'dotenv';

dotenv.config();


const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json())
app.use(express.json());

app.use("/produtos",produtosRoutes)
app.use("/pedidos",pedidosRoutes)
app.use("/categorias",categoriasRoutes)
app.use("/promocoes",promocoesRoutes)
app.use("/usuarios",usuariosRoutes)
app.use("/estoques",estoquesRoutes)


app.listen(PORT, () => {
    console.log(`Aplicação rodando em http://localhost:${PORT}`)
})
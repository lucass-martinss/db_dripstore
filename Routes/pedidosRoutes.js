import express from "express"
import * as pedidosController from "../Controllers/pedidosController.js"


const route = express.Router()
route.get('/',pedidosController.getAll)
route.get('/getone/:id',pedidosController.getOne)
route.delete('/:id',pedidosController.deletar)
route.post('/',pedidosController.store)
route.put('/:id',pedidosController.update)
export default route
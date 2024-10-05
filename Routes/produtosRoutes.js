import express from "express"
import * as produtosController from "../Controllers/produtosController.js"

const route = express.Router()
route.get('/',produtosController.getAll)
route.get('/getone/:id',produtosController.getOne)
route.delete('/:id',produtosController.deletar)
route.post('/',produtosController.store)
route.put('/:id',produtosController.update)
export default route

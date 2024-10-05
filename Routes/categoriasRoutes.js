import express from "express"
import * as categoriasController from "../Controllers/categoriasController.js"

const route = express.Router()
route.get('/',categoriasController.getAll)
route.get('/getone/:id',categoriasController.getOne)
route.delete('/:id',categoriasController.deletar)
route.post('/',categoriasController.store)
route.put('/:id',categoriasController.update)
export default route

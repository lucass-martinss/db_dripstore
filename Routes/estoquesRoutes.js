import express from "express"
import * as estoquesController from "../Controllers/estoquesController.js"

const route = express.Router()
route.get('/',estoquesController.getAll)
route.get('/getone/:id',estoquesController.getOne)
route.delete('/:id',estoquesController.deletar)
route.post('/',estoquesController.store)
route.put('/:id',estoquesController.update)
export default route
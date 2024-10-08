import express from "express"
import * as enderecosController from "../Controllers/enderecosController.js"

const route = express.Router()
route.get('/',enderecosController.getAll)
route.get('/getone/:id',enderecosController.getOne)
route.delete('/:id',enderecosController.deletar)
route.post('/register',enderecosController.store)
route.put('/:id',enderecosController.update)
export default route
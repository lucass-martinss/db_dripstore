import express from "express"
import * as promocoesController from "../Controllers/promocoesController.js"

const route = express.Router()
route.get('/',promocoesController.getAll)
route.get('/getone/:id',promocoesController.getOne)
route.delete('/:id',promocoesController.deletar)
route.post('/',promocoesController.store)
route.put('/:id',promocoesController.update)
export default route
import express from "express"
import * as usuariosController from "../Controllers/usuariosController.js"

const route = express.Router()
route.get('/',usuariosController.getAll)
route.get('/getone/:id',usuariosController.getOne)
route.delete('/:id',usuariosController.deletar)
route.post('/register',usuariosController.store)
route.put('/:id',usuariosController.update)
route.post('/login',usuariosController.login)
export default route
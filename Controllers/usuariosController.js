import * as  usuariosRepository from "../Repository/usuariosRepository.js"
import jwt from "jsonwebtoken"

export const getAll = async (req,res) => {
    try{
        const usuarios = await usuariosRepository.getAll();
        res.status(200).send(usuarios)
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const getOne = async (req,res) => {
    try{
        let {id} = req.params;
        const usuario = await usuariosRepository.getOne(id);
        res.status(200).send(usuario)
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const store = async (req,res) => {
    try{
        let body = req.body;
        await usuariosRepository.store(body);
        res.status(200).send(`usuario cadastrado com sucesso`)
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const deletar = async (req,res) => {
    try{
        let {id} = req.params;
        await usuariosRepository.deletar(id);
        res.status(200).send("usuario deletado com sucesso")
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const update = async (req,res) => {
    try{
        let {id} = req.params;
        let body = req.body;
        await usuariosRepository.update(id,body);
        res.status(200).send("usuario atualizado com sucesso")
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const login = async (req, res) => {
    try {
        let { email, senha } = req.body;
        const usuario = await usuariosRepository.login(email, senha);

        // Gerar o token JWT após a verificação bem-sucedida
        const token = jwt.sign({ userId: usuario.id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        

        res.status(200).json({ 
            message: 'Usuário logado com sucesso', 
            token, 
            usuario: {
                id: usuario.id,
                email: usuario.email,
                nome: usuario.nome,
                telefone: usuario.telefone,
                cpf: usuario.cpf,
                enderecos: usuario.enderecos
        }});
    } catch (error) {
        console.error(error); // Log do erro no console do servidor
        res.status(401).json({ error: error.message });
    }
};
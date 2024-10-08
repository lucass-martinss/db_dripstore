import * as  enderecosRepository from "../Repository/enderecosRepository.js"

export const getAll = async (req,res) => {
    try{
        const enderecos = await enderecosRepository.getAll();
        res.status(200).send(enderecos)
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const getOne = async (req,res) => {
    try{
        let {id} = req.params;
        const endereco = await enderecosRepository.getOne(id);
        res.status(200).send(endereco)
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const store = async (req,res) => {
    try{
        let body = req.body;
        await enderecosRepository.store(body);
        res.status(200).send(`endereco cadastrado com sucesso`)
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const deletar = async (req,res) => {
    try{
        let {id} = req.params;
        await enderecosRepository.deletar(id);
        res.status(200).send("endereco deletado com sucesso")
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const update = async (req,res) => {
    try{
        let {id} = req.params;
        let body = req.body;
        await enderecosRepository.update(id,body);
        res.status(200).send("endereco atualizado com sucesso")
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}
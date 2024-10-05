import * as  estoquesRepository from "../Repository/estoquesRepository.js"

export const getAll = async (req,res) => {
    try{
        const estoques = await estoquesRepository.getAll();
        res.status(200).send(estoques)
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const getOne = async (req,res) => {
    try{
        let {id} = req.params;
        const produto = await estoquesRepository.getOne(id);
        res.status(200).send(produto)
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const store = async (req,res) => {
    try{
        let body = req.body;
        await estoquesRepository.store(body);
        res.status(200).send(`Produto cadastrado com sucesso`)
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const deletar = async (req,res) => {
    try{
        let {id} = req.params;
        await estoquesRepository.deletar(id);
        res.status(200).send("Produto deletado com sucesso")
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const update = async (req,res) => {
    try{
        let {id} = req.params;
        let body = req.body;
        await estoquesRepository.update(id,body);
        res.status(200).send("Produto atualizado com sucesso")
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}
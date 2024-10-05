import * as  produtosRepository from "../Repository/produtosRepository.js"


export const getAll = async (req,res) => {
    try{
        const produtos = await produtosRepository.getAll();
        res.status(200).send(produtos)
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const getOne = async (req,res) => {
    try{
        let {id} = req.params;
        const produto = await produtosRepository.getOne(id);
        res.status(200).send(produto)
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const store = async (req,res) => {
    try{
        let body = req.body;
        await produtosRepository.store(body);
        res.status(200).send(`Produto cadastrado com sucesso`)
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const deletar = async (req,res) => {
    try{
        let {id} = req.params;
        await produtosRepository.deletar(id);
        res.status(200).send("Produto deletado com sucesso")
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const update = async (req,res) => {
    try{
        let {id} = req.params;
        let body = req.body;
        await produtosRepository.update(id,body);
        res.status(200).send("Produto atualizado com sucesso")
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}


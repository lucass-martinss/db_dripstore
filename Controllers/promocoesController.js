import * as  promocoesRepository from "../Repository/promocoesRepository.js"

export const getAll = async (req,res) => {
    try{
        const promocoes = await promocoesRepository.getAll();
        res.status(200).send(promocoes)
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const getOne = async (req,res) => {
    try{
        let {id} = req.params;
        const produto = await promocoesRepository.getOne(id);
        res.status(200).send(produto)
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const store = async (req,res) => {
    try{
        let body = req.body;
        await promocoesRepository.store(body);
        res.status(200).send(`Produto cadastrado com sucesso`)
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const deletar = async (req,res) => {
    try{
        let {id} = req.params;
        await promocoesRepository.deletar(id);
        res.status(200).send("Produto deletado com sucesso")
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const update = async (req,res) => {
    try{
        let {id} = req.params;
        let body = req.body;
        await promocoesRepository.update(id,body);
        res.status(200).send("Produto atualizado com sucesso")
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}
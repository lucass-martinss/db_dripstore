import * as  categoriasRepository from "../Repository/categoriasRepository.js"


export const getAll = async (req,res) => {
    try{
        const categorias = await categoriasRepository.getAll();
        res.status(200).send(categorias)
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const getOne = async (req,res) => {
    try{
        let {id} = req.params;
        const produto = await categoriasRepository.getOne(id);
        res.status(200).send(produto)
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const store = async (req,res) => {
    try{
        let body = req.body;
        await categoriasRepository.store(body);
        res.status(200).send(`Produto cadastrado com sucesso`)
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const deletar = async (req,res) => {
    try{
        let {id} = req.params;
        await categoriasRepository.deletar(id);
        res.status(200).send("Produto deletado com sucesso")
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const update = async (req,res) => {
    try{
        let {id} = req.params;
        let body = req.body;
        await categoriasRepository.update(id,body);
        res.status(200).send("Produto atualizado com sucesso")
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}


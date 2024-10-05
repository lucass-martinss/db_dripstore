import * as  pedidosRepository from "../Repository/pedidosRepository.js"


export const getAll = async (req,res) => {
    try{
        const pedidos = await pedidosRepository.getAll();
        res.status(200).send(pedidos)
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const getOne = async (req,res) => {
    try{
        let {id} = req.params;
        const pedido = await pedidosRepository.getOne(id);
        res.status(200).send(pedido)
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const store = async (req,res) => {
    try{
        let body = req.body;
        await pedidosRepository.store(body);
        res.status(200).send(`Pdedidos cadastrado com sucesso`)
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const deletar = async (req,res) => {
    try{
        let {id} = req.params;
        await pedidosRepository.deletar(id);
        res.status(200).send("Pedido deletado com sucesso")
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const update = async (req,res) => {
    try{
        let {id} = req.params;
        let body = req.body;
        await pedidosRepository.update(id,body);
        res.status(200).send("Pedidos atualizado com sucesso")
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}

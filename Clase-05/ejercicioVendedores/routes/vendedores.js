const express = require("express");
const router = express.Router();

const Vendedor = require('../models/vendedor')
// app.use(express.json());

router.get('/', async (req,res)=>{
    try{
        const vendedores = await Vendedor.find();
        res.json(vendedores);
    } catch (error){
        res.status(500).json({ error: "Error al obtener los vendedores"});
    }
});

router.post('/', async(req, res) => {
    try{
        const nuevoVendedor = new Vendedor(req.body);
        await nuevoVendedor.save();
        res.json(nuevoVendedor);
    } catch(error){
        res.status(500).json({error: 'Error al crear el vendedor'})
    }
});

module.exports = router;
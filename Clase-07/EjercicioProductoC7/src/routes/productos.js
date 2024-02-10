const express = require ("express");
const route = express.Router();

const ProductoController = require("../controllers/productoController");
const { requiredScopes } = require( "express-oauth2-jwt-bearer");

route.get('/', requiredScopes("read:productos"), ProductoController.getAllProductos);

route.get('/:id', requiredScopes("read:productos"), ProductoController.getProductoById);

route.post('/', requiredScopes("write:productos"), ProductoController.createProducto);

route.put('/:id', requiredScopes("write:productos"), ProductoController.updateProductoById);

route.delete('/:id', requiredScopes("write:productos"), ProductoController.deleteProductoById);

module.exports = route;
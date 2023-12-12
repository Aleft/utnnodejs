// app.get('/', (req, res) => {
//     res.send('hola mundooo!');
// })
const express = require("express");

const routerProductos = express.Router();

routerProductos.get("/", (req, res) => {
  const productos = [
    { id: 1, nombre: "Tablet" },
    { id: 2, nombre: "PC" },
  ];
  res.json(productos);
});

// routerProductos.get("/productos", (req, res) => {
//   const categoria = req.query.categoria;
//   // Aquí puedes usar el parámetro de categoría para realizar una búsqueda de productos en esa categoría
//   res.send(`Realizar búsqueda de productos en la categoría "${categoria}"`);
// });

routerProductos.post("/productos", (req, res) => {
  const producto = req.body;
  // Aquí puedes guardar el nuevo producto en la base de datos o realizar otras operaciones relacionadas con el producto
  res.send(`Guardar nuevo producto: ${JSON.stringify(producto)}`);
});

routerProductos.post("/productos", (req, res) => {
  // Lógica para crear un nuevo usuario
  res.send("Producto creado correctamente");
});

routerProductos.get("/:id", (req, res) => {
  const productoId = req.params.id;
  // Lógica para obtener información del usuario con el ID especificado
  res.send(`Información del producto con ID ${JSON.stringify(productoId)}`);
});

module.exports = routerProductos;

const express = require("express");
const routerProductos = express.Router();

routerProductos.get("/", (req, res, next) => {
  try {
    res.json(productos);
  } catch (error) {
    next(err);
  }
});

let productos = [
  { id: 1, nombre: "producto1", precio: 10.99 },
  { id: 2, nombre: "producto2", precio: 7.66 },
  { id: 3, nombre: "producto3", precio: 11.11 },
];

routerProductos.get("/:id", (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const producto = productos.find((p) => p.id === id);

    if (!producto) {
      const error = new Error("Producto no encontrado");
      error.status = 404;
      throw error;
    }
    res.json(producto);
  } catch (err) {
    next(err);
  }
});

routerProductos.post("/", (req, res, next) => {
  try {
    const { nombre, precio } = req.body;

    const nuevoProducto = {
      id: productos.length + 1,
      nombre: nombre, //Podemos hacer asi o como abajo en este caso ya que se llama de la misma forma
      precio,
    };
    productos.push(nuevoProducto);
    res.status(201).json(nuevoProducto);
  } catch (err) {
    next(err);
  }
});

routerProductos.put("/:id", (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const { nombre, precio } = req.body;

    const producto = productos.find((p) => p.id === id);

    if (!producto) {
      const error = new Error("Producto no encontrado");
      error.stauts = 404;
      throw error;
    }

    producto.nombre = nombre || producto.nombre;
    producto.precio = precio || producto.precio;

    res.json(producto);
  } catch (error) {
    next(error);
  }
});

//Eliminar
routerProductos.delete("/:id", (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const index = productos.findIndex((p) => p.id === id);

    if (index === -1) {
      const error = new Error("Producto no encontrado");
      error.stauts = 404;
      throw error;
    }

    const productoEliminado = productos.splice(index, 1);
    res.json(productoEliminado[0]);
  } catch (error) {
    next(error);
  }
});

module.exports = routerProductos;

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

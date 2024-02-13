const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/productos", {
// useUnifiedTopology: true,
// useNewUrlParser: true,
});
const ProductoSchema = new mongoose.Schema({
nombre: String,
precio: Number
}, { collection: 'producto' });

const Producto = mongoose.model('productoModel', ProductoSchema, 'producto'); // Como buena practica el nombre del model deberia haber sido
//producto.js, de esa forma mongoose se encargaria de plurizar la palabra, es decir productos, y buscaria esta ultima palabra como coleccion
//dentro de la base de datos de productos.
//Entonces esta linea podria haber quedado de la siguiente forma:
// const Producto = mongoose.model('producto', ProductoSchema);
//En la correccion de arriba donde paso un 3er parametro es para aclararle en este ultimo como se llama la coleccion  dentro de la DB
// y que termina haciendo referencia al model productoModel. 
module.exports = Producto;

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/empresa", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

//Define el esquema y modelo de la tabla de clientes:
const clienteSchema = new mongoose.Schema({
  nombre: String,
  edad: Number,
  email: String,
});

const Cliente = mongoose.model("Cliente", clienteSchema);

// const nuevoCliente = new Cliente({
//     nombre: "Juan",
//     edad: 38,
//     email: "juan@example.com",
// });

// const result = nuevoCliente
//     .save()
//     .then(() => {
//         console.log("CLiente guardado correctamente");
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// Cliente.find({})
//     .then((clientes) => {
//         console.log("Clientes encontrados:", clientes);
//     })
//     .catch((err) => {
//         console.error("Error al recuperar los clientes", err);
//     });

// Cliente.updateOne({ nombre: "Juan" }, { edad: 31 })
//   .then(() => {
//     console.log("Cliente actualizado correctamente");
//   })
//   .catch((err) => {
//     console.error("Error al actualizar el cliente", err);
//   });


  
Cliente.deleteOne({ nombre: "Juan" })
.then(() => {
  console.log("Cliente Eliminado correctamente");
})
.catch((err) => {
  console.error("Error al Eliminar el cliente", err);
});
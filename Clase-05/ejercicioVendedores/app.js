const express = require("express");
const app = express();
const routerVendedores = require('./routes/vendedores')

app.use(express.json());

app.use('/vendedores', routerVendedores);

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});

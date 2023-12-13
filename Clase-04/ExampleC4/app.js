//Como iniciar servidor basico con Express.js

const express = require("express");
const app = express();
const routerProductos = require("./routes/productos");
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());

app.use("/productos", routerProductos);
app.use(errorHandler);

const port = 3000; //Se puede cambiar el puerto segun la necesidad

app.listen(port, () => {
  console.log(`El servidor Express.js esta ok en el puerto ${port}`);
});



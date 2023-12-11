//Como iniciar servidor basico con Express.js

const express = require("express");
const app = express();
const routerProductos = require('./routes/productos')

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hola mundo!");
  });

app.use('/productos', routerProductos);


const port = 3000; //Se puede cambiar el puerto segun la necesidad

app.listen(port, () => {
  console.log(`El servidor Express.js esta ok en el puerto ${port}`);
});

//Enrutamiento en Express.js
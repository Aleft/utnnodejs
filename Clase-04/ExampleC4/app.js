//Como iniciar servidor basico con Express.js

const express = require ('express');
const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`El servidor Express.js esta ok en ${port}`);
})



//Enrutamiento en Express.js

// app.get('/', (req, res) => {
//     res.send('hola mundo!');
// })


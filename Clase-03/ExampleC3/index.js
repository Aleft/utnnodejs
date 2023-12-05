const http = require('http');

const hostname = '127.0.0.1'; //Hace referencia a una coordenada dentro de nuestro ordenador, ip generica localhost
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola mundo!!');
});

server.listen(port, hostname, () =>{
    console.log('Iniciando servidor web');
})
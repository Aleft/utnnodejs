// //NOTAS 

// Comandos de npm para la descarga de paquetes en nuestro proyecto:

// 1-Nos posicionamos en la carpeta de nuestro proyecto y en el terminal corremos el siguiente codigo:
//     npm init -y
// 2-Hacemos el siguiente comando:
//     npm install
// 3-Podemos hacer el npm install para algunas cosas como el "npm install chance" que es una libreria que tiene ejemplos
// 4-Podemos hacer npm install para "npm install readline-sync" el cual se utiliza para que linea por linea en terminal podamos
//     introducir valores (como si fuese un prompt). 
// 5-Como tip podemos ejecutar "npm install" para que compruebe los paquetes instalados y si falta algo que lo corrija.



//Aprendimos a exportar funciones y variables de un archivo a otro con el siguiente codigo example:
// module.export = {mostrarListaEstudiantes}

// Y para importar desde el otro file:
// const {mostrarListaEstudiantes} = require("./listaEstudiantes")



//Que es Node.js?
// Es un entorno de ejecucion para JS, js se abre solo con navegador, node js permite ejecutar el codigo js fuera del navegador web
//Es asincrono, procesa una tarea sin bloquear o retrasar otra.
//Cuenta con su propio storage de paquetes conocido como npm (node package manager)


//Asincronia en Js

// ejemplo lenguaje sincrono: (phyton)
// import request
// r = requests.get('https://appdelante.com');
// print r.text
// print "impreso luego de la llamada"

// //Ejemplo asincrono
// var request = require('request');
// request ('https://appdelante.com', function(error, response, body){
//     console.log(body);
// })
// console.log('impreso luego de la llamada)';

// JS es asincrono por que las instrucciones no se dejan de ejecutar, sino que le proveemos callbacks que luego se van ser llamadas cuando sean ejecutadas
//JS se puede ejecutar una instruccion a la vez
//nodeJS y los navegadores implementan la funcionabilidad de hablar con la web, so, file system, etc.

//NodeJS eventLoop


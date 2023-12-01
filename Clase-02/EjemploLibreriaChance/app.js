//Obtenemos la carpeta chance, la libreria. Y la asignamos a una variable para poder usarla

const Chance = require("chance");

const chance = new Chance();

const randomName = chance.name();
const randomAge = chance.age();
const randomEmail = chance.email();

//Imprimir datos
console.log('Nombre aleatorio:', randomName);
console.log('Edad aleatorio:', randomAge);
console.log('Email aleatorio:', randomEmail);

//Aqui vemos como importar el codigo que tenemos en el archivo calculadora.js
const {sumar, mult} = require('./calculadora');
let resutlado = sumar(4,5);
console.log(resutlado);
// Escribe una función llamada calcularPromedio que tome como parámetro un arreglo de números y calcule el promedio de esos números. 
//La función debe retornar el promedio calculado: 

// Instrucciones:

// Crea una función llamada calcularPromedio con un parámetro llamado numeros.

// Dentro de la función, declara una variable llamada suma y asígnale el valor inicial de 0.

// Utiliza la sentencia iterativa for para recorrer cada número en el arreglo numeros.

// En cada iteración, suma el número actual al valor de suma.

// Después de recorrer todos los números, calcula el promedio dividiendo suma entre la longitud del arreglo numeros.

// Retorna el promedio calculado.

// Entrega el codigo fuente resultante en la actividad del aula virtual.

const calcularPromedio = (arrayNumeros) => {

    let suma = 0;
    for(let i = 0; i < arrayNumeros.length; i++){
        suma = arrayNumeros[i] + suma;
    }

    let promedio = suma / arrayNumeros.length;
    return promedio;
}

let arrayNumeros = [1, 6, 1 , 2, 3];
let resultado = calcularPromedio(arrayNumeros);
console.log("El resultado es: " + resultado);
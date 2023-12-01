//Aqui vemos como exportar datos para que podamos usarlos en otro file dentro de nuestro proyecto

const sumar = ( num1, num2) => {
    return num1 + num2;
}

const mult = (num1, num2) => {
    return num1 * num2;
}

module.exports = {sumar, mult};

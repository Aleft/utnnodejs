'use strict'

//Example ejercicio hecho en clase:
const registrarEstudiantes = () => {
    console.log("Iniciando registro de estudiantes");

    let cantidadEstudiantes = prompt("Ingresar cantidad: ");
    console.log("La cantidad de estudiantes a registrar es de :" + cantidadEstudiantes);

    let estudiantes = [];

    for(let i = 0; i < cantidadEstudiantes; i++){
        let nombreEstudiante = prompt ("Ingrese el nombre del estudiante "+ i + ": ");

        let edad = prompt ("Ingrese la edad de " + nombreEstudiante + ": ");

        let estudiante = {
            nombre: nombreEstudiante,
            edad: edad
        }

        estudiantes.push(estudiante);
    }
    return estudiantes;
}

const mostrarListarEstudiantes = (estudiantes) =>{
    console.log("Lista de estudiantes registrados: ");
    for(let i = 0; i < estudiantes.length; i++){
        let estudianteActual = estudiantes[i];
        console.log("Nombre: " +  estudianteActual.nombre + ", Edad: " + estudianteActual.edad);
    }
}

//Ejecutar function
let estudiantesRegistrados = registrarEstudiantes();

mostrarListarEstudiantes(estudiantesRegistrados);
const readlineSync = require("readline-sync");
const { mostrarListaEstudiantes } = require("./listaEstudiantes");

const registrarEstudiantes = () => {
  const cantidadEstudiantes = readlineSync.question(
    "Ingrese cantidad de estudiantes"
  );
  const estudiantes = [];

  for (let i = 0; i < cantidadEstudiantes; i++) {
    const nombre = readlineSync.question(
      `ingrese el nombre dele studiante ${i}:`
    );
    const edad = readlineSync.question(`Ingrese la edad de ${nombre}: `);

    const estudiante = {
      nombre,
      edad,
    };
    estudiantes.push(estudiante);
  }
  mostrarListaEstudiantes(estudiantes);
};

registrarEstudiantes();

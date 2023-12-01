const mostrarListaEstudiantes = (estudiantes) => {
    console.log("Lista de estudiantes registador: ");
    estudiantes.forEach((estudiante) => {
        console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
    });
};

module.exports = {mostrarListaEstudiantes}
const nombreHeroe = prompt('Ingrese el nombre del heroe: ');
let puntosSalud = 100;
let puntosExperiencia = 0;

function mostrarEstadisticas(){
    console.log(`Heroe: [${nombreHeroe}], Salud: ${puntosSalud} HP, Experiencia: ${puntosExperiencia} XP`);
}

mostrarEstadisticas();
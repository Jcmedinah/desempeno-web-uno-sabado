const nombreHeroe = prompt('Ingrese el nombre del heroe: ');
let puntosSalud = 100;
let puntosExperiencia = 0;

function mostrarEstadisticas(){
    console.log(`Heroe: [${nombreHeroe}], Salud: ${puntosSalud} HP, Experiencia: ${puntosExperiencia} XP`);
}



const recibirDanio = function(cantidadDanio){
    puntosSalud = puntosSalud - cantidadDanio;

    if(puntosSalud < 0){
        puntosSalud = 0;
    }

    if (puntosSalud === 0) {
        console.log(`¡Has sido derrotado!`);
    } else {
        console.log(`Recibiste [${cantidadDanio}] de daño. Salud restante: [${puntosSalud}] HP.`);
    }
}

const ganarExperiencia = (cantidadXP) =>{
    puntosExperiencia = puntosExperiencia + cantidadXP;
    console.log(`Ganaste [${cantidadXP}] XP. Experiencia total: [${puntosExperiencia}] XP.`);
}

recibirDanio(20);
ganarExperiencia(15);
recibirDanio(50);
ganarExperiencia(25);
recibirDanio(40);
mostrarEstadisticas();
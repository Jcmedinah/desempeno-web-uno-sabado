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

const simularBatalla = () => {
    for (let i = 0; i < 3; i++) {
        recibirDanio(30);
        if (puntosSalud === 0) {
            break;
        }
    }
    ganarExperiencia(50);
}

function diagnosticoHeroe(){
    if (puntosSalud > 70) {
        console.log("Tu salud es excelente");
    } else if (puntosSalud > 30) {
        console.log("Estás herido, considera usar una poción");
    } else {
        console.log("¡Peligro! Salud crítica");
    }
    switch (true) {
        case (puntosExperiencia >= 200):
            console.log("Eres una leyenda viviente");
            break;
        case (puntosExperiencia >= 100):
            console.log("Te estás convirtiendo en un guerrero respetable");
            break;
        default:
            console.log("Eres un novato");
    }
}

simularBatalla();
diagnosticoHeroe();
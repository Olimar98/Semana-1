// 📝 Instrucciones:
// Crea un arreglo llamado alumnos.
//
// Usa un bucle while para permitir al usuario agregar objetos alumno al arreglo.
// Cada alumno debe tener:
//
// nombre
// edad
// calificacion
//
// Pregunta al usuario si desea seguir agregando más alumnos.
// Después de salir del ciclo, muestra:
// Cuántos alumnos tienen calificación aprobatoria (≥ 70).
// Cuántos pueden votar (edad ≥ 18).
// El promedio general de calificaciones.
// La calificación mayor.
// La calificación menor.

const { ask } = require('../helpers/input');

function Promedio(numeros){
   
    let suma = 0;
    for(let i = 0; i < numeros.length; i++){

        suma = suma+numeros[i];

    }
    const promedio = suma/numeros.length;
    return promedio;
}

function Mayor(numeros){
    let maximo = numeros[0];
    for (let i = 0; i < numeros.length; i++){

        if(numeros[i]>maximo){
            maximo = numeros[i];
        }
    }
    return maximo;
}


function todo(numeros){

    const promedio = Promedio(numeros);
    let maximo = Mayor(numeros);
    let minimo = numeros[0];


    for(let i = 0; i < numeros.length; i++){
        if(numeros[i]<minimo){
            minimo = numeros[i];
    }
}
return minimo;

}

async function main() {

    let nombre = '';
    let edad = 0;
    let calificacion = 0;

    let alumno = [];
    let pregunta = '';

    while (pregunta !== '3'){
    pregunta = await ask("¿Que quieres hacer? \n1. Ver Alumnos \n2. Agregar Alumnos \n3. Salir \n");

    if(pregunta === '1'){

        if(alumno.length===0){
            console.log('No hay alumnos');
            continue;
        }else{
        console.log(`Alumno: ${alumno}\n`);
        }

    }else if (pregunta === '2'){
        let nombre = await ask ("Agrega nombre");
        let edad = await ask ("Agrega edad");
        let calificacion = await ask ("Agrega calificación");

        let alumnoNew = [`${nombre} tiene ${edad} años y su calificacion es de ${calificacion}`];

        alumno.push(alumnoNew);
            console.log(`Alumno: ${alumnoNew}`);
            if (edad >= 18){
                console.log("Puede votar")
            }else{
                console.log("No puede votar")
            }


    }else if (pregunta === '3'){
        console.log("Hasta luego");
    }else{
        console.log("Error");
    }

}
}

main();

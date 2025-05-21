//📘 Tarea: Análisis de calificaciones
//🎯 Objetivo:
//Aplicar funciones, bucles y lógica condicional para procesar un arreglo de números.
//
//📝 Instrucciones:
//Crea una función llamada analizarCalificaciones que reciba un arreglo de números (enteros del 0 al 100) que representan calificaciones de estudiantes. La función debe devolver un objeto con la siguiente información:
//
//Cantidad de aprobados (calificaciones ≥ 70)
//
//Cantidad de reprobados (calificaciones < 70)
//
//Promedio general
//
//La calificación más alta y la más baja

const { ask } = require('../helpers/input');

function analizarCalificaciones(numeros){

    let aprobados = numeros[0];
    for(let i = 0; i < numeros.length; i++){

        if(numeros[i]>aprobados){
            aprobados = numeros[i];
        }

    }

    return aprobados;
}

function analizar(numeros){

    let aprobados = analizarCalificaciones(numeros);
    let reprobados = numeros[0];

    for(let i = 0; i  <  numeros.length; i++){
        if(numeros[i]<reprobados){
            reprobados = numeros[i];
    }
}

return {'Aprobados': aprobados,'Reprobados': reprobados};

}

async function main() {

    const calificaciones = [70 , 83 , 98, 100, 22, 35, 40, 41];
    const datos = analizar(calificaciones);
    const pregunta = await ask("¿Quieres ver las calificaciones? //n1. Aprobados //n2. Reprobados //n3. Salir?");
    
    if(pregunta === '2'){
        if(datos <= 69){
    console.log(`Reprobados:`, datos.reprobados);
        }else{
         console.log("No hay reprobados")   
        }
    }
        else if (pregunta === '1'){
            if(datos >= 70){
                console.log(`Aprobados:`, datos.aprobados);

            }else{
                console.log("No hay aprobados")
            }
        }else if(pregunta === '3'){
            console.log("Gracias por usar");
        }else{
            console.log("error");
        }

}

main();
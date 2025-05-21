const { ask } = require('../helpers/input');

function obtenerPromedio(numeros){
   
    let suma = 0;
    for(let i = 0; i < numeros.length; i++){

        suma = suma+numeros[i];

    }
    const promedio = suma/numeros.length;
    return promedio;
}

function obtenerMayor(numeros){

    let mayor = numeros[0];
    for(let i = 0; i < numeros.length; i++){

        if(numeros[i]>mayor){
            mayor = numeros[i];
        }

    }

    return mayor;
}

function resumen(numeros){

    const promedio = obtenerPromedio(numeros);
    let minimo = numeros[0];
    let maximo = obtenerMayor(numeros);

    for(let i = 0; i < numeros.length; i++){
        if(numeros[i]<minimo){
            minimo = numeros[i];
    }
}
return {'promedio': promedio,'minimo': minimo,'maximo': maximo};
return {promedio,minimo,maximo};
}

function nombresConVocal(nombres){

    let vocales = [a, e, i, o, u]
    let resultado = [];
    
    for(let i = 0; i < nombres.length; i++){
       let primeraLetra = nombres[i][0].toLowerCase();
       if(vocales.includes(primeraLetra)){
        resultado.push(nombres[i]);
       }
    }
    return {resultado};
}
async function main() {

    const edades = [20, 18, 15, 22, 30, 12, 9];
    console.log(`Promedio = ${obtenerPromedio(edades)}`);

    const lista = [20, 18, 15, 22, 30, 12, 9];
    console.log(`Mayor = ${obtenerMayor(lista)}`);

    const datos = [98, 67, 34, 110, 17, 48];
    const estadisticas = resumen(datos);
    console.log('Promedio',estadisticas.promedio);
    console.log('Maximo',estadisticas.maximo);
    console.log('Minimo',estadisticas.minimo);

    const name = ["Oliver, Diego, Zara, Nathan, Chiara"];
    console.log(`Lista de nombres: ${name}`);
    console.log(`Lista de nombres que empiezan con vocales:`,nombresConVocal(name));
}

main();
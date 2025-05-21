// 🏠 Práctica para casa:
// Contar cuántos de una lista de edades pueden votar
//
// Instrucciones:
// Crea un arreglo de edades (pedirlo al usuario).
//
// Recorre el arreglo.
//
// Cuenta cuántos tienen 18 años o más.
//
// Muestra el total.

const { ask } = require('../helpers/input');

async function main() {

   // const edades = ["13","15","19","24","22","30","11","17","18"];
   const personas = ["Oscar", "Ana","Isabel","Eduardo","Luis","Pedro","María"];
   const edad = [14, 18, 12, 22, 31, 17];
   const nombre = await ask ("¿Cuál es tu nombre?");
   const edades = Number (await ask ("¿Cuál es tu edad?"));

    if(edades >= 18){

        console.log(`${nombre} eres mayor de edad`);

    }else if (edades <= 17){

        console.log(`${nombre} tu edad es menor a 18`);

    }else{
        console.log("error");
    }

    const ver = await ask ("¿Quieres ver que personas son mayores de edad en el registro de datos?");

    if(ver==='si', edades>= 18){
        //console.log(`Estás personas soy mayores de edad: ${nombre} ${edades}`)

    }else if(ver==='no'){
        console.log("No hay problema");
    }else{
        console.log("error");
    }

}

main();
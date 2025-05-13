const { ask } = require('../helpers/input');

async function main() {

    const age = Number (await ask('¿Cuántos años tienes?'));
    const genere = await ask ('¿Cuál es tu genero?(hombre/mujer)');

    if ((age >= 1 && age < 18) && (genere === 'mujer' || 'hombre')){
        console.log (`Eres ${genere} menor de edad`);

    } else if ((age >= 18 && age < 65) && (genere === 'mujer' && 'hombre')){
        console.log (`Eres ${genere} mayor de edad`);

    }else{
        console.log('No se cumplen los requisitos');

    }
  }



main();
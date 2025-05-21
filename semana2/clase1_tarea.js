// Práctica para casa:
// Imprimir números pares del 1 al 100
const { ask } = require('../helpers/input');

async function main() {

    let limite = Number(await ask("Escriba 100 para imprimir números pares hasta el 100"));
    let i = 0;
    {
        for(let i = 1; i <= 100; i++) {
            if (i % 2 === 0) {
              console.log(i);
            }
        }
  }

}

main();
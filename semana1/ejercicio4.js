const { ask } = require('../helpers/input');

// TODO: Función que devuelve el mayor de dos números
function obtenerMayor(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

async function main() {
  const num1 = Number(await ask("Introduce el primer número a evaluar: "));
  const num2 = Number(await ask("Introduce el segundo número a evaluar: "));

  if (num1 === num2) {
    console.log("Los dos numeros que ingresaste son iguales");
  } else {
    const resultado = obtenerMayor(num1, num2);
    console.log("El numero mayor es: ", resultado);
  }

}

main();
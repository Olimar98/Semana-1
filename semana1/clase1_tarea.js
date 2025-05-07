// Ejercicio: Crear una calculadora simple que realice operaciones básicas (suma, resta, multiplicación y división) entre dos números.

const { ask } = require('../helpers/input');

async function main() {

  const num1 = Number(await ask('Ingresa el primer número: '));

  const operador = await ask ('¿Qué operación quieres hacer?(+)(-)(*)(/)');

  const num2 = Number(await ask('Ingresa el segundo número: '));

  let result = 0

  switch (operador) {
    case "+":
      result = num1 + num2;
      break;

      case "-":
        result = num1 - num2;
        break;

        case "*":
          result = num1 * num2;
          break;

          case "/":
            result = num1 / num2;
            break;

      default:
        console.log('error')
        break;

  } 

  console.log(`El resultado es: ${result}`);

  
  // const suma = num1 + num2;
  // const resta = num1 - num2;
  // const multi = num1 * num2;
  // const div = num1 / num2;
  // TODO: Implementar la resta, multiplicación y división

  // console.log('Suma:', suma);
  // console.log('Resta:', resta);
  // console.log('Multiplicación:', multi);
  // console.log('División:', div);
  // TODO: Mostrar el resultado de la resta, multiplicación y división

}

main();
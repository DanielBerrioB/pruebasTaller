function main(option, num) {
  if (option === 1) {
    return function1(num);
  } else if (option === 2) {
    return function2(num);
  } else if (option === 3) {
    return function3();
  } else {
    return "Opción inválida";
  }
}

function function1(num) {
  
}
/**
 * 
 * @param {*} num Valor a evaluar en la función implementada
 */
function function2(num) {
  // Flujo 1, división por cero
  if (num===1) {
    return "ZeroDivision"
  }
  // Flujo 2, Fuera de dominio
  if (num<1) {
    return "RootError"
  }
  // Flujo 3, camino ideal
  return (num + 4)/Math.sqrt(num-1)
}

function function3() {}
main()
module.exports = { main };

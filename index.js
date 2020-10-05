function main(option, num) {
  if (option === 1) {
    return rationalFunction(num);
  } else if (option === 2) {
    return function2(num);
  } else if (option === 3) {
    return calculateLogarithm(num);
  //More options can be added
  } else {
    return "Opción inválida";
  }
}

function rationalFunction(num) {
  return 1 / (num - Math.pow(num, 2) + 2);
}


/**
 * Calcula el logaritmo de un Numero
 */
calculateLogarithm = (number) => {
  if (number <= 0) {
    return "La funcion tiene dominio restringido"
  } else if (number == undefined) {
    return "Ingrese un parametro"
  } else {
    return Math.log(number)
  }
}


/**
 * 
 * @param {*} num Valor a evaluar en la función implementada
 */
function2 = (num) =>{
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

module.exports = { main };

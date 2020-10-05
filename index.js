function main(option, num) {
  if (option === 1) {
    return rationalFunction(num);
  } else if (option === 2) {
    return function2();
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

function2 = (n) =>{
  return n <= 1 ? "error" : (n + 4)/Math.sqrt(n-1)
}
function function2() { }

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

module.exports = { main };

function main(option, num) {
  if (option === 1) {
    return function1(num);
  } else if (option === 2) {
    return function2();
  } else if (option === 3) {
    return calculateLogarithm(num);
  } else {
    return "Opción inválida";
  }
}

function function1() { }

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

main();

module.exports = { main };

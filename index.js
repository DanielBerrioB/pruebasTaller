function main(option, num) {
  if (option === 1) {
    return function1(num);
  } else if (option === 2) {
    return function2();
  } else if (option === 3) {
    return function3(num);
  } else {
    return "Opción inválida";
  }
}

function function1() { }

function function2() { }

/**
 * Calcula el logaritmo de un Numero
 */
function3 = (number) => {
  return number <= 0 ? "La funcion tiene dominio restringido"
    :
    number == undefined ? "Ingrese un parametro"
      :
      Math.log(number);
}
main();

module.exports = { main };

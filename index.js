function main() {
  function1();
  function2();
  function3(0);
}

function function1() { }

function function2() { }

/**
 * Calcula el logaritmo de un Numero
 */
function3 = (number) => {
  return number <= 0 ? "La funcion tiene dominio es restringido"
    :
    number == undefined ? "Ingrese un parametro valido"
      :
      Math.log(number);
}
main();

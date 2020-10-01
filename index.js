function main(option, num) {
  if (option === 1) {
    return function1(num);
  } else if (option === 2) {
    return function2();
  } else if (option === 3) {
    return function3();
  } else {
    return "Opción inválida";
  }
}

function function1(num) {
  return 1 / (num - (num ^ 2) + 2);
}

function function2() {}

function function3() {}

module.exports = { main };

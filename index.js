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

function2 = (n) =>{
  return n <= 1 ? "error" : (n + 4)/Math.sqrt(n-1)
}

function function3() {}

module.exports = { main };

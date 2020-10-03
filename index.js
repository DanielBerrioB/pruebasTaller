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
  return 1 / (num - (num ^ 2) + 2);
}

function function2(num) {
  if (num===1) {
    return "ZeroDivision"
  }
  if (num<1) {
    return "RootError"
  }
  return (num + 4)/Math.sqrt(num-1)
}

function function3() {}
main()
module.exports = { main };

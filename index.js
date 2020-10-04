function main(option, num) {
  if (option === 1) {
    return rationalFunction(num);
  //More options can be added
  } else {
    return "Opción inválida";
  }
}

function rationalFunction(num) {
  return 1 / (num - Math.pow(num, 2) + 2);
}

module.exports = { main };

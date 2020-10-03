const functions = require("./index");

describe("Tests", () => {
  it("Function 3, ideal way", () => {
    expect(functions.main(3, 10)).toBe(2.302585092994046);
  });

  it("Function 3, not domain", () => {
    expect(functions.main(3, -1)).toBe("La funcion tiene dominio restringido");
  });

  it("Function 3, without params", () => {
    expect(functions.main(3, )).toBe("Ingrese un parametro");
  });
});

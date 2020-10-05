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

  it("rationalFunction, test ideal", () => {
    expect(functions.main(1, 1)).toBe(0.5);
  });

  it("rationalFunction, Infinity test when the functions is out of the domain", () => {
    expect(functions.main(1, 2)).toBe(Infinity);
  });

  it("rationalFunction, when the X point is 0 or less that it", () => {
    expect(functions.main(1, -2)).toBe(-0.25);
    expect(functions.main(1, 0)).toBe(0.5);
  });
  
  it("rationalFunction, tests if the options does not match", () => {
    expect(functions.main(4, 2)).toBe("Opción inválida"); 
  });
  it("Function 2, test ideal", () => {
    expect(functions.main(2, 2)).toBe(6);
  });
  it("Function 2, Zero division", () => {
    expect(functions.main(2, 1)).toBe("ZeroDivision");
  });
  it("Function 2, Square root negative number", () => {
    expect(functions.main(2, -1)).toBe("RootError");
  });
});


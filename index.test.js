const functions = require("./index");

describe("Tests", () => {
  it("Function 1, test ideal", () => {
    expect(functions.main(1, 1)).toBe(0.5);
  });
  it("Function 1, Infinity test when the functions is out of the domain", () => {
    expect(functions.main(1, 2)).toBe(Infinity);
  });
  it("Function 1, Infinity test when the functions is out of the domain", () => {
    expect(functions.main(4, 2)).toBe("Opción inválida");
  });
});

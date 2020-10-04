const functions = require("./index");

describe("Tests", () => {
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
});

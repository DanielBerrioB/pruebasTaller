const functions = require("./index");

describe("Tests", () => {
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

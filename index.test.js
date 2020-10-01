const functions = require("./index");

describe("Tests", () => {
  it("Function 1, test ideal", () => {
    expect(1, functions.main(1, 2));
  });
});

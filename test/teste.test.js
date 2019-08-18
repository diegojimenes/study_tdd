const soma = require("../src/soma");
const mult = require("../src/mult");

test("soma", () => {
  expect(soma(1, 1)).toBe(2);
});

test("mult", () => {
  expect(mult(1, 1)).toBe(1);
});

const soma = require("../src/soma");
const mult = require("../src/mult");
const buscaSimples = require("../src/buscarSimples");
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

test("soma", () => {
  expect(soma(1, 1)).toBe(2);
});

test("mult", () => {
  expect(mult(1, 1)).toBe(1);
});

test("busca simples", () => {
  expect(buscaSimples(list, 9)).toBe(9);
});

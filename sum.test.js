 const sum = require("./sum.js");

describe("test for sum fnx",()=>{


test("add 2 + 2 to equal 4", () => {
  expect(sum(2, 2)).toBe(4);
});

test("add -5 + -5 to equal 10", () => {
  expect(sum(-5, -5)).toBe(-10);
});


})

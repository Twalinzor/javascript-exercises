const add = function (...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
};

const subtract = function (...args) {
  return args.reduce((acc, curr) => acc - curr);
};

const sum = function (nums) {
  return nums.reduce((sum, num) => sum + num, 0);
};

const multiply = function (nums) {
  return nums.reduce((acc, curr) => acc * curr);
};

const power = function (numbers, power) {
  return Math.pow(numbers, power);
};

const factorial = function (n) {
  if (n < 0) throw new Error("Factorial is not defined for negative numbers");
  return n === 0 || n === 1 ? 1 : n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

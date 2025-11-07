const add = function (numOne, numTwo) {
  return numOne + numTwo;
};

const subtract = function (numOne, numTwo) {
  return numOne - numTwo;
};

const sum = function (numArr) {
  if (numArr.length === 0) {
    return 0;
  }

  return numArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
};

const multiply = function (numArr) {
  return numArr.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );
};

const power = function (numOne, numTwo) {
  return numOne ** numTwo;
};

const factorial = function () {};

console.log(add(1, 5));
console.log(subtract(19, 5));
console.log(sum([]));
console.log(sum([1, 2, 3, 10]));
console.log(multiply([2, 5, 10]));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

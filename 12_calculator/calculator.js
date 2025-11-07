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

const factorial = function (num) {
  /**
   * Get the number
   * Create a numbers array variable
   * If number = 0, push 1 to numbers
   * For iteration equal number, decrement it up to zero
   * For each iteration, push it to numbers
   * Finally, reduce numbers by multiplying accumulated number with current number
   */

  const nums = [];

  if (num === 0) {
    nums.push(1);
  }

  for (let i = num; i > 0; i--) {
    nums.push(i);
  }

  return nums.reduce((accNum, curNum) => accNum * curNum);
};

console.log(add(1, 5));
console.log(subtract(19, 5));
console.log(sum([]));
console.log(sum([1, 2, 3, 10]));
console.log(multiply([2, 5, 10]));
console.log(factorial(0));
console.log(factorial(5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

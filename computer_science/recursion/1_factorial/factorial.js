const factorial = function (number) {
  if (number === 0 || number === 1) return number;

  if (!Number.isInteger(number)) return undefined;

  return number * factorial(number - 1);
};

// Do not edit below this line
module.exports = factorial;

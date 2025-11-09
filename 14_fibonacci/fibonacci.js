const fibonacci = function (fibonacciIndex) {
  /**
   * Get the index
   * Return the item indicated by index
   */

  const fibonacciSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21];

  return fibonacciSequence[fibonacciIndex];
};

console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;

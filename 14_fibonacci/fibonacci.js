const fibonacci = function (fibonacciIndex) {
  /**
   * Get the index
   * Store an empty Fibonacci sequence array
   * Push each looped item to the array
   * Return the item indicated by index
   */

  const fibonacciSequence = [];

  for (let num = 0; num <= fibonacciIndex; num++) {
    fibonacciSequence.push(num);
  }

  return fibonacciSequence[fibonacciIndex];
};

console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;

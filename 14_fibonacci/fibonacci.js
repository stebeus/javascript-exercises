const fibonacci = function (numIndex) {
  /**
   * Get the index
   * Store an empty Fibonacci sequence array
   * Checks if number is negative
   * Return index number if it is less or equal to one
   * Push each looped item to the array
   * Return the item indicated by index
   */

  const fibonacciSequence = [];

  if (numIndex < 0) {
    return "OOPS";
  } else if (numIndex <= 1) {
    return numIndex;
  }

  for (let num = 0; num <= numIndex; num++) {
    fibonacciSequence.push(num);
  }

  return fibonacciSequence[numIndex];
};

console.log(fibonacci(12));
console.log(fibonacci("6"));
console.log(fibonacci("0"));
console.log(fibonacci("-15"));

// Do not edit below this line
module.exports = fibonacci;

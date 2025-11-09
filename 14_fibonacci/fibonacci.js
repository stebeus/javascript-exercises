const fibonacci = function (fibonacciMember) {
  /**
   * Get the number
   * Address the issues:
   *   string conversion
   *   negative rejection
   *   number smaller or equal to one
   * Store in variables:
   *   square root of 5
   *   golden ratio, which is (1 + square root of 5) / 2
   *   conjugate, which is (1 - square root of 5) / 2
   * Store result in variable:
   *   (golden ratio^n - conjugate^n) / square root of 5
   * Return result
   */

  const num = parseInt(fibonacciMember);

  const sqrtOfFive = Math.sqrt(5);
  const goldenRatio = (1 + sqrtOfFive) / 2;
  const conjugate = (1 - sqrtOfFive) / 2;

  const fibonacciNumber = Math.round(
    (goldenRatio ** num - conjugate ** num) / sqrtOfFive
  );

  if (num < 0) {
    return "OOPS";
  } else if (num <= 1) {
    return num;
  }

  return fibonacciNumber;
};

console.log(fibonacci(10));
console.log(fibonacci(6));
console.log(fibonacci(3));
console.log(fibonacci(1));
console.log(fibonacci(0));
console.log(fibonacci(-10));
console.log(fibonacci("3"));
console.log(fibonacci("1"));
console.log(fibonacci("0"));
console.log(fibonacci("-6"));

// Do not edit below this line
module.exports = fibonacci;

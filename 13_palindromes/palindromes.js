const palindromes = function (str) {
  const originalStr = str.toLowerCase().replace(/[^0-9a-z]/gi, "");
  const reverseStr = originalStr.split("").reverse().join("");
  console.log(originalStr);
  console.log(reverseStr);
};

console.log(palindromes("[!5 Race? -> CAR,  5...]"));

/**
 * Get the string
 * Lower case it
 * Filter non-alphanumeric characters
 * Evaluate order by:
 * Creating inverted order
 * Compare it with original order
 * If both are equal, return true
 * Else, return false.
 */

// Do not edit below this line
module.exports = palindromes;

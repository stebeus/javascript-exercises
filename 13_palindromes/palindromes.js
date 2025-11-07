const palindromes = function (str) {
  const originalStr = str.toLowerCase().replace(/[^0-9a-z]/gi, "");
  const reverseStr = originalStr.split("").reverse().join("");

  return originalStr === reverseStr;
};

console.log(palindromes("[!5 Race? -> CAR,  5...]"));
console.log(palindromes("Animal loots foliated detail of stool lamina"));
console.log(palindromes("Tacos"));
console.log(palindromes("N00b?"));

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

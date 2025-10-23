const sumAll = function (numOne, numTwo) {
  let numCollection = [];

  if (!Number.isInteger(numOne) || !Number.isInteger(numTwo)) {
    return 'ERROR';
  } else if (numOne < 0 || numTwo < 0) {
    return 'ERROR';
  } else if (numOne > numTwo) {
    for (let i = numOne; i >= numTwo; i--) {
      numCollection.push(i);
    }
  } else {
    for (let i = numOne; i <= numTwo; i++) {
      numCollection.push(i);
    }
  }

  return numCollection.reduce((totalSum, currentNum) => totalSum + currentNum);
};

console.log(sumAll(10, 5));

// Do not edit below this line
module.exports = sumAll;

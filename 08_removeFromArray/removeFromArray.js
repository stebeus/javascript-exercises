const removeFromArray = function (arr, ...indexes) {
  const indexOf = arr.indexOf(indexes);

  if (indexOf > -1) {
    arr.splice(indexOf, 1);
  }

  return arr.filter((x) => !indexes.includes(x));
};

console.log(removeFromArray([1, 2, 3, 4, 5]));

// Do not edit below this line
module.exports = removeFromArray;

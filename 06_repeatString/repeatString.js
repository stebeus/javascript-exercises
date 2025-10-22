const repeatString = function (str, num) {
  let strCollection = [];

  if (num < 0) {
    return 'ERROR';
  } else {
    for (i = 0; i < num; i++) {
      strCollection.push(str);
    }

    return strCollection.join('');
  }
};

console.log(repeatString('foo', 3));

// Do not edit below this line
module.exports = repeatString;

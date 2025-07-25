const sumAll = function (numOne, numTwo) {
  let length = numTwo - numOne;
  let large;
  let small;
  let sum = 0;
  if (
    !Number.isInteger(numOne) ||
    !Number.isInteger(numTwo) ||
    numOne < 0 ||
    numTwo < 0
  ) {
    return "ERROR";
  } else if (numOne > numTwo) {
    large = numOne;
    small = numTwo;
  } else {
    small = numOne;
    large = numTwo;
  }
  length = large - small;
  if (length == 0) {
    return "ERROR";
  }
  for (let i = small; small <= large; small++) {
    sum += small;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;

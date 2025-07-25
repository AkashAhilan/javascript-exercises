const reverseString = function (string) {
  let result = "";
  for (let i in string) {
    result = string.charAt(i) + result;
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;

const sumAll = function (num, num2) {
  let result = 0;
  if (num2 > num) {
    for (let i = num; i <= num2; i++) {
      result += i;
    }
  } else {
    for (let i = num2; i <= num; i++) {
      result += i;
    }
  }
  if (
    num < 0 ||
    num2 < 0 ||
    !Number.isInteger(num) ||
    !Number.isInteger(num2) ||
    isNaN(num, num2)
  ) {
    return "ERROR";
  } else return result;
};

// Do not edit below this line
module.exports = sumAll;

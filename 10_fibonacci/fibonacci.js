const fibonacci = (num) => {
  const parsedNum = parseInt(num, 10);
  if (isNaN(parsedNum) || parsedNum < 0) return "OOPS";
  const fib = [1, 1];
  for (let i = 2; i < num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  if (num > 0) {
    return fib[num - 1];
  } else return 0;
};

// Do not edit below this line
module.exports = fibonacci;

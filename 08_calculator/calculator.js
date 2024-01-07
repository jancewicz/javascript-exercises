const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let all = 0;
  array.forEach(element => {
    all += element;
  });
  return all;
};

const multiply = function (array) {
  let sum = 1;
  array.forEach(number => {
    sum *= number;
  })
  return sum;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (number) {
  if (number == 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

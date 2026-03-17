function sum(a, b) {
  return a + b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

function isEven(number) {
  return number % 2 === 0;
}

function average(numbers) {
  if (!numbers.length) {
    throw new Error('Array is empty');
  }

  const total = numbers.reduce((acc, n) => acc + n, 0);
  return total / numbers.length;
}

module.exports = { sum, divide, isEven, average };
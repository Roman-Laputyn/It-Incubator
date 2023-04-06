// Even or Odd
function evenOrOdd(number) {
  if (number % 2 == 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

// Sum Numbers
function sum(numbers) {
  'use strict';
  if (numbers.length == 0) {
    return 0;
  } else {
    let sum = numbers.reduce((acc, initial) => acc + initial, 0);
    return sum;
  }
}

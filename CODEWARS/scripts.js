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

// Return Negative
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
  if (num < 0) {
    return num;
  } else {
    num = -num;
    return num;
  }
}

// Convert a Number to a String!
function numberToString(num) {
  if (typeof num === 'number') {
    return num.toString();
  } else {
    console.log('Insert number !');
  }
}

//Convert number to reversed array of digits
function digitize(n) {
  let reverseStringArray = n.toString().split('').reverse();
  let toDigits = reverseStringArray.map(Number);
  return toDigits;
}

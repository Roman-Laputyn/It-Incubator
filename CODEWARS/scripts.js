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

//Grade book
//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
function getGrade(s1, s2, s3) {
  let averageScope = Array(s1, s2, s3).reduce((acc, v) => acc + v) / Array(s1, s2, s3).length;
  if (averageScope >= 90 && averageScope <= 100) {
    return 'A';
  } else if (averageScope >= 80 && averageScope < 90) {
    return 'B';
  } else if (averageScope >= 70 && averageScope < 80) {
    return 'C';
  } else if (averageScope >= 60 && averageScope < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

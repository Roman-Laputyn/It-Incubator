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

//Abbreviate a Two Word Name
//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
function abbrevName(name) {
  let splitedName = name.split(' ');
  let firstInitial = splitedName[0][0].toUpperCase();
  let secondInitial = splitedName[1][0].toUpperCase();
  return firstInitial + '.' + secondInitial;
}

//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
var countSheep = function (num) {
  if (num < 0) {
    return 'Input non-negative number !';
  } else if (num === 0) {
    return '';
  } else {
    let arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(`${i} sheep...`);
    }
    return arr.join('');
  }
};

//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
function countPositivesSumNegatives(input) {
  let arrNegative = [];
  let arrPositive = [];

  if (input === null) {
    return [];
  } else if (input.length === 0 || !Array.isArray(input)) {
    return [];
  } else {
    input.forEach((item) => {
      if (item < 0) {
        arrNegative.push(item);
      } else if (item > 0) {
        arrPositive.push(item);
      }
    });
    let sumNegative = arrNegative.reduce((acc, a) => acc + a, 0);
    let countPositive = arrPositive.length;
    return Array(countPositive, sumNegative);
  }
}

//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
function repeatStr(n, s) {
  return s.repeat(n);
}

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
function sumMix(x) {
  let intNumber = x.map((item) => +item);
  return intNumber.reduce((acc, a) => acc + a);
}

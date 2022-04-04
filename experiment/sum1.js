/**
 * Credit to https://adventofcode.com/ for this exercise
In the list below you have an array of numbers. The goal is to find the two numbers that add up to 2020.
Once you have found those numbers, multiply the numbers and store the result of that in the result variable.
 */

const list = [1721, 979, 366, 299, 675, 1456];
let result;

const sumNum = list.reduce((key, numlist) => {
  return (key += numlist);
}, 0);

console.log(sumNum);

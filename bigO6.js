'use strict';

const printAllNumbersThenAllPairSums = (arr) => {
console.log('list of numbers: ');
  arr.forEach((num) => console.log(num));

  console.log('list of sums: ');
  arr.forEach((fnum) => {
    arr.forEach((snum) => {
      console.log(fnum + snum)
    });
  });
}
const numbers = [1,2,3,4,5];

printAllNumbersThenAllPairSums(numbers)


'use strict';

const array = [1,2,3,4];
// R = true

const containDuplicates = (arr) => {
  const rarr = arr.sort((a, b) => a - b);
  console.log(rarr);
  return rarr.reduce((acc, val) => {
    if (acc = val) return true;
  }, 0);
  return false;
}

console.log(containDuplicates(array))

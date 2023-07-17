'use strict';

// leetcode two sum problem.
// given an array of ints,  return de idexes of the two numbers that add to a target number t.
const nums = [2, 7, 11, 15];
const t = 9
// R = [0,1]

const returnSumIndexes = (array, target) => {
  const res = [];
  const set = new Set();
 array.some((el, index) => {
    if(set.has(el)) {
      res.push(index);
    }
    set.add(t - el)
  });
  console.log(set)
  return res;
}

console.log(returnSumIndexes(nums, t))

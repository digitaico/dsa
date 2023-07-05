'use strict';

// ZeroToMastery
// https://academy.zerotomastery.io/courses/700474/lectures/12571601
const arr1 = [0,3,4,31];
const arr2 = [4,6,30];

const mergeSortArrays = (arr0, arr1) => {
  if (arr0.length < 1 ) return arr1; 
  if (arr1.length < 1) return arr0; 

  return [...arr0, ...arr2].sort((a,b) => a - b);
}

console.log(mergeSortArrays(arr1, arr2));

// https://academy.zerotomastery.io/courses/700474/lectures/12621016
// Given an array,  return first repeating memeber.
'use strict';

const array1 = [2,5,1,2,3,5,1,2,4];
// R: 2

const findFirstDuplicate = async (arr) => {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      return arr[i];
    } else {
      map[arr[i]] = i
    }
  }
  return undefined
}


(async() => {
  const r = await findFirstDuplicate(array1);
  console.log(r)
})();

'use strict';
// log all pairs of array , combinatory.
const boxes = ['a', 'b','c', 'd', 'e'];

const combine = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log([arr[i], arr[j]]);
    } 
  }
}

combine(boxes);

// BOG O (n * n) = O (n^2) , nested loops,  are product, not sum.

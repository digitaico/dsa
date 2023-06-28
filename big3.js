'use strict';

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  const middleIndex = Math.floor(items.length / 2);
  let index = 0;

  while (index < middleIndex ) {
    console.log(items[index]);
    index++;
  }

  for(let i = 0; i < 100; i++) {
    console.log(' hi');
  }
}

const arr = [1,2,3,4,5,6]
console.log(printFirstItemThenFirstHalfThenSayHi100Times(arr));

'use strict';

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]); // O(1)

  const middleIndex = Math.floor(items.length / 2); // O(1)
  let index = 0; // O(1)

  while (index < middleIndex ) {
    console.log(items[index]); // O(n/2)
    index++; // O(n/2)
  }

  for(let i = 0; i < 100; i++) {
    console.log(' hi'); // O(100)
  }
}

const arr = [1,2,3,4,5,6]
console.log(printFirstItemThenFirstHalfThenSayHi100Times(arr));

// R : BIG O(n);  dropped constants like n/2, 1, 100, because they don't add specially if n = 10000000!

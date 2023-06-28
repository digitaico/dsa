'use strict';

function funChallenge(input) {
  let a = 10; //O(1)
  a = 50 + 3; //O(1)

  for (let i = 0; i < input.length; i++ ) { // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}
const arr = [1,2,3,4,5,6];

console.log(funChallenge(arr));
// R: O(n) : linear time.  1 operation for each input, n operations for n inputs.

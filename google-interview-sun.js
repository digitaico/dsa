// problem spotted on google interview with eduardo dueñaz- How to Work at Google- Example Coding engineering Interview.
// given a list of numbers (ints) and a integer value n,  find all couple of numbers from the list whose sum equals n.

//const l = [1,2,3,9];
const l = [1,2,4,4];
const n =  8;
// find pairs whose sum equals n.

const sumCouples0 = (arr, x) => {
  const comp = []; 
  for (let el of arr) {
    if(comp.find((el) => el == el)) {
      return true;
    }
    comp.push( x - el);
  }
  return false;
}

//console.log(sumCouples0(l, n));

// solucion

const sumCouples1 = (arr, x) => {
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if(set.has(arr[i])) {
      return true;
    }
    set.add(x - arr[i]);
  }
  return false;
}
//console.log(sumCouples1(l, n));

const sumCouples = (arr, x) => {
  const set = new Set();
  return arr.some((el) => {
    if(set.has(el)) {
      return true
    }
    set.add(x - el)
  });
}
console.log(sumCouples(l, n));

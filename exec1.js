'use strict';

// ejercicio interview questions,  despues de google.
// given 2 arrays,  write a function that lets a user know boolean whether those array contain common items.
// a1 = ['a', 'b', 'c', 'd'];
// a2 = ['z', 'y', 'i'];
// R: false,  no common items

const a1 = [4, 7, 16, 8, 34];
const a2 = [6, 9, 21, 1, 19];

// 1. Brute Force
// cruzar arrays con for loops anidados,  si son iguales,  return true.  BIG O (n^2)

// convertir un array en objetos y comparar cda miembro del otro array contra porpiedades (keys) del obj.
// BIG O (n) O(a + b)

const convertArrayToObject = (array) => {
  return array.reduce((obj, val) => {
    obj[val] = true;
    return obj;
  },{});
};

const areCommonElements = (array1, array2) => {
  const obj = convertArrayToObject(array1);
  return array2.some(el => obj[el]);
};
console.log(areCommonElements(a1, a2))

// otra forma
const areCommonElements2 = (array1, array2) => {
  return array1.some(item => array2.includes(item));
}
console.log(areCommonElements2(a1, a2))

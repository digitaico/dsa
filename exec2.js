// reverse string,  lesson arrays.

const string = 'Hi My name is Andrei';

 // if (!str || str.length < 2 || typeof str !== 'string') return 'Not a string';

const reverseString = (str) => [...str].reverse().join('');

console.log(reverseString(string));
// BIG O (n)


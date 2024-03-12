// Variable Manipulation:
// Write a JavaScript program that swaps the values of two variables.
let a = 5;
let b = 10;

console.log(`befor swaping `)
console.log(`a =`, a);
console.log(`b =`, b);

a = a + b;
b = a - b;
a = a - b;

console.log('After swapping:');
console.log('a =', a);
console.log('b =', b);

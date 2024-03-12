// String Reversal:
// Write a function that reverses a given string.

function reverseString(str) {
  // Your code here

  return str.split('').reverse().join('');

}

console.log(reverseString('hello')); // Should output "olleh"

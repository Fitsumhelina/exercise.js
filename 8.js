// Palindrome Checker:
// Write a function that checks if a given string is a palindrome.

function isPalindrome(str) {
  // Your code here

  return str===str.split('').reverse().join('');
}

console.log(isPalindrome('racecar')); // Should output true
console.log(isPalindrome('hello')); // Should output false

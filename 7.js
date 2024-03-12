// Factorial Calculation:
// Write a function that calculates the factorial of a given number.

function factorial(n) {
  // Your code here
  // if (n === 0) {
  //   return 1;
  // } else {
  //   return n * factorial(n - 1);
  // }

  let sum=0;
  for (let i=0; i<n; i++) {
    sum += i;
    return sum
  }
}

console.log(factorial(5)); // Should output 120 (5!)

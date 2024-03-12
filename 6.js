// Fibonacci Sequence:
// Write a function that generates the Fibonacci sequence up to a given number of terms.

function fibonacci(n) {
  // Your code here

  let arr=[0,1];

  for(let i=2; i<n ; i++)

  arr[i]=arr[i-1]+arr[i-2];

  return  arr;

}

console.log(fibonacci(10)); // Should output [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

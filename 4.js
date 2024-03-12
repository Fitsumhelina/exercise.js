// Array Summation:
// Write a function that calculates the sum of all elements in an array.

function sumArray(arr) {
  // Your code here
  let sum=0;

  for (let i=0; i < arr.length ; i++)
  sum+=arr[i];
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // Should output 15

// Array Filtering:
// Write a function that filters out even numbers from an array.

function filterEvenNumbers(arr) {
  // Your code here

// return  arr %2 !== 0;
return arr.filter(num => num % 2 === 0);
  
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5])); // Should output [2, 4]

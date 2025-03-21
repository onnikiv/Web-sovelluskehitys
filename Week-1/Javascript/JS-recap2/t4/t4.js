'use strict';

function sortArray(array) {
  return array.sort((a, b) => a - b);
}

const unsortedArray = [1, 54, 3, 2, 76, 57, 10, 200, 23];

console.log('Unsorted Array: ' + unsortedArray);
console.log('Sorted Array: ' + sortArray(unsortedArray));

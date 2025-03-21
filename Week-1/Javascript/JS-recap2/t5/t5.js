'use strict';

function sortArray(array, order) {
  switch (order) {
    case 'asc':
      return array.sort((a, b) => a - b);

    case 'desc':
      return array.sort((a, b) => b - a);
  }
}

const unsortedArray = [1, 54, 3, 2, 76, 57, 10, 200, 23];

console.log(sortArray(unsortedArray, 'asc'));
console.log(sortArray(unsortedArray, 'desc'));

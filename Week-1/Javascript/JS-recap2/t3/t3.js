'use strict';

const numbers = [];
const a = document.createElement('a');

while (true) {
  const input = prompt("Enter a number (or 'done' to finish):");
  const number = parseInt(input);

  if (Number.isInteger(number)) {
    numbers.push(number);
    console.log("Enter a number (or 'done' to finish): " + number);
  } else if (input === 'done') {
    console.log("Enter a number (or 'done' to finish): " + input);
    break;
  }
}

const evenNumbers = [];

for (const num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}

a.textContent = 'Even numbers: ' + (evenNumbers.length > 0 ? evenNumbers : 'none');
console.log('Even numbers: ' + (evenNumbers.length > 0 ? evenNumbers : 'none'));

document.body.appendChild(a);

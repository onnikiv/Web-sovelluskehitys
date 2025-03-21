'use strict';

const numbers = [];
let index = 1;

while (numbers.length < 5) {
  const numToAdd = Number(prompt(index + '. Enter a Number:'));
  if (Number.isInteger(numToAdd)) {
    numbers.push(numToAdd);
    console.log('Enter Number ' + index + ': ' + numToAdd);
    index++;
  }
}
console.log('Numbers: ' + numbers);

const a = document.createElement('a');
a.textContent = 'Numbers: ' + numbers;

const search = Number(prompt('Enter a Number to Search: '));

if (numbers.includes(search)) {
  console.log('Number ' + search + ' is found in the array.');
  a.innerHTML += '<br>Number ' + search + ' is found in the array.';
} else {
  console.log('Number ' + search + ' was not found in the array.');
  a.innerHTML += '<br>Number ' + search + ' was not found in the array.';
}

numbers.pop(numbers.length - 1);

console.log('Updated Numbers: ' + numbers);
a.innerHTML += '<br>Updated Numbers: ' + numbers;

numbers.sort((a, b) => a - b);

console.log('Sorted Numbes: ' + numbers);
a.innerHTML += '<br>Sorted Numbes: ' + numbers;

document.body.appendChild(a);

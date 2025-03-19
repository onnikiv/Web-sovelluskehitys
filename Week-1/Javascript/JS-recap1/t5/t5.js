'use strict';

function getNumber() {
  const number = Number(prompt('Enter a positive integer:'));
  // jos NaN tai <= 0 tai ei integer palataan
  if (isNaN(number) || number <= 0 || !Number.isInteger(number)) {
    return getNumber();
  }
  return number;
}

function count() {
  const number = getNumber();
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    console.log(sum + ' + ' + i);
    sum += i;
  }
  const a = document.createElement('a');
  a.textContent = 'Sum: ' + sum;
  document.body.appendChild(a);
  console.log(sum);
}

count();

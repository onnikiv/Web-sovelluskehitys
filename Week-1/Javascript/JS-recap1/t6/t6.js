'use strict';

function getNumber() {
  const number = Number(prompt('Enter a positive integer:'));
  // jos NaN tai <= 0 tai ei integer palataan
  if (isNaN(number) || number <= 0 || !Number.isInteger(number)) {
    return getNumber();
  }
  return number;
}

function nestings() {
  const number = getNumber();

  // Luodaan taulu
  const table = document.createElement('table');
  document.body.appendChild(table);

  for (let i = 1; i <= number; i++) {
    // luodaan rivi
    const tr = document.createElement('tr');
    for (let k = 1; k <= number; k++) {
      // lisätään riviin niin monta td elementtiä
      const td = document.createElement('td');
      td.innerHTML = ' ' + i * k; // 1*1, 1*2, jne
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

nestings();

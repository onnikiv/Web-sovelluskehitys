'use strict';

function triangleType() {
  // jos input onki roskaa -> 0 sivua ( ͡° ͜ʖ ͡°)
  const side1 = Number(prompt('1. Enter the length of one side of the Triangle:'));
  const side2 = Number(prompt('2. Enter the length of second side of the Triangle:'));
  const side3 = Number(prompt('3. Enter the length of third side of the Triangle:'));

  if (side1 === side2 && side2 === side3) {
    return 3;
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return 2;
  } else {
    return 0;
  }
}

function show() {
  const p = document.createElement('p');
  const result = triangleType();

  switch (result) {
    case 3: // 3 sides
      console.log('EQUILATERAL (All sides are equal)');
      p.textContent = 'EQUILATERAL (All sides are equal)';
      break;
    case 2: // 2 sides
      console.log('ISOSCELES (Two sides are Equal)');
      p.textContent = 'ISOSCELES (Two sides are Equal)';
      break;
    case 0: // 0 sides
      console.log('SCALENE (No sides are equal)');
      p.textContent = 'SCALENE (No sides are equal)';
      break;
  }
  document.body.appendChild(p);
}
show();

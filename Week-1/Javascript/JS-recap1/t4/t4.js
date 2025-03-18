'use strict';

function score() {
  const scoreInput = Number(prompt('Enter your score: '));
  const p = document.createElement('p');

  switch (true) {
    case scoreInput >= 0 && scoreInput < 40:
      console.log('Grade 0');
      p.textContent = 'Grade 0';
      break;

    case scoreInput >= 40 && scoreInput < 52:
      console.log('Grade 1');
      p.textContent = 'Grade 1';
      break;

    case scoreInput >= 52 && scoreInput < 64:
      console.log('Grade 2');
      p.textContent = 'Grade 2';
      break;

    case scoreInput >= 64 && scoreInput < 76:
      console.log('Grade 3');
      p.textContent = 'Grade 3';
      break;

    case scoreInput >= 76 && scoreInput < 88:
      console.log('Grade 4');
      p.textContent = 'Grade 4';
      break;

    case scoreInput >= 88 && scoreInput <= 100:
      console.log('Grade 5');
      p.textContent = 'Grade 5';
      break;

    default:
      console.log('ERROR');
      p.textContent = 'ERROR';
      break;
  }
  document.body.appendChild(p);
}
score();

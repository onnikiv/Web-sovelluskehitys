'use strict';

const firstCoordInput = prompt('1. Enter the first coordinate (format: x,y):');
const secondCoordInput = prompt('2. Enter the second coordinate (format: x,y):');

const xy1 = firstCoordInput.split(',');
const xy2 = secondCoordInput.split(',');

function calcDistance(xy1, xy2) {
  const x1 = parseFloat(xy1[0]);
  const y1 = parseFloat(xy1[1]);
  const x2 = parseFloat(xy2[0]);
  const y2 = parseFloat(xy2[1]);

  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

const distance = calcDistance(xy1, xy2);
console.log(distance);

const p = document.createElement('p');
p.textContent = `1. Coordinate: (${xy1})
                 2. Coordinate: (${xy2})
                 Distance between these two points: ${distance}`;

document.body.appendChild(p);

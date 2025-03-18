'use strict';

const celsius = Number(prompt('Enter temperature in Celsius:'));
const fahrenheit = celsius * (9 / 5) + 32;
const kelvin = celsius + 273.15;
const p = document.createElement('a');

p.textContent =
  celsius + ' C equals to ' + fahrenheit + ' F, ' + kelvin + ' K.';
document.body.appendChild(p);

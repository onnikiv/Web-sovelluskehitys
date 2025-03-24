/*

Browser name and version. (e.g. Google Chrome, 114)
(Operating system name.)

Screen width and height.

Available screen space for the browser.

Current date and time. Use Finnish localization
1. helmikuuta 2056 as date format
Hours and minutes for time

Place each item within its own <p> element, for example.
*/

const div = document.getElementById('target');

const date = new Date();
const time = date;

const dateOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};

const timeOptions = {
  hour: 'numeric',
  minute: 'numeric',
};

date.toLocaleDateString('fi', dateOptions);
time.toLocaleTimeString('fi', timeOptions);

const timeParagraph = document.createElement('p');
const dateParagraph = document.createElement('p');

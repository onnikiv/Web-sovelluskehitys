/* eslint-disable no-undef */
const map = L.map('map').setView([60.2144768, 25.0281984], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const fillWeekTable = () => {
  const userDate = new Date();
  console.log(userDate);
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayNum = userDate.getDate();
  const dayString = weekdays[userDate.getDay()];
  const month = userDate.getMonth() + 1;
  console.log(dayString, month, dayNum);

  const weekdayTableRows = document.querySelectorAll('.weekday');

  weekdayTableRows.forEach((row) => {
    row.querySelectorAll('a').forEach((link) => {
      if (link.id && link.textContent === dayString) {
        link.classList.add('current-day');
        link.innerHTML = `Today`;
      }
      //link.innerHTML += ` ${dayNum}.0${month} `;
    });
  });

  weekdayTableRows.forEach((row) => {
    row.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        console.log(link.textContent);
      });
    });
  });
};

const login = () => {
  const loginButton = document.querySelector('#login');
  const loginWindow = document.querySelector('#login-modal');
  let open = false;
  loginWindow.innerHTML = `
    <form id="login-form">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>
      <button type="submit">Login</button>
    </form>
  `;

  loginButton.addEventListener('click', () => {
    open
      ? ((loginWindow.style.display = 'none'), (open = false))
      : ((loginWindow.style.display = 'block'), (open = true));
  });
};

login();
fillWeekTable();

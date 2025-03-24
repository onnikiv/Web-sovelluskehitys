const targetElement = document.getElementById('target');

function browser() {
  const browser = document.createElement('p');
  browser.textContent =
    'Browser: ' +
    navigator.userAgentData.brands[2].brand +
    ', Version: ' +
    navigator.userAgentData.brands[2].version;
  targetElement.appendChild(browser);
}

function operationSystem() {
  const os = document.createElement('p');
  os.textContent = 'Operating system: ' + navigator.userAgentData.platform;
  targetElement.appendChild(os);
}

function screenSize() {
  const screen = document.createElement('p');
  screen.textContent =
    'Current Screen width: ' + window.screen.width + ', Height: ' + window.screen.height;
  targetElement.appendChild(screen);

  const screenAvail = document.createElement('p');
  screenAvail.textContent =
    'Available Screen width: ' +
    window.screen.availWidth +
    ', Height: ' +
    window.screen.availHeight;
  targetElement.appendChild(screenAvail);
}

function dateTime() {
  const timeParagraph = document.createElement('p');
  const dateParagraph = document.createElement('p');
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

  dateParagraph.textContent = date.toLocaleDateString('fi', dateOptions);
  timeParagraph.textContent = 'Klo: ' + time.toLocaleTimeString('fi', timeOptions);

  targetElement.appendChild(dateParagraph);
  targetElement.appendChild(timeParagraph);
}

browser();
operationSystem();
screenSize();
dateTime();

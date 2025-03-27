import {fetchData} from '../lib/fetchData.js';

const url = 'https://media2.edu.metropolia.fi/restaurant/api/v1';
const table = document.querySelector('table');
const modal = document.querySelector('dialog');
let restaurants = [];

const restaurantRow = ({name, address, city}, tr) => {
  const restaurantName = document.createElement('td');
  const restaurantAddress = document.createElement('td');
  const restaurantCity = document.createElement('td');

  restaurantName.innerText = name;
  restaurantAddress.innerText = address;
  restaurantCity.innerText = city;

  tr.append(restaurantName, restaurantAddress, restaurantCity);
};

const createModalHtml = (
  {name, address, phone, city, postalCode, company},
  modal
) => {
  const nameElement = document.createElement('h3');
  const addressElement = document.createElement('p');
  nameElement.innerText = name;
  addressElement.innerText = `${address}, puhelin: ${phone}`;

  const restaurantInfo = `
              <article class="restaurantInfo">
                  <h3>${name}</h3>
                  <p><strong>Address:</strong> ${address}</p>
                  <p><strong>Postal Code:</strong> ${postalCode}</p>
                  <p><strong>City:</strong> ${city}</p>
                  <p><strong>Phone:</strong> ${phone}</p>
                  <p><strong>Company:</strong> ${company}</p>
                  <h4>${'-'.repeat(40)} Menu ${'-'.repeat(40)}</h4>
              </article>
              `;
  modal.innerHTML = restaurantInfo;
};

const createMenuHtml = (courses) => {
  let html = '';
  for (const course of courses) {
    html += `
    <article class="course">
        <p><strong>${course.name}</strong>,
        Hinta: ${course.price},
        Allergeenit: ${course.diets}</p>
    </article>
  `;
  }
  return html === ''
    ? '<p><strong>Menu for this restaurant is unavailable.</strong>'
    : html;
};

const getRestaurants = async () => {
  try {
    restaurants = await fetchData(url + '/restaurants');
  } catch (error) {
    console.error(error);
  }
};

const getRestaurantMenu = async (id, lang) => {
  try {
    return await fetchData(`${url}/restaurants/daily/${id}/${lang}`);
  } catch (error) {
    console.error(error);
  }
};

const sortRestaurants = () => {
  restaurants.sort(function (a, b) {
    return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
  });
};

const fillTable = () => {
  for (const restaurant of restaurants) {
    const tr = document.createElement('tr');
    tr.addEventListener('click', async function () {
      try {
        for (const elem of document.querySelectorAll('.highlight')) {
          elem.classList.remove('highlight');
        }

        tr.classList.add('highlight');

        const coursesResponse = await getRestaurantMenu(restaurant._id, 'fi');

        const menuHtml = createMenuHtml(coursesResponse.courses);

        modal.innerHTML = '';

        modal.showModal();

        createModalHtml(restaurant, modal);

        modal.insertAdjacentHTML('beforeend', menuHtml);
      } catch (error) {
        console.error(error);
      }
    });

    restaurantRow(restaurant, tr);
    table.append(tr);
  }
};

const main = async () => {
  try {
    await getRestaurants();
    sortRestaurants();
    fillTable();
  } catch (error) {
    console.error(error);
  }
};

main();

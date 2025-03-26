import {fetchData} from '../../lib/fetchData.js';

const url = 'https://media2.edu.metropolia.fi/restaurant/api/v1';
const table = document.querySelector('table');
const modal = document.querySelector('dialog');
let restaurants = [];

function createRestaurantCells(restaurant, tr) {
  const restaurantName = document.createElement('td');
  restaurantName.innerText = restaurant.name;

  const restaurantAddress = document.createElement('td');
  restaurantAddress.innerText = restaurant.address;

  const restaurantCity = document.createElement('td');
  restaurantCity.innerText = restaurant.city;

  tr.append(restaurantName, restaurantAddress, restaurantCity);
}

function createModalHtml(restaurant, modal) {
  const nameH3 = document.createElement('h3');
  nameH3.innerText = restaurant.name;
  const addressP = document.createElement('p');
  addressP.innerText = `${restaurant.address}, puhelin: ${restaurant.phone}`;

  const restaurantInfo = `
              <article class="restaurantInfo">
                  <h3>${restaurant.name}</h3>
                  <p><strong>Address:</strong> ${restaurant.address}</p>
                  <p><strong>Postal Code:</strong> ${restaurant.postalCode}</p>
                  <p><strong>City:</strong> ${restaurant.city}</p>
                  <p><strong>Phone:</strong> ${restaurant.phone}</p>
                  <p><strong>Company:</strong> ${restaurant.company}</p>
                  <h4>${'-'.repeat(40)} Menu ${'-'.repeat(40)}</h4>
              </article>
              `;
  modal.innerHTML = restaurantInfo;
}

function createMenuHtml(courses) {
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
}

async function getRestaurants() {
  try {
    restaurants = await fetchData(url + '/restaurants');
  } catch (error) {
    console.error(error);
  }
}

async function getRestaurantMenu(id, lang) {
  try {
    return await fetchData(`${url}/restaurants/daily/${id}/${lang}`);
  } catch (error) {
    console.error(error);
  }
}

function sortRestaurants() {
  restaurants.sort(function (a, b) {
    return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
  });
}

function fillTable() {
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

    createRestaurantCells(restaurant, tr);
    table.append(tr);
  }
}

async function main() {
  try {
    await getRestaurants();
    sortRestaurants();
    fillTable();
  } catch (error) {
    console.error(error);
  }
}

main();

import {fetchData, sortByName} from './utils.js';
import {restaurantRow, restaurantModal} from './components.js';
import {url} from './variables.js';

const table = document.querySelector('table');
const modal = document.querySelector('dialog');
let restaurants = [];

const createMenuHtml = (courses) => {
  let html = '';
  for (const {name, price, diets} of courses) {
    html += `<article class="course">
      <p><strong>${name}</strong>,
      Hinta: ${price},
      Allergeenit: ${diets}</p>
    </article>`;
  }
  return html === '' ? '<p><strong>Menu unavailable.</strong>' : html;
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

export const sortRestaurants = () => {
  restaurants.sort(sortByName);
};

const fillTable = () => {
  restaurants.forEach((restaurant) => {
    const row = restaurantRow(restaurant);
    row.addEventListener('click', async () => {
      for (const elem of document.querySelectorAll('.highlight')) {
        elem.classList.remove('highlight');
      }
      row.classList.add('highlight');

      const menu = await getRestaurantMenu(restaurant._id, 'fi');
      const menuhtml = createMenuHtml(menu.courses);
      modal.innerHTML = restaurantModal(restaurant, menuhtml);
      modal.showModal();
    });
    table.appendChild(row);
  });
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

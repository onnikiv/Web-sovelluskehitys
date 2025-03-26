import {fetchData} from '../../lib/fetchData.js';

const url = 'https://media2.edu.metropolia.fi/restaurant/api/v1';
let restaurants = [];
let dailyMeals = [];

async function getRestaurants() {
  try {
    restaurants = await fetchData(url + '/restaurants/');
  } catch (error) {
    console.log(error);
  }
}

function sortRestaurants() {
  restaurants.sort(function (a, b) {
    return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
  });
}

async function createMenuHTML(id) {
  try {
    let html = '';
    const course = await getDailyMeals(id);
    console.log(course, 'TÄÄÄÄÄÄÄ');

    html += `
    <article class="course">
        <p><strong>${course.name}</strong>,
        Hinta: ${course.price},
        Allergeenit: ${course.diets}</p>
    </article>
  `;

    console.log(html);

    return html;
  } catch (error) {}
}

async function getDailyMeals(id) {
  try {
    const restaurantID = id;
    const lang = 'fi';

    dailyMeals = await fetchData(
      `${url}/restaurants/daily/${restaurantID}/${lang}`
    );

    return dailyMeals;
  } catch (error) {
    console.log(error);
  }
}

function shaib() {
  const table = document.querySelector('table');
  const modal = document.querySelector('dialog');

  for (const restaurant of restaurants) {
    // rivi
    const tr = document.createElement('tr');
    // nimisolu
    const nameTd = document.createElement('td');
    nameTd.innerText = restaurant.name;
    // osoitesolu
    const addressTd = document.createElement('td');
    addressTd.innerText = restaurant.address;

    const h3 = document.createElement('h3');
    h3.textContent = restaurant.name;
    const adr = document.createElement('p');
    adr.textContent = restaurant.address;
    const post = document.createElement('p');
    post.textContent = restaurant.postalCode;
    const city = document.createElement('p');
    city.textContent = restaurant.city;
    const pnum = document.createElement('p');
    pnum.textContent = restaurant.phone;
    const comp = document.createElement('p');
    comp.textContent = restaurant.company;

    tr.addEventListener('click', async () => {
      for (const elem of document.querySelectorAll('.highlight')) {
        elem.classList.remove('highlight');
      }
      tr.classList.add('highlight');

      console.log(restaurant._id);

      modal.innerHTML = '';
      try {
        const menuHTML = await createMenuHTML(restaurant._id);
        console.log(menuHTML);
        modal.innerHTML += menuHTML;

        modal.showModal();
      } catch (error) {
        console.log(error);
      }
    });

    tr.append(nameTd, addressTd);
    table.append(tr);
  }
}

async function main() {
  try {
    await getRestaurants();
    sortRestaurants();
    shaib();
  } catch (error) {
    console.log(error);
  }
}

main();

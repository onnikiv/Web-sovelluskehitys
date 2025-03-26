import {fetchData} from '../../lib/fetchData.js';

async function init() {
  try {
    const url = 'https://reqres.in/api/users/1';

    const data = await fetchData(url);
    console.log(data);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

init();

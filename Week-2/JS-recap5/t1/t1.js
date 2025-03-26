import {fetchData} from '../../lib/fetchData.js';

async function init() {
  try {
    const url = 'https://reqres.in/api/users/1';
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetchData(url, options);
    console.log(response);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

init();

import {fetchData} from '../../lib/fetchData.js';

async function init() {
  try {
    const user = {
      name: 'Onni',
      job: 'Merirosvo',
    };

    const url = 'https://reqres.in/api/unknown/23';
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

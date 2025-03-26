import {fetchData} from '../../lib/fetchData.js';

async function init() {
  try {
    const user = {
      name: 'Onni',
      job: 'Merirosvo',
    };

    const url = 'https://reqres.in/api/users';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    const response = await fetchData(url, options);
    console.log(response);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

init();

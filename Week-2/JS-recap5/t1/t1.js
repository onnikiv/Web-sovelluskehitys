async function get() {
  try {
    const url = 'https://reqres.in/api/users/1';
    const options = {
      method: 'GET',
    };

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

get();

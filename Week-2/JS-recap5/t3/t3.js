async function errorHandling() {
  const user = {
    name: 'Onni',
    job: 'Merirosvo',
  };

  const url = 'https://reqres.in/api/unknown/23';

  // GET
  try {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`GET request failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log('GET Response:', data);
  } catch (error) {
    console.log('Error with GET method:', error.message);
  }

  // POST
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`POST request failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log('POST Response:', data);
  } catch (error) {
    console.error('Error with POST method:', error.message);
  }

  // PUT
  try {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`PUT request failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log('PUT Response:', data);
  } catch (error) {
    console.error('Error with PUT method:', error.message);
  }

  // DELETE
  try {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`DELETE request failed with status: ${response.status}`);
    }
    console.log('DELETE Response: Success');
  } catch (error) {
    console.error('Error with DELETE method:', error.message);
  }
}

errorHandling();

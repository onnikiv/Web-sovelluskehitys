async function errorHandling() {
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

  // GET
  try {
    const response = await fetch(url);
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
    options.method = 'POST';
    options.body = JSON.stringify(user);
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
    options.method = 'PUT';
    options.body = JSON.stringify(user);
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
    options.method = 'DELETE';
    delete options.body;
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

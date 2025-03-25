/**
 * Fetches data from the given URL with the specified options.
 *
 * @param {string} URL - The URL to fetch data from.
 * @param {Object} [options] - The options to pass to the fetch request.
 * @returns {Promise<Object>} The JSON response from the fetch request.
 * @throws {Error} If the response is not ok.
 */
export async function fetchData(URL, options) {
  const response = await fetch(URL, options);
  if (!response.ok) {
    throw new Error(`${response.statusText}, code: ${response.json}`);
  }
  const json = await response.json;
  return json;
}

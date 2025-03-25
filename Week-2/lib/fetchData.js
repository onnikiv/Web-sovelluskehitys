export async function fetchData(URL, options) {
  const response = await fetch(URL, options);
  if (!response.ok) {
    throw new Error(`${response.statusText}, code: ${response.json}`);
  }
  const json = await response.json;
  return json;
}

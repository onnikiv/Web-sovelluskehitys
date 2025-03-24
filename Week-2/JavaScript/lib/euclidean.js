/**
 * Calculates the Euclidean distance between two points.
 *
 * @param {number[]} alkupiste - The start coordinate [x, y].
 * @param {number[]} loppupiste - The end coordinate [x, y].
 * @returns {number} The distance between the start and end coordinates.
 */

export function distance(alkupiste, loppupiste) {
  return Math.sqrt((loppupiste[0] - alkupiste[0]) ** 2 + (loppupiste[1] - alkupiste[1]) ** 2);
}

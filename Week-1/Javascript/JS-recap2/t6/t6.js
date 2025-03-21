'use strict';

const movies = [];

function addMovie(title, rating) {
  movies.push({title, rating});
}

function numberOfMovies() {
  let numberOfMovies;
  do {
    // jos määrä on ei luku tai baNaN kysellään lisää
    numberOfMovies = parseInt(prompt('Enter the amount of numbers to rate:'));
  } while (!Number.isInteger(numberOfMovies) || isNaN(numberOfMovies));
  return numberOfMovies;
}

function main() {
  const count = numberOfMovies();

  for (let i = 0; i < count; i++) {
    let title;
    let rating;
    do {
      title = prompt(i + 1 + '. Enter the title of the movie:');
      if (!title) {
        alert('Title cannot be empty. Please enter a valid title.');
      }
    } while (!title); // siihe asti kun title ei tyhjä

    do {
      rating = parseInt(prompt('Enter your rating for the movie ' + title + ' (1-5)'));
      if (isNaN(rating) || rating < 1 || rating > 5) {
        alert('Rating must be a number between 1 and 5. Please enter a valid rating.');
      }
      // siihe asti kunha rating ei oo BaNaN ja on välillä 1-5
    } while (isNaN(rating) || rating < 1 || rating > 5);

    addMovie(title, rating);
  }
}
main();

console.log('Sorting movies by rating...');
movies.sort((a, b) => b.rating - a.rating);

console.log(movies);
console.log(
  'Highest rated movie:\nTitle: ' + movies[0].title + ' ' + ', Rating: ' + movies[0].rating
);

const a = document.createElement('a');

for (const movie of movies) {
  a.innerHTML += '<br>Title: ' + movie.title + ', Rating: ' + movie.rating;
}

a.innerHTML += '<br><br>Highest Rated Movie: ';
a.innerHTML += '<br>Title: ' + movies[0].title + ', Rating: ' + movies[0].rating;

document.body.appendChild(a);

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const firstOne = prompt('Один из последних просмотренных фильмов?', '');
const firstTwo = +prompt('На сколько оцените его??', '');
const secondOne = prompt('Один из последних просмотренных фильмов?', '');
const secondTwo = +prompt('На сколько оцените его??', '');

personalMovieDB.movies[firstOne] = firstTwo;
personalMovieDB.movies[secondOne] = secondTwo;

console.log(personalMovieDB);

"use strict";

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const firstOne = prompt("Один из последних просмотренных фильмов?", "");
// const firstTwo = +prompt("На сколько оцените его??", "");
// const secondOne = prompt("Один из последних просмотренных фильмов?", "");
// const secondTwo = +prompt("На сколько оцените его??", "");

// personalMovieDB.movies[firstOne] = firstTwo;
// personalMovieDB.movies[secondOne] = secondTwo;

// console.log(personalMovieDB);

// let incr = 10,
//   decr = 10;

// console.log(incr++);
// console.log(++incr);
// console.log(decr--);

// console.log(4%2);


// const a = prompt("Сколько бабок у тебя есть?");

// const course = prompt("Какой курс?");

// function convert(money, course) {
//   alert(`Получишь ${money * course} дублей`)
// };

// convert(a, course);

const arr = [4, 8, 15, 16, 23, 42];

const copy1 = arr;
let copy = arr.map((el) => el);

copy[0] = 2;

console.log(copy1 === arr);
console.log(copy === arr);
console.log(`Здесь copy - ${copy}`);
console.log(`Здесь arr - ${arr}`);
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

// const arr = [4, 8, 15, 16, 23, 42];

// const copy1 = arr;
// let copy = arr.map((el) => el);

// copy[0] = 2;

// console.log(copy1 === arr);
// console.log(copy === arr);
// console.log(`Здесь copy - ${copy}`);
// console.log(`Здесь arr - ${arr}`);

// 1
// let arr1 = [5, 3, 8];
// let arr2 = [7, 1, 2];

// console.log([...arr1,...arr2].sort());

// 2
// let numbers = [1, 2, 3, 4, 5, 6];
// let a = [];

// numbers.forEach(el => {if(el % 2 === 0) {a.push(el)}})

// console.log(numbers.filter(el => el % 2 === 0));
// console.log(a);

// 3
// let numbers = [1, 2, 3];

// console.log(numbers.map(el => el *2));

// 4
// let numbers = [10, 20, 30, 40, 50];

// numbers.sort((a, b) => b - a);

// console.log(numbers[0]);

// 1obj
// let obj1 = { a: 1, b: 2 };
// let obj2 = { b: 3, c: 4 };

// console.log({...obj1, ...obj2});

// 2obj
// let user = { name: 'Alice', age: 25 };

// function newObj(obj) {
//    return {...obj}
// };

// console.log(newObj(user));

// 3obj
// let user = { name: 'Alice', age: 25, city: 'New York' };
// let keys = ['name', 'city'];

// function newObj(obj, arr) {
//   let newObj = {};

//   for (let key in obj) {
//     arr.forEach(el => {if(el == key) {
//       newObj[key] = obj[key];
//     }})
//   }
//   return newObj
// }

// console.log(newObj(user, keys));

// 4obj
// let person = { name: 'Alice', age: 25 };
// let renameMap = { name: 'fullName', age: 'years' };


// function newNames(obj, objNewName) {
//   let newObj = {};

//   for (const key in obj) {
//     Object.keys(objNewName).forEach(el => {
//       if (key === el) {
//         newObj[objNewName[key]] = obj[key];
//       }
//     })
//   }

//   return newObj
// }

// console.log(newNames(person, renameMap));

// 5obj
// let keys = ['name', 'age', 'city'];
// let values = ['Alice', 25, 'New York'];

// function newObj(arrKeys, arrValues) {
//   let newObj = {};

//   arrKeys.forEach((el, i) => {
//     newObj[el] = arrValues[i]
//   });

//   return newObj
// }

// console.log(newObj(keys, values));
/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
      const firstOne = prompt('Один из последних просмотренных фильмов?', '');
      const firstTwo = +prompt('На сколько оцените его??', '');
  
      if (firstOne != null && firstTwo != null && firstOne != '' && firstTwo != '' && firstOne < 50) {
        personalMovieDB.movies[firstOne] = firstTwo;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      console.log('мало');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('норм');
    } else if (personalMovieDB.count >= 30) {
      console.log('круть');
    } else {
      console.log('ошибка');
    }
  },
  showMyDB: function(obj) {
    if(!obj.privat) {
      // console.log(obj[privat]);
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function() {
    if(!personalMovieDB.privat) {
      personalMovieDB.privat = true
    } else {
      personalMovieDB.privat = false
    }
  },
  writeYourGenres: function() {
    for (let i = 1; i <= 3; i++) {
      // console.log(i);
      let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');

      if (genre == '' || genre == null) {
        console.log('Введены некорректные данные');
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
        // console.log(personalMovieDB);
      }      
    }
    personalMovieDB.genres.forEach((element, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${element}`);
    });
  },
  
};

// start();
// rememberMyFilms();
// detectPersonalLevel();
// showMyDB(personalMovieDB);
// writeYourGenres();
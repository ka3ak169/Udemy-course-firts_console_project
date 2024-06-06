const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
  const fam = arr.join(' ');
  if (arr.length === 0) {
    return `Семья пуста`
  } else {
    return `Семья состоит из: ${fam}`;
  }
}

console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase())
    })
}

standardizeStrings(favoriteCities);



const someString = 'This is some strange string';

// function reverse(str) {
//   if (typeof str !== "string") {
//     return 'Ошибка!';
//   } else {
//     const split = str.split(' ');
//     const obr = split.map(element => {
//       const ad = element.split('')
//       ad.reverse();
//       return ad.join('');

//     });
//     const sovsObr = obr.reverse().join(' ');
//     return sovsObr
//   }  
// }


function reverse(str) {
  if (typeof(str) !== 'string') {
      return "Ошибка!";
  }

  console.log(str.split(''));
  console.log(str.split('').reverse());

  console.log(str.split('').reverse().join(''));

  // Самый оптимальный вариант решения
  return str.split('').reverse().join('');
}

reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//   if (arr.length === 0) {
//     console.log('Нет доступных валют');
//   } else {
//       if (missingCurr) {
//       const money = [];
//       arr.forEach(el => {
//         if (el !== missingCurr) {
//           money.push(el)
//         }
//       })
//       return (`Доступные валюты:\n${money.join('\n')}`);
//     }
//   }  
// }

function availableCurr(arr, missingCurr) {
  let str = '';
  arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

  arr.forEach(function(curr, i) {
      if (curr !== missingCurr) {
          str += `${curr}\n`;
      }
  });
  return str;
}

// availableCurr(additionalCurrencies, 'CNY')
// availableCurr([], 'CNY')
availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')
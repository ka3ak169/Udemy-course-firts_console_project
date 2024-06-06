// Место для первой задачи
function sayHello(name) {
  return `Привет ${name}!`
}

console.log(sayHello('Антон'));

// Место для второй задачи
function getMathResult(number) {
  return [number - 1, number, number + 1]
}

console.log(getMathResult(5));

// Место для третьей задачи

  function getMathResult(base, num) {
    if (typeof num !== 'number' || num <= 0) {
        return base
    } else {
      let result = base;
      for (let i = 1; i < num; i++) {
        result = `${result}---${base * (i + 1)}`
      }
      return result
    }
}

console.log(getMathResult(5,3));

function fib(arg) {
  if (typeof(arg) !== 'number' || arg <= 0 || !Number.isInteger(arg)) {
    return "";
  }
  let chisla = [];
  for (let i = 0; i < arg; i++) {
    if (i <= 1) {
      chisla[i] = i
    } else {
      const prev = chisla[i - 1];
      const prev2 = chisla[i - 2];
      chisla[i] = prev + prev2;
    }    
  }
  return chisla.join(' ');
}

console.log(fib(20));
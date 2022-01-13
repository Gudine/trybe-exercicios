const factorialOld = (num) => {
  let result = 1;
  for (let i = 2; i <= num; i += 1) {
    result *= i;
  }
  return result;
}

const factorialOld2 = (num, mul = num-1) => num === 0 ? 1 : mul > 1 ? factorial(num * mul, mul - 1) : num;

const factorial = (num) => (num === 0 || num === 1) ? 1 : num * factorial(num - 1);

console.log(factorial(4));

/**********************************************/

const longestWord = (phrase) => {
  let result = '';
  for (let word of phrase.split(' ')) {
    result = word.length > result.length ? word : result;
  }
  return result;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')); // retorna 'aconteceu'

// Exercício 1
function verificaPalindrome(palavra) {
  let reverso = palavra.split("");
  reverso = reverso.reverse();
  reverso = reverso.join("");

  return (reverso === palavra);
}

console.log(verificaPalindrome("arara"));

// Exercício 2
function maiorValorIndice(array) {
  let maior = {chave: 0, valor: array[0]};
  for (let x in array) {
    if (array[x] > maior.valor) {
      maior.chave = x;
      maior.valor = array[x];
    }
  }
  return maior.chave;
}

console.log(maiorValorIndice([2, 3, 6, 7, 10, 1]));

// Exercício 3
function menorValorIndice(array) {
  let menor = {chave: 0, valor: array[0]};
  for (let x in array) {
    if (array[x] < menor.valor) {
      menor.chave = x;
      menor.valor = array[x];
    }
  }
  return menor.chave;
}

console.log(menorValorIndice([2, 4, 6, 7, 10, 0, -3]));

// Exercício 4
function maiorNome(array) {
  let maior = "";
  for (let x in array) {
    if (array[x].length > maior.length) {
      maior = array[x];
    }
  }
  return maior;
}

console.log(maiorNome(
  ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']
));

// Exercício 5
function moda(array) {
  let repetidos = {};
  for (let x of array) {
    if (repetidos[x] === undefined) {
      repetidos[x] = 1;
    } else {
      repetidos[x] += 1;
    }
  }

  let comum = {valor: 0, repeticoes: 0};
  for (let x in repetidos) {
    if (repetidos[x] > comum.repeticoes) {
      comum.repeticoes = repetidos[x];
      comum.valor = x;
    }
  }
  return comum.valor;
}

console.log(moda([2, 3, 2, 5, 8, 2, 3]));

// Exercício 6
function somaAteN(n) { 
  let soma = 0;
  for (let i = 1; i <= n; i += 1) {
    soma += i;
  }
  return soma;
}

console.log(somaAteN(5));

// Exercício 7
function verificaFimPalavra(palavra, final) {
  for (let i = 0; final.length - 1 - i >= 0; i += 1) {
    let letra = palavra[palavra.length-1-i];
    let letraFinal = final[final.length-1-i];
    if (letra !== letraFinal) {
      return false
    }
  }
  return true;
}

console.log(verificaFimPalavra('joaofernando', 'fernan'));
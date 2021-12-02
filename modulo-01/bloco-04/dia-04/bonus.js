// Bônus 1

function romanoParaArabico(romano) {
  let regex = /(IV|IX|I|V|XL|XC|X|L|CD|CM|C|D|M)/g;

  let traducao = {
    IV: 4,
    IX: 9,
    I: 1,
    V: 5,
    XL: 40,
    XC: 90,
    X: 10,
    L: 50,
    CD: 400,
    CM: 900,
    C: 100,
    D: 500,
    M: 1000
  }

  let numeros = [...romano.matchAll(regex)];
  for (let x in numeros) {
    numeros[x] = traducao[numeros[x][0]];
  }

  let resultado = 0;
  for (let x of numeros) {
    resultado += x;
  }

  return resultado;
}

console.log(romanoParaArabico("MCMXCVII"));

// Bônus 2

function flatten(array) {
  let unchanged = false;
  while (!unchanged) {
    unchanged = true;
    let newArray = [];
    for (let x of array) {
      if (Array.isArray(x)) {
        unchanged = false;
        newArray = newArray.concat(x);
      } else {
        newArray.push(x);
      }
    }
    array = newArray;
  }
  return array;
}

function arrayOfNumbers(array) {
  let result = [];
  let fArray = flatten(array.slice());

  for (let x of fArray) {
    if (x%2 == 0) {
      result.push(x);
    }
  }

  return result;
}

console.log(arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]));

// Bônus 3
const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

function quantidadeDeFrutas(array) {
  let repetidos = {};
  for (let x of array) {
    if (repetidos[x] === undefined) {
      repetidos[x] = 1;
    } else {
      repetidos[x] += 1;
    }
  }
  
  let result = [];
  for (let x in repetidos) {
    result.push(repetidos[x] + " " + x + "s");
  }

  let resultStr = "Sua cesta possui: ";
  resultStr += result.slice(0,-1).join(", ");
  resultStr += " e " + result.slice(-1)[0];
  console.log(resultStr);
  return result;
}

quantidadeDeFrutas(basket);

// Bônus 4
let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

console.log(
  "O morador do bloco 2 de nome " +
  moradores.blocoDois.slice(-1)[0].nome + " " +
  moradores.blocoDois.slice(-1)[0].sobrenome +
  " mora no " +
  moradores.blocoDois.slice(-1)[0].andar +
  "° andar, apartamento " +
  moradores.blocoDois.slice(-1)[0].apartamento
);

// Bônus 5
for (let x in moradores) {
  for (let y of moradores[x]) {
    console.log(y.nome + " " + y.sobrenome);
  }
}

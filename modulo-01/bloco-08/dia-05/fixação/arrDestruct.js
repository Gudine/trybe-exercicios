const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]);

const [saudacoesFrase, saudacoesFunc] = saudacoes;

saudacoesFunc(saudacoesFrase);

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[animal, bebida, comida] = [comida, animal, bebida];

console.log(comida, animal, bebida);

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

let a, b, c;
[a, b, c, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];

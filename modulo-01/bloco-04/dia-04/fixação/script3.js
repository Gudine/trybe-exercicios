function adicao(num1, num2) {
  return num1 + num2;
}

function subtracao(num1, num2) {
  return num1 - num2;
}

function multiplicacao(num1, num2) {
  return num1 * num2;
}

function divisao(num1, num2) {
  return num1 / num2;
}

function modulo(num1, num2) {
  return num1 % num2;
}

function testes(num1, num2) {
  console.log("");
  console.log(adicao(num1,num2));
  console.log(subtracao(num1,num2));
  console.log(multiplicacao(num1,num2));
  console.log(divisao(num1,num2));
  console.log(modulo(num1,num2));
}

testes(29,6);
testes(3,5);
testes(5,12);
testes(-27,4);

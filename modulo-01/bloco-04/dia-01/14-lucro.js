const custo = 20;
const valor = 30;

if (custo <= 0 || valor <= 0) {
  console.log("ERRO: Produto não pode ser de graça!");
}
else {
  let lucro = valor - custo * 1.2; //definir lucro por produto
  lucro = lucro * 1000;
  console.log("O lucro de 1000 produtos é: ", lucro);
}
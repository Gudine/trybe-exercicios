let salario = 3000;

//INSS
if (salario <= 1556.94) {
  salario = salario * .92;
}
else if (salario <= 2594.92) {
  salario = salario * .91;
}
else if (salario <= 5189.82) {
  salario = salario * .89;
}
else {
  salario = 570.88;
}

//IR
if (salario > 1903.98 && salario <= 2826.65) {
  salario = salario * .925 + 142.80;
}
else if (salario <= 3751.05) {
  salario = salario * .85 + 354.80;
}
else if (salario <= 4664.68) {
  salario = salario * .775 + 636.13;
}
else {
  salario = salario * .725 + 869.63;
}

console.log(salario);
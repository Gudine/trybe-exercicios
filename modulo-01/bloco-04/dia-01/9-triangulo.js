const a = 17;
const b = 98;
const c = 65;

if (a < 0 || b < 0 || c < 0) { //se ângulo for inválido
  console.log("ERRO: Um dos ângulos tem valor inválido!");
} else if (a + b + c == 180) { //se triângulo for válido
  console.log(true);
} else {
  console.log(false);
}
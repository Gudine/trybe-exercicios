const n = 9;

// 1. Quadrado
for (let i = 0; i < n; i += 1) {
  console.log("".padStart(n, "*"));
}

console.log("");
// 2. Triângulo retângulo a esquerda
for (let i = 0; i < n; i += 1) {
  console.log("".padStart(i+1, "*"));
}

console.log("");
// 3. Triângulo retângulo a direita
for (let i = 0; i < n; i += 1) {
  console.log("".padStart(i+1, "*").padStart(n, " "));
}

console.log("");
// 4. Pirâmide
let rows = Math.ceil(n/2);
for (let i = 0; i < rows; i += 1) {
  let spaces = (rows - 1) - i;

  let output = "".padStart(n - spaces*2, "*");
  output = output.padStart(output.length + spaces, " ");
  console.log(output);
}

console.log("");
// Bônus 5. Pirâmide Vazia
for (let i = 0; i < rows; i += 1) {
  let spaces = (rows - 1) - i;
  if (i == rows - 1) {
    let output = "".padStart(n - spaces*2, "*");
    output = output.padStart(output.length + spaces, " ");
    console.log(output);
  } else {
    let output = "*".padStart(spaces + 1, " ");
    output = output.padEnd(n - spaces - 1, " ");
    output = output.padEnd(n - spaces, "*");
    output = output.padEnd(n, " ");
    console.log(output);
  }
}

console.log("");
// Bônus 6. Verificação de Número Primo

let primes = [];

for (let i = 2; i <= n; i += 1) {
  let isPrime = true;
  for (let x of primes) {
    if (i%x == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    primes.push(i);
  }
}

if (primes.splice(-1)[0] == n) {
  console.log("Número é primo!")
} else {
  console.log("Número não é primo!")
}

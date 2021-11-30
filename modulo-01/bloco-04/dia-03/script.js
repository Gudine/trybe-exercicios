const n = 9;

// 1. Quadrado
for (let i = 0; i < n; i += 1) {
  let line = "";
  for (let j = 0; j < n; j += 1) {
    line += "*";
  }
  console.log(line);
}

console.log("");
// 2. Triângulo retângulo a esquerda
for (let i = 0; i < n; i += 1) {
  let line = "";
  for (let j = 0; j <= i; j += 1) {
    line += "*";
  }
  console.log(line);
}

console.log("");
// 3. Triângulo retângulo a direita
for (let i = 0; i < n; i += 1) {
  let line = "";
  for (let j = 0; j < n; j += 1) {
    if (j >= n-1-i) {line += "*"}
    else {line += " "};
  }
  console.log(line);
}

console.log("");
// 4. Pirâmide
let rows = Math.ceil(n/2)

for (let i = 0; i < rows; i += 1) {
  let line = "";
  let spaces = (rows - 1) - i;

  for (let j = 0; j < n - spaces; j += 1) {
    if (j < spaces) {line += " "}
    else {line += "*"};
  }
  console.log(line);
}
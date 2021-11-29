let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 1
console.log("====Exercício 1====");

for (let x of numbers) {
  console.log(x);
}

// Exercício 2
console.log("====Exercício 2====");

let sum = 0;
for (let x of numbers) {
  sum += x;
}
console.log(sum);

// Exercício 3
console.log("====Exercício 3====");

let avg = sum / numbers.length;
console.log(avg);

// Exercício 4
console.log("====Exercício 4====");

if (avg > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

// Exercício 5
console.log("====Exercício 5====");

let biggest = numbers[0];
for (let i = 1; i < numbers.length; i += 1) {
  if (numbers[i] > biggest) {biggest = numbers[i]};
}
console.log(biggest);

// Exercício 6
console.log("====Exercício 6====");

let odd = 0;
for (let x of numbers) {
  if (x%2 == 1) {odd += 1};
}
console.log(odd);

// Exercício 7
console.log("====Exercício 7====");

let smallest = numbers[0];
for (let i = 1; i < numbers.length; i += 1) {
  if (numbers[i] < smallest) {smallest = numbers[i]};
}
console.log(smallest);

// Exercício 8
console.log("====Exercício 8====");

let twentyfive = [];
for (let i = 1; i <= 25; i += 1) {
  twentyfive.push(i);
}
console.log(twentyfive);

// Exercício 9
console.log("====Exercício 9====");

for (let x of twentyfive) {
  console.log(x / 2);
}

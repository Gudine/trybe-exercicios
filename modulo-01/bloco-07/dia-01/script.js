const btn = document.querySelector('button');
let clickCount = 0;

btn.addEventListener('click', () => {
  clickCount += 1;
  document.querySelector('#clicks').innerText = clickCount;
});

const skills = ['HTML', 'CSS', 'JavaScript', 'Python', 'Inglês'];

const nameHere = (name) => `Tryber ${name} aqui!`;

const fullPhrase = (here) => `${here} Minhas cinco principais habilidades são:
* ${skills.join(";\n* ")};
#goTrybe`;

console.log(fullPhrase(nameHere("Guilherme")));

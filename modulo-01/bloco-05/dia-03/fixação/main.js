const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const liList = [firstLi, secondLi, thirdLi];
let liDefault = ["", "", ""];

let tech;
let techI;
let ordinals = ["primeira", "segunda", "terceira"];

function getTech() {
  // Adquire o li tech e sua posição
  tech = document.querySelector(".tech");
  techI = [...tech.parentNode.children].indexOf(tech);
}

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// Resposta: Porque tem um translateY na classe tech

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
for (let x of liList) {
  x.addEventListener('click', techElevate);
}

function techElevate(event) {
  for (let x of liList) {
    x.classList.remove("tech");
  }

  event.target.classList.add("tech");

  // Limpa input e altera seu texto padrão
  getTech();
  input.value = "";
  input.placeholder = `Alterar a ${ordinals[techI]} tecnologia`;
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('keyup', changeTech);

function changeTech(event) {
  getTech();
  
  // Se não tiver texto padrão guardado
  if (liDefault[techI] === "") {
    // Guarda o texto do li selecionado
    liDefault[techI] = tech.innerText;
  }

  let value = event.target.value;
  // Se a caixa de texto não estiver vazia
  if (value !== "") {
    // Copia texto da caixa de texto
    tech.innerText = value;
  } else {
    // Caso contrário, usa texto padrão
    tech.innerText = liDefault[techI];
  }
  
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
myWebpage.addEventListener('dblclick', goToPortfolio);

function goToPortfolio() {
  window.location.href = "https://gudine.github.io/portfolio-web/";
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseover', headerColorOn);
myWebpage.addEventListener('mouseout', headerColorOff);

function headerColorOn(event) {
  event.target.style.color = "lightgreen";
}

function headerColorOff(event) {
  event.target.style.color = null;
}

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
const states = {
  ac: 'Acre',
  al: 'Alagoas',
  ap: 'Amapá',
  am: 'Amazonas',
  ba: 'Bahia',
  ce: 'Ceará',
  df: 'Distrito Federal',
  es: 'Espírito Santo',
  go: 'Goiás',
  ma: 'Maranhão',
  mt: 'Mato Grosso',
  ms: 'Mato Grosso do Sul',
  mg: 'Minas Gerais',
  pa: 'Pará',
  pb: 'Paraíba',
  pr: 'Paraná',
  pe: 'Pernambuco',
  pi: 'Piauí',
  rj: 'Rio de Janeiro',
  rn: 'Rio Grande do Norte',
  rs: 'Rio Grande do Sul',
  ro: 'Rondônia',
  rr: 'Roraima',
  sc: 'Santa Catarina',
  sp: 'São Paulo',
  se: 'Sergipe',
  to: 'Tocantins',
};

const form = document.querySelector('form');
const v = (param) => form.elements[param].value;
const select = document.getElementById('state');
const dateElem = document.getElementById('start-date');
const submitBtn = document.getElementById('submit');
const resetBtn = document.getElementById('reset');
const errorDiv = document.getElementById('error');
const outputDiv = document.getElementById('output');

function populateStates() {
  for (let x in states) {
    let option = document.createElement('option');
    option.innerText = states[x];
    option.value = x;
    select.appendChild(option);
  }
}

function verifyDate() {
  if (dateElem.value.split("/").length !== 3) {
    alert("ERRO: Formatação errada da data");
    return "ERRO: Formatação errada da data";
  }

  let [d, m, y] = dateElem.value.split("/").map(Number);

  if (d <= 0 || d > 31 || isNaN(d)) {
    alert("ERRO: Dia inválido");
    return "ERRO: Dia inválido";
  }
  if (m <= 0 || m > 12 || isNaN(m)) {
    alert("ERRO: Mês inválido");
    return "ERRO: Mês inválido";
  }
  if (y < 0 || isNaN(y)) {
    alert("ERRO: Ano inválido");
    return "ERRO: Ano inválido";
  }
}

function generateDiv() {
  let cpf = v('cpf').slice(0,3) + '.' +
            v('cpf').slice(3,6) + '.' +
            v('cpf').slice(6,9) + '-' +
            v('cpf').slice(9);
  let home = 'numa casa';
  if (v('home-type') === 'apartment') {
    home = 'num apartamento';
  }
  let state = `estado do ${states[v('state')]}`;
  if (v('state') === 'df') {
    state = states[v('state')];
  }

  outputDiv.innerText = `${v('full-name')} (${v('e-mail')})
  CPF: ${cpf}

  Mora ${home} em ${v('address')},
  em ${v('city')}, no ${state}.
  
  ${v('summary')}
  
  Desde ${v('start-date')}, tem o cargo de ${v('occupation')}:
  ${v('occ-desc')}.`;
}

function submitForm(ev) {
  ev.preventDefault();
  let fields = ['full-name', 'e-mail', 'cpf', 'address', 'city', 'state', 'home-type', 'summary', 'occupation', 'occ-desc'];
  errorDiv.innerText = '';
  let errors = false;
  
  for (let x of fields) {
    if (!v(x)) {
      errors = true;
      if (form.elements[x].labels === undefined) {
        errorDiv.innerText += `Campo "${form.elements[x][0].parentElement.children[0].innerText.slice(0,-1)}" não preenchido.\n`;
      } else {
        errorDiv.innerText += `Campo "${form.elements[x].labels[0].innerText.slice(0,-1)}" não preenchido.\n`;
      }
    }
  }

  let dateErr = verifyDate()
  if (dateErr) {
    errorDiv.innerText += dateErr;
    errors = true;
  }

  if (errors === false) { generateDiv(); }
}

function resetForm() {
  errorDiv.innerHTML = "";
  outputDiv.innerHTML = "";
}

populateStates();
submitBtn.addEventListener('click', submitForm);
resetBtn.addEventListener('click', resetForm);
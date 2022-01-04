const states = [
  [ 'Acre', 'ac' ],
  [ 'Alagoas', 'al' ],
  [ 'Amapá', 'ap' ],
  [ 'Amazonas', 'am' ],
  [ 'Bahia', 'ba' ],
  [ 'Ceará', 'ce' ],
  [ 'Distrito Federal', 'df' ],
  [ 'Espírito Santo', 'es' ],
  [ 'Goiás', 'go' ],
  [ 'Maranhão', 'ma' ],
  [ 'Mato Grosso', 'mt' ],
  [ 'Mato Grosso do Sul', 'ms' ],
  [ 'Minas Gerais', 'mg' ],
  [ 'Pará', 'pa' ],
  [ 'Paraíba', 'pb' ],
  [ 'Paraná', 'pr' ],
  [ 'Pernambuco', 'pe' ],
  [ 'Piauí', 'pi' ],
  [ 'Rio de Janeiro', 'rj' ],
  [ 'Rio Grande do Norte', 'rn' ],
  [ 'Rio Grande do Sul', 'rs' ],
  [ 'Rondônia', 'ro' ],
  [ 'Roraima', 'rr' ],
  [ 'Santa Catarina', 'sc' ],
  [ 'São Paulo', 'sp' ],
  [ 'Sergipe', 'se' ],
  [ 'Tocantins', 'to' ]
];

const select = document.getElementById('state');
const dateElem = document.getElementById('start-date');

for (let x of states) {
  let option = document.createElement('option');
  option.innerText = x[0];
  option.value = x[1];
  select.appendChild(option);
}

function verifyDate(ev) {
  if (ev.key !== 'Enter') { return; }
  if (ev.target.value.split("/").length !== 3) {
    alert("ERRO: Formatação errada da data");
    return;
  }

  let [d, m, y] = ev.target.value.split("/").map(Number);

  if (d <= 0 || d > 31 || isNaN(d)) {
    alert("ERRO: Dia inválido");
    return;
  }
  if (m <= 0 || m > 12 || isNaN(m)) {
    alert("ERRO: Mês inválido");
    return;
  }
  if (y < 0 || isNaN(y)) {
    alert("ERRO: Ano inválido");
    return;
  }
}

dateElem.addEventListener('keypress', verifyDate);
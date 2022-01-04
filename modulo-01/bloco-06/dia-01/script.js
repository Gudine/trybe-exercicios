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

for (let x of states) {
  let option = document.createElement('option');
  option.innerText = x[0];
  option.value = x[1];
  select.appendChild(option);
}

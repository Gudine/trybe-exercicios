moment.locale('pt-br');

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

const picker = new Pikaday({
  field: dateElem,
  format: "dddd, D [de] MMMM [de] YYYY",
  i18n: {
    previousMonth : 'Mês Anterior',
    nextMonth     : 'Próximo Mês',
    months        : ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    weekdays      : ['Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sábado'],
    weekdaysShort : ['Dom','Seg','Ter','Qua','Qui','Sex','Sab']
  },
});
const validation = new JustValidate(form);

function populateStates() {
  for (let x in states) {
    let option = document.createElement('option');
    option.innerText = states[x];
    option.value = x;
    select.appendChild(option);
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
  generateDiv();
}

function resetForm() {
  errorDiv.innerHTML = "";
  outputDiv.innerHTML = "";
}

populateStates();
validation.onSuccess(submitForm);
resetBtn.addEventListener('click', resetForm);

validation.globalConfig.errorLabelCssClass = 'help';
validation
  .addField('#full-name', [
    {
      rule: 'maxLength',
      value: 40,
    },
    {
      rule: 'required',
      errorMessage: 'Nome não preenchido',
    },
  ])
  .addField('#e-mail', [
    {
      rule: 'maxLength',
      value: 50,
    },
    {
      rule: 'required',
      errorMessage: 'E-mail não preenchido',
    },
    {
      rule: 'email',
      errorMessage: 'Formatação do e-mail inválida',
    },
  ])
  .addField('#cpf', [
    {
      rule: 'maxLength',
      value: 11,
    },
    {
      rule: 'required',
      errorMessage: 'CPF não preenchido',
    },
  ])
  .addField('#address', [
    {
      rule: 'maxLength',
      value: 200,
    },
    {
      rule: 'required',
      errorMessage: 'Endereço não preenchido',
    },
  ])
  .addField('#city', [
    {
      rule: 'maxLength',
      value: 28,
    },
    {
      rule: 'required',
      errorMessage: 'Cidade não preenchida',
    },
  ])
  .addField('#state', [
    {
      rule: 'required',
      errorMessage: 'Estado não preenchido',
    },
  ])
  .addRequiredGroup(
    '#home-type',
    'Tipo de moradia não preenchido'
  )
  .addField('#summary', [
    {
      rule: 'maxLength',
      value: 1000,
    },
    {
      rule: 'required',
      errorMessage: 'Resumo do currículo não preenchido',
    },
  ])
  .addField('#occupation', [
    {
      rule: 'maxLength',
      value: 40,
    },
    {
      rule: 'required',
      errorMessage: 'Cargo não preenchido',
    },
  ])
  .addField('#occ-desc', [
    {
      rule: 'maxLength',
      value: 500,
    },
    {
      rule: 'required',
      errorMessage: 'Cargo não preenchido',
    },
  ])
  .addField('#start-date', [
    {
      rule: 'required',
      errorMessage: 'Data de início não preenchida',
    },
  ])

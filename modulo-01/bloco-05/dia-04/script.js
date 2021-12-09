let textConfig;

let controls = document.querySelectorAll("#controls input");

function startupConfig() {
  //Se não tiver configuração inicial no localStorage
  if (localStorage.textConfig === undefined) {
    //Cria configuração inicial e bota no localStorage
    textConfig = {bgcolor: "#f5f5dc",
      fgcolor: "#131313",
      fontsize: 16,
      lineheight: 20,
      fontfamily: "Times New Roman"};
      updateStorage();
  } else {
    //Caso contrário, pega configuração do localStorage
    textConfig = JSON.parse(localStorage.textConfig);
  }

  //Passa por todos os espaços relacionados
  //à customização da aparência
  for (let elem of controls) {
    //Passa para eles as configurações guardadas
    elem.value = textConfig[elem.id];
    //Adiciona um escutador que se ativa
    //a cada modificação, e atualiza
    //as variáveis no css e storage
    elem.addEventListener("input", function (ev) {
      updateInput(ev.target);
    });
    //Atualiza as variáveis no css
    //e storage pela 1a vez
    updateInput(elem);
  }
}

function updateInput(elem) {
  //Pega o valor do input
  let value = elem.value;
  //Guarda essa valor na var textConfig
  textConfig[elem.id] = value;
  //Manda as informações pro localStorage
  updateStorage();

  //Encontra o estilo do body
  //(onde as variáveis css são guardadas)
  let bStyle = document.body.style;
  //Se o input for relacionado ao espaçamento ou
  //tamanho da fonte, concatena um "px" no final
  if (elem.id == "lineheight" || elem.id == "fontsize") {
    value += "px";
  }
  //Guarda a propriedade na variável css
  bStyle.setProperty(`--${elem.id}`, value);
  
}

function updateStorage() {
  //Manda configuração da var textConfig
  //para o localStorage
  localStorage.textConfig = JSON.stringify(textConfig);
}

startupConfig();

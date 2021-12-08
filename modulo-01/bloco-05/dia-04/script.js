let textConfig;

let controls = document.querySelectorAll("#controls input");

window.onload = function() {

  function startupConfig() {
    //Se não tiver configuração inicial no localStorage
    if (localStorage.textConfig === undefined) {
      //Cria configuração inicial e bota no localStorage
      textConfig = {bgcolor: "#f5f5dc",
        fgcolor: "#131313",
        fontsize: 16,
        lineheight: 20,
        fontfamily: "Times New Roman"};
      localStorage.textConfig = JSON.stringify(textConfig);
    } else {
      //Caso contrário, pega configuração do localStorage
      textConfig = JSON.parse(localStorage.textConfig);
    }

    for (let elem of controls) {
      elem.value = textConfig[elem.id];
    }
  }

  startupConfig();
}
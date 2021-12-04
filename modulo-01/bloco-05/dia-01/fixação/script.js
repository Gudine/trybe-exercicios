const container = document.getElementById("container");
container.style.backgroundColor = "#f3f3f3";

const hContainer = document.getElementById("header-container");
hContainer.style.backgroundColor = "#00b069";

/* ********************* */
const emergencySection = document.getElementsByClassName("emergency-tasks")[0];
emergencySection.style.backgroundColor = "#ff9f84";

const emergencyH3 = document.querySelectorAll(".emergency-tasks div h3");

for (let x of emergencyH3) {
  x.style.backgroundColor = "#a500f3";
}

const noEmergencySection = document.getElementsByClassName("no-emergency-tasks")[0];
noEmergencySection.style.backgroundColor = "#f9db5e";

const noEmergencyH3 = document.querySelectorAll(".no-emergency-tasks div h3");

for (let x of noEmergencyH3) {
  x.style.backgroundColor = "#232525";
}

/* ********************* */
const fContainer = document.getElementById("footer-container");
fContainer.style.backgroundColor = "#003533";
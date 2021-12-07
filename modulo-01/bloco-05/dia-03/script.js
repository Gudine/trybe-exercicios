function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Requisito 1
function createDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  const ul = document.querySelector('#days');
  const holidays = [24, 25, 31];

  for (let i in dezDaysList) {
    let day = dezDaysList[i];
    let dayLi = document.createElement("li");
    dayLi.innerText = day;
    dayLi.classList.add("day");
    dayLi.style.transition = "font-size .1s";

    if (holidays.includes(day)) {
      dayLi.classList.add("holiday");
    }
    if (i%7 == 5) {
      dayLi.classList.add("friday");
    }

    ul.appendChild(dayLi);
  }
}

createDaysOfTheMonth();

// Requisito 2
function makeHolidayButton(string) {
  let button = document.createElement("button");
  button.id = "btn-holiday";
  button.innerText = string;
  
  let parent = document.querySelector(".buttons-container");
  parent.appendChild(button);
}

makeHolidayButton("Feriados");

// Requisito 3
let holidayToggle = false;

function addEventToHolidayButton() {
  let button = document.querySelector("#btn-holiday");
  button.addEventListener("click", function() {
    let color;
    if (holidayToggle) {
      holidayToggle = false;
      color = "rgb(238,238,238)";
    } else {
      holidayToggle = true;
      color = "rgb(200,238,200)";
    }

    let holidayList = document.querySelectorAll(".holiday");
    for (let day of holidayList) {
      day.style.backgroundColor = color;
    }
  });
}

addEventToHolidayButton();

// Requisito 4
function makeFridayButton(string) {
  let button = document.createElement("button");
  button.id = "btn-friday";
  button.innerText = string;
  
  let parent = document.querySelector(".buttons-container");
  parent.appendChild(button);
}

makeFridayButton("Sexta-feira");

// Requisito 5
let fridayToggle = false;
let fridayDays = [];

function addEventToFridayButton() {
  let button = document.querySelector("#btn-friday");
  button.addEventListener("click", function() {
    if (fridayToggle) { fridayToggle = false; }
    else { fridayToggle = true; };

    let fridayList = document.querySelectorAll(".friday");
    for (let day of fridayList) {
      if (fridayToggle) {
        fridayDays.push(day.innerText);
        day.innerText = "SEXTOU!!";
      } else {
        day.innerText = fridayDays.shift();
      }
    }
  });
}

addEventToFridayButton();

// Requisito 6
function addZoomInToDays() {
  let days = document.querySelectorAll(".day");
  for (let day of days) {
    day.addEventListener("mouseover", function(ev) {
      ev.target.style.fontSize = "40px";
    })
  }
}

function addZoomOutToDays() {
  let days = document.querySelectorAll(".day");
  for (let day of days) {
    day.addEventListener("mouseout", function(ev) {
      ev.target.style.fontSize = "20px";
    })
  }
}

addZoomInToDays();
addZoomOutToDays();

// Requisito 7
function makeTask(string) {
  let task = document.createElement("span");
  task.innerText = string;
  
  let parent = document.querySelector(".my-tasks");
  parent.appendChild(task);
}

makeTask("Cozinhar");

// Requisito 8
function addLegendToTask(cor) {
  let task = document.querySelector(".my-tasks span");
  let legend = document.createElement("div");
  legend.classList.add("task");
  legend.style.backgroundColor = cor;

  task.innerText += ":";
  task.appendChild(legend);
}

addLegendToTask("blue");
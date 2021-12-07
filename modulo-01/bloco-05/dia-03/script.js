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
function makeButton(string) {
  let button = document.createElement("button");
  button.id = "btn-holiday";
  button.innerText = string;
  
  let parent = document.querySelector(".buttons-container");
  parent.appendChild(button);
}

makeButton("Feriados");
// Operador AND
const currentHour = 7;
let message = "";

if (currentHour >= 22) {
  message += "Não deveríamos comer nada, é hora de dormir";
}
else if (currentHour >= 18) {
  message += "Rango da noite, vamos jantar :D";
}
else if (currentHour >= 14) {
  message += "Vamos fazer um bolo pro café da tarde?";
}
else if (currentHour >= 11) {
  message += "Hora do almoço!!!";
}
else {
  message += "Hmmm, cheiro de café recém passado";
}

console.log(message);

// Operador OR
let weekDay = "quarta-feira";

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
  console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}
else {
  console.log("FINALMENTE, descanso merecido UwU");
}

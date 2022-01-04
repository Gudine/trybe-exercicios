// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function nullEvent(ev) {
  ev.preventDefault();
}

function aFavoritism(ev) {
  if (ev.key !== 'a') { ev.preventDefault(); }
}

HREF_LINK.addEventListener('click', nullEvent);
INPUT_CHECKBOX.addEventListener('click', nullEvent);
INPUT_TEXT.addEventListener('keypress', aFavoritism);
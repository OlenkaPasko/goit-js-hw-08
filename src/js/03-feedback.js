import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';



/*const form = document.querySelector("#message-form");
const output = document.querySelector("#output");
const LOCALSTORAGE_KEY = "goit-example-message";

updateOutput();
form.addEventListener("submit", saveMessage);

function saveMessage(evt) {
  evt.preventDefault();
  localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value);
  updateOutput();
  form.reset();
}

function updateOutput() {
  output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || "";
}*/

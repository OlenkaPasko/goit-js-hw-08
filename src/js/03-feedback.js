import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
}
//const STORAGE_KEY = 'feedback-form-state';
refs.form.addEventListener('submit', messageForm);
refs.input.addEventListener('input', )

//записуй у локальне сховище об'єкт з полями email і message;
//зберігай поточні значення полів форми
//ключем для сховища буде рядок "feedback-form-state"
function messageForm(event) {

}

//завантаження сторінки перевіряй стан сховища;
//якщо там є збережені дані, заповнюй ними поля форми.
//В іншому випадку поля повинні бути порожніми.
function (event) {
  
}
//Під час сабміту форми очищуй сховище і поля форми,
// а також виводь у консоль об'єкт з полями 
//email, message та їхніми поточними значеннями.
function () {

}
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

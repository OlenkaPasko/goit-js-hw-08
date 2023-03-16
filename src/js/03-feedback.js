import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
}
refs.input.addEventListener('input', throttle(onTextareaInput, 500))
refs.form.addEventListener('submit', onFormSubmit);

function onTextareaInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.parse(formData));
}

//зберігай поточні значення полів форми
//завантаження сторінки перевіряй стан сховища;
//якщо там є збережені дані, заповнюй ними поля форми.
//В іншому випадку поля повинні бути порожніми.
/*Сабміт форми перезавантажує сторінку, тому не забувайте скасовувати 
дію за замовчуванням методом preventDefault().*/ 

function onFormSubmit(event) {
    event.preventDefault();
    if (refs.input.value === '' || refs.textarea.value === '') {
      return alert(`Please fill in all the fields!`);
    }
    or;
    const { email, message } = event.currentTarget.elements;
    console.log({ email: email.value, message: message.value });
    or;
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {};
  }

//Під час сабміту форми очищуй сховище і поля форми,
// а також виводь у консоль об'єкт з полями 
//email, message та їхніми поточними значеннями.
function messageForm(event) {
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

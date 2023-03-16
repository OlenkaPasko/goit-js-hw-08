import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const { email, message } = form.elements;
messageForm();

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};
refs.input.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

/*Відстежуй на формі подію input, і щоразу записуй у 
окальне сховище об'єкт з полями email і message, 
у яких зберігай поточні значення полів форми. 
Нехай ключем для сховища буде рядок "feedback-form-state".*/

function onTextareaInput(event) {
  formData = { email: email.value, message: message.value }; 
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function onFormSubmit(event) {
  event.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }

  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
  formData = {};
}

function messageForm(event) {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

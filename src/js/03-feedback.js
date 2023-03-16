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


function onTextareaInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function onFormSubmit(event) {
  event.preventDefault();
  if (refs.input.value === '' || refs.textarea.value === '') {
    return alert(`Please fill in all the fields!`);
  }
}

function messageForm(event) {
  {
    if (formData) {
      let { email, message } = form.elements;
      email.value = formData.email || '';
      message.value = formData.message || '';
    }
  }
}

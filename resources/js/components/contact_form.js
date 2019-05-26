import Request from './request'
import FormData from './getFormData'

let requestInProgress = false;
let form = document.getElementById('contact-form');
document.getElementById('submit').addEventListener('click', submitForm, false);
form.addEventListener('submit', submitForm, false);

async function submitForm(e) {
  e.preventDefault();
  if (!requestInProgress) {
    requestInProgress = true;
    clearErrors();
    let formData = FormData(form);
    let response = await Request('/contactMessage', formData);
    showResponse(response);
    if (!response.errors) {
      form.reset();
    }
    requestInProgress = false;
  }
}

function showResponse(response) {
  let validationErrors = response.errors;
  if (validationErrors) {
    Object.keys(validationErrors).map(function(key) {
      let messageHolder = document.querySelector('#'+form.id + ' .' + key);
      let inputField = document.querySelector('#'+form.id + ' [name=' + key + ']');
      if (messageHolder) {
        messageHolder.innerText = validationErrors[key];
      }
      if (inputField) {
        inputField.classList.add('error');
      }
    });
  } else {
    let el = document.getElementById('ContactMessageResponse');
    el.classList.add(response.error ? 'error' : 'success');
    el.innerText = response.message;
  }
}

function clearErrors() {
  let inputsWithErrors = [...document.getElementsByClassName('error')];
  inputsWithErrors.forEach(function (input) {
    input.classList.remove('error');
  });
  let errorMessages = [...form.getElementsByClassName('error-message')];
  errorMessages.forEach(function (message) {
    message.innerText = '';
  });
}

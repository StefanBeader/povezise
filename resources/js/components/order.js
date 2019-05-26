import Request from './request'
import FormData from './getFormData'

let requestInProgress = false;

const orderButtons = [...document.getElementsByClassName('order-btn')];
const modal = document.getElementById('tryFreeModal');
let packageId;

let form = document.getElementById('order-form');
document.getElementById('submit-order-form').addEventListener('click', submitForm, false);
form.addEventListener('submit', submitForm, false);

orderButtons.forEach(function (button) {
  button.addEventListener('click', handleClick, false);
});

document.getElementById('close-form').addEventListener('click', closeModal, false);

document.getElementById('howToContactDropdown').addEventListener('change', howToContact, false);

function handleClick(e) {
  packageId = e.target.dataset.id;
  document.getElementById('package-name').innerText = e.target.dataset.name;
  openModal();
}

function openModal() {
  modal.classList.add('open');
}

function closeModal() {
  modal.classList.remove('open');
}

async function submitForm(e) {
  e.preventDefault();
  if (!requestInProgress) {
    clearErrors();
    requestInProgress = true;
    let data = FormData(form);
    data['package_id'] = packageId;
    let response = await Request('/sendOrder', data);
    showResponse(response);
    if (!response.errors) {
      form.reset();
    }
    requestInProgress = false;
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
    let el = document.getElementById('OrderResponseMessage');
    el.classList.add(response.error ? 'error' : 'success');
    el.innerText = response.message;
  }
}

function howToContact(e) {
  let option = e.target.value;
  let input = getInputByOption(option);
  if (input) {
    displayInput(input);
  } else {
    hideInput();
  }
}

function getInputByOption(option) {
  let input = null;

  switch (option) {
    case 'viber':
      input = {
        label: 'Broj Telefona',
        html: '<input name="contact_value" type="tel" />'
      }
      break;
    case 'whatsApp':
      input = {
        label: 'Broj Telefona',
        html: '<input name="contact_value" type="tel" />'
      }
      break;
    case 'sms':
      input = {
        label: 'Broj Telefona',
        html: '<input name="contact_value" type="tel" />'
      }
      break;
    case 'mail':
      input = {
        label: 'Mail Adresa',
        html: '<input name="contact_value" type="email" />'
      }
      break;
  }
  return input;
}

function displayInput(input) {
  let wrapper = document.getElementById('howToContactInput');
  wrapper.innerHTML = "";

  wrapper.innerHTML =
    '<label>' + input.label + '</label>' +
    input.html +
    '<span class="error-message contact_value"></span>';
}

function hideInput() {
  let wrapper = document.getElementById('howToContactInput');
  wrapper.innerHTML = "";
}
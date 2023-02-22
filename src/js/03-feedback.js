import throttle from 'lodash.throttle';
const form = document.querySelector('form');

let feedbackFormState = {
  email: '',
  message: '',
};
let storedData = JSON.parse(localStorage.getItem('feedback-form-state'));
feedbackFormState.email = storedData ? storedData.email : '';
feedbackFormState.message = storedData ? storedData.message : '';
const email = document.querySelector('input');
const message = document.querySelector('textarea');
email.setAttribute('value', feedbackFormState.email);
message.value = feedbackFormState.message;
form.addEventListener('input', formTrack);
form.addEventListener('input', throttle(saveStateToLocalStorage, 500));
form.addEventListener('submit', formSubmit);

function formTrack(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  feedbackFormState = { ...feedbackFormState, email: `${email.value}` };
  feedbackFormState = { ...feedbackFormState, message: `${message.value}` };
  console.log(`Email: ${email.value}, Message: ${message.value}`);
}

function formSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  feedbackFormState = { ...feedbackFormState, email: '' };
  feedbackFormState = { ...feedbackFormState, message: '' };
  console.log(`Email: ${email.value}, Password: ${message.value}`);
  event.currentTarget.reset();
  email.setAttribute('value', '');
  localStorage.clear();
}

function saveStateToLocalStorage() {
  console.log(`saved to storage ${feedbackFormState}`);
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}

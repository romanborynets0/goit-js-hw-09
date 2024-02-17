const feedbackForm = document.querySelector('.feedback-form');
const emailForm = document.querySelector('[name="email"]');
const messageForm = document.querySelector('[name="message"]');

function loadSavedData() {
  const savedFeedback = localStorage.getItem('feedback-form-state');
  if (savedFeedback) {
    try {
      const parsedFeedback = JSON.parse(savedFeedback);
      emailForm.value = parsedFeedback.email;
      messageForm.value = parsedFeedback.message;
    } catch (error) {
      console.error('Error parsing saved feedback:', error);
    }
  }
}

function validateFields() {
  return emailForm.value.trim() !== '' && messageForm.value.trim() !== '';
}

function saveDataToLocalStorage() {
  const email = emailForm.value.trim();
  const message = messageForm.value.trim();

  const dataInput = {
    email: email,
    message: message,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(dataInput));
}

feedbackForm.addEventListener('input', event => {
  saveDataToLocalStorage();
});

document.addEventListener('DOMContentLoaded', () => {
  loadSavedData();
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  if (validateFields()) {
    const submittedEmail = emailForm.value.trim();
    const submittedMessage = messageForm.value.trim();

    console.log({
      email: submittedEmail,
      message: submittedMessage,
    });

    emailForm.value = '';
    messageForm.value = '';

    localStorage.removeItem('feedback-form-state');
  } else {
    console.error('Please fill in all fields.');
  }
});

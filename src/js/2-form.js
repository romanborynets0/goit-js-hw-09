const feedbackForm = document.querySelector('.feedback-form');
const emailForm = document.querySelector('[name="email"]');
const messageForm = document.querySelector('[name="message"]');

feedbackForm.addEventListener('input', event => {
  const email = emailForm.value;
  const message = messageForm.value;

  const dataInput = {
    email: email,
    message: message,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(dataInput));
});

const savedFeedback = localStorage.getItem('feedback-form-state');
if (savedFeedback !== null) {
  const parsedFeedback = JSON.parse(savedFeedback);
  emailForm.value = parsedFeedback.email;
  messageForm.value = parsedFeedback.message;
}

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  const submitedEmail = emailForm.value;
  const submitedMessage = messageForm.value;

  console.log({
    email: submitedEmail,
    message: submitedMessage
  });

  emailForm.value = '';
  messageForm.value = '';

  localStorage.removeItem('feedback-form-state');
})


var modalContainer = document.getElementById('signup-modal');
var modalBackground = document.getElementById('modal-background');
var showSignup = document.getElementById('show-signup-modal');
var createUserBtn = document.getElementById('create-user')
var closeFavorites = document.getElementById('close-favorites');

const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && username && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

// Show signup modal form on button click
showSignup.addEventListener('click', function (e) {
  e.preventDefault();
  modalContainer.classList.add('is-active');
})

// Close signup modal form on button click
closeFavorites.addEventListener('click', function (e) {
  e.preventDefault();
  modalContainer.classList.remove('is-active');
})

// Close signup modal form on modal background click
modalBackground.addEventListener('click', function (e) {
  e.preventDefault();
  modalContainer.classList.remove('is-active');
})

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .getElementById('create-user')
  .addEventListener('click', signupFormHandler);
const username = document.querySelector('#usernameInput');
const firstNameInput = document.querySelector('#firstNameInput');
const surnameInput = document.querySelector('#surnameInput');
const dateOfBirthInput = document.querySelector('#dateOfBirthInput');

// must be a mix of letters, numbers and at least one special character
const usernameRegex = /([\w\d]*[!@#$%^&*]+[\w\d]*)/;

// only allow letters, spaces, hyphens and apostrophes
const nameRegex = /^\w[a-z' -]+$/;

// add a 'blur' event onto the input fields so validation can be checked once clicked off the input field
username.addEventListener('change', (event) => {
  validateInput(event, usernameRegex);
});

firstNameInput.addEventListener('blur', (event) => {
  validateInput(event, nameRegex);
});

surnameInput.addEventListener('blur', (event) => {
  validateInput(event, nameRegex);
});

dateOfBirthInput.addEventListener('blur', (event) => {
  validateInput(event, 18, true);
});

function calculateAge(birthday) {
  const today = new Date();
  const birthDate = new Date(birthday);
  const m = today.getMonth() - birthDate.getMonth();
  let age = today.getFullYear() - birthDate.getFullYear();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function validateInput(event, regex, age) {
  const value = event.target.value;
  if (age) {
    if (calculateAge(value) > 17) {
      event.target.className = 'valid';
    } else {
      event.target.className = 'invalid';
    }
  } else {
    if (regex.test(value)) {
      event.target.className = 'valid';
      console.log(event.target.className);
    } else {
      event.target.className = 'invalid';
      console.log(event.target.className);
    }
  }
}

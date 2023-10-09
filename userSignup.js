// this function fetches countries from rest countries api 
fetch('https://restcountries.com/v2/all')
  .then(response => response.json())
  .then(data => {
    const countrySelect = document.getElementById('country');
    data.forEach(country => {
      const option = document.createElement('option');
      option.value = country.name;
      option.textContent = country.name;
      countrySelect.appendChild(option);
    });
  });

// Form validation
const form = document.getElementById('registrationForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Add your validation logic here
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const country = document.getElementById('country').value;
  const agree = document.getElementById('agree').checked;

  // validating our password
  const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/;
  const isPasswordValid = passwordPattern.test(password);

  if (!isPasswordValid) {
    alert('Your password must be 8 or more characters long, contain at least one uppercase, lowercase letters, numbers, special characters and must not contain spaces, or emoji.')
  }

  if (firstname === '' || lastname === '' || username === '' || !isPasswordValid || email === '' || phone === '' || country === '' || !agree) {
    alert('Please fill in all the required fields and agree to the terms and conditions.');
    // return;
  } else {
    alert(`Registration succesful ${firstname}! Redirecting to login....`)
    window.location.href = 'login.html';
  }
});



//Login 
// Sample user data (for demo purposes)
const userData = {
  username: 'demoUser',
  password: 'demoPassword'
};

// Form submission and validation
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Retrieve user inputs
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const rememberMe = document.getElementById('rememberMe').checked;

  // Check if the inputs match the user data (demo purposes)
  if (username === userData.username && password === userData.password) {
    alert('Login successful!'); // You can replace this with a redirection to another page
  } else {
    alert('Invalid username or password. Please try again.');
  }
});
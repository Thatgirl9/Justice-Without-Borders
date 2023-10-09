const form = document.querySelector('#regForm');

const fnameInput = document.querySelector('#fname');

const lnameInput = document.querySelector('#lname');

const emailInput = document.querySelector('#emailAdd');

const phoneInput = document.querySelector('#phoneNum');

const addressInput = document.querySelector('#address');

const countryInput = document.querySelector('#country');

const cityInput = document.querySelector('#city');

const degreeInput = document.querySelector('#degree');

const yrsofexprienceInput = document.querySelector('#yrsofexprience');

const areaofspecialInput = document.querySelector('#areaofspecial');

const usernameInput = document.querySelector('#username');

const passwordInput = document.querySelector('#password');

const confirmPasswordInput = document.querySelector('#confirm-password');



form.addEventListener('submit', (event) => {



  validateForm();

  console.log(isFormValid());

  if (isFormValid() == true) {

    form.submit();

  } else {

    event.preventDefault();

  }



});



function isFormValid() {

  const inputContainers = form.querySelectorAll('.form-outline');

  let result = true;

  inputContainers.forEach((container) => {

    if (container.classList.contains('error')) {

      result = false;

    }

  });

  return result;

}



function validateForm() {

  //FIRSTNAME

  if (fnameInput.value.trim() == '') {

    setError(fnameInput, 'First Name can not be empty');

  } else if (fnameInput.value.trim().length < 5 || fnameInput.value.trim().length > 15) {

    setError(fnameInput, 'First Name must be min 5 and max 15 charecters');

  } else {

    setSuccess(fnameInput);

  }

  //LASTNAME

  if (lnameInput.value.trim() == '') {

    setError(lnameInput, 'Last Name can not be empty');

  } else if (lnameInput.value.trim().length < 5 || lnameInput.value.trim().length > 15) {

    setError(lnameInput, 'Last Name must be min 5 and max 15 charecters');

  } else {

    setSuccess(lnameInput);

  }

  //EMAIL

  if (emailInput.value.trim() == '') {

    setError(emailInput, 'Provide email address');

  } else if (isEmailValid(emailInput.value)) {

    setSuccess(emailInput);

  } else {

    setError(emailInput, 'Provide valid email address');

  }



  //PHONE

  if (phoneInput.value.trim() == '') {

    setError(phoneInput, 'Phone Number can not be empty');

  } else if (phoneInput.value.trim().length < 6 || phoneInput.value.trim().length > 13) {

    setError(phoneInput, 'Phone Number min 6 max 13 charecters');

  } else {

    setSuccess(phoneInput);

  }

  //ADDRESS

  if (addressInput.value.trim() == '') {

    setError(addressInput, 'Address can not be empty');

  } else if (addressInput.value.trim().length < 6 || addressInput.value.trim().length > 50) {

    setError(addressInput, 'Address min 6 max 50 charecters');

  } else {

    setSuccess(addressInput);

  }

  //COUNTRY

  if (countryInput.value.trim() == '') {

    setError(countryInput, 'country can not be empty');

  } else if (countryInput.value.trim().length < 6 || countryInput.value.trim().length > 20) {

    setError(countryInput, 'country min 6 max 20 charecters');

  } else {

    setSuccess(countryInput);

  }

  //CITY

  if (cityInput.value.trim() == '') {

    setError(cityInput, 'city can not be empty');

  } else if (cityInput.value.trim().length < 6 || cityInput.value.trim().length > 20) {

    setError(cityInput, 'city min 6 max 20 charecters');

  } else {

    setSuccess(cityInput);

  }

  //DEGREE

  if (degreeInput.value.trim() == '') {

    setError(degreeInput, 'degree can not be empty');

  } else if (degreeInput.value.trim().length < 6 || degreeInput.value.trim().length > 50) {

    setError(degreeInput, 'degree min 6 max 50 charecters');

  } else {

    setSuccess(degreeInput);

  }

  //YRS OF EXPERIENCE

  if (yrsofexprienceInput.value.trim() == '') {

    setError(yrsofexprienceInput, 'years of experience can not be empty');

  } else if (yrsofexprienceInput.value.trim().length < 6 || yrsofexprienceInput.value.trim().length > 20) {

    setError(yrsofexprienceInput, 'years of experience min 6 max 20 charecters');

  } else {

    setSuccess(yrsofexprienceInput);

  }

  //AREAS OF SPECIALICIATION

  if (areaofspecialInput.value.trim() == '') {

    setError(areaofspecialInput, 'area of specialization can not be empty');

  } else if (areaofspecialInput.value.trim().length < 6 || areaofspecialInput.value.trim().length > 20) {

    setError(areaofspecialInput, 'area of specialization min 6 max 20 charecters');

  } else {

    setSuccess(areaofspecialInput);

  }

  //USERNAME

  if (usernameInput.value.trim() == '') {

    setError(usernameInput, 'Name can not be empty');

  } else if (usernameInput.value.trim().length < 5 || usernameInput.value.trim().length > 15) {

    setError(usernameInput, 'Name must be min 5 and max 15 charecters');

  } else {

    setSuccess(usernameInput);

  }

  //PASSWORD

  if (passwordInput.value.trim() == '') {

    setError(passwordInput, 'Password can not be empty');

  } else if (passwordInput.value.trim().length < 6 || passwordInput.value.trim().length > 20) {

    setError(passwordInput, 'Password min 6 max 20 charecters');

  } else {

    setSuccess(passwordInput);

  }

  //CONFIRM PASSWORD

  if (confirmPasswordInput.value.trim() == '') {

    setError(confirmPasswordInput, 'Password can not be empty');

  } else if (confirmPasswordInput.value !== passwordInput.value) {

    setError(confirmPasswordInput, 'Password does not match');

  } else {

    setSuccess(confirmPasswordInput);

  }



}



function setError(element, errorMessage) {

  const parent = element.parentElement;

  if (parent.classList.contains('success')) {

    parent.classList.remove('success');

  }

  parent.classList.add('error');

  const paragraph = parent.querySelector('p');

  paragraph.textContent = errorMessage;

}



function setSuccess(element) {

  const parent = element.parentElement;

  if (parent.classList.contains('error')) {

    parent.classList.remove('error');

  }

  parent.classList.add('success');

}



function isEmailValid(email) {

  const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;



  return reg.test(email);

}
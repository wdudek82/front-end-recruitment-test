const checkoutForm = document.querySelector('.checkout-form');

/**
* @param {EventObject} e - form data
*/
function handleFormSubmit(e) {
  e.preventDefault();
  console.log(e.target);
  console.log(e.target.elements);

  const fname = e.target.elements['fname'];
  const lname = e.target.elements['lname'];
  const email = e.target.elements['email'];
  const postalCode = e.target.elements['postal'];
  const phone = e.target.elements['phone'];
  const creditCardNumber = e.target.elements['credit-card'];
  const securityCode = e.target.elements['security-code'];
  const expirationDate = e.target.elements['expiration-date'];

  validateName(fname);
  validateName(lname);
  validateEmail(email);
  validatePhone(phone);
  validatePostalCode(postalCode);
  validateCreditCardNumber(creditCardNumber);
  validateSecurityCode(securityCode);
  validateExpirationDate(expirationDate);
}

/**
* @param {EventObject} element - input or select field
* @param {string} className - class name to append to the element
*/
function outputValidationResults(element, className) {
  if (className === 'invalid') {
    element.classList.remove('valid');
  } else if (className === 'valid') {
    element.classList.remove('invalid');
  }

  element.classList.add(className);

  // setTimeout(() => {
  //   element.classList.remove(className);
  // }, 1000);
}

/**
* @param {string} name - first or last name
*/
function validateName(name) {
  const nameRegex = /^[A-Za-z]{3,20}$/;

  let appendedClass = 'invalid';

  if (name.value.match(nameRegex)) {
    appendedClass = 'valid';
  }

  outputValidationResults(name, appendedClass);
}

/**
* @param {string} email - email
*/
function validateEmail(email) {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let appendedClass = 'invalid';

  if (email.value.match(emailRegex)) {
    appendedClass = 'valid';
  }

  outputValidationResults(email, appendedClass);
}

/**
* @param {string} postalCode - postalCode
*/
function validatePostalCode(postalCode) {
  const postalCodeRegex = /^[0-9]{5}$/;

  let appendedClass = 'invalid';

  if (postalCode.value.match(postalCodeRegex)) {
    appendedClass = 'valid';
  }

  outputValidationResults(postalCode, appendedClass);
}

/**
* @param {string} phone - phone
*/
function validatePhone(phone) {
  const phoneRegex = /^(\(\d{1,3}\)\s)?\(?\d{3}\)?[\s.-]\d{2}[\s.-]\d{2}$/;

  let appendedClass = 'invalid';

  if (phone.value.match(phoneRegex)) {
    appendedClass = 'valid';
  }

  outputValidationResults(phone, appendedClass);
}

/**
* @param {number} creditCardNumber - creditCardNumber
*/
function validateCreditCardNumber(creditCardNumber) {
  console.log(fname);
  creditCardNumber.classList.add('invalid');
}

/**
* @param {string} securityCode - securityCode
*/
function validateSecurityCode(securityCode) {
  console.log(fname);
  securityCode.classList.add('invalid');
}

/**
* @param {string} expirationDate - expirationDate
*/
function validateExpirationDate(expirationDate) {
  console.log(fname);
  expirationDate.classList.add('invalid');
}

checkoutForm.addEventListener('submit', handleFormSubmit);

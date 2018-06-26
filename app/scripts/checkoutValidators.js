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
* @param {string} errorMsg - string containing error message
*/
function outputValidationResults(element, className, errorMsg) {
  console.log(element.parentNode);

  if (className === 'invalid') {
    element.classList.remove('valid');
    element.parentNode.setAttribute('data-value', errorMsg);
  } else if (className === 'valid') {
    element.classList.remove('invalid');
    element.parentNode.setAttribute('data-value', '');
  }

  element.classList.add(className);
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

  const errorMessage = 'At least 3 letters long!';

  outputValidationResults(name, appendedClass, errorMessage);
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

  const errorMessage = 'Ivalid email format!';

  outputValidationResults(email, appendedClass, errorMessage);
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

  const errorMessage = 'Has to contain exactly 5 digits!';

  outputValidationResults(postalCode, appendedClass, errorMessage);
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

  const errorMessage = 'Invalid phone number format!';

  outputValidationResults(phone, appendedClass, errorMessage);
}

/**
* @param {number} creditCardNumber - creditCardNumber
*/
function validateCreditCardNumber(creditCardNumber) {
  const creditCardNumberRegex = /^(\d{4}[\s.-]?){3}\d{4}$/;

  let appendedClass = 'invalid';

  if (creditCardNumber.value.match(creditCardNumberRegex)) {
    appendedClass = 'valid';
  }

  const errorMessage = 'Invalid credit card number! Allowed separators: -, . or space.';

  outputValidationResults(creditCardNumber, appendedClass, errorMessage);
}

/**
* @param {string} securityCode - securityCode
*/
function validateSecurityCode(securityCode) {
  const securityCodeRegex = /^\d{3}$/;

  let appendedClass = 'invalid';

  if (securityCode.value.match(securityCodeRegex)) {
    appendedClass = 'valid';
  }

  const errorMessage = 'Has to contain exactly 3 digits!';

  outputValidationResults(securityCode, appendedClass, errorMessage);
}

/**
* @param {string} expirationDate - expirationDate
*/
function validateExpirationDate(expirationDate) {
  const expirationDateRegex = /^(0?[1-9]|1[012])[/-](\d{2})$/;

  let appendedClass = 'invalid';

  if (expirationDate.value.match(expirationDateRegex)) {
    appendedClass = 'valid';
  }

  const errorMessage = 'Invalid date format! Allowed: MM/YY or MM-YY.';

  outputValidationResults(expirationDate, appendedClass, errorMessage);
}

checkoutForm.addEventListener('submit', handleFormSubmit);

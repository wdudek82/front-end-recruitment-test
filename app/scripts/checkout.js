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

  validateFirstName(fname);
  validateLastName(lname);
  validateEmail(email);
  validatePhone(phone);
  validatePostalCode(postalCode);
  validateCreditCardNumber(creditCardNumber);
  validateSecurityCode(securityCode);
  validateExpirationDate(expirationDate);
}

/**
* @param {string} fname - first name
*/
function validateFirstName(fname) {
  console.log(fname);
  fname.classList.add('invalid');
}

function validateLastName(lname) {
  console.log(lname);
  
  lname.classList.add('invalid');
}

function validateEmail(email) {
  console.log(email);
  email.classList.add('invalid');
}

function validatePostalCode(postalCode) {
  console.log(postalCode);
  postalCode.classList.add('invalid');
}

function validatePhone(phone) {
  console.log(phone);
  phone.classList.add('invalid');
}

function validateCreditCardNumber(creditCardNumber) {
  console.log(fname);
  creditCardNumber.classList.add('invalid');
}


function validateSecurityCode(securityCode) {
  console.log(fname);
  securityCode.classList.add('invalid');
}

function validateExpirationDate(expirationDate) {
  console.log(fname);
  expirationDate.classList.add('invalid');
}

checkoutForm.addEventListener('submit', handleFormSubmit);

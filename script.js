const firstNameInput = document.getElementById("first-name-input");
const lastNameInput = document.getElementById("last-name-input");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const submitBtn = document.getElementById("submit-btn");

function validateEmail(s) {
  var a = s.indexOf("@"),
    i = s.lastIndexOf(".");
  return a > 0 && i > a + 1 && i < s.length - 1;
}

function clearValidationClasses(inputElement) {
  inputElement.classList.remove("is-valid");
  inputElement.classList.remove("is-invalid");
}

firstNameInput.addEventListener("keyup", () => {
  clearValidationClasses(firstNameInput);
});

lastNameInput.addEventListener("keyup", () => {
  clearValidationClasses(lastNameInput);
});

emailInput.addEventListener("keyup", () => {
  clearValidationClasses(emailInput);
});

passwordInput.addEventListener("keyup", () => {
  clearValidationClasses(passwordInput);
});

submitBtn.onclick = () => {
  let isFirstNameOk = false;
  let isLastNameOk = false;
  let isEmailOk = false;
  let isPasswordOk = false;

  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  if (lastNameInput.value === "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }

  if (!validateEmail(emailInput.value)) {
    emailInput.classList.add("is-invalid");
  } else {
    emailInput.classList.add("is-valid");
    isEmailOk = true;
  }

  if (passwordInput.value.length >= 6) {
    passwordInput.classList.add("is-valid");
    isPasswordOk = true;
  } else {
    passwordInput.classList.add("is-invalid");
  }

  if (isFirstNameOk && isLastNameOk && isEmailOk && isPasswordOk) {
    alert("Registered successfully");
  }
};

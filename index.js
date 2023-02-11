const emailInputEl = document.getElementById("email");
const emailBtnEl = document.getElementById("email-btn");
const errorMessageEl = document.getElementById("error-message");

emailBtnEl.addEventListener("click", () => {
  if (!emailInputEl.value) {
    emailInputEl.classList.add("invalid");
    errorMessageEl.classList.add("active");
  } else if (!validateEmail(emailInputEl.value)) {
    emailInputEl.classList.add("invalid");
    errorMessageEl.classList.add("active");
  } else {
    alert("Thank you! We will get back to you!");
  }
});

emailInputEl.addEventListener("input", () => {
  emailInputEl.classList.remove("invalid");
  errorMessageEl.classList.remove("active");
});

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// const emailInput = document.getElementById("email");
// emailInput.value = "john@gmail.com";
// console.log(emailInput.value);

const form = document.getElementById("student-form");
const emailInput = form.elements["email"]; // name="email"

function onSubmit(event) {
  event.preventDefault();
  //   console.log("Subbmit");
  console.log(emailInput.value);
  emailInput.value = "";
}

form.addEventListener("submit", onSubmit);

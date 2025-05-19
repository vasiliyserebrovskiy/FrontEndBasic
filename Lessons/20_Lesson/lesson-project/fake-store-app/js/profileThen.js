const form = document.getElementById("login-form");
const loginErrorElement = document.getElementById("login-form-err");

form.addEventListener("submit", loginHandler);

function loginHandler(event) {
  event.preventDefault();
  //   console.log("TEST");
  console.log(form.email.value);
  console.log(form.password.value);
  const credentials = {
    email: form.email.value,
    password: form.password.value,
  };

  fetch("https://api.escuelajs.co/api/v1/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      if (res.status === 401) {
        throw new Error("Wrong password or email!");
      }
      throw new Error("Auth error");
    })
    .then((obj) => {
      console.log(obj);
      loginErrorElement.textContent = "";
    })
    .catch((err) => {
      console.log(err);
      loginErrorElement.textContent = err.message;
      loginErrorElement.style.color = "red";
    });
}

// then --> await
// await можно использовать только внутри функции которая является асинхронной
//если функция является асинхронной, то при объявлении функции указывается слово async

const form = document.getElementById("login-form");
const errElement = document.getElementById("login-form-err");

form.addEventListener("submit", loginHandler);

function loginHandler(event) {
  event.preventDefault();
  fetchLogin();
}

async function fetchLogin() {
  try {
    const credentials = {
      email: form.elements["email"].value,
      password: form.elements["password"].value,
    };

    const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!res.ok) {
      if (res.status === 401) {
        throw new Error("Wrong password or email");
      }
      throw new Error("Login error");
    }

    const obj = await res.json();

    const { access_token } = obj;
    //console.log(access_token);
    localStorage.setItem("access_token", access_token); // Сохраняем полученный нами токен в localStorage
    //в браузере есть способы хранения:
    // 1 sessionStorage - только в течении сессии (сохраняем сами)
    // 2 localStorage - хранит пока не удалили
    // 3 cookies - инфа на сайте, которая может добавляться к запросам, сохраняется сама

    errElement.innerText = "";
    // window.location.href = "/profile";
    window.location.replace("/profile");
  } catch (err) {
    errElement.innerText = err.message;
    errElement.style.color = "red";
  }
}

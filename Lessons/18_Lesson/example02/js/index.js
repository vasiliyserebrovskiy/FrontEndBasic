const heading = document.getElementById("heading");
const pirateImg = document.getElementById("pirate-pic");
const favDrink = document.getElementById("fav-drink");
const parrotsContainer = document.getElementById("parrots-container");
pirateImg.style.width = "200px";

fetch("https://vasiliyserebrovskiy.github.io/fake-pirate/joe-sparrow.json")
  // Promise<response>
  .then((res) => {
    // console.log(res);
    console.log(res.status);
    console.log(res.ok);
    if (res.status === 404) {
      throw new Error("Custom not found message");
    }
    // res.json();
    if (res.ok) {
      return res.json(); // разбирает ответ в объект из JSON. res.text() - вернет просто строку ответа
    } else {
      throw new Error("Something went wrong!");
    }
  })
  .then((data) => {
    console.log(data); // обязательно смотрим что нам прилетело, чтобы правильно разобрать
    const { name, url, favouriteDrink, parrots } = data;
    heading.innerText = name;
    pirateImg.src = url;
    favDrink.innerText = favouriteDrink;
    parrots.forEach((parrot) => {
      const parrotElement = document.createElement("li");
      parrotElement.innerText = parrot.name;
      parrotsContainer.appendChild(parrotElement);
    });
  })
  .catch((err) => console.log(err.message));

// json() - Promise<obj>
//   .then((data) => {
//     console.log(data);
//   });

//по умолчанию fetch получить - GET
//создать POST

//HTTP - протокол (правила) взаимодействия сервера и клиента
// 200 - ok - получили
// 400 - bad request
// 401 - unauthorized
// 403 - access denied
// 404 - не найдено
// 500 - server error

// 200 - 299 - положительные ответы
// 300 - 400 - redirect
// 400 - 500 - ошибки

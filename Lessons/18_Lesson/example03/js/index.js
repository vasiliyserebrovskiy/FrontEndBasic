//http
// status
// method - метод
// GET - получение
// POST - создать запись
// DELETE - удалить запись
//

// Структура запроса
// url - куда идет запрос unified resource locator
// http://domen/path
// протокол соединения http или https
// домен - адрес сайта
// path - путь
// ?<> - параметры запроса query params

// https://dummyjson.com/docs/products#products-category
function fetchProducts() {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err.message));
}

function fetchProductsById(id) {
  fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((product) => {
      console.log(product);
    })
    .catch((err) => console.log(err.message));
}

fetchProductsById(2);

//POST запрос - используется для создания записи
// Запрос на логин

fetch("https://dummyjson.com/auth/login", {
  method: "POST",
  body: JSON.stringify({
    username: "emilys",
    password: "emilyspass",
  }),
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

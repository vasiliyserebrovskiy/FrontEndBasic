/*
 📘 Задание 2 — Промис с рандомной ошибкой
Создайте Promise, который с одинаковой вероятностью (50/50):

либо возвращает строку "Best day of my life"
либо выбрасывает ошибку с сообщением "Something is off"
Затем обработайте результат с помощью .then() и .catch().
 */

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

const getMessagePromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (getRandomNumber(2)) resolve("Best day of my life");
    reject(new Error("Something is off"));
  }, 2000);
});

getMessagePromise
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err.message));

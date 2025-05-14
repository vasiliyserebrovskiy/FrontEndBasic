//Promise

// fulfilled - удовлетворен
// rejected - отклонено, забыли
// pending - ожидание

// сначала pending, а потом по обстоятельствам: либо fulfilled либо rejected

// Асинхронные функции нам возвращают Promise и мы ждем его результат

// создаем промис, который возвращает нам бургер

const burgerPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Tasty burger");
  }, 3000);
});

console.log(burgerPromise); //Promise { <pending> }

//как дождаться значения promise или раскрыть промис
//метод then - ждет появление значения
burgerPromise.then((burger) => console.log("Внутри колбэка: ", burger));

console.log("Вне колбэка бургера:", burgerPromise);

const badPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject(new Error("The kitchen is on fire!"));
  }, 3000);
});

badPromise
  .then((burger) => console.log(burger))
  .catch((err) => {
    console.log("Error:", err.message);
  });

// случайное число 0 или 1
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

// console.log(getRandomNumber(2));

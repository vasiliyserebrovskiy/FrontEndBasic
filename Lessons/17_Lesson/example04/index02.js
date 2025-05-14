// случайное число 0 или 1
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

// console.log(getRandomNumber(2));

// при успехе here is your 3dPrinter
// Error: "You didn't behave this year!"
const printerPresent = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (getRandomNumber(2)) {
      resolve("Here is your 3dPrinter");
    }
    reject(new Error("Error: You didn't behave this year!"));
  }, 2000);
});

printerPresent
  .then((printer) => console.log(printer))
  .catch((err) => console.log(err.message));

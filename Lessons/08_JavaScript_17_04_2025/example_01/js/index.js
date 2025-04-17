console.log("Hello, Vasiliy");

// Переменная x равна 6

// 7 Примитивных типов данных
//Тип number
let x; // объявили переменную

x = 10; //присвоили значение - инициализировали переменную

console.log("x = " + x);

// дробные числа тоже number
let y = 12.5;

console.log("y = " + y);

x = y; // 12.5

// Стринг в переменную
x = "Ten";

console.log(x);

let name = "Vasiliy";
console.log("name = " + name);

//BigInt - после цифры указывается значение n (для очень крупных чисел)
let z = 123123n;

let message; //undefined - переменная не определена.
console.log(message);

// Тип null
let secondName = null;
console.log(secondName);

//Тип boolean
let isMale = true;
console.log(isMale);

let isBigger = 10 > 4;
console.log(isBigger);

const m = 12;
// m = 13; // нельзя перезаписывать константу

const COLOR_RED = "#F00";

// symbol
const symbol = Symbol("key"); // Генерит уникальный код. К примеру для ключей объекта
console.log(symbol);

// yНе примитивный тип Object

const user = {
  email: "sitool@gmail.com",
};
console.log(user);

// Преобразование типов
// falsy values - то что будет преобразовываться в false

//Casting
// явное и неявное приведение типов

//Явное приведение
// 10 -> "10"
let ten = 10;
let tenAsString = String(ten);
console.log(tenAsString);
console.log(typeof ten);
console.log(typeof tenAsString);
console.log(typeof tenAsString === "string");
// Не явное преобразование к String

let elewenAsString = 11 + ""; //конкатенация автоматом -> строка String
console.log(elewenAsString);

// String к числу

let eleven = Number(elewenAsString);
console.log(eleven + " " + typeof eleven);

let wrongNumber = Number("asdsgjkhkjhfjkdsf");
console.log(wrongNumber); // NaN - not a number - это особое значение
console.log(typeof wrongNumber); // тип у него number

// Infinity - бесконечность( есть и минус бесконечность) тип number. Тоже особое значение
if (x < Infinity) {
  console.log("Bla");
}

// Самое интересное - преобразование в boolean

//Явное преобразование

console.log(Boolean("Vasilii")); // true
console.log(Boolean("Vasilii")); // true

// Falsy values
console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false

// Все остальное истина

const myMoneyPoint = 12;
const myBrotherMoneyPoint = 0;

if (myMoneyPoint) {
  console.log("I'm reach"); // выполниться
}
if (myBrotherMoneyPoint) {
  console.log("I'm reach"); // не выполниться
}

let myUser = null;
if (myUser) {
  console.log("User exists");
}

myUser = { email: "user@gmail.com" };

if (myUser) {
  console.log("User exists");
  console.log(myUser.email);
}

// Шаблонные строки
const myAge = 42;
const myName = "Vasiliy";

// const text = "Меня зовут " + myName + " и мой возраст " + myAge;
const text = `Меня зовут ${myName}. Мне ${myAge} года.`;
console.log(text);

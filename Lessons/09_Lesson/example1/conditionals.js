// Условные оператор
// if() else ()

let age = 20;
if (age > 21) {
  console.log("You can by alcohol");
} else {
  console.log("You can't by alcohol");
}

// let age = 20;
if (age > 21) {
  console.log("You can by alcohol");
} else if (age === 1) {
  console.log("Milk is a best option for you.");
} else {
  console.log("You can't by alcohol");
}

// switch
const country = "Iran";
switch (country) {
  case "UK":
    console.log("London");
    break;
  case "German":
    console.log("Berlin");
    break;
  case "USA":
    console.log("Washington DC");
    break;
  default:
    console.log("Country is unknown");
    break;
}

// Свич кейс myAge
const myAge = 45;
switch (myAge) {
  case 1:
    console.log("малыш");
    break;
  case 2:
    console.log("ползунок");
    break;
  case 5:
    console.log("дошкольник");
    break;
  case 16:
    console.log("подросток");
    break;
  case 45:
    console.log("зрелый");
    break;
  default:
    console.log("отличный возраст");
    break;
}

console.log(12 - 3 + true + "12" + Boolean(NaN)); //1012false

// Функция - часть кода, который можно использовать повторно
// functional declaration
function neighbour(time) {
  if (time > 0 && time < 8) {
    console.log("DRRRR-rrrr-rrr");
    return "DRRRR-rrrr-rrr";
  }
}

neighbour(); // вызов функции - call a function

const result = neighbour(5);
console.log(result); //undefined

{
  const animal = "Panda";
  console.log("animal = " + animal);
}
// console.log("animal = " + animal); // --> animal is not defined - переменная объявлена внутри блока

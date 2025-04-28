/*
Задание 2
Создайте функцию, которая бы принимала бы один параметр - код погоды.

Функция должна возвращать строку, описывающую погоду.

Таблица соответствия кода-описание:
SQ – шквал
PO – пыльный вихрь
FC - торнадо
BR – дымка (видимость от 1 до 9 км)
HZ – мгла (видимость менее 10 км)
FU – дым (видимость менее 10 км)
DS - пыльная буря (видимость менее 10 км)
SS - песчаная буря (видимость менее 10 км)
*/

function weatherDescription(weatherCode) {
  switch (weatherCode) {
    case "SQ":
      return "шквал";
    case "PO":
      return "пыльны вихрь";
    case "FC":
      return "торнадо";
    case "BR":
      return "дымка видимость от 1 до 9 км)";
    case "HZ":
      return "мгла (видимость менее 10 км)";
    case "FU":
      return "дым (видимость менее 10 км)";
    case "DS":
      return "пыльна буря (видимость менее 10 км)";
    case "SS":
      return "песчаная буря (видимость менее 10 км)";
    default:
      return "Код погоды не верный!";
  }
}
//Массив возможных значений + если нам придет что-то не то
const weatherValues = [
  "SQ",
  "PO",
  "FC",
  "BR",
  "HZ",
  "FU",
  "DS",
  "SS",
  null,
  "",
  undefined,
];
// Генерим значение индекса от 0 до 11
const weatherIndex = Math.floor(Math.random() * 11);
// console.log("index  " + weatherIndex); // отладочная проверка

const weatherCode = weatherValues[weatherIndex];

console.log(weatherDescription(weatherCode));

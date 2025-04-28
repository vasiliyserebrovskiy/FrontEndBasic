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
      console.log("шквал");
      break;
    case "PO":
      console.log("пыльный вихрь");
      break;
    case "FC":
      console.log("торнадо");
      break;
    case "BR":
      console.log("дымка (видимость от 1 до 9 км)");
      break;
    case "HZ":
      console.log("мгла (видимость менее 10 км)");
      break;
    case "FU":
      console.log("дым (видимость менее 10 км)");
      break;
    case "DS":
      console.log("пыльная буря (видимость менее 10 км)");
      break;
    case "SS":
      console.log("песчаная буря (видимость менее 10 км)");
      break;
    default:
      console.log("Код погоды не верный!");
      break;
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
//console.log("index = " + weatherIndex); // отладочная проверка

const weatherCode = weatherValues[weatherIndex];
weatherDescription(weatherCode);

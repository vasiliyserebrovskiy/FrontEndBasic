// const, let и var

let dog = "Sharik"; // объявление переменнои и инициализация
dog = "Tuzik"; // можем переназначать
console.log(dog);
dog = 12;
console.log(dog);

/*
string - строка
number - все номера включая дробные
bigInt - большие числа
boolean - true / false
undefined - переменная не проинициализирована
null - значение переменной отсутствует
symbol - 
*/
// 1. String
let str1 = "Можно в двойных";
let str2 = "Можно в одинарных";

let str3 = "13"; //  это стринг
let str4 = str1 + " " + str2;
console.log(str4);
console.log(str1.toUpperCase()); // перевод в верхний регистр

// 2.Number
let num1 = 9;
let num2 = 9.6;

// 3. bigInt
let num3 = 1239n; //больший диапозон,чем у number

// 4. Boolean
let isDrunk = true;
// условная конструкция
if (isDrunk) {
  console.log("Ты пьян");
}

const result = isDrunk ? "Ты пьян" : "Ты не пьян";
console.log(result);

//.5 undefined

let str5;
str5 = 12;
console.log(str5);

// 6. null
// null - отсутствие значения
// document.getElementById("несуществующий id")---> null
// Можно присвоить null вручную

let empty = null;
console.log(empty);

// .7 symbol
// Новый тип,раньше его не было и сейчас остается малопопулярным
// Используется для создания уникальных значений внутри программы
let s1 = Symbol("something");
console.log(s1);

console.log(typeof s1);

let str7 = "" + 9;
console.log(str7);
console.log(typeof str7);

const num4 = 10;
let str8 = String(num4);
console.log(typeof str8 + " = " + str8);

const res = 9 + 12 + "5"; // 215
const res2 = "5" + 9 + 12; // "5912
// Преобразование в число
const num5 = +"6"; //число 6 -> + преобразует строку "6" в число 6
const sum = +"9" + +"10"; //19

// Явное преобразование
const num6 = Number("117"); // число 117

// NaN - not a number появляется при неудачном преобразовании
// или неудачной математической операции

const num7 = Number("129*%ˆ"); // NaN
console.log(typeof num7);

// 3. Преобразование в булево значение
// Число в булево значение
const res4 = Boolean(9); // TRUE
const res5 = Boolean(0); // FALSE
console.log(res5);
// преобразование строки в булево значение
const res6 = Boolean("");
const res7 = Boolean(" ");
console.log(res7);
const res8 = Boolean(null);
console.log(res8); // FALSE
const res9 = Boolean(undefined);
console.log(res9); // FALSE

// Равенство строгое и нестрогое

// === - строгое равенство
// == - не строгое равенство

console.log(9 === "9"); // false
console.log(9 == "9"); // true

const b = ("b" + "a" + +"a" + "a").toLowerCase();
console.log(b);

// const student = [ 1, 2, true, 2.5];



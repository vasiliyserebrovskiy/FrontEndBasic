// Включение строгой проверки
"use strict";

const x = 10;
let y, z;
y = 12;

let b = 10;
console.log(b);

// Operation
//operator, operand - то что слева и справа от оператора
// a + b - binary operator
// унарные операторы - !a, a++,
// тернарный оператор a ? b : c;
// Математические операторы
// +, -, *, / , %, ** - степень
let sum = 1 + 2;
console.log("sum = " + sum);
let example2 = "1" + 2; // string concatenation
console.log("example2 = " + example2);

let example3 = true + 4; // implicit неявное преобразование типов / под капотом (under the hood); false -> 0
console.log("example3 = " + example3); // true -> 1

let example4 = "a" / 9;
console.log("example4 = " + example4);

let example5 = "9" - 5; // - имплицитное преобразование типа string "9" в число -> 9
console.log("example5 = " + example5);

let example6 = 7 % 3;
console.log("example6 = " + example6);

const myAge = 38;
const myAgeIsEval = myAge % 2 === 0; // odd - нечетный even - четный
console.log("myAgeIsEval = " + myAgeIsEval);

const exmpl7 = 2 ** 3;
console.log("exmpl7 = " + exmpl7);

// Logical operations
/*
! - отрицание НЕ
|| - ИЛИ OR - дизъюнкция
&& - И - AND - конъюнкция
*/

let exmpl8 = true && false; // false
let exmpl9 = true || false; // true
let exmpl10 = !true; //false

// более сложные примеры
let exmpl11 = !!5; // true
let exmpl12 = !!0; // false
let exmpl13 = Boolean(5); // -> !!5

// interesting example

const myName = "Vasiliy";

const defaultName = "John";

const result = myName || defaultName;
console.log("result = " + result);

const userAge = undefined;
const age = userAge || 18; // if userAge is undefined set by default = 18;
console.log("age = " + age);

//falsy
// null, undefined, NaN, '', 0 - ----> false

// Операторы сравнения
//  >, <, >= , <=,
console.log(6 > NaN); // ---->  false immer!

// Равенство
// == - не строгое равенство = loose equality
// === - строгое равенство = strict equality
console.log("5" == 5);
console.log("5" === 5);

console.log("Hello" === true); //false
console.log("Hello" == true); //false

console.log("9" == 9); // true
console.log("9" + 3 == 12);
// исключение
console.log(undefined == null); //true
console.log(Number(undefined)); //NaN
console.log(Number(null)); //0

// != - не строгое неравенство
// !== - строгое неравенство = inequality

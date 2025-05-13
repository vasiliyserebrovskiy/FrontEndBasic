//Фрагмент строки
//поиск вхождений
// проверка строки на соответствие шаблону

const text1 = "Hello, Alisher! Oh, Anna, you are also here, well hello there!";

console.log(text1.match(/Hello/)); // regular expression
console.log(text1.replace(/Hello/, "Good day"));

//flags i and g
const text2 = "Apple Orange apple orange Apple Orange apple orange";
console.log(text2.replace(/Apple/, "banana"));
//без флага заменяется только первое вхождение

//флаг g позволяет работать со всеми вхождениями
console.log(text2.replace(/apple/g, "banana"));
console.log("========");
console.log(text2.replace(/apple/gi, "banana"));
// флаг i делает нечувствительным к регистру

//match возвращает соответствие либо null
console.log("=====");
// хочу проверить, что выражение состоит из буквы и нескольких чисел
//a87б и b675 или c99. А не x88y
const code = "Cakea87";
console.log(code.match(/.87/)); //. соответствует любому символу

//проверим, начинается ли выражение со слова Cake
console.log(code.match(/^Cake/)); // ^ - каретка обозначает начало строки

const example = "Hello, John!";
console.log(example.match(/^John/)); // null - в начале строки нет указанного выражения
console.log("======");

// проверка вхождения в конце строки - символ $

console.log("John: ", example.match(/John!$/)); //

console.log("=====");

//Хочу проверить, что выражение из 4 символов начинается на t и заканчивается на 8
const example2 = "tuh8";
const example3 = "tuh9";

console.log(example2.match(/^t..8$/)); // ok
console.log(example3.match(/^t..8$/)); // null

// а если нужно найти ю как знак препинания
// aaa.aaa.aaa - проверить что есть точки
const example4 = "aaa.aaa.aaa";
console.log(example4.match(/aaa\.aaa\.aaa/)); // экранируем точку с помощью обратного \
// другие специальные символы так же придется экранировать

// буквы задаются в квадратных скобках
// слово начиналось с букв h,l или b
// hate, late, bate, - ok
//  wait -  не ok
const example5 = "hate";
console.log(example5.match(/[hlb]ate/)); // любая из 3 подойдет в качестве первого символа
console.log("wait".match(/[hlb]ate/));

// слово должно начинаться на букву F дальше на втором месте должно быть буква а или цифра 6
// на третьем месте все что угодно
// слово должно закончиться на любую строчную букву(нижний регистр)
console.log("F6mv".match(/^F[a6].[a-z]$/)); // ok [A-Za-z] - все буквы латинского алфавита

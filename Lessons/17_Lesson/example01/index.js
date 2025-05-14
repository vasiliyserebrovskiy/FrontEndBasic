// Lesson 17 14.05.2025

const word = "1998-hjklw:John";
const notDigit = /[^0-9]/; // [0-9] - один символ от 0 до 9 [^-внутри скобок работает как отрицание]

const digit = /\d/; // \d - одна цифра;
const notDigitV2 = /\D/; // \D - один не числовой символ

const letter = "9";
console.log(digit.test(letter));
// [0-9] === \d
// [^0-9] === \D
// alphanumeric symbols -
// \w === [0-9A-Za-z_]
// \W === [^0-9A-Za-z_]
// \s - пробел, tabs, new line(\n)
const fullName = "John Bowie";

const regex2 = /John\sBowie/;
console.log(regex2.test(fullName));

const regex3 = /[A-Z][a-z]{3}\s[A-Z][a-z]{3}/;
console.log(regex3.test(fullName));

// если что-то должно быть хотя бы 1 или более раз то - +
const regex4 = /[A-Z][a-z]+\s[A-Z][a-z]+/;

console.log(regex4.test("Al Key")); //true
console.log(regex4.test("A Key")); //false

// символы, показывающие количество называются кванторами
const cameraModel = "Cannon 5R";
const cameraModel2 = "Cannon 5RD";
const cameraModel3 = "Cannon 12RD";
const cameraModel4 = "Cannon 1200RD";
const regex5 = /Cannon \d\d?RD?/;

console.log(regex5.test(cameraModel));
console.log(regex5.test(cameraModel2));
console.log(regex5.test(cameraModel3));
console.log(regex5.test(cameraModel4));

// * значит неопределенное количество вхождений - (0 или более)
const regex6 = /\d*/; // 1, 12, 14, 157 - ok а вот 1a уже не подойдет

// Группировка
const text = "I am programmer but you can never say. I am sure";

const regex7 = /(I) (am)/gi;
console.log(text.replace(regex7, `$2 $1`));

console.log("============");
const fullNameReg = /([A-Z][a-z]+)\s([A-Z][a-z]+)/g;
const text2 = "I am Alisher Khamidov, I am looking for Eva Deiterle";

console.log(text2.replace(fullNameReg, `$2 $1`));

const phoneNumber = "0151 52466512";
// заменить 0 на +49 (151) 524 665 12

const phoneRegex = /0(\d{3})\s(\d{3})(\d{3})(\d{2})/; // группы можно именовать, посмотреть как

console.log(phoneNumber.replace(phoneRegex, `+49 ($1) $2 $3 $4`));

const phoneRegex2 =
  /0(?<areaCode>\d{3})\s(?<first>\d{3})(?<second>\d{3})(?<last>\d{2})/;
console.log(
  phoneNumber.replace(
    phoneRegex2,
    `+49 ($<areaCode>) $<first> $<second> $<last>`
  )
);

// const phoneNumber2 = "0123 45678901";

// const phoneRegex2 =
//   /0(?<areaCode>\d{3})\s(?<first>\d{3})(?<second>\d{3})(?<last>\d{2})/;

// const formatted = phoneNumber2.replace(
//   phoneRegex2,
//   "+49 ($<areaCode>) $<first> $<second> $<last>"
// );

// console.log(formatted);

// Code Wars 8 javascript
// Leet code

//input pattern - для отображения номеров телефонов к примеру

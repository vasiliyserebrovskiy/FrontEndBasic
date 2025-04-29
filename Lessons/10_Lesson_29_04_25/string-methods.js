let fruit = "apple";
let fruitUpper = fruit.toUpperCase();
console.log(fruitUpper);

console.log(fruit[0]); // a
console.log(fruit.at(0)); // a

console.log(fruit[10]); // undefined
console.log(fruit.at(10)); // undefined

//console.log(fruit.at(-1));
// синтаксис - как правильно писать код языка
// семантика - про значения, что будет являться значением

console.log(fruit.toLocaleLowerCase()); // pipeLine - трубопровод вызовов

console.log("9".toLowerCase()); // у числе нет большого и малого регистров
console.log("A".toLowerCase()); // a

console.log(fruit.charAt(5), "char at");
console.log(fruit.charCodeAt(0));

// useful
// "pine" + "apple"
const pine = "pine";
if (pine) {
  const pineapple = pine.concat(fruit);
  console.log(pineapple);
}

const email = " john@mail.com";
console.log(email.trim());
// trimStart() - удаление вначале строки
// trimEnd() - удаление только в конце

console.log(email.indexOf("@")); // 5
console.log(email.indexOf("$")); // -1

// добавление символов
const cake = "Cake";
console.log(cake.padStart(10));
console.log(cake.length);
console.log(cake.padStart(10).length);
console.log(cake.padEnd(10, "*")); // Cake******

//slice substr
const sliceOfCake = cake.slice(3); // берем подстроку с указанного индекса
console.log(sliceOfCake); //

console.log(cake.slice(1, 3)); // правый индекс не включается
console.log(cake.slice(-2)); // ke - отрезаем два символа с конца
console.log(cake.substring(1, 3)); // ak
const animal = "panda";
console.log(animal.substring(2)); //nda от символа и до конца строки
console.log(animal.substring(2, 4)); // nd

// Вывод: slice удобнее потому, что можно работать с отрицательными индексами

const token = "paper.bread.leaf";

const indexOfFirstDot = token.indexOf(".");
const indexOfLastDot = token.lastIndexOf(".");

console.log(indexOfFirstDot);
console.log(indexOfLastDot);

// метод который принимает email и возвращает имя пользователя

const emailString = "    alisher-khamidov@gmail.com    ";

function getNameFromEmail(email) {
  const emailNew = email.trim();
  const atIndex = emailNew.indexOf("@");
  return emailNew.slice(0, atIndex);
}

function getNameFromEmail2(email) {
  const atIndex = email.trim().indexOf("@");
  return email.trim().slice(0, atIndex);
}

console.log(getNameFromEmail2(emailString));

function getEmailService(email) {
  const trimEmail = email.trim();
  const atIndex = trimEmail.indexOf("@");
  if (atIndex < 0) {
    throw new Error("Invalid email");
  }
  return trimEmail.slice(atIndex); //trimEmail.slice(atIndex+1) если собака не нужна
}

function getEmailService2(email) {
  //const trimEmail = email.trim();
  return email.slice(email.indexOf("@")).trimStart();
}

//console.log(getEmailService(emailString));
//console.log(getEmailService2(emailString));

try {
  console.log(getEmailService("alisher-khamidovgmail.com"));
} catch (error) {
  console.error(error);
}
console.log("Дальше");

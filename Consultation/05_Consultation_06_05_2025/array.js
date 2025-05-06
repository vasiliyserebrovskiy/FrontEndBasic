const brothers = [
  { race: "hobbit", height: 110, age: 45, name: "Frodo Baggins" },
  { race: "human", height: 185, age: 46, name: "Aragorn" },
  { race: "elf", height: 189, age: 110, name: "Legolas" },
  { race: "dwarf", height: 140, age: 150, name: "Gimly" },
  { race: "human", height: 195, age: 200, name: "Gandalf" },
];
// map
// const names = brothers.map((brother) => ({ name: brother.name }));
const names = brothers.map((element) => element.name);
// const names = brothers.map(({ name }) => ({ name }));
console.log("names:", names);

const ages = brothers.map((brother) => brother.age);
console.log("ages:", ages);

// const raceAndName = brothers.map(({ race, name }) => ({ race, name }));
const raceAndName = brothers.map(
  (brother) => brother.race + " " + brother.name
);

console.log("raceAndName:", raceAndName);

//Пример 4
// высокий - выше или равно 170
// маленький - ниже 170
// массив из слов [маленький, высокий,высокий, маленький,высокий]

const sizes = brothers.map((brother) => {
  if (brother.height >= 170) {
    return "высокий";
  }
  return "маленький";
});
console.log("sizes:", sizes);

// add 1 years to all
brothers.forEach((brother) => brother.age++);
console.log("new brothers:", brothers);

brothers.forEach((brother) => (brother.name = brother.name.toUpperCase()));
console.log("upper: ", brothers);

let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
console.log("sum:", sum);

// Аккумулятор (accumulator) - значение,
// которое накапливает результат применения функции.
// Текущий элемент массива (currentValue).
// Текущий индекс (currentIndex) элемента в массиве.
// Сам массив (array), к которому применяется метод reduce.
// Функция callback должна возвращать новое значение аккумулятора
// после обработки текущего элемента.

// initialValue (необязательный): Начальное значение аккумулятора.
// Если это значение указано,
//  то оно будет использовано в качестве начального значения аккумулятора
// при первом вызове функции callback.
// Если initialValue не указан, то первый элемент массива станет
// начальным значением аккумулятора.

const sum2 = ages.reduce((acc, current) => acc + current, 0);
console.log("reduce sum:", sum2);

// Комбинация map+reduce
// общая высота наших героев
const totalHeight = brothers.reduce((acc, brother) => acc + brother.height, 0);
console.log(totalHeight); // 819

// можно сделать цепочку
const totalHeight2 = brothers
  .map((brother) => brother.height) //получили массив ростов
  .reduce((acc, height) => acc + height, 0);
console.log(totalHeight2);
//split
const str = "Gandalf , Sauron , Saruman , Legolas , Elrond";
const namesArray = str.split(", ");
console.log("namesN:", namesArray);
//join
const newString = namesArray.join("");
console.log("newString:", newString);

// find

const person = brothers.find((brother) => brother.race === "human");
console.log("person:", person);

const person2 = brothers.find((brother) => brother.name === "ARAGORN");
console.log("person:", person2);

const oldBrothers = brothers.filter((brother) => brother.age > 100);
console.log("oldBrothers:", oldBrothers);

const oldBrothers2 = brothers.filter(
  (brother) => brother.age > 100 && brother.race !== "human"
);
console.log("oldBrothers:", oldBrothers2);

// Массивы
// JAVA -  нумерованный и типизированный набор данных, фиксированная длинна

const students = []; // пустой массив
const teachers = ["Sergey", "Alisher", "Igor"];

console.log(students);
console.log(teachers);

// еще один способ создания массива (редкий)
const animals = new Array(); //пустой массив
const plants = new Array("Camomile", "Dandelion", "Basil");
console.log(plants);

// получение элементов по номеру - индексация идет с 0
const firstTeacher = teachers[0];
console.log(firstTeacher);

console.log(teachers[10]); // undefined

// еще один способ получить элемент по индексу
const secondTeacher = teachers.at(1);
console.log(secondTeacher);

const negativeTeacher = teachers.at(-2);
console.log(negativeTeacher);

plants[3] = "Oak";
console.log(plants);
// массивы в JS динамические. длина может увеличиваться

plants.push("Cactus");
console.log(plants);

// хочу перезаписать последний элемент

console.log(plants.length); //5
plants[plants.length - 1] = "Rose";
console.log(plants);

const rose = plants.pop();
console.log(plants);
console.log(rose);

// Напишите метод Возраст имя цвет волос
function createPersonalInfo(name, age, hairColour) {
  const personalInfo = [];
  personalInfo.push(name);
  personalInfo.push(age);
  personalInfo.push(hairColour);
  return personalInfo;
}

function createPersonalInfo2(name, age, hairColour) {
  return [name, age, hairColour];
}

const name = "Alisher";
const age = 31;
const hairColour = "brown";

console.log(createPersonalInfo(name, age, hairColour));
console.log(createPersonalInfo2(name, age, hairColour));

// shift - удаляет элемент в начало
// unshift - добавляет первый с начала
const cars = ["BMW"];
cars.unshift("Mercedes");
console.log(cars);
const Mercedes = cars.shift();
console.log(Mercedes);
console.log(cars);

const cities = ["Berlin", "Milan"];

const newCity = [...cities]; //spread оператор - копирование массива
newCity.push("Hamburg");
console.log(cities);
console.log(newCity);

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];

const array3 = [...array1, ...array2];
console.log(array3);

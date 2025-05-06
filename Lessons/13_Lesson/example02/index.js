// Array.prototype

// push, pop, shift, unshift - mutating methods
// at - work as "[]""

const fruits = ["apple", "orange", "grape"];
console.log(fruits.at(0));
console.log(fruits[0]);
console.log(fruits.at(-1));

// map
const upperFruit = fruits.map((fruit) => fruit.toUpperCase());
console.log("upperFruit: ", upperFruit);

const fruitsLengthes = fruits.map((fruit) => fruit.length);
console.log("length fruit:", fruitsLengthes);

//pipeline
const strArr = fruits.map((fruit) => fruit.length.toString());
console.log("fruityLengthStrings", strArr);

// example - with object array
const animals = [
  { name: "Po", specie: "panda", weight: 300 },
  { name: "Tigrica", specie: "tiger", weight: 250 },
  { name: "Kovalsky", specie: "penguin", weight: 5 },
  { name: "Melman", specie: "giraffe", weight: 600 },
];

// const americanAnimals = animals.map((animal) => {
//   const americanAnimal = { ...animal };
//   americanAnimal.weight *= 1.3;
//   return americanAnimal;
// });

// console.log("animals:", animals);
// console.log("americanAnimals", americanAnimals);

const americanAnimals = animals.map((animal) => ({
  ...animal,
  weight: animal.weight * 1.3,
}));
console.log("americanAnimals", americanAnimals);

const animalNames = animals.map((animal) => animal.name);
console.log("animalNames:", animalNames);

// to change initial array we can use forEach (mutate array)

animals.forEach((animal) => (animal.isHealthy = true));
console.log("animals:", animals);

//reduce
// our animals go to the Cruise.
//  we need to check weight  of all animals

let acc = 0;
for (let i = 0; i < animals.length; i++) {
  acc += animals.at(i).weight;
}
console.log("accumulator weight:", acc);

const weightAnimal = animals.reduce((acc, current) => acc + current.weight, 0);
console.log("weightAnimal:", weightAnimal);

//---------
const dishes = [
  { name: "bamboo", calories: 500 },
  { name: "meat", calories: 1600 },
  { name: "fish", calories: 1000 },
];

const totalCalories = dishes.reduce((acc, curr) => acc + curr.calories, 0);
console.log("totalCalories:", totalCalories);

const totalCaloriesMeat = dishes.reduce((acc, curr) => {
  if (curr.name === "meat") {
    return acc + curr.calories * 3;
  }
  return acc + curr.calories;
}, 0);

console.log("totalCaloriesMeat:", totalCaloriesMeat);

const totalCaloriesMeat2 = dishes.reduce(
  (acc, curr) =>
    acc + (curr.name === "meat" ? curr.calories * 3 : curr.calories),
  0
);

console.log("totalCaloriesMeat2:", totalCaloriesMeat2);

//join
const fruitCoctail = fruits.join("-");
console.log("fruitCoctail:", fruitCoctail);

// split
const ensurance = "123.128.123412312";
const numsAsStrings = ensurance.split("."); // . - delimiter
console.log("numsAsStrings:", numsAsStrings);

const nums = numsAsStrings.map((string) => Number(string));
console.log("nums:", nums);

// pinguin become Ill

animals.forEach((animal) => {
  if (animal.specie === "penguin") {
    animal.isHealthy = false;
  }
});

console.log("animals", animals);

//The inspection has arrived
//some
const isQuaranteen = animals.some((animal) => animal.isHealthy === false); // some true if at least one is
console.log("isQuaranteen:", isQuaranteen);
//every
const isEpidemy = animals.every((animal) => animal.isHealthy === false); // every - check for all elements
console.log("isEpidemy:", isEpidemy);
//find

const hasKiller = animals.some(
  (animal) => animal.name === "Killer" && animal.specie === "tiger"
);
console.log("hasKiller:", hasKiller);

//killer come
animals.push({ name: "Killer", specie: "tiger", weight: 400, isHealthy: true });
const hasKiller2 = animals.some(
  (animal) => animal.name === "Killer" && animal.specie === "tiger"
);
console.log("hasKiller2:", hasKiller2);

//find

const giraffe = animals.find((animal) => animal.name === "Melman");
console.log("giraffe:", giraffe);

const indexOfMelman = animals.findIndex((animal) => animal.name === "Melman");
console.log("indexOfMelman:", indexOfMelman);

// const indexOfPanda = animals.lastIndexOf((animal) => animal.name === "Melman");
// console.log("indexOfMelman:", indexOfPanda);
const indexOfMelman2 = animals.findLastIndex(
  (animal) => animal.name === "Melman"
);
console.log("indexOfMelman:", indexOfMelman2);

//slice не меняет исходный массив
const shortListOfAnimals = animals.slice(2, 4);
console.log("animals", animals);
console.log("shortListOfAnimals:", shortListOfAnimals);

//splice - мутирующий

const monthes = ["January", "February", "March", "April"];
const removedMonthes = monthes.splice(2, 2, "Jully", "August");
console.log("monthes:", monthes);
console.log("removed monthes:", removedMonthes);

const chars = ["@", "@", "@", "*", "*", "$"];

//"*" -> "#"
const substitutes = ["#", "#"];
chars.splice(3, 2, ...substitutes);
console.log("chars:", chars);

// findIndex, splice - to delete element
animals.splice(indexOfMelman2, 1);
console.log("animals ohne Melman:", animals);



// напишите 
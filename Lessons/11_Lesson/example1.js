const numbers = [1, 7, 3, 6, 5, 6];
const [_, seven] = numbers; // destructuring assignments
// const [,seven] = numbers; both variant are possible
console.log(seven);

// destructuring object

const admin = {
  email: "admin@gmail.com",
  age: 24,
  firstName: "Administrina",
  secondName: "Tiranikus",
};

// const email = admin.email;
const { age, secondName } = admin;
console.log(age, secondName);

const catPerson = {
  name: "Annamay",
  cats: ["Tom", "Garfield", "Barsik"],
};

console.log(catPerson);

const { cats } = catPerson;
const [, catName] = cats;
console.log(catName);

//

const arr = [[1, 2, 3], ["Igor", "John", "bob"], { isDrunk: true }];

const [[, number], [, name], {isDrunk}] = arr;

console.log(number);
console.log(name);
console.log(isDrunk);

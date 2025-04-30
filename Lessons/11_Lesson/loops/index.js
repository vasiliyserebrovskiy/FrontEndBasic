//Loops
for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}

//цикл
/* 
for (let i = 100; i > 0; i -= 3) {
  console.log(i);
}

function printNumbers(firstNumber) {
  for (let i = firstNumber; i > 0; i -= 3) {
    console.log(i);
  }
}

calculateNumbers(162);

*/

// для примера более сложный пример
for (let i = 100, j = 5; i > j && j < 60; i--, j++) {
  console.log(i, j);
}

//while
// let i = 100;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }

//
const animals = ["panda", "wolf", "fox"];
let k = 0;
while (k < animals.length) {
  animals[k] = animals[k].charAt(0).toUpperCase() + animals[k].slice(1);
  k++;
}
console.log(animals);

//хостинг для функция и var hoisting = поднятие
//для let и const это не работает

//Functional expression
let x = 1 + 2; // expression
let y = 1;

const sayGoodbye = function () {
  // here hoisting did not worked!
  console.log("Good bye!");
};

sayGoodbye();

function butler(action) {
  action();
}
function sayHi() {
  console.log("Hi");
}

butler(sayHi);
butler(sayGoodbye);

//neighbour
function neighbour(action, thing) {
  action(thing);
}

const party = function (track) {
  console.log("Music: Tuc-tuc-tuc: " + track);
};

const drill = function (item) {
  console.log(`I drill ${item}`);
};

neighbour(party, "Britney");
neighbour(party, "Ramstein");
neighbour(drill, "wall");

// Пример калькулятор
function calculator(operation, a, b) {
  return operation(a, b);
}

const add = function (a, b) {
  return a + b;
};
function devide(a, b) {
  return a / b;
}
console.log(calculator(add, 5, 6));
console.log(calculator(devide, 8, 2));

// anonymous function
console.log(
  calculator(
    function (a, b) {
      return a - b;
    },
    9,
    4
  )
);

const res = calculator((a, b) => a - b, 9, 4);
console.log(res, "res");

// arrow function

const multiply = (a, b) => a * b;
console.log(calculator(multiply, 2, 4), "multiply"); // arrow function without body

const multiply2 = (a, b) => {
  // arrow function with body
  return a * b;
};

// arrow function, we can pass as the parameter. Function, wich is passed as parameter, is called callback function
const power = (a, b) => a ** b;
console.log(calculator(power, 2, 3), "power"); // 8

//
const pirate = (operation, item) => operation(item);

const drinkSmth = (a) => console.log('I drink ' + a);

pirate(drinkSmth, "Rom");
pirate(drinkSmth, "Water");

const swim = (vehicle) => console.log('I roam seas with my ' + vehicle);
pirate(swim, "barrel");

pirate(swim, "ship");
pirate(drinkSmth, "rom");
pirate(swim, "barrel");
pirate(drinkSmth, "watter");
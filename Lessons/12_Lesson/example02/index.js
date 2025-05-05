const leon = {
  name: "Lion",
  sayHello() {
    console.log(`Hello, I am ${this.name}.`);
  },
};

leon.sayHello();

// example Circle
const circle = {
  radius: 4,
  getArea() {
    return Math.PI * this.radius ** 2;
  },
};

console.log("circle area:", circle.getArea());

circle.radius = 10;
console.log("circle area 2:", circle.getArea());

// Square + method
const square = {
  sideLength: 10,
  getArea() {
    return this.sideLength ** 2;
  },
  getPerimeter() {
    return this.sideLength * 4;
  },
  increaseLength() {
    this.sideLength *= 2;
  },
};

console.log("square area:", square.getArea());
console.log("square perimeter:", square.getPerimeter());

// const enlargingSidesSquare = (obj) => {
//   obj.sideLength = obj.sideLength * 2;
// };

// for (let i = 0; i < 10; i++) {
//   console.log("цикл", i);
//   console.log("square area:", square.getArea());
//   console.log("square perimeter:", square.getPerimeter());
//   enlargingSidesSquare(square);
// }

square.increaseLength();
console.log("square area:", square.getArea());
console.log("square perimeter:", square.getPerimeter());

//
const { getArea } = square;
// const getArea = square.getArea(); // the same

console.log(getArea()); // функция в отрыве от объекта - без this.

// bind и apply
//bind create a new function, where "this" is a used new Object(in bind)
const chessBoard = {
  sideLength: 3,
};
const getAreaOfChessBoard = getArea.bind(chessBoard);
console.log("get area of chess board: ", getAreaOfChessBoard());
chessBoard.sideLength += 2;

console.log("get area of chess board: ", getAreaOfChessBoard());

// another example
function sayHi() {
  console.log("My name is " + this.name);
}

sayHi();
const vasiliy = { name: "Vasiliy" };
const vasiliySayHi = sayHi.bind(vasiliy);
vasiliySayHi();

//APPLY
sayHi.apply({ name: "Vasiliy" }); // apply сразу вызывает функцию с указанным объектом

/*
Задание 1
Создайте метод который принимает массив и возвращает новый! массив с теми же данными, но первый и последний элементы в массиве должны быть поменяны местами.

Исходный массив должен остаться неизмененным после вызова метода.
*/

// The original array
const originalArray = ["first", "second", "third", "last", 5];

// New array 1
const newArray = createEdgeElementsSwappedArray(originalArray);

// Print results 1
console.log("Исходный массив: ", originalArray);
console.log("Измененный массив: ", newArray);

// new array 2
const newArray2 = createEdgeElementsSwappedArray2(originalArray);

// Print result 2:
console.log("================");
console.log("Исходный массив: ", originalArray);
console.log("Измененный массив: ", newArray2);

// Functions
function createEdgeElementsSwappedArray(array) {
  //лучше работать по индексам, так быстрее!!
  //   const newArray = [...array];
  //   const first = newArray.shift();
  //   newArray.unshift(newArray.pop());
  //   newArray.push(first);
  const newArray = [...array];
  const temp = newArray[0];
  newArray[0] = newArray[newArray.length - 1];
  newArray[newArray.length - 1] = temp;

  return newArray;
}

function createEdgeElementsSwappedArray2(array) {
  return [array.at(-1), ...array.slice(1, -1), array.at(0)];
}

const createEdgeElementsSwappedArray3 = (array) => [
  array.at(-1),
  ...array.slice(1, -1),
  array.at(0),
];
console.log("============");
const newArray3 = createEdgeElementsSwappedArray3(originalArray);
console.log("Третья функция:", newArray3);

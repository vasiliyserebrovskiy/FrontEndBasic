console.log("===== Begin Tasks Results: =====\n");
// 1 Добавление элемента в конец массива
const fruits = ["apple", "banana"];
fruits.push("orange");
console.log("Task 01: fruits:", fruits, "\n");

// 2 Удаление последнего элемента
const numbers = [10, 20, 30, 40];
numbers.pop();
console.log("Task 02: numbers:", numbers, "\n");

// 3 Добавление элемента в начало
const colors = ["blue", "green"];
colors.unshift("red");
console.log("Task 03: colors:", colors, "\n");

// 4 Удаление первого элемента массива
const days = ["Monday", "Tuesday", "Wednesday"];
days.shift();
console.log("Task 04: days:", days, "\n");

// 5 Найди индекс элемента
const cities = ["Paris", "London", "Berlin", "Madrid"];
const berlinIndex = cities.indexOf("Berlin");
console.log("Task 05: Berlin index: ", berlinIndex, "\n");

// 6 Содержится ли число в массиве
const nums = [1, 2, 3, 4];
const isNumber = nums.includes(3);
console.log("Task 06: is number in array:", isNumber, "\n");

// 7 Получение подмассива из массива
const letters = ["a", "b", "c", "d", "e"];
const partOfLetters = letters.slice(1, 4);
console.log("Task 07: partOfLetters:", partOfLetters, "\n");

// 8 Удаление элемента splice
const nums2 = [5, 10, 15, 20];
nums2.splice(1, 1);
console.log("Task 08: nums2:", nums2, "\n");

// 9 Вставка элементов с помощью splice
const animals = ["cat", "dog"];
animals.splice(1, 0, "parrot");
console.log("Task 09: animals:", animals, "\n");

// 10 Сортировка чисел
const numbers2 = [40, 10, 100, 30];
numbers2.sort((a, b) => a - b);
console.log("Task 10: numbers2:", numbers2, "\n");

// 11 Обратный порядок
const arr = [1, 2, 3, 4];
arr.reverse();
console.log("Task 11: arr:", arr, "\n");

// 12 Объединение массивов
const a = [1, 2];
const b = [3, 4];
const c = a.concat(b);
console.log("Task 12: c:", c, "\n");

// 13 Преобразование массива в строку
const letters2 = ["a", "b", "c"];
const str = letters2.join("-");
console.log("Task 13: str:", str, "\n");

// 14 Последний индекс элемента
const arr2 = [1, 2, 3, 2, 1];
const lastIndexOfTwo = arr2.lastIndexOf(2);
console.log("Task 14: last index of 2:", lastIndexOfTwo, "\n");

// 15 Удаление элементов через цикл
const arr3 = [1, 2, 3];
while (arr3.length > 0) {
  arr3.pop();
}
console.log("Task 15: arr3:", arr3, "\n");

// 16 Копирование массива
const a2 = [5, 10, 15];
const b2 = a2.slice();
console.log("Task 16: b2:", b2, "\n");
// 17 Сравнение массивов
const arrayA = [1, 2, 3];
const arrayB = arrayA.slice();
arrayB[0] = 99;
console.log("Task 17: arrayA:", arrayA);
console.log("Task 17: arrayB:", arrayB, "\n");
const isArrayEquals = arrayA.every((val, i) => val === arrayB[i]);
console.log("Task 17: is array equal:", isArrayEquals, "\n");

// 18 Найди сумму чисел
const nums3 = [10, 20, 30];
const sumNum3 = nums3.reduce((acc, val) => acc + val, 0);
console.log("Task 18: total sum:", sumNum3, "\n");

// 19 Удаление всех четных чисел
const arr4 = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] % 2 === 0) {
    arr4.splice(i, 1);
    i--;
  }
}
console.log("Task 19: arr4:", arr4, "\n");

// 20 Очистка массива через длинну
const arr5 = [1, 2, 3, 4];
console.log("Task 20: initial arr5:", arr5);
arr5.length = 0;
console.log("Task 20: arr5: ", arr5);

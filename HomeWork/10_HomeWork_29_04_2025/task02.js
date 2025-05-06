/*
Задание 2
Создайте метод который принимает массив строк, ничего не возвращает. Метод должен заменить текст в первом элементе массива, чтобы он был с большой буквы.
*/

const array = ["first", "second", "third"];

console.log("Исходный массив: ", array);
createFirstElementCapitalizedArray(array);

function createFirstElementCapitalizedArray(array) {
  array[0] = array[0].charAt(0).toUpperCase() + array[0].slice(1);
  console.log(" Результат итог: ", array);
}

/*
🍏 Создайте метод, который принимает массив strings и еще один параметр типа sting prefix. 
Метод должен вернуть новый массив, в котором будут храниться слова из исходного массива, слева к которым присоединен префикс.

Исходный массив должен остаться неизменным.

Пример: ["apple", "orange"] с префиксом "pine" ----> ["pineapple", "pineorange"]
*/

const fruits = ["apple", "orange", 5];
const stringPrefix = "pine";

try {
  console.log(" Original fruits: ", fruits);
  const newFruits = addPrefixToArray(fruits, stringPrefix);
  console.log("New fruits array: ", newFruits);
} catch (error) {
  console.error("Error: ", error.message);
}

function addPrefixToArray(array, stringPrefix) {
  if (
    array.length === 0 ||
    typeof stringPrefix !== "string" ||
    stringPrefix.trim() === ""
  ) {
    throw new Error("Incorrect parameters");
  }
  //const newArray = [...array];
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      newArray.push(stringPrefix + array[i]);
    } else {
      console.log(`Array element ${i} = ${array[i]} - is not a string!`);
    }
  }

  return newArray;
}

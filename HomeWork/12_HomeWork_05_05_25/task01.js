/*
Создайте метод, который принимает объект, а возвращает новый объект, в котором ключи и значения поменялись местами.

{name: "Bob"} --> {"Bob": "name"}

(вам понадобится поработать с Object.values, Object.keys )
*/

const swapKeyValueInArray = (obj) => {
  const objKeys = Object.keys(obj);
  const objValues = Object.values(obj);
  const newObj = {};
  for (let i = 0; i < objKeys.length; i++) {
    newObj[objValues[i]] = objKeys[i];
  }
  return newObj;
};

//Create test object
const myObj = {
  name: "Alex",
  age: 39,
  hairColor: "black",
  eyesColor: "gray",
};

console.log("======= First method =======");
//First method
const newObj = swapKeyValueInArray(myObj);
console.log("Initial object:", myObj);
console.log("New object:", newObj);

//Second method
const swapKeyValueInArray2 = (obj) => {
  const newObj = {};
  for (let key in obj) {
    const value = obj[key];
    newObj[value] = key;
  }
  return newObj;
};

console.log("\n======= Second method =======");
const newObj2 = swapKeyValueInArray2(myObj);
console.log("New object 2:", newObj2);

//Third method
const swapKeyValueInArray3 = (obj) =>
  Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));

console.log("\n======= Third method =======");
const newObj3 = swapKeyValueInArray2(myObj);
console.log("New object 3:", newObj3);

// Object
// key - value

const user = { email: "john@gmail.com" };
const agw = 18;

//const user = {email: "test@gmail.com"} - Error, because user is const!

//change value of a key
user.email = "john2@yahoo.com";
console.log(user.email);

user.eyeColor = "brown";

console.log("user: ", user);
user["hair color"] = "blue"; // box syntax

console.log("user: ", user);

const { "hair color": color } = user;

console.log(color);

// Object from variables

const pandaName = "Bo";
const favoriteFood = "bamboo";

const panda = {
  name: pandaName,
  favoriteFood, //: favoriteFood, favoriteFood: favoriteFood,
};

console.log("panda:", panda);

const bobHeight = 184;
const bob = {
  height: bobHeight,
};

console.log("Bob: ", bob);

const giraffeSam = {
  name: "Sam",
  age: 7,
};
const key = "name";

console.log(giraffeSam.key); // Object did not have key = key -> undefined
console.log(giraffeSam[key]); // giraffeSam[key] -> Sam dynamic key

const keys = ["name", "age"];

for (let i = 0; i < keys.length; i++) {
  console.log(giraffeSam[keys[i]]);
}

//Object keys?
// list of object keys using Object.keys:
const keysOfGiraff = Object.keys(giraffeSam);
console.log("keys of giraff:", keysOfGiraff); // [ 'name', 'age' ]

//list of values from Object
const valuesOfGiraff = Object.values(giraffeSam);
console.log("values of giraff", valuesOfGiraff); // [ 'Sam', 7 ]

// key: value - entries
const entries = Object.entries(giraffeSam);
console.log("entries: ", entries); // [ [ 'name', 'Sam' ], [ 'age', 7 ] ]

// freeze method
const breakfast = {
  title: "omlet",
  calories: 1200,
};

Object.freeze(breakfast);
// add new keys
breakfast.warm = true; // freezed
console.log(breakfast.warm); //undefined
console.log(breakfast);

breakfast.title = "cereal"; // breakfast is freezed
console.log(breakfast);

const dinner = {
  title: "pasta",
  calories: 2000,
};
Object.seal(dinner);
//new entry - no
dinner.fat = true;
console.log("dinner:", dinner);
dinner.title = "rise";
console.log("dinner:", dinner); // change entry - yes

//Object create - we can create new object
const musician = Object.create({ name: "Freddie Mercury" }); // cwe can create new object, based on existing object -> prototype inheritance
console.log("musician: ", musician);

console.log(musician);
console.log(musician.name);

//----------------

//assign all property from one object to another
//Object.assign();
const address = {
  street: "Pfondorfer",
  number: 12,
};
const firma = {
  title: " Horns and hoofs",
};
Object.assign(firma, address);
console.log("firma:", firma);

address.post = 10407;
console.log("firma:", firma);

//the same analog is spread operator

const personalInfo = {
  name: "Fedor",
};

const medicalInfo = {
  bloodType: 1,
};

const fedor = {
  ...personalInfo, // copy personalInfo
  ...medicalInfo, // copy medicalInfo
  age: 19, // add age
};

console.log("Fedor:", fedor);

// Example create unify function
const startObject = {
  email: "bob@gmail.com",
};
const keyString = "eyeColor";
const valueString = "brown";

const unify = (startObject, keyString, valueString) => {
  return {
    ...startObject,
    [keyString]: valueString,
  };
};

console.log("unify", unify(startObject, keyString, valueString));

//------------
function unify2(obj, additionalKey, additionalValue) {
  obj[additionalKey] = additionalValue; // did not create new object
  return obj;
}

function unify3(obj, additionalKey, additionalValue) {
  const newObj = { ...obj };
  newObj[additionalKey] = additionalValue;
  return newObj;
}

const obj1 = { title: "The Lord of the Ring" };
const newBook = unify2(obj1, "author", "Tolkien JR");
console.log("newBook", newBook);
newBook.title = "Harry Potter";
console.log("newBook:", newBook);
console.log("obj1:", obj1);
console.log("======");
const newBook2 = unify2(obj1, "author", "Tolkien JR");
console.log("newBook", newBook2);
newBook2.title = "Harry Potter";
console.log("newBook:", newBook2);
console.log("obj1:", obj1);



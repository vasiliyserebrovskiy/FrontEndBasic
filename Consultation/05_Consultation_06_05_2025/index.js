const student = {
  age: 22,
  name: "Вася",
};

const product = {
  title: "iphone",
  price: 2000,
  "model of phone": "XR",
};

console.log("price:", product.price);
console.log("model:", product["model of phone"]);

//create new entry
product.diagonal = 6.5;
product["type of adapter"] = "USB-C";
console.log("product:", product);

let key = "age";
console.log("student age:", student[key]);
key = "name";
console.log("student name:", student[key]);

// create object from variables
const title = "Titanic";
const capacity = "1500";

const titanik = { title, capacity };
console.log("titanic: ", titanik);

//example 5
const name1 = "Avrora";
const cap = "300";

const avrora = { title: name1, capacity: cap };
console.log("avrora:", avrora);

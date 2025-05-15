// JSON
const user = {
  name: "John",
  email: "john@gmail.com",
  age: 18,
};

//основной формат передачи и хранения информации это строка - JSON
const userAsJSONString = JSON.stringify(user);
console.log(userAsJSONString);

const userFromJSON = JSON.parse(userAsJSONString);
console.log("userFromJSON:", userFromJSON);

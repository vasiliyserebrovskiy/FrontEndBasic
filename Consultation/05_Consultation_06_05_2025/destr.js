const brothers = [
  { race: "hobbit", height: 110, age: 45, name: "Frodo Baggins" },
  { race: "human", height: 185, age: 46, name: "Aragorn" },
  { race: "elf", height: 189, age: 110, name: "Legolas" },
  { race: "dwarf", height: 140, age: 150, name: "Gimly" },
  { race: "human", height: 195, age: 200, name: "Gandalf" },
];

// const frodo = brothers[0];
// console.log("frodo:", frodo);
const [frodo, aragorn, legolas, gimly, gendalf] = brothers;
console.log("aragorn:", aragorn);

const user = { id: 1, email: "user@mail.com", login: "funny_user" };
// const email = user.email;
const { email, id, login } = user;
console.log(email);

// const array = ["string", "char", "some"];
// console.log("array length:", array.length);
// array.length = 0;
// console.log("array:", array);
// console.log("array at 0", array.at(0));

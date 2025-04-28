function sum(a, b = 14) {
  return a + b;
}

console.log(sum(10, 12));
console.log(sum(2));

// function
function greeting(lastName = "Dowson") {
  return `Hi, ${lastName}! How are you?`;
}
function greeting2(lastName) {
  return `Hi, ${lastName || "Dowson"}! How are you?`;
}

console.log(greeting());
console.log("Test");
console.log(greeting("Sidorov"));

function greeting3(lastName) {
  return lastName
    ? `Hi, ${lastName}! How are you?`
    : `Hi, Dowson! How are you?`;
}

function greeting4(lastName) {
  return `Hi, ${lastName ? lastName : "Dowson"}! How are you?`;
}

console.log(greeting("Sidorov"));
console.log(greeting2("Serebro"));
console.log(greeting3("Serebrov"));
console.log(greeting4());

// Операторы бывают симметричные и не симметричные

// a === b --> b === a симметричные (свойства отношений)
// a > b ---> b !> a - не симметричные



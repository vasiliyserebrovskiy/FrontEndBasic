function outer() {
  this.age = 16;
  function inner() {
    return this.age;
  }
  return inner;
}

const inner = outer();
console.log(inner());

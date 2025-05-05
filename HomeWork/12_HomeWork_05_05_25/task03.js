/*
Задание 3 дополнительное!
Попробуйте сохранить метод grow во внешнем от объекта контексте и вызвать его с другими растениями при помощи bind или apply.
*/

//Create object oak
const oak = {
  height: 140,
  year: 2025,
  grow() {
    this.height += 30;
    this.year += 1;
  },
};

const { grow } = oak;

//Create new Object for future bind
const birch = {
  height: 10,
  year: 2024,
};

const birchWithGrow = grow.bind(birch);
birchWithGrow();
console.log("Birch after one year:", birch);

//Use apply

const pine = {
  height: 80,
  year: 2023,
};

grow.apply(pine);
console.log("Pine after one year:", pine);

grow.call(pine);
console.log("Pine after second year:", pine);

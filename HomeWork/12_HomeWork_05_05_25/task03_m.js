//Create object oak
const oak = {
  height: 140,
  year: 2025,
  grow(annualGrowth, numberOfYears) {
    this.height += numberOfYears * annualGrowth;
    this.year += numberOfYears;
  },
};

const { grow } = oak;

//Create new Object for future bind
const birch = {
  height: 10,
  year: 2024,
};

console.log("Initial birch:", birch);

const birchWithGrow = grow.bind(birch);
birchWithGrow(100, 2);
console.log("Birch after two years:", birch);

//Use apply

grow.apply(birch, [100, 2]);
console.log("Birch after two more years:", birch);

grow.call(birch, 100, 3);
console.log("Birch after three more years:", birch);

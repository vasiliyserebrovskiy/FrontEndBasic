//Create object oak
const oak = {
  height: 140,
  year: 2025,
  grow(annualGrowth) {
    this.height += annualGrowth;
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
birchWithGrow(100);
console.log("After one year:", birch);

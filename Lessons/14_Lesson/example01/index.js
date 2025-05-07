const cars = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "AMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];

//reverse - мутирующий, возвращает ссылку на массив
console.log("cars initial:", cars);
cars.reverse();
console.log("cars reverse:", cars);

//sort - сортируем массив, мутирующий
const parts = ["air filter", "tyres", "spark plugs", "accumulator"];
parts.sort();
console.log("parts:", parts);

const nums = [1, 4, 2, 10, 12];
nums.sort(); // как строки
console.log("nums:", nums);

// -1, 0, 1
nums.sort((a, b) => a - b);
console.log("nums a-b:", nums);

nums.sort((a, b) => b - a);
console.log("nums b-a:", nums);

parts.sort((a, b) => b.localeCompare(a));
console.log("parts:", parts);

cars.sort((a, b) => a.price - b.price);
console.log("cars price sort:", cars);

// compare using several parameters
// 1 using price
// if price equals, then sort by name

const compareCars = (a, b) => {
  const priceComparisonResult = a.price - b.price;
  if (priceComparisonResult === 0) {
    return a.brand.localeCompare(b.brand);
  }
  return priceComparisonResult;
};

cars.sort(compareCars);

console.log("cars sorted method:", cars);

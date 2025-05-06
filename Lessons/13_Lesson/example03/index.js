const drinks = [
  { name: "Bloody Mary", strength: 14, price: 7 },
  { name: "Jin", strength: 25, price: 4 },
  { name: "Beer", strength: 7, price: 3.5 },
  { name: "Cider", strength: 2, price: 5 },
  { name: "Beer", strength: 5, price: 5 },
];

const indexOfJin = drinks.findIndex((drink) => drink.name === "Jin");
drinks.splice(indexOfJin, 1, { name: "Tequila", strength: 30, price: 10 });
console.log("drinks", drinks);

drinks.forEach((drink) => drink.strength++);
console.log("drinks", drinks);

// summ all beer price

const beerPrice = drinks.reduce(
  (acc, drink) => (drink.name === "Beer" ? acc + drink.price : acc),
  0
);
console.log("beerProce:", beerPrice);

//filter
const expensiveDrinks = drinks.filter((drink) => drink.price > 4);
console.log("expensiveDrinks:", expensiveDrinks);

const beers = drinks.filter((drink) => drink.name === "Beer");
console.log("expensiveDrinks:", beers);

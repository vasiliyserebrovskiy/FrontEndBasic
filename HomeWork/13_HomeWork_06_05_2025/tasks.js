/*
Homework
Задание 1
У вас есть массив объектов:

const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];
Copy
Создайте на основе старого массива новый массив объектов по образу: [{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]

Задание 2
Создайте новый массив, где оставьте только машины с дизельным двигателем.

Задание 3
Создайте новый массив, где оставьте только машины не с дизельным двигателем.

Задание 4
Посчитайте общую стоимость всех машин не с дизельным двигателем.

Задание 5
Повысьте цену всех машин в массиве на 20%.

Задание 6
Создайте новый массив, где все дизельные машины заменены на { brand: "Tesla", price: 25000, isDiesel: false }
*/

const cars = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];
console.log("===== Begin =====\n");
// TASK 01:
const brandAndTypeOfCars = cars.map(({ brand, isDiesel }) => ({
  brand,
  isDiesel,
}));
console.log("Task 01:\n", brandAndTypeOfCars, "\n");

// TASK 02:
const dieselCars = cars.filter((car) => car.isDiesel === true);
console.log("Task 02:\n", dieselCars, "\n");

// TASK 03:
const petrolCars = cars.filter((car) => car.isDiesel === false);
console.log("Task 03:\n", petrolCars, "\n");

// TASK 04:
const totalPetrolCarsPrice = cars.reduce(
  (acc, car) => (car.isDiesel === false ? acc + car.price : acc),
  0
);
console.log("Task 04: total petrol car price: ", totalPetrolCarsPrice, "\n");

//TASK 05:
cars.forEach((car) => (car.price *= 1.2));
console.log("Task 05: \n", cars, "\n");

//TASK 06:
const electroCar = { brand: "Tesla", price: 25000, isDiesel: false };
const carsWithoutDiesel = cars.map((car) =>
  car.isDiesel === true ? electroCar : car
);
console.log("Task 06:\n", carsWithoutDiesel, "\n");

/*
Дан объект

const house = {
  address: "Pfondorfer str 69",
  postIndex: 10408,
  roofColor: "red",
  wallColor: "green",
};
Copy
Используя деструктуризацию объекта, получите в отдельные переменные цвет стен, и адрес.
*/

const house = {
  address: "Pfondorfer str 69",
  postIndex: 10408,
  roofColor: "red",
  wallColor: "green",
};

const { wallColor, address } = house;
console.log("Wall color is: ", wallColor);
console.log("Address is: ", address);

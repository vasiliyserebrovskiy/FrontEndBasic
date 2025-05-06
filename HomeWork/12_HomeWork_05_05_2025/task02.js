/*
Задание 2
Создайте объект дуб oak с полем высота height и полем год year и методом расти grow. Пусть изначальная высота дуба будет 140 см, а год будет 2025. 
При вызове метода grow пусть дуб растет на 30 сантиметров, а год меняется на следующий.

Запустите цикл и покажите, как дуб будет расти на протяжении 20 лет.
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

// small test
// console.log("Initial oak:", oak);
// oak.grow();
// console.log('After one year:', oak);

console.log("===== Begin 20 years process: ======");
for (let i = 1; i <= 20; i++) {
  console.log(`Year ${i}, oak height = ${oak.height}, oak year = ${oak.year}`);
  oak.grow();
}
console.log("===== End growing process =====");

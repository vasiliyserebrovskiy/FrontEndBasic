/*
Создайте функцию gardener, которая принимает в себя два параметра: операцию и предмет, на который эта операция будет направлена.

Создайте еще одну функцию поливать цветок, которая бы выводила в консоль "I water this " плюс название конкретного цветка.

Вызовите функцию gardener c параметрами: функция поливать цветок, 'rose'.

Попробуйте придумать функции для других операций и предметов, с которыми может работать садовник. 🧑‍🌾
*/

const gardener = (operation, item) => operation(item);
const pourFlower = (item) => `I water this ${item}.`;
const weedBeds = (item) => `I'm weeding the garden beds with ${item}.`;
const cutDownOldTrees = (treeType) => `I'm cutting down ${treeType} trees.`;
const drink = (drink) => `After work, I rest and drink ${drink}.`;

console.log(gardener(pourFlower, "rose"));
console.log(gardener(pourFlower, "narcissist"));
console.log(gardener(pourFlower, "iris"));
console.log(gardener(weedBeds, "cucumbers"));
console.log(gardener(weedBeds, "tomatoes"));
console.log(gardener(cutDownOldTrees, "dry"));
console.log(gardener(drink, "hot green Tea"));

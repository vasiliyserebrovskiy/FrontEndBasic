/*
✂️ Задание 2 : Замена слова в строке
🎯 Цель:
Научиться использовать string.replace() с регулярными выражениями и флагами g и i.
*/
const sentence =
  "JavaScript is great. I love javascript. JAVASCRIPT is everywhere!";
// RESULT = "TypeScript is great. I love TypeScript. TypeScript is everywhere!"
console.log(sentence.replace(/javascript/gi, "TypeScript"));

/*
📘 Задание 1 — Форматирование строки
Создайте функцию, которая принимает строку в формате вида "1333.132.123 00" — числа могут быть любыми, но структура такая же: три группы, разделённые точками и пробелом.

Цель: преобразовать строку к следующему формату: 📌 "1333 132:123-00"

💡 Пример:
function formatString(input) {
    // Ваша реализация здесь
}

const result = formatString("1333.132.123 00");
console.log(result); // "1333 132:123-00"
*/

function formatString(input) {
  // Ваша реализация здесь
  //   const regex = /(\d{4})\.(\d{3})\.(\d{3})\s(\d{2})/;
  const regex =
    /(?<first>\d{4})\.(?<second>\d{3})\.(?<third>\d{3})\s(?<fourth>\d{2})/;

  return input.replace(regex, `$<first> $<second>:$<third>-$<fourth>`); //input.replace(regex, `$1 $2:$3-$4`);
}

const result = formatString("1333.132.123 00");
console.log(result); // "1333 132:123-00"

console.log(
  'formatString("1234.567.891 12"):',
  formatString("1234.567.891 12")
); // "1234 567:891-12"

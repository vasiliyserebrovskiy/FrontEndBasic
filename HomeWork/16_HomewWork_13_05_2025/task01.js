/*
📘 Задание 1
Прочитайте теоретический материал в разделе "Теория".
Создайте метод validate, который принимает строку и возвращает true, если она соответствует следующему шаблону:
начинается с одной маленькой буквы латинского алфавита (a–z);
затем идёт число 19;
далее — две любые цифры (00–99);
строка должна **заканчиваться на "born"`.

validate("c1986born"); // true
validate("b1988born"); // true
validate("1986born"); // false — нет начальной буквы
validate("c1886born"); // false — не 19XX
validate("c1986bor"); // false — не заканчивается на 'born'
*/

const validate = (string) => {
  //   const result = string.match(/^[a-z]19[0-9][0-9]born$/);
  //   const result = string.match(/^[a-z]19\d\dborn$/);
  const result = string.match(/^[a-z]19\d{2}born$/);

  // if (result) return true;
  // return false;
  const regex = /^[a-z]19\d{2}born$/;
  return regex.test(string); // with test function
};

console.log('validate("c1986born") :', validate("c1986born")); // true
console.log('validate("b1988born") : ', validate("b1988born")); // true
console.log('validate("1986born") : ', validate("1986born")); // false — нет начальной буквы
console.log('validate("c1886born") : ', validate("c1886born")); // false — не 19XX
console.log('validate("c1986bor") : ', validate("c1986bor")); // false — не заканчивается на 'born'

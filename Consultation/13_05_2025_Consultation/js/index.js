const formElement = document.getElementById("form");
const listElement = document.getElementById("persons-list");
const clearBtnElement = document.getElementById("clear");
const clearOneBtnElement = document.getElementById("clear-one");

// Сначала мы получаем ссылки на несколько элементов HTML с помощью метода getElementById:
// formElement - это форма с идентификатором "form".
// listElement - это список (вероятно, <ul>) с идентификатором "persons-list".
// clearBtnElement - это кнопка с идентификатором "clear".
// clearOneBtnElement - это кнопка с идентификатором "clear-one".

// Создается пустой массив persons, в котором будут храниться данные о людях, которые будут добавляться через форму.
const persons = [];

const clearList = function () {
  while (listElement.hasChildNodes()) {
    listElement.firstChild.remove();
  }
};

// clearOne удаляет первый элемент из списка listElement.
// Этот фрагмент кода определяет функцию с именем ClearOne в JavaScript.
// Функция проверяет, имеет ли элемент DOM с идентификатором ListElement какие-либо дочерние узлы.
// Если это произойдет, первый дочерний узел будет удален из элемента.
const clearOne = function () {
  if (listElement.hasChildNodes()) listElement.firstChild.remove();
};

// Функция clearInputs(event) используется для очистки полей ввода формы
// Она получает объект события event и обнуляет значения полей формы "nickname" и "place"
function clearInputs(event) {
  event.target.nickname.value = "";
  event.target.place.value = "";
}

// Функция changeStatus(event) изменяет стиль элемента списка при клике на него.
//  Если у элемента уже есть стиль "textDecoration" с значением "line-through",
// то этот стиль убирается, иначе он добавляется, что создает эффект зачеркивания текста.
function changeStatus(event) {
  if (event.target.style.textDecoration === "line-through") {
    event.target.style.textDecoration = "none";
  } else {
    event.target.style.textDecoration = "line-through";
  }
}

// Добавляются слушатели событий на кнопки:
// clearBtnElement - при клике на кнопку "clear" вызывается функция clearList.
// clearOneBtnElement - при клике на кнопку "clear-one" вызывается функция clearOne.
clearBtnElement.addEventListener("click", clearList);
clearOneBtnElement.addEventListener("click", clearOne);

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const person = {
    name: event.target.nickname.value,
    place: event.target.place.value,
  };
  // Данные из формы извлекаются и сохраняются в объект person.
  //  Этот объект имеет два свойства: "name" и "place",
  // которые содержат данные из соответствующих полей формы.

  persons.push(person);

  const liElement = document.createElement("li");
  liElement.textContent = `${person.name} ${person.place} 😈`;
  liElement.onclick = changeStatus;
  // устанавливается обработчик клика onclick,
  // который вызывает функцию changeStatus для изменения стиля элемента при клике.

  listElement.append(liElement);
  // прикрепить новый элемент к списку
  clearInputs(event);
  console.log('prsons:',persons);
});

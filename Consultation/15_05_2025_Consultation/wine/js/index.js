/*
// 1. Отправить запрос на https://api.sampleapis.com/wines/whites и получить (вывести в консоль) массив с данными о белых винах
// 2. Отрисовать карточки вин с рейтингом 4.8 и более (image, wine, winery, rating)
// 3. Стилизовать карточки (border, padding, border-radius). Из контейнера сделать grid - 5 колонок + отступы
//  display: grid;
//  grid-template-columns: repeat(5, 1fr);
//  gap: 40px;
// 4. Если у вина рейтинг 4.9 и больше то покрасить карточку в светло-зеленый. А если 4.8 - то в светло-голубой
*/

const wineContainer = document.getElementById("wine-container");
wineContainer.classList.add("wine-container");
fetch("https://api.sampleapis.com/wines/whites")
  .then((res) => res.json())
  .then((obj) => {
    //console.log(obj);
    //console.log(obj[0]);
    const ourWines = obj.filter((wine) => wine.rating.average >= 4.8);
    //console.log(ourWines);
    renderWines(ourWines);
  });

function renderWines(wines) {
  //console.log("We are here!", wines);
  wines.forEach((wine) => renderWine(wine));
}

function renderWine(wine) {
  //console.log("Wine", wine);
  const cardElement = document.createElement("div");
  cardElement.classList.add("wine");
  const imageElement = document.createElement("img");
  const wineNameElement = document.createElement("p");
  const wineryNameElement = document.createElement("p");
  const ratingElement = document.createElement("p");

  imageElement.src = wine.image;
  imageElement.alt = wine.wine;
  wineNameElement.textContent = "Title: " + wine.wine;
  wineryNameElement.textContent = "Winery: " + wine.winery;
  ratingElement.textContent = "Rating: " + wine.rating.average;
  cardElement.append(
    imageElement,
    wineNameElement,
    wineryNameElement,
    ratingElement
  );
  if (wine.rating.average == 4.8)
    cardElement.style.backgroundColor = "lightblue";
  if (wine.rating.average == 4.9)
    cardElement.style.backgroundColor = "lightgreen";
  wineContainer.appendChild(cardElement);
}

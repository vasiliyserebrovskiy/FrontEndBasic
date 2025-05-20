const flowersContainer = document.getElementById("flowers-container");

loadFlowers();

async function loadFlowers() {
  try {
    const res = await fetch(
      "https://alisherkhamidov.github.io/book-api/flowers.json"
    );

    const flowers = await res.json();
    console.log("Flowers", flowers);
    //{name: 'rose', color: 'red', description: 'Has horns and very beatiful', image: 'https://images.unsplash.com/photo-1562690868-60bbe…W58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60', maxHeight: 200}
    //const { name, color, description, image } = flower;

    flowers.forEach((flower) => {
      console.log("We are here", flower);
      const { name, color, description, image } = flower;
      const cardFlower = document.createElement("div");
      cardFlower.classList.add("flower-card");
      const nameElem = document.createElement("p");
      const colorElem = document.createElement("p");
      const imageElem = document.createElement("img");
      imageElem.classList.add("flower-image");
      const descriptionElem = document.createElement("p");

      nameElem.innerHTML = "Name: " + name;
      colorElem.innerHTML = "Color: " + color;
      imageElem.src = image;
      descriptionElem.innerHTML = "Description: " + description;

      cardFlower.append(nameElem, colorElem, imageElem, descriptionElem);
      console.log("cardFlower", cardFlower);
      flowersContainer.append(cardFlower);
    });

    //
  } catch (err) {
    console.log(err);
  }
}

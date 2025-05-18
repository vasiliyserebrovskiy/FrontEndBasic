const divContainer = document.getElementById("body-main-div");
const errorSpanElement = document.getElementById("products-error");
const searchButtonsElement = document.getElementById("search-btn-container");

// checked if we are logged
if (!localStorage.getItem("access_token")) {
  window.location.replace("/login");
}

fetchProducts();

async function fetchProducts() {
  const accessToken = localStorage.getItem("access_token");
  //Products categories
  let productsCategory = [];

  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/products", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!res.ok) {
      throw new Error("Error fetching products list!");
    }

    const products = await res.json();

    //render our products
    renderProducts(products);

    //render buttons for categories
    const categories = products.map((p) => p.category.name);
    productsCategory = [...new Set(categories)];

    productsCategory.unshift("All products");
    //check if we can render buttons
    if (productsCategory.length !== 0) {
      const h2Element = document.createElement("h2");
      h2Element.textContent = "Sorting options: ";
      searchButtonsElement.append(h2Element);

      productsCategory.forEach((category) => {
        const buttonElement = document.createElement("button");
        buttonElement.textContent = category;
        buttonElement.classList.add("sort-button");
        buttonElement.addEventListener("click", () => {
          document
            .querySelectorAll(".sort-button")
            .forEach((btn) => btn.classList.remove("active"));
          buttonElement.classList.add("active");
          if (category === "All products") {
            divContainer.innerHTML = "";
            renderProducts(products);
          } else {
            divContainer.innerHTML = "";
            const filteredProducts = products.filter(
              (product) => product.category.name === category
            );
            renderProducts(filteredProducts);
          }
        });

        searchButtonsElement.append(buttonElement);
      });
    }
  } catch (err) {
    errorSpanElement.textContent = err.message;
  }
}

//Render products
function renderProducts(products) {
  products.forEach(({ title, price, description, images, category }) => {
    const productInfoContainer = document.createElement("div");
    const productCategoryElement = document.createElement("p");
    const productTitleElement = document.createElement("p");
    const productImageElement = document.createElement("img");
    const productPriceElement = document.createElement("p");
    const productDescriptionElement = document.createElement("p");

    productCategoryElement.textContent = "Category: " + category.name;
    productTitleElement.textContent = "Title: " + title;
    productImageElement.src = images[0];
    productImageElement.alt = "Image of " + title;
    productPriceElement.textContent = "Price: " + price;
    productDescriptionElement.textContent = "Description: " + description;

    //collect all element together
    productInfoContainer.append(
      productCategoryElement,
      productTitleElement,
      productImageElement,
      productPriceElement,
      productDescriptionElement
    );
    //add to main container
    divContainer.appendChild(productInfoContainer);
  });
}

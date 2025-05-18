const divContainer = document.getElementById("body-main-div");
const errorSpanElement = document.getElementById("products-error");

// checked if we are logged
if (!localStorage.getItem("access_token")) {
  window.location.replace("/login");
}

fetchProducts();

async function fetchProducts() {
  const accessToken = localStorage.getItem("access_token");

  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");

    if (!res.ok) {
      throw new Error("Error fetching products list!");
    }

    const products = await res.json();

    // here we need to render our information
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

    //
  } catch (err) {
    errorSpanElement.textContent = err.message;
  }
}

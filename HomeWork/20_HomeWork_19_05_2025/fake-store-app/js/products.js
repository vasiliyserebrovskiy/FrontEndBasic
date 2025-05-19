const divContainer = document.getElementById("body-main-div");
const errorSpanElement = document.getElementById("products-error");
const searchButtonsElement = document.getElementById("search-btn-container");

// New search functionality
const categorySelect = document.getElementById("category-select");
const filterForm = document.getElementById("filter-form");

let products = [];

// checked if we are logged
if (!localStorage.getItem("access_token")) {
  window.location.replace("/login");
}
fetchCategories();
fetchProducts();

filterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const categoryId = categorySelect.value;
  fetchProducts(categoryId);
});

async function fetchCategories() {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/categories");

    const categories = await res.json();

    categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category.id;
      option.innerHTML = category.name;
      categorySelect.appendChild(option);
    });
    //
  } catch (err) {
    console.log(err);
  }
}

async function fetchProducts(categoryId) {
  const accessToken = localStorage.getItem("access_token");
  const queryString = categoryId ? `/?categoryId=${categoryId}` : "";

  //Products categories
  let productsCategory = [];

  try {
    const res = await fetch(
      `https://api.escuelajs.co/api/v1/products${queryString}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Error fetching products list!");
    }

    const productsRes = await res.json();
    products = productsRes;
    //render our products
    renderProducts(products);

    //render buttons for categories
    const categories = products.map((p) => p.category.name);
    productsCategory = [...new Set(categories)];

    productsCategory.unshift("All products");
  } catch (err) {
    errorSpanElement.textContent = err.message;
  }
}

//Render products
function renderProducts(products) {
  while (divContainer.firstChild) {
    divContainer.removeChild(divContainer.firstChild);
  }
  products.forEach(({ title, price, description, images, category }) => {
    const productInfoContainer = document.createElement("div");
    const productCategoryElement = document.createElement("p");
    const productTitleElement = document.createElement("p");
    productTitleElement.classList.add("title");
    const productImageElement = document.createElement("img");
    const productPriceElement = document.createElement("p");
    const productDescriptionElement = document.createElement("p");

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.type = "button";
    deleteBtn.classList.add("product-btn-delete");
    deleteBtn.onclick = () => {
      console.log("Click id :" + id);
      fetchDeleteProduct(id);
      fetchProducts();
    };

    productCategoryElement.textContent = "Category: " + category.name;
    productTitleElement.textContent = "Title: " + title;
    productImageElement.src = images[0];
    // не настроен корс, по-этому добавляем
    productImageElement.referrerPolicy = "no-referrer";
    productImageElement.crossOrigin = "anonymous";
    productImageElement.alt = "Image of " + title;
    productPriceElement.textContent = "Price: " + price;
    productDescriptionElement.textContent = "Description: " + description;

    //collect all element together
    productInfoContainer.append(
      productTitleElement,
      productCategoryElement,
      productPriceElement,
      productImageElement,
      productDescriptionElement,
      deleteBtn
    );
    //add to main container
    divContainer.appendChild(productInfoContainer);
  });
}

async function fetchDeleteProduct(productId) {
  const query = `https://api.escuelajs.co/api/v1/products/${productId}`;
  const res = await fetch(query, {
    method: "DELETE",
  });
  console.log("response:", res.ok);
}

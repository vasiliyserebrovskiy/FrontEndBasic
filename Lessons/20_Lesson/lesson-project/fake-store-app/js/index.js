const productsContainer = document.getElementById("products-container");
const categorySelect = document.getElementById("category-select");
const filterForm = document.getElementById("filter-form");

let products = [];

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
  const queryString = categoryId ? `/?categoryId=${categoryId}` : "";
  try {
    //https://api.escuelajs.co/api/v1/products/?categoryId=1
    const responce = await fetch(
      `https://api.escuelajs.co/api/v1/products${queryString}`
    );

    const productsRes = await responce.json();
    products = productsRes;
    renderProducts(products);
  } catch (err) {
    console.log(err);
  }
  //
}

function renderProducts(products) {
  while (productsContainer.firstChild) {
    productsContainer.removeChild(productsContainer.firstChild);
  }
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const { title, description, price, category, images, id } = product;
    const priceSpan = document.createElement("span");
    const titleSpan = document.createElement("span");
    titleSpan.classList.add("title");
    const descriptionSpan = document.createElement("span");
    const productImg = document.createElement("img");

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.type = "button";
    deleteBtn.onclick = () => {
      console.log("Click id :" + id);
      fetchDeleteProduct(id);
      fetchProducts();
    };
    // deleteBtn.addEventListener('click', () => {});

    priceSpan.innerHTML = price + "$";
    titleSpan.innerText = title;
    descriptionSpan.innerText = description;
    productImg.src = images[0];
    // не настроен корс, по-этому добавляем
    productImg.referrerPolicy = "no-referrer";
    productImg.crossOrigin = "anonymous";

    productCard.append(
      titleSpan,
      priceSpan,
      productImg,
      descriptionSpan,
      deleteBtn
    );

    productsContainer.appendChild(productCard);

    //
  });
}

async function fetchDeleteProduct(productId) {
  const query = `https://api.escuelajs.co/api/v1/products/${productId}`;
  const res = await fetch(query, {
    method: "DELETE",
  });
  console.log("response:", res.ok);
}

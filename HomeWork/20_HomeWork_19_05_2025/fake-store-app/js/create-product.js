const form = document.getElementById("add-product-form");
const categorySelect = document.getElementById("category-select");

fetchCategories();

//вызов получения категорий продукта

function addProductHandler(event) {
  event.preventDefault();
  const title = form.elements["title"].value;
  const description = form.elements["description"].value;
  const price = form.elements["price"].value;
  const image = form.elements["image"].value;
  const category = form.elements["category"].value;

  const newProduct = {
    title,
    description,
    price,
    images: [image],
    categoryId: category,
  };

  fetchAddProduct(newProduct);
}

form.addEventListener("submit", addProductHandler);

async function fetchAddProduct(product) {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    method: "POST",
    body: JSON.stringify(product),
    headers: { "Content-Type": "application/json" },
  });

  if (res.status === 201) {
    window.location.replace("/products");
  }
}

//Get category list
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

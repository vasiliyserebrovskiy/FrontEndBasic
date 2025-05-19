const form = document.getElementById("add-product-form");

function addProductHandler(event) {
  event.preventDefault();
  const title = form.elements["title"].value;
  const description = form.elements["description"].value;
  const price = form.elements["price"].value;
  const image = form.elements["image"].value;

  const newProduct = {
    title,
    description,
    price,
    images: [image],
    categoryId: 1,
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
    window.location.replace("/");
  }
}

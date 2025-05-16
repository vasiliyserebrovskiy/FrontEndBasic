const divContainer = document.getElementById("body-main-div");
const errorSpanElement = document.getElementById("products-error");

// checked if we are logged
if (!localStorage.getItem("access_token")) {
  window.location.replace("/login");
}

async function fetchProducts() {
  const accessToken = localStorage.getItem("access_token");
  console.log("accessToken:", accessToken);

  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/products1");

    if (!res.ok) {
      throw new Error("Error fetching products list!");
      console.log("WE ARE HERE!");
    }

    const products = await res.json();
    console.log(products);
  } catch (err) {
    console.log("test error log");
    console.log(err.message);
    errorSpanElement.textContent = err.message;
  }
}

//   errorSpanElement.innerText = "";
fetchProducts();

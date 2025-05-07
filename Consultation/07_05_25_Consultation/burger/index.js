const burger_icon = document.querySelector(".burger_icon");
const nav_menu = document.querySelector(".nav_menu");

burger_icon.addEventListener("click", () =>
  nav_menu.classList.toggle("nav_active")
);

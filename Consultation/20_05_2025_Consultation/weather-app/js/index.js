const button = document.getElementById("refreshButton");

const url = "https://wttr.in/Yerevan";
const params = {
  2: "",
  m: "",
  lang: "ru",
};

function fetchData() {
  const queryString = new URLSearchParams(params).toString();
  fetch(`${url}?${queryString}`)
    .then((response) => response.text())
    .then((pageText) => {
      const result = document.getElementById("content");
      result.innerHTML = pageText;
    });
}

button.addEventListener("click", fetchData);

/**
 * Погода
https://github.com/chubin/wttr.in?tab=readme-ov-file
https://wttr.in/:help

here we can find description
 */

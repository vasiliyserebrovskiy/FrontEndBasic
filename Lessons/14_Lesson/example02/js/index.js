console.log("Hello!");

// methods for search and get DOM elements

const messageElement = document.getElementById("welcome-message");
const magicBtn = document.getElementById("btn-js-is-here");
const catBtn = document.getElementById("btn-cat");
const catDiv = document.getElementById("container-cat");

console.log(messageElement);
console.log(magicBtn);
console.log(catBtn);
console.log(catDiv);

magicBtn.addEventListener("click", () => {
  console.log("Function is working!");
  // reload element value
  messageElement.innerText = "JS is here, baby!";
});
const catImg = document.createElement("img");
catBtn.addEventListener("click", () => {
  //   console.log("THIS IS A CAT!");

  //   console.log(catImg);
  //give attributes ti img
  catImg.setAttribute(
    "src",
    "https://preview.redd.it/i-keep-seeing-this-angry-cat-meme-does-anyone-know-what-v0-0o96ygkg9jw91.jpg?width=640&crop=smart&auto=webp&s=f2b697113affe3da13283197767d071e80644ff7"
  );
  catImg.setAttribute("alt", "angry-cat-mem");

  //some styles
  catImg.classList.add("catImg");
  //   catImg.style.width = "200px";
  //   catImg.style.marginTop = "20px";
  //   catImg.style.borderRadius = "25px";
  //   console.log(catImg);
  // connect img to catDiv container
  catDiv.appendChild(catImg);
});

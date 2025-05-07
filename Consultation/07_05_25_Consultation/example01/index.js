// new p
const newElement = document.createElement("p");
// console.log(newElement);
newElement.textContent = "I am created by JS";
newElement.style.border = "2px solid red";
document.body.append(newElement);

const targetElement = document.getElementById("target-element");
const newBtn = document.createElement("button");
newBtn.type = "button";
newBtn.textContent = "Push me";
targetElement.append(newBtn);

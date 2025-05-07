// console.log("Check");
const infoBtn = document.getElementById("btn-info");
const textDiv = document.getElementById("dev-for-text");
const removeBtn = document.getElementById("btn-remove-info");
const infoMessage = document.createElement("p");

infoMessage.innerText = "This summer is not warm at all!";
console.log(infoMessage);
console.log(removeBtn);
console.log(textDiv);

const infoMessageClone = document.cloneNode(infoMessage);
infoMessageClone.id = "new-id-msg"; //change DOM id

infoBtn.addEventListener("click", () => {
  console.log("Btn clicked");
  //   textDiv.appendChild(infoMessageClone);
  document.body.appendChild(infoMessage);
});

removeBtn.addEventListener("click", () => {
  //   console.log("remove clicked");
  //delete element from DOM
  infoMessage.remove();
});

//

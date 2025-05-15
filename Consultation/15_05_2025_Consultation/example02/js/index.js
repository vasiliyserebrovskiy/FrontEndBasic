const dogImageElement = document.getElementById("dog-image");
fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => res.json())
  .then((obj) => {
    const { message } = obj;
    dogImageElement.style.width = "400px";
    dogImageElement.src = message;
  });

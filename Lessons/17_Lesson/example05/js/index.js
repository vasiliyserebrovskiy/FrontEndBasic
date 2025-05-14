const imgElement = document.getElementById("cat-image");
imgElement.style.width = "500px";

fetch("https://api.thecatapi.com/v1/images/search")
  .then((res) => res.json())
  .then((data) => {
    console.log(data[0].url);
    const catImgUrl = data[0].url;
    imgElement.src = catImgUrl;
  });

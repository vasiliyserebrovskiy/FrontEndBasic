const catFactsElement = document.getElementById("cat-facts");
fetch("https://catfact.ninja/fact")
  .then((res) => res.json())
  .then((obj) => {
    const { fact, length } = obj;
    catFactsElement.textContent = `${fact} ${length}`;
    
  });

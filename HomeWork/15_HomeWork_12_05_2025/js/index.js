//form elements
const addAnimalForm = document.getElementById("add-new-animal");
const animalNickNameInput = addAnimalForm.elements["nickname"];
const animalAgeInput = addAnimalForm.elements["age"];
const animalBreedInput = addAnimalForm.elements["breed"];

// submit button
const submitBtn = document.getElementById("btn-submit-animal");

//Animals container
const animalsContainer = document.getElementById("animals-list-container");

//Error message
const errorMsg = document.getElementById("animal-error-msg");

let animals = [
  { nickname: "Murka", age: 6, breed: "British Shorthair" },
  { nickname: "Enik", age: 4.5, breed: "Pudel" },
  { nickname: "Bonya", age: 1, breed: "Jack Russell Terrier" },
];

//function for render animals
function renderAnimals(animals) {
  //   console.log("start render!");

  while (animalsContainer.firstChild) {
    animalsContainer.removeChild(animalsContainer.firstChild);
  }

  animals.forEach((animal) => {
    const animalCard = document.createElement("div");
    animalCard.classList.add("animal-row");
    const animalNickNameElement = document.createElement("p");
    const animalAgeElement = document.createElement("p");
    const animalBreedElement = document.createElement("p");
    animalNickNameElement.textContent = animal.nickname;
    animalAgeElement.textContent = animal.age;
    animalBreedElement.textContent = animal.breed;
    animalCard.append(
      animalNickNameElement,
      animalAgeElement,
      animalBreedElement
    );
    animalsContainer.appendChild(animalCard);
  });
}

renderAnimals(animals);

function addNewAnimalToList(event) {
  event.preventDefault();

  //TODO check that values must not be null

  const animalValidate = validateAnimalInfo();
  //   console.log(animalValidate);
  if (animalValidate.value) {
    errorMsg.innerText = "";
    animals.push({
      nickname: animalNickNameInput.value,
      age: animalAgeInput.value,
      breed: animalBreedInput.value,
    });
    animalNickNameInput.value = "";
    animalAgeInput.value = "";
    animalBreedInput.value = "";
  } else {
    errorMsg.innerText = animalValidate.errMsg;
  }
  renderAnimals(animals);
}

//Validate function for animal info validation
function validateAnimalInfo() {
  if (animalNickNameInput.value === "")
    return { value: false, errMsg: "Nickname can not be empty!" };
  if (animalAgeInput.value === "" || isNaN(Number(animalAgeInput.value)))
    return { value: false, errMsg: "Animal age must be a number!" };
  if (animalBreedInput.value === "")
    return { value: false, errMsg: "Animal breed can not be empry!" };

  return { value: true };
}

//add new animal
submitBtn.addEventListener("click", addNewAnimalToList);

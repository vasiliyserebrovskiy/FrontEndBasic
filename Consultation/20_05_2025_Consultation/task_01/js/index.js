const userForm = document.getElementById("input-form");
const resultDiv = document.getElementById("result");

userForm.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();

  const userName = userForm.name.value;

  fetchGenderByUserName(userName);
  userForm.name.value = "";
}

async function fetchGenderByUserName(userName) {
  try {
    resultDiv.innerHTML = "";
    const res = await fetch(`https://api.genderize.io?name=${userName}`);

    const result = await res.json();

    const { name, gender, probability } = result;
    const nameElement = document.createElement("p");
    const genderElement = document.createElement("p");
    const probabilityElement = document.createElement("p");

    nameElement.innerText = "Name: " + name;
    genderElement.innerText = "Gender: " + gender;
    let probabilityNumber = Number(probability);
    probabilityNumber = Math.round(probabilityNumber * 100);
    probabilityElement.innerText = "Probability: " + probabilityNumber + "%";

    resultDiv.append(nameElement, genderElement, probabilityElement);

    //
  } catch (err) {
    console.log(err);
  }
}

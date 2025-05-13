const form = document.getElementById("personal-data-form");

const heightInput = form.elements["height"];
const genderInput = form.elements["gender"];
const submitBtn = document.getElementById("submit-data");
const errMessageElement = document.getElementById("error-msg");
const resultCard = document.getElementById("result-card");

function onSubmit(e) {
  e.preventDefault();
  //   let idealWeight = 0;
  console.log("TEST");
  console.log(heightInput.value, genderInput.value);
  if (validateInputs()) {
    const idealWeight = getIdealWeightByHeightForGender(
      heightInput.value,
      genderInput.value
    );
    resultCard.innerText = "Ваш идеальный вес " + idealWeight;
  }
}

function validateInputs() {
  let errMessage = "";
  let result = true;
  console.log("check: ", parseInt(heightInput.value));
  if (!parseInt(heightInput.value)) {
    // here we need !
    errMessage += "Invalid weight, please use numbers. ";
    result = false;
  }
  if (parseInt(heightInput.value) > 210) {
    errMessage += "Sorry, but our program doesn't work with height > 210 cm. ";
    result - false;
  }
  if (!genderInput.value) {
    result = false;
    errMessage += "Please, select gender!";
  }
  errMessageElement.innerText = errMessage;
  return result;
}

function getIdealWeightByHeightForGender(height, gender) {
  if (gender === "male") {
    return height - 100;
  }
  return height - 110;
}

form.addEventListener("submit", onSubmit);

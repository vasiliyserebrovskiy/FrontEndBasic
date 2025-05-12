const form = document.getElementById("student-form");
const emailInput = form.elements["email"]; // name="email"
const studentsContainer = document.getElementById("students-container");
const removeBtn = document.getElementById("remove-all-students");
const emailErr = document.getElementById("email-error-msg");
const germanLevel = document.getElementById("german");
const sortBtn = document.getElementById("sort-students-btn");
const filterForm = document.getElementById("filter-form");
const filterParamInput = filterForm.elements["german"];

let students = [
  { email: "default@gmail.com", german: "B1" },
  { email: "default2@gmail.com", german: "A2" },
];

function renderStudents(students) {
  console.log(studentsContainer.firstChild);
  //delete old element from container before new render

  while (studentsContainer.firstChild) {
    studentsContainer.removeChild(studentsContainer.firstChild);
  }

  students.forEach((student) => {
    const studentCard = document.createElement("div");
    // studentCard.innerText = student.email + " | " + student.german;
    // const emailInfo = document.createElement("span");
    // const germanInfo = document.createElement("span");
    // const delimeter = document.createTextNode(", ");
    // emailInfo.innerText = student.email;
    // germanInfo.innerText = student.german;
    // studentCard.append(emailInfo, delimeter, germanInfo);
    studentCard.innerHTML = `<span>${student.email}</span>, <span>${student.german}</span>`;
    // studentCard.innerHTML = "<span>email</span>,  <span>german</span>";

    studentsContainer.appendChild(studentCard);
  });
}

renderStudents(students); // initial render

function validateForm() {
  return emailInput.value.includes("@") && !emailInput.value.includes("#");
}

function addStudentToList(event) {
  event.preventDefault();
  //   console.log("Subbmit");
  // console.log(emailInput.value);
  if (validateForm()) {
    students.push({ email: emailInput.value, german: germanLevel.value });
    console.log(students);
    emailInput.value = "";
    emailErr.innerText = "";
    germanLevel.value = "";
  } else {
    emailErr.innerText = "email is not valid";
    emailErr.style.color = "red";
  }
  renderStudents(students);
}

form.addEventListener("submit", addStudentToList);

function removeAllStudents() {
  // console.log("TEST");
  students = [];
  renderStudents(students);
}

removeBtn.addEventListener("click", removeAllStudents);

// sort studets arrey by level of german
function sortStudentsByGerman() {
  students.sort((studentA, studentB) =>
    studentA.german.localeCompare(studentB.german)
  );
  renderStudents(students);
}

sortBtn.addEventListener("click", sortStudentsByGerman);

function filterStudentsByGermanLevel(event) {
  event.preventDefault();
  const filtered = students.filter(
    (student) => student.german === filterParamInput.value
  );

  renderStudents(filtered);
}

filterForm.addEventListener("submit", filterStudentsByGermanLevel);

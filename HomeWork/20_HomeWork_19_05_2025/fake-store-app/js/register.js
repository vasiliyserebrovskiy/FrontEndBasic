const newUserForm = document.getElementById("new-user-form");
// newUserForm.reset();

function createNewUserHandler(event) {
  event.preventDefault();
  //
  const name = newUserForm.elements["name"].value;
  const email = newUserForm.elements["email"].value;
  const password = newUserForm.elements["password"].value;
  const avatar = newUserForm.elements["avatar"].value;

  const newUser = { name, email, password, avatar };
  //   console.log("NEW USER:", newUser);
  fetchNewUser(newUser);
}

newUserForm.addEventListener("submit", createNewUserHandler);

async function fetchNewUser(user) {
  console.log("USER:", user);
  const res = await fetch("https://api.escuelajs.co/api/v1/users/", {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  });
  if (res.status === 201) {
    window.location.replace("/login");
  }
}

const userContainer = document.getElementById("users-container");

fetchUsers();

async function fetchUsers() {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/users");

    if (!res.ok) {
      console.log("Something went wrong");
    }

    const users = await res.json();

    users.forEach((user) => {
      const { id, email, name, role, avatar } = user;
      const userDivElement = document.createElement("div");
      userDivElement.classList.add("user-div");

      const userName = document.createElement("p");
      const userEmail = document.createElement("p");
      const userRole = document.createElement("p");
      const userAvatar = document.createElement("img");

      userName.innerHTML = name;
      userEmail.innerHTML = email;
      userRole.innerHTML = role;
      userAvatar.src = avatar;
      userAvatar.referrerPolicy = "no-referrer";
      userAvatar.crossOrigin = "anonymous";

      userDivElement.append(userName, userEmail, userRole, userAvatar);

      userContainer.append(userDivElement);
    });

    //
  } catch (err) {
    console.log(err);
  }
}

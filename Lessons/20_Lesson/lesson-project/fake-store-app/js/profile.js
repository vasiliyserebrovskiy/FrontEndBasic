const fullName = document.getElementById("full-name");
const avatarElement = document.getElementById("avatar");
const emailElement = document.getElementById("email");

if (!localStorage.getItem("access_token")) {
  window.location.replace("/login");
}

async function fetchProfile() {
  const accessToken = localStorage.getItem("access_token");

  const res = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const user = await res.json();

  console.log("user:", user);
  const { avatar, email, name } = user;

  fullName.innerText = name;
  avatarElement.src = avatar;
  // avatarElement.referPolicy = "no-referrer";
  // avatarElement.crossOrigin = "anonymous";

  avatarElement.referrerPolicy = "no-referrer";
  avatarElement.crossOrigin = "anonymous";

  emailElement.innerText = "Email: " + email;
}

fetchProfile();

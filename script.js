const form = document.querySelector("form");
const existingBtn = document.getElementById("existing");
const checkbox = document.getElementById("checkbox");

// Show existing user button if user is saved
if (localStorage.getItem("user")) {
  existingBtn.style.display = "block";
}

// Handle form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const rememberMe = checkbox.checked;

  if (rememberMe) {
    localStorage.setItem("user", JSON.stringify({ username, password }));
    existingBtn.style.display = "block";
  } else {
    localStorage.removeItem("user");
    existingBtn.style.display = "none";
  }

  alert(`Logged in as ${username}`);
  form.reset();
});

// Handle login as existing user
existingBtn.addEventListener("click", () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    document.getElementById("username").value = user.username;
    document.getElementById("password").value = user.password;

    alert(`Logged in as ${user.username}`);
  }
});

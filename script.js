//your JS code here. If required.
const  form = document.querySelector("form")
const existing = document.getElementById("existing")
if(localStorage.getItem("username")) {
    existing.style.display = "block";
  }
form.addEventListener("submit", function (e) {
    e.preventDefault()
    const user = e.target.username.value;
    const pass = e.target.password.value;
	const checkbox = e.target.checkbox

    alert(`Logged in as ${user}`);
	

    if (checkbox.checked) {
      localStorage.setItem("username", user);
      localStorage.setItem("password", pass);
      existing.style.display = "block";
    } else {
      localStorage.clear();
      existing.style.display = "none";
    }
	e.target.reset()
  })

  existing.addEventListener("click", ()=> {
    alert(`Logged in as ${localStorage.getItem("username")}`);
  })
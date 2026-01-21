//your JS code here. If required.
const form = document.querySelector("form");
const existingBtn = document.getElementById("existing");
form.addEventListener('submit', (e) => {
	e.preventDefault();
	const username = e.target.username.value;
	const password = e.target.password.value;
	const rememberMe = e.target.checkbox.checked;
	if(rememberMe){
		localStorage.setItem('user', JSON.stringify({username, password}));
		existingBtn.style.display = "block";
	} else {
		localStorage.clear();
		existingBtn.style.display = "none";
	}
	alert(`Logged in as ${username}`);
	e.target.reset();
})

existingBtn.addEventListener('click', () => {
	const user = JSON.parse(localStorage.getItem('user'));
	alert(`Logged in as ${user.username}`)
})
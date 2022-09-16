const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const submitBtn = document.getElementById("submit");

const errFirstname = document.getElementById("error-firstname");
const errLastName = document.getElementById("error-lastname");
const errEmail = document.getElementById("error-email");
const errPassword = document.getElementById("error-password");

const fields = [firstName, lastName, email, pass];
const errors = [errFirstname, errLastName, errEmail, errPassword];
const strings = ["First Name", "Last Name", "Email", "Password"];

submitBtn.addEventListener("click", function() {
	event.preventDefault();
	for (let i = 0, j = 0, k = 0; i < fields.length, j < errors.length, k < strings.length; i++, j++, k++) {
		if (fields[i].value === "") {
			invalidFields(fields[i], errors[j], strings[k]);
		} else if (fields[i] === email) {
			const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
			if (fields[i].value.match(validRegex)) {
				validFields(fields[i], errors[j]);
			} else {
				invalidFields(fields[i], errors[j], "");
				errors[j].textContent = "Invalid email address";
			}
		} else {
			validFields(fields[i], errors[j]);
		}
	}
})

function validFields(input, errorMessage) {
	input.style.backgroundImage = "none";
	errorMessage.textContent = "";
	input.style.borderColor = "hsl(246, 25%, 77%)";
}

function invalidFields(input, errorMessage, string) {
	input.style.backgroundImage = "url(icon-error.svg)";
	input.placeholder = "";
	errorMessage.textContent = `${string} cannot be empty`;
	input.style.borderColor = "hsl(0, 100%, 74%)";
}

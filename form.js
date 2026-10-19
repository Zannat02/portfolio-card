
const registrationForm = document.getElementById("registrationForm");
const formFeedback = document.getElementById("form-feedback");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("fullName").value.trim();
  const password = document.getElementById("password").value;

  // Validate name
  if (name.length < 2) {
    formFeedback.style.color = "#dc2626";
    formFeedback.textContent = "Please enter a valid name.";
    return;
  }

  // Validate password
  if (password.length < 6) {
    formFeedback.style.color = "#dc2626";
    formFeedback.textContent =
      "Password must contain at least 6 characters.";
    return;
  }

  // Show success message
  formFeedback.style.color = "#15803d";
  formFeedback.textContent =
    `Registration successful! Welcome, ${name}.`;

  // Reset form after successful submission
  registrationForm.reset();
});

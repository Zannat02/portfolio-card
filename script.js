
const skillsButton = document.getElementById("skills-btn");
const contactButton = document.getElementById("contact-btn");

const skillsSection = document.getElementById("skills");
const message = document.getElementById("message");

// Show or hide the skills section
skillsButton.addEventListener("click", function () {
  skillsSection.hidden = !skillsSection.hidden;

  if (skillsSection.hidden) {
    skillsButton.textContent = "View Skills";
  } else {
    skillsButton.textContent = "Hide Skills";
  }

  message.hidden = true;
});

// Show a contact message
contactButton.addEventListener("click", function () {
  skillsSection.hidden = true;
  skillsButton.textContent = "View Skills";

  message.textContent =
    "Thanks for your interest! You can contact me at shawon4166@gmail.com.";

  message.hidden = false;
});

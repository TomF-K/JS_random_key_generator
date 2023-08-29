// NAVBAR LINK TOGGLE

const navToggle = document.querySelector(".nav-toggle");

const navLinks = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  navLinks.classList.toggle("show-links");
});

function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("opne")
    icon.classList.toggle("opne")
}

const toggle = document.getElementById("dark-mode-toggle");
const themeIcon = document.getElementById("theme-icon");

// Toggle theme on click
toggle.addEventListener("change", () => {
  const darkModeOn = toggle.checked;
  document.body.classList.toggle("dark-mode", darkModeOn);

  // Update icon
  themeIcon.textContent = darkModeOn ? "☀️" : "🌙";

  // Save preference
  localStorage.setItem("darkMode", darkModeOn);
});

// Load saved theme
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
  toggle.checked = true;
  themeIcon.textContent = "☀️"; // show sun in dark mode
}

// Dark/Light Theme Toggle
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
// script.js

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-theme");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    // Optional: change the icon
    if (document.body.classList.contains("dark-theme")) {
      toggleBtn.textContent = "☀️";
    } else {
      toggleBtn.textContent = "🌙";
    }
  });
});

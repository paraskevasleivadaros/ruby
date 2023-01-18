const toggleTheme = document.getElementById("toggle-theme");

// Add event listener to the toggle button
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

// Check for theme preference on localStorage
if (localStorage.getItem("theme")) {
  document.body.classList.add(localStorage.getItem("theme"));
}

// Add event listener to update theme preference
document.body.addEventListener("click", event => {
  if (event.target.matches(".dark-theme")) {
    localStorage.setItem("theme", "dark-theme");
  } else {
    localStorage.setItem("theme", "");
  }
});

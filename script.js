function toggleTheme() {
  const body = document.querySelector("body");
  body.classList.toggle("dark");
  body.classList.toggle("light");
}

// add a listener to the toggle button
const toggleButton = document.querySelector("#toggle-theme-button");
toggleButton.addEventListener("click", toggleTheme);

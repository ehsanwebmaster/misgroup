document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const lightIcon = document.getElementById("theme-toggle-light-icon");
  const darkIcon = document.getElementById("theme-toggle-dark-icon");

  // Initialize theme
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.documentElement.classList.add("dark");
    darkIcon.classList.remove("hidden");
  } else {
    document.documentElement.classList.remove("dark");
    lightIcon.classList.remove("hidden");
  }

  // Toggle theme
  themeToggleBtn.addEventListener("click", () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      darkIcon.classList.add("hidden");
      lightIcon.classList.remove("hidden");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      lightIcon.classList.add("hidden");
      darkIcon.classList.remove("hidden");
    }
  });
});

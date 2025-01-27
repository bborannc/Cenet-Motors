// Dark Mode - Light Mode
const toggleButton = document.getElementById("toggleButton");
const body = document.body;
const sunIcon = document.getElementById("sunIcon");

// LocalStorage'daki modu kontrol et ve uygula
document.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("mode") || "light"; // Varsayılan light mode
  if (savedMode === "dark") {
    enableDarkMode();
  } else {
    enableLightMode();
  }
});

toggleButton.addEventListener("click", () => {
  const isDarkMode = body.classList.contains("dark-mode");
  if (isDarkMode) {
    enableLightMode();
  } else {
    enableDarkMode();
  }
});

// Dark mode'u etkinleştir
function enableDarkMode() {
  body.classList.add("dark-mode");
  body.style.backgroundColor = "var(--background-color-dark)";
  body.style.color = "var(--text-color-dark)";
  toggleButton.classList.add("dark-mode");
  sunIcon.style.display = "none"; // Ay ikonu için burayı güncelleyebilirsiniz
  localStorage.setItem("mode", "dark");
}

// Light mode'u etkinleştir
function enableLightMode() {
  body.classList.remove("dark-mode");
  body.style.backgroundColor = "var(--background-color-light)";
  body.style.color = "var(--text-color-light)";
  toggleButton.classList.remove("dark-mode");
  sunIcon.style.display = "block"; // Güneş ikonunu tekrar göster
  localStorage.setItem("mode", "light");
}

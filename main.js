const roothtml = document.getElementById("parent");
const toggleContainer = document.getElementById("togglecontainer");
const toggle = document.getElementById("toggle");

let theme =
  localStorage.getItem("currentMode") == null
    ? "light"
    : localStorage.getItem("currentMode");

roothtml.classList.add(theme);

localStorage.setItem("currentMode", theme);

toggleContainer.addEventListener("click", () => {
  darkMood();
});

if (localStorage.getItem("currentMode") === "light") {
  toggle.style.left = "unset";
} else {
  toggle.style.left = "1px";
}

function darkMood() {
  localStorage.setItem("currentMode", theme === "light" ? "dark" : "light");
  theme = localStorage.getItem("currentMode");

  if (localStorage.getItem("currentMode") === "light") {
    roothtml.classList.remove("dark");
    roothtml.classList.add("light");
    toggle.style.left = "unset";
  } else {
    toggle.style.left = "1px";
    roothtml.classList.remove("light");
    roothtml.classList.add("dark");
  }
}

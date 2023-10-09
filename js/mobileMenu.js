const mobileMenu = document.getElementById("mobileMenu");
const openMenuBtn = document.getElementById("menuBtn");
const closeMenuBtn = document.getElementById("closeMenu");
const mobileLinks = document.querySelectorAll(".mobileLink");

openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);

function openMenu() {
  mobileMenu.style.display = "flex";
  document.addEventListener("keydown", handleEscapeMenuKey);
}

function closeMenu() {
  mobileMenu.style.display = "none";
  document.removeEventListener("keydown", handleEscapeKey);
}

function handleEscapeMenuKey(event) {
  if (event.key === "Escape") {
    closeMenu();
  }
}

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

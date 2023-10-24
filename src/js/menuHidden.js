const header = document.querySelector("header");
const nav = document.querySelector("nav");
const footer = document.querySelector("footer");
const navIcons = document.querySelectorAll(".nav i")
const footerIcons = document.querySelectorAll(".footer a")
const main = document.querySelector("main");
const faBars = document.querySelector(".fa-bars")
const logo = document.querySelector("#logo")
const toggleMenu = document.querySelector("#toggle-menu")

function showMenuBar() {
  header.classList.toggle("show");
  nav.classList.toggle("show");
  footer.classList.toggle("show");
  removeIcons(navIcons)
  removeIcons(footerIcons)
  faBars.classList.toggle("d-none");
  logo.classList.toggle("d-none");
  main.classList.toggle("blur");
}

function hideMenuBar() {
  header.classList.remove("show");
  nav.classList.remove("show");
  footer.classList.remove("show");
  faBars.classList.remove("d-none");
  logo.classList.add("d-none");
  hiddenIcons(navIcons)
  hiddenIcons(footerIcons)
  main.classList.remove("blur");
}

function hiddenIcons(element) {
  element.forEach(icon => {
    icon.classList.add("hidden-icon");
  })
}
function removeIcons(element) {
  element.forEach(icon => {
    icon.classList.remove("hidden-icon");
  })
}

toggleMenu.addEventListener("click", showMenuBar);
links.forEach(link => {
  link.addEventListener("click",hideMenuBar)
})
main.addEventListener("click",hideMenuBar);
main.addEventListener("mouseover",hideMenuBar);
titlePage.addEventListener("click",hideMenuBar);
titlePage.addEventListener("mouseover",hideMenuBar);
// toggleMenu.addEventListener("click", hideMenuBar);
// nav.addEventListener("mouseout", );
// footer.addEventListener("mouseout", hideMenuBar);
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const footer = document.querySelector("footer");
const navIcons = document.querySelectorAll(".nav i")
const footerIcons = document.querySelectorAll(".footer a")
const main = document.querySelector("main");
const faBars = document.querySelector(".fa-bars")
const logo = document.querySelector("#logo")

function handleMouseOver() {
  header.classList.add("show");
  nav.classList.add("show");
  footer.classList.add("show");
  removeIcons(navIcons)
  removeIcons(footerIcons)
  faBars.classList.add("d-none");
  logo.classList.remove("d-none");
  main.classList.add("blur");
}

function handleMouseOut() {
  header.classList.remove("show");
  nav.classList.remove("show");
  footer.classList.remove("show");
  faBars.classList.remove("d-none");
  logo.classList.add("d-none");
  hiddenIcons(navIcons)
  hiddenIcons(footerIcons)
  main.classList.remove("blur");
}

function hiddenIcons(element){
  element.forEach(icon => {
    icon.classList.add("hidden-icon");
  })
}
function removeIcons(element){
  element.forEach(icon => {
    icon.classList.remove("hidden-icon");
  })
}

header.addEventListener("mouseover", handleMouseOver);
header.addEventListener("mouseout", handleMouseOut);
nav.addEventListener("mouseover", handleMouseOver);
nav.addEventListener("mouseout", handleMouseOut);
footer.addEventListener("mouseover", handleMouseOver);
footer.addEventListener("mouseout", handleMouseOut);
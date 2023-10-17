const header = document.querySelector("header");
const nav = document.querySelector("nav");
const navIcons = document.querySelectorAll(".nav i")
const main = document.querySelector("main");

function handleMouseOver() {
  header.classList.add("show");
  nav.classList.add("show");
  removeIcons()
  main.classList.add("blur");
}

function handleMouseOut() {
  header.classList.remove("show");
  nav.classList.remove("show");
  hiddenIcons()
  main.classList.remove("blur");
}

function hiddenIcons(){
  navIcons.forEach(icon => {
    icon.classList.add("hidden-icon");
  })
}
function removeIcons(){
  navIcons.forEach(icon => {
    icon.classList.remove("hidden-icon");
  })
}


header.addEventListener("mouseover", handleMouseOver);
header.addEventListener("mouseout", handleMouseOut);
nav.addEventListener("mouseover", handleMouseOver);
nav.addEventListener("mouseout", handleMouseOut);
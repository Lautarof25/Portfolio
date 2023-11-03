function showMenuBar() {
  header.classList.toggle("show");
  nav.classList.toggle("show");
  footer.classList.toggle("show");
  removeIcons(navIcons)
  removeIcons(footerIcons)
  faBars.classList.toggle("d-none");
  logo.classList.toggle("d-none");
  main.classList.add("blur");
  titlePage.classList.add("blur");
  buttonDown.classList.add("blur");
  buttonUp.classList.add("blur");
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
  titlePage.classList.remove("blur");
  buttonDown.classList.remove("blur");
  buttonUp.classList.remove("blur");
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
section.addEventListener("click",hideMenuBar);
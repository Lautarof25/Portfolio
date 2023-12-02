function showMenuBar() {
  header.classList.add("show")
  header.classList.add("opacity-50")
  header.classList.add("top-0")
  header.classList.remove("top-40off")
  header.classList.toggle("opacity-50")
  header.classList.remove("left-40off")
  headerLogo.classList.remove("right-15off")
  headerLogo.classList.remove("bottom-15off")
  nav.classList.add("show")
  footer.classList.add("show")
  removeIcons(navIcons)
  removeIcons(footerIcons)
  faBars.classList.add("d-none")
  logo.classList.remove("d-none")
  main.classList.add("blur")
  titlePage.classList.add("blur")
  buttonDown.classList.add("blur")
  buttonUp.classList.add("blur")
  chevronBottomRight.classList.add("d-none")
}

function hideMenuBar() {
  if(header.classList.contains("show")){
    header.classList.remove("show")
    header.classList.toggle("opacity-50")
    header.classList.remove("top-0")
    header.classList.add("top-40off")
    header.classList.add("left-40off")
    headerLogo.classList.add("right-15off")
    headerLogo.classList.add("bottom-15off")
    nav.classList.remove("show")
    footer.classList.remove("show")
    faBars.classList.remove("d-none")
    logo.classList.add("d-none")
    hiddenIcons(navIcons)
    hiddenIcons(footerIcons)
    main.classList.remove("blur")
    titlePage.classList.remove("blur")
    buttonDown.classList.remove("blur")
    buttonUp.classList.remove("blur")
    chevronBottomRight.classList.remove("d-none")
  } 
}

function hiddenIcons(element) {
  element.forEach(icon => {
    icon.classList.add("hidden-icon")
  })
}
function removeIcons(element) {
  element.forEach(icon => {
    icon.classList.remove("hidden-icon")
  })
}

toggleMenu.addEventListener("click", showMenuBar)
links.forEach(link => {
  link.addEventListener("click",hideMenuBar)
})
main.addEventListener("click",hideMenuBar)
section.addEventListener("click",hideMenuBar)
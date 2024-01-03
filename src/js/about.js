function createCardAboutInfo(description, icons) {
  const div = document.createElement("div")
  div.className = "section__box relative d-grid p-05 gap-1 bg-dark-gray border-radius-5 drop-shadow"

  const chevronTopLeft = createSVG("chevron-top-left")
  const chevronBottomRight = createSVG("chevron-bottom-right")

  const p = document.createElement("p");
  p.setAttribute("class", "section__description text-center")
  p.textContent = description;
  const divIcons = document.createElement("div")
  divIcons.setAttribute("class", "section__icons d-flex justify-center gap-05")

  for (let j = 0; j < icons.length; j++) {
    const icon = document.createElement("img")
    icon.setAttribute("src", `./src/img/icons/${icons[j]}.svg`)
    divIcons.appendChild(icon)
  }

  div.appendChild(chevronTopLeft)
  div.appendChild(chevronBottomRight)
  div.append(p,divIcons)

  about.appendChild(div)
}
const createCardAboutInfo = (description,descriptionHidden, icons) =>{
  const div = document.createElement("div")
  div.className = "section__box relative d-grid p-05 gap-1 bg-dark-gray border-radius-5 drop-shadow opacityEffect"

  const chevronTopLeft = createSVG("chevron-top-left")
  const chevronBottomRight = createSVG("chevron-bottom-right")

  const p = document.createElement("p");
  p.setAttribute("class", "section__description text-center")
  p.textContent = description;
  const p2 = document.createElement("p");
  p2.setAttribute("class", "section__description text-center hidden")
  p2.textContent = descriptionHidden;
  const divIcons = document.createElement("div")
  divIcons.setAttribute("class", "section__icons d-flex justify-center gap-05")

  for (let j = 0; j < icons.length; j++) {
    const icon = document.createElement("img")
    icon.setAttribute("src", `./src/img/icons/${icons[j]}.svg`)
    icon.setAttribute("alt", `${icons[j]}`)
    icon.setAttribute("loading", "lazy")
    divIcons.appendChild(icon)
  }

  div.appendChild(chevronTopLeft)
  div.appendChild(chevronBottomRight)
  div.append(p,p2,divIcons)

  about.appendChild(div)
}
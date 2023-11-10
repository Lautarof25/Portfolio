function addCardAboutInfo() {
  databaseAbout.forEach(item => {
    createCardAboutInfo(item.description, item.icons)
  })
}

function createCardAboutInfo(description, icons) {
  const div = document.createElement("div");
  div.className = "section__box relative d-grid p-05 gap-1 bg-dark-gray border-radius-5";

  const chevronBottomRight = createSVG("chevron-bottom-right");
  const chevronTopLeft = createSVG("chevron-top-left");

  const p = document.createElement("p");
  p.setAttribute("class", "section__description text-center")
  p.textContent = description;
  const divIcons = document.createElement("div")
  divIcons.setAttribute("class", "section__icons d-flex justify-center gap-05")

  for (let j = 0; j < icons.length; j++) {
    const icon = document.createElement("img");
    icon.setAttribute("src", `./src/img/icons/${icons[j]}.svg`);
    divIcons.appendChild(icon);
  }

  div.appendChild(chevronBottomRight);
  div.appendChild(chevronTopLeft);
  div.appendChild(p);
  div.appendChild(divIcons);

  about.appendChild(div);
}

addCardAboutInfo()
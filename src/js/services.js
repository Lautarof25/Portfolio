function createCardServicesInfo(title, description, icons) {
    const div = document.createElement("div")
    div.setAttribute("class", "section__box relative p-05 d-grid bg-dark-gray border-radius-5 drop-shadow")

    const chevronTopRight = createSVG("chevron-top-right")
    const chevronBottomLeft = createSVG("chevron-bottom-left")

    const h2 = document.createElement("h2")
    h2.setAttribute("class", "text-center")
    const h2Text = document.createTextNode(title)
    h2.appendChild(h2Text)
    const buttonClose = document.createElement("button")
    buttonClose.setAttribute("class", "hidden closeCard")
    buttonClose.setAttribute("type", "button")
    const spanCloseText = document.createTextNode("X")
    buttonClose.appendChild(spanCloseText)

    const p = document.createElement("p")
    p.setAttribute("class", "section__description text-center")
    const pText = document.createTextNode(description)
    p.appendChild(pText)

    const divIcons = document.createElement("div")
    divIcons.setAttribute("class", "section__icons d-flex justify-center gap-05")

    for (let i = 0; i < icons.length; i++) {
        const icon = document.createElement("img")
        icon.setAttribute("loading", `lazy`)
        icon.setAttribute("src", `./src/img/icons/${icons[i]}.svg`)
        icon.setAttribute("alt", `${icons[i]}`)
        divIcons.appendChild(icon)
    }
    
    div.appendChild(chevronTopRight)
    div.appendChild(chevronBottomLeft)
    div.append(h2, divIcons,p,buttonClose)
    services.appendChild(div)
}